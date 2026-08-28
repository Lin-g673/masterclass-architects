import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(
  request: Request,
  context: {
    params: Promise<{ token: string }>;
  }
) {
  try {
    const { token } = await context.params;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing download token.",
        },
        { status: 400 }
      );
    }

    // Find the order that owns this download token.
    const { data: order, error: orderError } =
      await supabaseAdmin
        .from("orders")
        .select(
          "order_id, plan_slug, payment_status, download_token"
        )
        .eq("download_token", token)
        .single();

    if (orderError || !order) {
      return NextResponse.json(
        {
          success: false,
          message: "This download link is invalid.",
        },
        { status: 404 }
      );
    }

    // Never release files for an unpaid order.
    if (order.payment_status !== "COMPLETED") {
      return NextResponse.json(
        {
          success: false,
          message:
            "This order has not been confirmed as paid.",
        },
        { status: 403 }
      );
    }

    /*
      Map each plan slug to its private Supabase file.

      We are starting with ADS-B01.
      More plans can be added here later.
    */
    const planFiles: Record<string, string> = {
      "modern-3-bedroom-bungalow":
        "modern-3-bedroom-bungalow/ADS-B01-Modern-3-Bedroom-Bungalow.zip",
    };

    const filePath = planFiles[order.plan_slug];

    if (!filePath) {
      return NextResponse.json(
        {
          success: false,
          message:
            "The download package for this plan is not available yet.",
        },
        { status: 404 }
      );
    }

    /*
      Create a temporary signed URL.

      The Storage bucket stays private.
      This URL expires after 5 minutes.
    */
    const { data: signedData, error: signedUrlError } =
      await supabaseAdmin.storage
        .from("house-plan-files")
        .createSignedUrl(filePath, 300, {
          download: true,
        });

    if (signedUrlError || !signedData?.signedUrl) {
      console.error(
        "Supabase signed URL error:",
        signedUrlError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to prepare your download. Please try again.",
        },
        { status: 500 }
      );
    }

    // Send the customer directly to the temporary file URL.
    return NextResponse.redirect(signedData.signedUrl);
  } catch (error) {
    console.error("Secure download error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to process this download.",
      },
      { status: 500 }
    );
  }
}