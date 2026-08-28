import { NextResponse } from "next/server";

import {
  getPesapalToken,
  getPesapalBaseUrl,
} from "@/lib/pesapal";

import { housePlans } from "@/app/house-plans/plansData";

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

    // Get the official plan and price from the server
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

      // IMPORTANT:
      // Price comes from plansData, not the customer's browser
      amount: Number(plan.price),

      description: `${plan.title} House Plan`,

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