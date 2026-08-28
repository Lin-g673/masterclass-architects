import { NextResponse } from "next/server";

import {
  getPesapalToken,
  getPesapalBaseUrl,
} from "@/lib/pesapal";

import { housePlans } from "@/app/house-plans/plansData";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      planSlug,
      fullName,
      email,
      phone,
    } = body;

    if (
      !planSlug ||
      !fullName ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide all required customer details.",
        },
        { status: 400 }
      );
    }

    const plan = housePlans.find(
      (item) => item.slug === planSlug
    );

    if (!plan) {
      return NextResponse.json(
        {
          success: false,
          message: "House plan could not be found.",
        },
        { status: 404 }
      );
    }

    const ipnId = process.env.PESAPAL_IPN_ID;

    if (!ipnId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Pesapal IPN configuration is missing.",
        },
        { status: 500 }
      );
    }

    const token = await getPesapalToken();
    const baseUrl = getPesapalBaseUrl();

    const orderId = `ADS-${Date.now()}`;

    // Sandbox orders are temporarily KES 1.
    // Live orders use the real plan price.
    const orderAmount =
      baseUrl.includes("cybqa.pesapal.com")
        ? 1
        : Number(plan.price);

    /*
      First save the order in Supabase.
      At this point payment has NOT been completed.
    */
    const { error: orderInsertError } =
      await supabaseAdmin
        .from("orders")
        .insert({
          order_id: orderId,
          plan_slug: plan.slug,
          buyer_name: fullName.trim(),
          buyer_email: email.trim().toLowerCase(),
          buyer_phone: phone.trim(),
          amount: orderAmount,
          currency: "KES",
          payment_status: "PENDING",
        });

    if (orderInsertError) {
      console.error(
        "Supabase order insert error:",
        orderInsertError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to create your order. Please try again.",
        },
        { status: 500 }
      );
    }

    const callbackUrl =
      "https://www.apiyodesignstudio.co.ke/checkout/payment-status";

    const nameParts = fullName
      .trim()
      .split(/\s+/);

    const firstName =
      nameParts[0] || "";

    const lastName =
      nameParts.slice(1).join(" ") || "";

    const pesapalOrder = {
      id: orderId,
      currency: "KES",
      amount: orderAmount,

      description:
        `${plan.title} House Plan`,

      callback_url: callbackUrl,

      notification_id: ipnId,

      billing_address: {
        email_address: email,
        phone_number: phone,
        country_code: "KE",
        first_name: firstName,
        last_name: lastName,
      },
    };

    const pesapalResponse = await fetch(
      `${baseUrl}/api/Transactions/SubmitOrderRequest`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(pesapalOrder),
      }
    );

    const result =
      await pesapalResponse.json();

    if (!pesapalResponse.ok) {
      await supabaseAdmin
        .from("orders")
        .update({
          payment_status: "FAILED_TO_CREATE",
        })
        .eq("order_id", orderId);

      return NextResponse.json(
        {
          success: false,
          message:
            result?.message ||
            "Pesapal could not create the payment order.",
          result,
        },
        {
          status: pesapalResponse.status,
        }
      );
    }

    /*
      Pesapal has now created the transaction.
      Save its tracking ID against our order.
    */
    const trackingId =
      result?.order_tracking_id;

    if (trackingId) {
      const { error: trackingUpdateError } =
        await supabaseAdmin
          .from("orders")
          .update({
            pesapal_tracking_id: trackingId,
          })
          .eq("order_id", orderId);

      if (trackingUpdateError) {
        console.error(
          "Supabase tracking update error:",
          trackingUpdateError
        );
      }
    }

    return NextResponse.json({
      success: true,
      orderId,
      planSlug: plan.slug,
      result,
    });
  } catch (error) {
    console.error(
      "Pesapal submit-order error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to start payment. Please try again.",
      },
      { status: 500 }
    );
  }
}