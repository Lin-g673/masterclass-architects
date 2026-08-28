"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function PaymentStatusContent() {
  const searchParams = useSearchParams();

  const orderTrackingId =
    searchParams.get("OrderTrackingId");

  const merchantReference =
    searchParams.get("OrderMerchantReference");

  const [status, setStatus] = useState<
    "loading" | "completed" | "failed" | "pending" | "error"
  >("loading");

  const [message, setMessage] = useState(
    "Confirming your transaction with Pesapal..."
  );
  const [downloadToken, setDownloadToken] =
  useState<string | null>(null);

  useEffect(() => {
    if (!orderTrackingId) {
      setStatus("error");
      setMessage(
        "We could not find the Pesapal transaction reference."
      );
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch(
          `/api/pesapal/status?orderTrackingId=${encodeURIComponent(
            orderTrackingId
          )}`,
          {
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Unable to verify payment."
          );
        }

        const paymentStatus =
          data.result?.payment_status_description?.toLowerCase();
if (paymentStatus === "completed") {
  setStatus("completed");
  setDownloadToken(data.downloadToken || null);
  setMessage(
    "Payment confirmed successfully. Your house plan is ready to download."
  );
  return;
}

        if (
          paymentStatus === "failed" ||
          paymentStatus === "invalid"
        ) {
          setStatus("failed");
          setMessage(
            "The payment was not completed successfully."
          );
          return;
        }

        setStatus("pending");
        setMessage(
          "Your payment is still being processed. Please wait a moment and refresh this page."
        );
      } catch (error) {
        console.error(
          "Payment verification error:",
          error
        );

        setStatus("error");
        setMessage(
          "We could not confirm the payment status at this time."
        );
      }
    };

    verifyPayment();
  }, [orderTrackingId]);

  return (
    <main className="min-h-screen bg-[#071321] text-white flex items-center justify-center px-6">
      <section className="max-w-2xl w-full text-center">
        <p className="text-[#D4A85A] uppercase tracking-[0.28em] text-xs mb-5">
          Payment Status
        </p>

        <h1 className="font-[var(--font-garamond)] text-4xl md:text-6xl font-light mb-6">
          {status === "loading" && "Checking Payment"}

          {status === "completed" &&
            "Payment Successful"}

          {status === "failed" &&
            "Payment Failed"}

          {status === "pending" &&
            "Payment Pending"}

          {status === "error" &&
            "Payment Verification"}
        </h1>

        <p className="text-white/65 text-sm md:text-base leading-7 max-w-xl mx-auto">
          {message}
        </p>

        {merchantReference && (
          <div className="mt-8 border border-white/10 rounded-xl px-6 py-5">
            <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-2">
              Order Reference
            </p>

            <p className="text-white text-sm">
              {merchantReference}
            </p>
          </div>
        )}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {status === "completed" && downloadToken && (
  <a
    href={`/api/download/${downloadToken}`}
    className="px-7 py-3 rounded-full bg-[#D4A85A] text-[#071321] text-sm font-medium hover:bg-white transition"
  >
    Download Your House Plan
  </a>
)}
          {status === "pending" && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-7 py-3 rounded-full bg-[#D4A85A] text-[#071321] text-sm font-medium hover:bg-white transition"
            >
              Check Again
            </button>
          )}

          <Link
            href="/house-plans"
            className="px-7 py-3 rounded-full border border-white/15 text-sm hover:border-[#D4A85A] transition"
          >
            View House Plans
          </Link>

          <Link
            href="/"
            className="px-7 py-3 rounded-full border border-white/15 text-sm hover:border-[#D4A85A] transition"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#071321]" />
      }
    >
      <PaymentStatusContent />
    </Suspense>
  );
}