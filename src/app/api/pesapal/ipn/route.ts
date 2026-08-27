import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const orderTrackingId =
    searchParams.get("OrderTrackingId");

  const orderMerchantReference =
    searchParams.get("OrderMerchantReference");

  const orderNotificationType =
    searchParams.get("OrderNotificationType");

  console.log("PESAPAL IPN RECEIVED:", {
    orderTrackingId,
    orderMerchantReference,
    orderNotificationType,
  });

  return NextResponse.json({
    orderNotificationType:
      orderNotificationType || "IPNCHANGE",

    orderTrackingId,
    orderMerchantReference,

    status: 200,
  });
}