import { NextResponse } from "next/server";
import {
  getPesapalBaseUrl,
  getPesapalToken,
} from "@/lib/pesapal";

export async function GET() {
  try {
    const token =
      await getPesapalToken();

    const baseUrl =
      getPesapalBaseUrl();

    const ipnUrl =
      process.env.PESAPAL_IPN_URL;

    if (!ipnUrl) {
      return NextResponse.json(
        {
          success: false,
          message:
            "PESAPAL_IPN_URL is missing.",
        },
        {
          status: 500,
        }
      );
    }

    const response = await fetch(
      `${baseUrl}/api/URLSetup/RegisterIPN`,
      {
        method: "POST",

        headers: {
          Accept:
            "application/json",

          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${token}`,
        },

        body: JSON.stringify({
          url: ipnUrl,

          ipn_notification_type:
            "GET",
        }),

        cache: "no-store",
      }
    );

    const result =
      await response.json();

    if (!response.ok) {
      console.error(
        "Pesapal IPN registration error:",
        result
      );

      return NextResponse.json(
        {
          success: false,
          result,
        },
        {
          status: response.status,
        }
      );
    }

    return NextResponse.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error(
      "REGISTER IPN ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to register IPN.",
      },
      {
        status: 500,
      }
    );
  }
}