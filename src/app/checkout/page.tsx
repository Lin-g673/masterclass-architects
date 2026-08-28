"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

import {
  CheckCircle2,
  LockKeyhole,
  Smartphone,
  CreditCard,
} from "lucide-react";

import {
  housePlans,
} from "../house-plans/plansData";


export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#071321]" />}>
      <CheckoutContent />
    </Suspense>
  );
}


function CheckoutContent() {

  const [paymentMethod, setPaymentMethod] =
    useState<
      "mpesa" | "airtel" | "card" | "paypal"
    >("mpesa");
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [isPaying, setIsPaying] = useState(false);
const [paymentError, setPaymentError] = useState("");
const handlePayment = async () => {
  if (!fullName.trim() || !email.trim() || !phone.trim()) {
    setPaymentError(
      "Please enter your full name, email address and phone number."
    );
    return;
  }

  if (!plan) {
    setPaymentError("House plan could not be found.");
    return;
  }

  try {
    setIsPaying(true);
    setPaymentError("");

    const response = await fetch("/api/pesapal/submit-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
  planSlug: plan.slug,
  fullName,
  email,
  phone,
  paymentMethod,
}),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Unable to start payment."
      );
    }

    const redirectUrl =
      data.result?.redirect_url;

    if (!redirectUrl) {
      throw new Error(
        "Pesapal did not return a payment link."
      );
    }

    window.location.href = redirectUrl;
  } catch (error) {
    setPaymentError(
      error instanceof Error
        ? error.message
        : "Unable to start payment. Please try again."
    );
  } finally {
    setIsPaying(false);
  }
};
  const searchParams =
    useSearchParams();

  const planSlug =
    searchParams.get("plan");

  const plan =
    housePlans.find(
      (item) =>
        item.slug === planSlug
    );

  if (!plan) {

    return (
      <main
        className="
          min-h-screen
          bg-[#071321]
          text-white
        "
      >

        <Navbar />

        <div
          className="
            min-h-[70vh]
            flex
            items-center
            justify-center
            px-6
          "
        >

          <h1
            className="
              font-heading
              text-5xl
            "
          >
            Plan Not Found
          </h1>

        </div>

        <Footer />

      </main>
    );

  }


  return (

    <main
      className="
        min-h-screen
        bg-[#071321]
        text-white
      "
    >

      <Navbar />


      <section
        className="
          pt-40
          pb-24
        "
      >

        <div
          className="
            max-w-[1200px]
            mx-auto
            px-5
            sm:px-6
            md:px-8
          "
        >

          <div className="text-center mb-14">

            <p
              className="
                uppercase
                tracking-[7px]
                text-[#D4A85A]
                text-[10px]
                mb-5
              "
            >
              Secure Checkout
            </p>


            <h1
              className="
                font-heading
                text-5xl
                md:text-6xl
                font-light
              "
            >
              Complete Your Order
            </h1>

          </div>



          <div
            className="
              grid
              lg:grid-cols-[1fr_0.75fr]
              gap-10
              items-start
            "
          >

            {/* BUYER DETAILS */}

            <div
              className="
                border
                border-white/10
                rounded-[28px]
                p-7
                md:p-9
              "
            >

              <h2
                className="
                  font-heading
                  text-3xl
                  mb-8
                "
              >
                Buyer Details
              </h2>


              <form
                className="
                  grid
                  gap-5
                "
              >

               <input
  type="text"
  placeholder="Full Name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  required
  className="
    bg-transparent
    border
    border-white/10
    rounded-xl
    px-5
    py-4
    outline-none
    focus:border-[#D4A85A]
  "
/>
                <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="
    bg-transparent
    border
    border-white/10
    rounded-xl
    px-5
    py-4
    outline-none
    focus:border-[#D4A85A]
  "
/>
<input
  type="tel"
  placeholder="Phone / M-Pesa Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
  className="
    bg-transparent
    border
    border-white/10
    rounded-xl
    px-5
    py-4
    outline-none
    focus:border-[#D4A85A]
  "
/>

{/* =====================================================
    PAYMENT METHOD
===================================================== */}

<div className="mt-4">

  <p
    className="
      font-[var(--font-avenir)]
      text-sm
      text-gray-400
      mb-5
    "
  >
    Payment Method
  </p>

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-3
    "
  >

    {/* M-PESA */}

    <button
      type="button"
      onClick={() =>
        setPaymentMethod("mpesa")
      }
      className={`
        flex
        items-center
        gap-4
        rounded-xl
        p-5
        text-left
        border
        transition-all
        duration-300

        ${
          paymentMethod === "mpesa"
            ? "border-[#D4A85A] bg-[#D4A85A]/10"
            : "border-white/10 hover:border-white/25"
        }
      `}
    >
      <Smartphone
        size={22}
        className="text-[#D4A85A]"
      />

      <div>
        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            text-white
          "
        >
          M-Pesa
        </p>

        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            text-gray-500
            mt-1
          "
        >
          Mobile Payment
        </p>
      </div>
    </button>


    {/* AIRTEL MONEY */}

    <button
      type="button"
      onClick={() =>
        setPaymentMethod("airtel")
      }
      className={`
        flex
        items-center
        gap-4
        rounded-xl
        p-5
        text-left
        border
        transition-all
        duration-300

        ${
          paymentMethod === "airtel"
            ? "border-[#D4A85A] bg-[#D4A85A]/10"
            : "border-white/10 hover:border-white/25"
        }
      `}
    >
      <Smartphone
        size={22}
        className="text-[#D4A85A]"
      />

      <div>
        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            text-white
          "
        >
          Airtel Money
        </p>

        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            text-gray-500
            mt-1
          "
        >
          Mobile Payment
        </p>
      </div>
    </button>


    {/* CARD */}

    <button
      type="button"
      onClick={() =>
        setPaymentMethod("card")
      }
      className={`
        flex
        items-center
        gap-4
        rounded-xl
        p-5
        text-left
        border
        transition-all
        duration-300

        ${
          paymentMethod === "card"
            ? "border-[#D4A85A] bg-[#D4A85A]/10"
            : "border-white/10 hover:border-white/25"
        }
      `}
    >
      <CreditCard
        size={22}
        className="text-[#D4A85A]"
      />

      <div>
        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            text-white
          "
        >
          Card
        </p>

        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            text-gray-500
            mt-1
          "
        >
          Visa / Mastercard
        </p>
      </div>
    </button>


    {/* PAYPAL */}

    <button
      type="button"
      onClick={() =>
        setPaymentMethod("paypal")
      }
      className={`
        flex
        items-center
        gap-4
        rounded-xl
        p-5
        text-left
        border
        transition-all
        duration-300

        ${
          paymentMethod === "paypal"
            ? "border-[#D4A85A] bg-[#D4A85A]/10"
            : "border-white/10 hover:border-white/25"
        }
      `}
    >
      <CreditCard
        size={22}
        className="text-[#D4A85A]"
      />

      <div>
        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            text-white
          "
        >
          PayPal
        </p>

        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            text-gray-500
            mt-1
          "
        >
          International Payment
        </p>
      </div>
    </button>

  </div>

</div>
<button
  type="button"
  onClick={handlePayment}
  disabled={isPaying}
  className="
    mt-5
    w-full
    py-4
    rounded-full
    bg-[#D4A85A]
    text-[#071321]
    font-[var(--font-avenir)]
    text-sm
    font-medium
    transition-all
    duration-300
    hover:bg-white
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  {isPaying ? (
    "Connecting to Pesapal..."
  ) : (
    <>
      {paymentMethod === "mpesa" &&
        "Continue With M-Pesa"}

      {paymentMethod === "airtel" &&
        "Continue With Airtel Money"}

      {paymentMethod === "card" &&
        "Continue With Card"}

      {paymentMethod === "paypal" &&
        "Continue With PayPal"}
    </>
  )}
</button>

{paymentError && (
  <p className="text-red-400 text-xs text-center mt-3">
    {paymentError}
  </p>
)}

              </form>

            </div>



            {/* ORDER SUMMARY */}

            <div
              className="
                border
                border-[#D4A85A]/25
                rounded-[28px]
                p-7
                md:p-9
                bg-white/[0.025]
                lg:sticky
                lg:top-28
              "
            >

              <p
                className="
                  uppercase
                  tracking-[5px]
                  text-[#D4A85A]
                  text-[9px]
                  mb-6
                "
              >
                Order Summary
              </p>


              <img
                src={plan.image}
                alt={plan.title}
                className="
                  w-full
                  aspect-[3/2]
                  object-cover
                  rounded-xl
                  mb-6
                "
              />


              <h2
                className="
                  font-heading
                  text-3xl
                  mb-2
                "
              >
                {plan.title}
              </h2>


              <p
                className="
                  text-xs
                  text-gray-500
                  mb-7
                "
              >
                {plan.code} · PDF Architectural Package
              </p>


              <div
                className="
                  space-y-3
                  mb-7
                "
              >

                {[
                  "Professional PDF drawings",
                  "Digital delivery",
                  "Print-ready files",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[#D4A85A]"
                    />

                    <span className="text-xs text-gray-300">
                      {item}
                    </span>
                  </div>

                ))}

              </div>


              <div
                className="
                  border-t
                  border-white/10
                  pt-6
                  flex
                  justify-between
                  items-end
                "
              >

                <span className="text-sm text-gray-400">
                  Total
                </span>

                <span
                  className="
                    font-heading
                    text-4xl
                    text-[#D4A85A]
                  "
                >
                  KES{" "}
                  {plan.price.toLocaleString()}
                </span>

              </div>


              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-gray-500
                  mt-7
                "
              >
                <LockKeyhole size={14} />

                <span className="text-[10px]">
                  Secure payment integration will be enabled
                  before live purchasing.
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}