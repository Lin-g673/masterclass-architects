import { NextResponse } from "next/server";

import {
  getPesapalToken,
  getPesapalBaseUrl,
} from "@/lib/pesapal";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const orderTrackingId =
      searchParams.get("orderTrackingId");

    if (!orderTrackingId) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing Pesapal order tracking ID.",
        },
        { status: 400 }
      );
    }

    const token = await getPesapalToken();
    const baseUrl = getPesapalBaseUrl();

    const response = await fetch(
      `${baseUrl}/api/Transactions/GetTransactionStatus?orderTrackingId=${encodeURIComponent(
        orderTrackingId
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            result?.message ||
            "Unable to retrieve payment status.",
          result,
        },
        { status: response.status }
      );
    }

    const paymentStatus =
      result?.payment_status_description
        ?.toString()
        .toUpperCase();

    if (paymentStatus === "COMPLETED") {
      const {
        data: existingOrder,
        error: orderLookupError,
      } = await supabaseAdmin
        .from("orders")
        .select("download_token, paid_at")
        .eq("pesapal_tracking_id", orderTrackingId)
        .single();

      if (orderLookupError || !existingOrder) {
        console.error(
          "Supabase completed-order lookup error:",
          orderLookupError
        );

        return NextResponse.json(
          {
            success: false,
            message:
              "Payment was verified, but the order record could not be updated.",
          },
          { status: 500 }
        );
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
        .eq("pesapal_tracking_id", orderTrackingId);

      if (error) {
        console.error(
          "Supabase completed-order update error:",
          error
        );

        return NextResponse.json(
          {
            success: false,
            message:
              "Payment was verified, but the order record could not be updated.",
          },
          { status: 500 }
        );
      }
    } else if (
      paymentStatus === "FAILED" ||
      paymentStatus === "INVALID" ||
      paymentStatus === "REVERSED"
    ) {
      const { error } = await supabaseAdmin
        .from("orders")
        .update({
          payment_status: paymentStatus,
        })
        .eq("pesapal_tracking_id", orderTrackingId);

      if (error) {
        console.error(
          "Supabase failed-order update error:",
          error
        );

        return NextResponse.json(
          {
            success: false,
            message:
              "Unable to update the order status.",
          },
          { status: 500 }
        );
      }
    } else {
      const { error } = await supabaseAdmin
        .from("orders")
        .update({
          payment_status: "PENDING",
        })
        .eq("pesapal_tracking_id", orderTrackingId);

      if (error) {
        console.error(
          "Supabase pending-order update error:",
          error
        );

        return NextResponse.json(
          {
            success: false,
            message:
              "Unable to update the order status.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(
      "Pesapal status error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to verify payment status.",
      },
      { status: 500 }
    );
  }
}