import { NextResponse } from "next/server";

import {
  getPesapalToken,
  getPesapalBaseUrl,
} from "@/lib/pesapal";

export async function POST(request: Request) {
  try {
    const baseUrl = getPesapalBaseUrl();

    // SECURITY:
    // This temporary endpoint must NEVER operate
    // against the live Pesapal environment.
    if (!baseUrl.includes("cybqa.pesapal.com")) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This test endpoint is disabled outside the Pesapal sandbox.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();

    const orderTrackingId =
      body?.orderTrackingId;

    if (!orderTrackingId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Missing Pesapal order tracking ID.",
        },
        { status: 400 }
      );
    }

    const token = await getPesapalToken();

    const response = await fetch(
      `${baseUrl}/api/Transactions/CancelOrder`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_tracking_id: orderTrackingId,
        }),
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
            "Pesapal could not cancel the test order.",
          result,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(
      "Pesapal sandbox cancellation error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to cancel the sandbox order.",
      },
      { status: 500 }
    );
  }
}