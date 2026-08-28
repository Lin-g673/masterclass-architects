import { NextRequest, NextResponse } from "next/server";

import {
  getPesapalToken,
  getPesapalBaseUrl,
} from "@/lib/pesapal";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const orderTrackingId =
    searchParams.get("OrderTrackingId");

  const orderMerchantReference =
    searchParams.get("OrderMerchantReference");

  const orderNotificationType =
    searchParams.get("OrderNotificationType") ||
    "IPNCHANGE";

  try {
    if (!orderTrackingId) {
      return NextResponse.json({
        orderNotificationType,
        orderTrackingId,
        orderMerchantReference,
        status: 500,
      });
    }

    const token = await getPesapalToken();
    const baseUrl = getPesapalBaseUrl();

    const statusResponse = await fetch(
      `${baseUrl}/api/Transactions/GetTransactionStatus?orderTrackingId=${encodeURIComponent(
        orderTrackingId
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const result = await statusResponse.json();

    if (!statusResponse.ok) {
      console.error(
        "Pesapal IPN status lookup failed:",
        result
      );

      return NextResponse.json({
        orderNotificationType,
        orderTrackingId,
        orderMerchantReference,
        status: 500,
      });
    }

    const paymentStatus =
      result?.payment_status_description
        ?.toString()
        .toUpperCase();

    if (paymentStatus === "COMPLETED") {
      const { error } = await supabaseAdmin
        .from("orders")
        .update({
  payment_status: "COMPLETED",
  paid_at: new Date().toISOString(),
  download_token: crypto.randomUUID(),
})
        .eq(
          "pesapal_tracking_id",
          orderTrackingId
        );

      if (error) {
        console.error(
          "IPN Supabase COMPLETED update error:",
          error
        );

        return NextResponse.json({
          orderNotificationType,
          orderTrackingId,
          orderMerchantReference,
          status: 500,
        });
      }
    } else if (
      paymentStatus === "FAILED" ||
      paymentStatus === "INVALID" ||
      paymentStatus === "REVERSED"
    ) {
      const { data: existingOrder, error: orderLookupError } =
  await supabaseAdmin
    .from("orders")
    .select("download_token, paid_at")
    .eq("pesapal_tracking_id", orderTrackingId)
    .single();

if (orderLookupError || !existingOrder) {
  console.error(
    "IPN order lookup error:",
    orderLookupError
  );

  return NextResponse.json({
    orderNotificationType,
    orderTrackingId,
    orderMerchantReference,
    status: 500,
  });
}

const { error } = await supabaseAdmin
  .from("orders")
  .update({
    payment_status: "COMPLETED",
    paid_at:
      existingOrder.paid_at ||
      new Date().toISOString(),
    download_token:
      existingOrder.download_token ||
      crypto.randomUUID(),
  })
  .eq(
    "pesapal_tracking_id",
    orderTrackingId
  );

      if (error) {
        console.error(
          "IPN Supabase payment update error:",
          error
        );

        return NextResponse.json({
          orderNotificationType,
          orderTrackingId,
          orderMerchantReference,
          status: 500,
        });
      }
    } else {
      const { error } = await supabaseAdmin
        .from("orders")
        .update({
          payment_status: "PENDING",
        })
        .eq(
          "pesapal_tracking_id",
          orderTrackingId
        );

      if (error) {
        console.error(
          "IPN Supabase PENDING update error:",
          error
        );

        return NextResponse.json({
          orderNotificationType,
          orderTrackingId,
          orderMerchantReference,
          status: 500,
        });
      }
    }

    return NextResponse.json({
      orderNotificationType,
      orderTrackingId,
      orderMerchantReference,
      status: 200,
    });
  } catch (error) {
    console.error("Pesapal IPN error:", error);

    return NextResponse.json({
      orderNotificationType,
      orderTrackingId,
      orderMerchantReference,
      status: 500,
    });
  }
}