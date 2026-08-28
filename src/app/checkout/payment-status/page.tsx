"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CheckCircle2, Clock3 } from "lucide-react";

function PaymentStatusContent() {
  const searchParams = useSearchParams();

  const orderTrackingId =
    searchParams.get("OrderTrackingId");

  const merchantReference =
    searchParams.get("OrderMerchantReference");

  return (
    <main className="min-h-screen bg-[#071321] text-white">
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-5">
        <div className="max-w-[720px] w-full text-center">
          <div className="flex justify-center mb-7">
            {orderTrackingId ? (
              <CheckCircle2
                size={64}
                className="text-[#D4A85A]"
                strokeWidth={1.3}
              />
            ) : (
              <Clock3
                size={64}
                className="text-[#D4A85A]"
                strokeWidth={1.3}
              />
            )}
          </div>

          <p className="uppercase tracking-[6px] text-[#D4A85A] text-[10px] mb-5">
            Payment Status
          </p>

          <h1 className="font-heading text-4xl md:text-6xl font-light mb-6">
            Thank You
          </h1>

          <p className="text-white/65 leading-7 max-w-[560px] mx-auto mb-10">
            Your payment request has been received. We are confirming
            the transaction details with Pesapal.
          </p>

          {merchantReference && (
            <div className="border border-white/10 rounded-2xl p-5 mb-8">
              <p className="text-white/40 text-xs uppercase tracking-[3px] mb-2">
                Order Reference
              </p>

              <p className="text-white">
                {merchantReference}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/house-plans"
              className="bg-[#D4A85A] text-[#071321] px-8 py-4 rounded-full text-sm font-medium"
            >
              View House Plans
            </Link>

            <Link
              href="/"
              className="border border-white/20 px-8 py-4 rounded-full text-sm"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#071321] text-white flex items-center justify-center">
          Confirming payment...
        </main>
      }
    >
      <PaymentStatusContent />
    </Suspense>
  );
}