import { NextResponse } from "next/server";
import {
  getPesapalToken,
  getPesapalBaseUrl,
} from "@/lib/pesapal";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      planSlug,
      planName,
      amount,
      fullName,
      email,
      phone,
    } = body;

    if (
      !planSlug ||
      !planName ||
      !amount ||
      !fullName ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required checkout information.",
        },
        { status: 400 }
      );
    }

    const ipnId = process.env.PESAPAL_IPN_ID;

    if (!ipnId) {
      return NextResponse.json(
        {
          success: false,
          message: "PESAPAL_IPN_ID is missing.",
        },
        { status: 500 }
      );
    }

    const token = await getPesapalToken();
    const baseUrl = getPesapalBaseUrl();

    const orderId = `ADS-${Date.now()}`;

    const callbackUrl =
      "https://www.apiyodesignstudio.co.ke/checkout/payment-status";

    const nameParts = fullName.trim().split(/\s+/);

    const firstName = nameParts[0] || fullName;
    const lastName =
      nameParts.length > 1
        ? nameParts.slice(1).join(" ")
        : "";

    const pesapalOrder = {
      id: orderId,
      currency: "KES",
      amount: Number(amount),

      description: `${planName} House Plan`,

      callback_url: callbackUrl,

      notification_id: ipnId,

      billing_address: {
        email_address: email,
        phone_number: phone,
        country_code: "KE",
        first_name: firstName,
        middle_name: "",
        last_name: lastName,
        line_1: "",
        line_2: "",
        city: "",
        state: "",
        postal_code: "",
        zip_code: "",
      },
    };

    const response = await fetch(
      `${baseUrl}/api/Transactions/SubmitOrderRequest`,
      {
        method: "POST",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(pesapalOrder),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Pesapal submit order error:", result);

      return NextResponse.json(
        {
          success: false,
          message: "Pesapal could not create the payment order.",
          details: result,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      orderId,
      planSlug,
      result,
    });
  } catch (error) {
    console.error("Submit order error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to start payment.",
      },
      { status: 500 }
    );
  }
}