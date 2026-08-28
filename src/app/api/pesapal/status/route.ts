import { NextResponse } from "next/server";

import {
  getPesapalToken,
  getPesapalBaseUrl,
} from "@/lib/pesapal";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const orderTrackingId =
      searchParams.get("orderTrackingId");

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
        message:
          "Unable to verify payment status.",
      },
      { status: 500 }
    );
  }
}