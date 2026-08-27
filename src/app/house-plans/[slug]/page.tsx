"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Link from "next/link";

import { useParams } from "next/navigation";
import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Bath,
  Layers3,
  Ruler,
  CheckCircle2,
  Download,
  ShieldCheck,
  FileText,
  PenTool,
  Phone,
  LockKeyhole,
  Star,
} from "lucide-react";

import {
  housePlans,
} from "../plansData";


export default function HousePlanPage() {

  const params = useParams();

  const slug = params.slug as string;

  const plan =
    housePlans.find(
      (item) => item.slug === slug
    );


  const [activeImage, setActiveImage] =
    useState(0);


  const [showModify, setShowModify] =
    useState(false);
const [modificationStatus, setModificationStatus] =
  useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

const [modificationMessage, setModificationMessage] =
  useState("");


  
  if (!plan) {

    return (
      <main
        className="
          min-h-screen
          bg-[#071321]
          text-white
          flex
          items-center
          justify-center
        "
      >

        <div className="text-center px-6">

          <h1
            className="
              font-heading
              text-5xl
              mb-6
            "
          >
            Plan Not Found
          </h1>

          <Link
            href="/house-plans"
            className="
              text-[#D4A85A]
              font-[var(--font-avenir)]
            "
          >
            Return To House Plans
          </Link>

        </div>

      </main>
    );

  }


  const relatedPlans =
    housePlans
      .filter(
        (item) =>
          item.category === plan.category &&
          item.slug !== plan.slug
      )
      .slice(0, 3);

const handleModificationSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setModificationStatus("sending");
  setModificationMessage("");

  const form = e.currentTarget;

  const formData = new FormData(form);

  const payload = {
    planCode: plan.code,
    planTitle: plan.title,

    name:
      formData.get("name"),

    email:
      formData.get("email"),

    phone:
      formData.get("phone"),

    plotSize:
      formData.get("plotSize"),

    location:
      formData.get("location"),

    plotOwnership:
      formData.get("plotOwnership"),

    constructionStart:
      formData.get("constructionStart"),

    budget:
      formData.get("budget"),

    changes:
      formData.get("changes"),
  };

  try {
    const response = await fetch(
      "/api/plan-modification",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(payload),
      }
    );

    const responseText =
  await response.text();

let result: any = {};

if (responseText) {

  try {

    result =
      JSON.parse(responseText);

  } catch {

    console.error(
      "Server returned invalid response:",
      responseText
    );

  }

}

if (!response.ok) {

  throw new Error(
    result.message ||
      `Unable to submit request. Error ${response.status}.`
  );

}

    setModificationStatus("success");

    setModificationMessage(
      "Thank you. Your modification request has been received. Our team will review the changes and contact you with the next steps."
    );

    form.reset();

  } catch (error) {
    console.error(error);

    setModificationStatus("error");

    setModificationMessage(
      "We couldn't send your request. Please try again or call us on 0754 525 407."
    );
  }
};
  return (

    <main
      className="
        min-h-screen
        bg-[#071321]
        text-white
      "
    >

      <Navbar />


      {/* =====================================================
          MAIN PRODUCT AREA
      ===================================================== */}

      <section
        className="
          pt-36
          md:pt-40
          lg:pt-44

          pb-20
          md:pb-24
        "
      >

        <div
          className="
            max-w-[1500px]
            mx-auto
            px-5
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-12
          "
        >

          <Link
            href="/house-plans"
            className="
              inline-flex
              items-center
              gap-3
              mb-10

              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[4px]

              text-gray-400
              hover:text-[#D4A85A]
              transition-colors
            "
          >
            <ArrowLeft size={15} />
            All House Plans
          </Link>



          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.05fr_0.95fr]
              gap-12
              lg:gap-16
              items-start
            "
          >

            {/* =================================================
                LEFT — IMAGE GALLERY
            ================================================= */}

            <div>

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  aspect-[4/3]
                  bg-[#0a1828]
                "
                onContextMenu={(e) =>
                  e.preventDefault()
                }
              >

                <img
                  src={plan.gallery[activeImage]}
                  alt={plan.title}
                  draggable={false}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    select-none
                    pointer-events-none
                  "
                />


                <div
                  className="
                    absolute
                    top-5
                    left-5
                    px-4
                    py-2
                    rounded-full
                    bg-[#071321]/85
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      font-[var(--font-avenir)]
                      uppercase
                      tracking-[2px]
                      text-[9px]
                      text-[#D4A85A]
                    "
                  >
                    {plan.category}
                  </span>
                </div>


                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    px-4
                    py-2
                    rounded-full
                    bg-[#071321]/85
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-[10px]
                      tracking-[2px]
                    "
                  >
                    {activeImage + 1}
                    {" / "}
                    {plan.gallery.length}
                  </span>
                </div>

              </div>



              {/* THUMBNAILS */}

              {plan.gallery.length > 1 && (

                <div
                  className="
                    grid
                    grid-cols-4
                    gap-3
                    mt-4
                  "
                >

                  {plan.gallery.map(
                    (image, index) => (

                      <button
                        key={image}
                        type="button"
                        onClick={() =>
                          setActiveImage(index)
                        }
                        className={`
                          relative
                          aspect-[4/3]
                          overflow-hidden
                          rounded-xl
                          border

                          ${
                            activeImage === index
                              ? "border-[#D4A85A]"
                              : "border-white/10"
                          }
                        `}
                      >

                        <img
                          src={image}
                          alt=""
                          draggable={false}
                          className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                          "
                        />

                      </button>

                    )
                  )}

                </div>

              )}



              {/* TRUST */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  mt-5
                "
              >

                {[
                  [ShieldCheck, "Professional Drawing Set"],
                  [Download, "Digital PDF Delivery"],
                  [FileText, "Print Ready"],
                  [LockKeyhole, "Design Copyright Protected"],
                ].map(([Icon, title]: any) => (

                  <div
                    key={title}
                    className="
                      flex
                      items-center
                      gap-3
                      border
                      border-white/10
                      rounded-xl
                      px-4
                      py-4
                    "
                  >

                    <Icon
                      size={17}
                      className="text-[#D4A85A]"
                    />

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-xs
                        text-gray-300
                      "
                    >
                      {title}
                    </span>

                  </div>

                ))}

              </div>

            </div>



            {/* =================================================
                RIGHT — PRODUCT INFORMATION
            ================================================= */}

            <div
              className="
                lg:sticky
                lg:top-28
              "
            >

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[6px]
                  text-[#D4A85A]
                  text-[10px]
                  mb-5
                "
              >
                {plan.category} · {plan.code}
              </p>


              <h1
                className="
                  font-heading
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-light
                  leading-[1.02]
                  mb-7
                "
              >
                {plan.title}
              </h1>


              <p
                className="
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                  mb-8
                "
              >
                {plan.description}
              </p>



              {/* SPEC CARDS */}

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  gap-3
                  mb-9
                "
              >

                {[
                  [BedDouble, plan.bedrooms, "Bedrooms"],
                  [Bath, plan.bathrooms, "Bathrooms"],
                  [Layers3, plan.floors, "Floors"],
                  [Ruler, plan.area, "Area (m²)"],
                  [Ruler, plan.length, "Length (m)"],
                  [Ruler, plan.width, "Width (m)"],
                ].map(
                  ([Icon, value, label]: any) => (

                    <div
                      key={label}
                      className="
                        border
                        border-white/10
                        rounded-xl
                        p-4
                      "
                    >

                      <Icon
                        size={17}
                        className="
                          text-[#D4A85A]
                          mb-3
                        "
                      />

                      <p
                        className="
                          font-heading
                          text-2xl
                          mb-1
                        "
                      >
                        {value}
                      </p>

                      <p
                        className="
                          font-[var(--font-avenir)]
                          text-[10px]
                          text-gray-500
                        "
                      >
                        {label}
                      </p>

                    </div>

                  )
                )}

              </div>



              {/* =====================================================
    PURCHASE PLAN
===================================================== */}

<div
  className="
    bg-[#102235]
    border
    border-[#D4A85A]/35
    rounded-[30px]
    p-7
    md:p-8
    shadow-[0_18px_50px_rgba(0,0,0,0.22)]
  "
>
  {/* LABEL */}
  <p
    className="
      font-[var(--font-avenir)]
      uppercase
      tracking-[5px]
      text-[#D4A85A]
      text-[9px]
      font-medium
      mb-4
    "
  >
    Purchase Plan
  </p>

  {/* TITLE */}
  <h3
    className="
      font-heading
      text-3xl
      md:text-4xl
      font-light
      text-white
      mb-4
    "
  >
    Get This Plan
  </h3>

  {/* DESCRIPTION */}
  <p
    className="
      font-[var(--font-avenir)]
      text-sm
      text-[#B9C3CE]
      leading-relaxed
      mb-7
    "
  >
    Receive the professional PDF drawing package after
    successful purchase.
  </p>

  {/* PACKAGE BENEFITS */}
  <div className="space-y-3.5 mb-8">
    {[
      "Print-ready PDF drawings",
      "Digital delivery",
      "Easy sharing with consultants and contractors",
      "Professional architectural drawing package",
    ].map((item) => (
      <div
        key={item}
        className="flex items-center gap-3"
      >
        <CheckCircle2
          size={15}
          className="
            text-[#D4A85A]
            flex-shrink-0
          "
        />

        <span
          className="
            font-[var(--font-avenir)]
            text-xs
            text-[#D5DCE3]
            leading-relaxed
          "
        >
          {item}
        </span>
      </div>
    ))}
  </div>

  {/* PRICE */}
  <div
    className="
      border-t
      border-white/10
      pt-6
      mb-7
    "
  >
    <p
      className="
        font-[var(--font-avenir)]
        text-[10px]
        uppercase
        tracking-[2px]
        text-[#8795A5]
        mb-2
      "
    >
      PDF Package
    </p>

    <p
      className="
        font-heading
        text-4xl
        text-[#D4A85A]
        font-light
      "
    >
      KES {plan.price.toLocaleString()}
    </p>
  </div>

  {/* CHECKOUT BUTTON */}
  <Link
    href={`/checkout?plan=${plan.slug}`}
    className="
      flex
      items-center
      justify-center
      gap-3
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
      hover:shadow-[0_8px_25px_rgba(212,168,90,0.18)]
    "
  >
    Proceed To Checkout
    <ArrowRight size={16} />
  </Link>

  {/* CUSTOMIZE BUTTON */}
  <button
    type="button"
    onClick={() => {
      setShowModify(true);

      setTimeout(() => {
        document
          .getElementById("modify-plan")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    }}
    className="
      flex
      items-center
      justify-center
      gap-3
      w-full
      py-4
      mt-3
      rounded-full
      border
      border-white/25
      bg-white/[0.02]
      font-[var(--font-avenir)]
      text-sm
      text-white
      transition-all
      duration-300
      hover:border-[#D4A85A]
      hover:text-[#D4A85A]
      hover:bg-[#D4A85A]/[0.05]
    "
  >
    <PenTool size={16} />
    Customize This Plan
  </button>

  {/* COPYRIGHT NOTE */}
  <div
    className="
      border-t
      border-white/[0.08]
      mt-7
      pt-5
    "
  >
    <p
      className="
        font-[var(--font-avenir)]
        text-[10px]
        text-[#7F8D9C]
        leading-relaxed
      "
    >
      Editable CAD/source files are not included in
      ready-plan purchases. Copyright and intellectual
      property remain with Apiyo Design Studio.
    </p>
  </div>
</div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          TECHNICAL DETAILS
      ===================================================== */}

      <section
        className="
          py-20
          md:py-24
          lg:py-28
        "
      >

        <div
          className="
            max-w-[1500px]
            mx-auto
            px-5
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-12
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
            "
          >

            <div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  mb-8
                "
              >
                <div className="w-10 h-px bg-[#D4A85A]" />

                <p
                  className="
                    uppercase
                    tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                  "
                >
                  Specifications
                </p>

                <div className="w-10 h-px bg-[#D4A85A]" />
              </div>


              <h2
                className="
                  font-heading
                  text-4xl
                  md:text-5xl
                  font-light
                  mb-6
                "
              >
                Technical Details
              </h2>


              <p
                className="
                  font-[var(--font-avenir)]
                  text-sm
                  text-gray-400
                  leading-relaxed
                  mb-8
                "
              >
                Essential project dimensions and
                accommodation information at a glance.
              </p>


              <div
                className="
                  divide-y
                  divide-white/10
                  border-y
                  border-white/10
                "
              >

                {[
                  ["Bedrooms", plan.bedrooms],
                  ["Bathrooms", plan.bathrooms],
                  ["Floors", plan.floors],
                  ["Approx. Area", `${plan.area} m²`],
                  [
                    "Approx. Footprint",
                    `${plan.length}m × ${plan.width}m`,
                  ],
                ].map(([label, value]) => (

                  <div
                    key={label}
                    className="
                      flex
                      justify-between
                      gap-8
                      py-5
                    "
                  >

                    <span className="text-sm text-gray-500">
                      {label}
                    </span>

                    <span className="text-sm text-white">
                      {value}
                    </span>

                  </div>

                ))}

              </div>


              <p
                className="
                  mt-6
                  font-[var(--font-avenir)]
                  text-[10px]
                  text-gray-500
                  leading-relaxed
                "
              >
                Dimensions are indicative and should be
                professionally reviewed against the actual
                project site before construction.
              </p>

            </div>



            {/* INCLUDED DRAWINGS */}

            <div>

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[7px]
                  text-[#D4A85A]
                  text-[10px]
                  mb-8
                "
              >
                Drawing Package
              </p>


              <h2
                className="
                  font-heading
                  text-4xl
                  md:text-5xl
                  font-light
                  mb-8
                "
              >
                Included Drawings
              </h2>


              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-3
                "
              >

                {plan.includedDrawings.map(
                  (drawing) => (

                    <div
                      key={drawing}
                      className="
                        flex
                        items-center
                        gap-3
                        border
                        border-white/10
                        rounded-xl
                        px-5
                        py-4
                      "
                    >

                      <CheckCircle2
                        size={15}
                        className="
                          text-[#D4A85A]
                          flex-shrink-0
                        "
                      />

                      <span
                        className="
                          font-[var(--font-avenir)]
                          text-xs
                          text-gray-300
                        "
                      >
                        {drawing}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          MODIFICATION REQUEST
      ===================================================== */}

      {showModify && (

        <section
  id="modify-plan"
  className="
    scroll-mt-28
    py-20
    md:py-24
  "
>

          <div
            className="
              max-w-[1100px]
              mx-auto
              px-5
              sm:px-6
              md:px-8
            "
          >

            <div
              className="
                border
                border-[#D4A85A]/30
                rounded-[30px]
                p-7
                md:p-10
                bg-white/[0.025]
              "
            >

              <p
                className="
                  uppercase
                  tracking-[7px]
                  text-[#D4A85A]
                  text-[10px]
                  mb-6
                "
              >
                Modification Request
              </p>


              <h2
                className="
                  font-heading
                  text-4xl
                  md:text-5xl
                  font-light
                  mb-5
                "
              >
                Customize Your Plan
              </h2>


              <p
                className="
                  font-[var(--font-avenir)]
                  text-sm
                  text-gray-400
                  leading-relaxed
                  mb-10
                "
              >
                Like {plan.code}, but need a few changes?
                Tell us what you would like adjusted and
                we'll review the scope and provide a
                modification quotation.
              </p>



              {/* STEPS */}

              <div
                className="
                  grid
                  md:grid-cols-3
                  gap-4
                  mb-12
                "
              >

                {[
                  [
                    "01",
                    "Confirm The Plan",
                    "Make sure this is the design you would like us to modify.",
                  ],
                  [
                    "02",
                    "Tell Us The Changes",
                    "Describe your preferred layout, size, façade or site adaptations.",
                  ],
                  [
                    "03",
                    "Work With Our Team",
                    "We review your request, provide a quote and refine the plan with you.",
                  ],
                ].map(([number, title, description]) => (

                  <div
                    key={number}
                    className="
                      border
                      border-white/10
                      rounded-2xl
                      p-6
                    "
                  >

                    <span className="text-[#D4A85A] text-xs">
                      {number}
                    </span>

                    <h3
                      className="
                        font-heading
                        text-2xl
                        mt-5
                        mb-3
                      "
                    >
                      {title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {description}
                    </p>

                  </div>

                ))}

              </div>



              {/* FORM */}

              <form
  onSubmit={handleModificationSubmit}
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    gap-5
  "
>

                <input
  type="text"
  name="name"
  required
  placeholder="Full Name"
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
  name="email"
  required
  placeholder="Email Address"
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
  name="phone"
  required
  placeholder="Phone / WhatsApp"
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
  type="text"
  name="plotSize"
  placeholder="Plot Size"
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
  type="text"
  name="location"
  placeholder="Project Location"
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


               <select
  name="plotOwnership"
  className="
    bg-[#071321]
    border
    border-white/10
    rounded-xl
    px-5
    py-4
  "
>
  <option value="">
    Do You Own The Plot?
  </option>

  <option value="Yes">
    Yes
  </option>

  <option value="No">
    No
  </option>

  <option value="In Process">
    In Process
  </option>
</select>

               <select
  name="constructionStart"
  className="
    bg-[#071321]
    border
    border-white/10
    rounded-xl
    px-5
    py-4
  "
>
  <option value="">
    Expected Construction Start
  </option>

  <option value="0–3 Months">
    0–3 Months
  </option>

  <option value="3–6 Months">
    3–6 Months
  </option>

  <option value="6–12 Months">
    6–12 Months
  </option>

  <option value="More Than 1 Year">
    More Than 1 Year
  </option>

  <option value="Not Sure Yet">
    Not Sure Yet
  </option>
</select>
<input
  type="text"
  name="budget"
  placeholder="Approximate Construction Budget"
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
                <textarea
  rows={6}
  name="changes"
  required
  placeholder="Briefly describe the changes you would like..."
  className="
    md:col-span-2
    bg-transparent
    border
    border-white/10
    rounded-xl
    px-5
    py-4
    resize-none
    outline-none
    focus:border-[#D4A85A]
  "
/>


                <button
  type="submit"
  disabled={
    modificationStatus ===
    "sending"
  }
  className="
    md:col-span-2
    py-4
    rounded-full
    bg-[#D4A85A]
    text-black
    font-[var(--font-avenir)]
    font-medium
    transition-all
    duration-300
    hover:bg-white
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  {modificationStatus ===
  "sending"
    ? "Sending Request..."
    : "Submit Modification Request"}
</button>
{modificationStatus === "success" && (
  <div
    className="
      md:col-span-2
      border
      border-[#D4A85A]/30
      bg-[#D4A85A]/10
      rounded-xl
      px-5
      py-4
    "
  >
    <p
      className="
        font-[var(--font-avenir)]
        text-sm
        text-white
        leading-relaxed
      "
    >
      Thank you. Your modification request has been received.
      Our team will review your requested changes and contact
      you with the next steps.
    </p>
  </div>
)}


{modificationStatus === "error" && (
  <div
    className="
      md:col-span-2
      border
      border-red-400/30
      bg-red-400/10
      rounded-xl
      px-5
      py-4
    "
  >
    <p
      className="
        font-[var(--font-avenir)]
        text-sm
        text-red-200
        leading-relaxed
      "
    >
      We couldn't send your request. Please try again or call
      us on 0754 525 407.
    </p>
  </div>
)}

              </form>


              <p
                className="
                  text-center
                  text-sm
                  text-gray-500
                  mt-7
                "
              >
                Prefer to speak directly?
              </p>


              <a
                href="tel:+254754525407"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[#D4A85A]
                  mt-3
                "
              >
                <Phone size={16} />
                0754 525 407
              </a>

            </div>

          </div>

        </section>

      )}


{/* =====================================================
    REVIEWS
===================================================== */}

<section
  className="
    py-20
    md:py-24
    lg:py-28
  "
>

  <div
    className="
      max-w-[1500px]
      mx-auto
      px-5
      sm:px-6
      md:px-8
      lg:px-10
      xl:px-12
    "
  >

    {/* =====================================================
        REVIEW SUMMARY HEADER
    ===================================================== */}

    <div
      className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-6
        mb-14
      "
    >

      {/* LEFT */}

      <div className="flex items-center gap-4">

        <div
          className="
            w-11
            h-11
            rounded-xl
            border
            border-[#D4A85A]/35
            bg-[#D4A85A]/10
            flex
            items-center
            justify-center
            text-[#D4A85A]
            text-lg
          "
        >
          ★
        </div>


        <div>

          <h2
            className="
              font-[var(--font-avenir)]
              text-lg
              md:text-xl
              font-semibold
              text-white
              leading-tight
            "
          >
            Client Reviews
          </h2>


          <p
            className="
              font-[var(--font-avenir)]
              text-xs
              text-gray-400
              mt-1
            "
          >
            Client experiences
          </p>

        </div>

      </div>


      {/* RATING */}

      <div
        className="
          inline-flex
          self-start
          md:self-auto
          items-center
          gap-3
          rounded-full
          border
          border-[#D4A85A]/30
          bg-[#D4A85A]/[0.06]
          px-5
          py-3
        "
      >

        <div
          className="
            flex
            items-center
            gap-1
            text-[#D4A85A]
            text-sm
          "
        >
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>


        <span
  className="
    font-[var(--font-avenir)]
    text-sm
    font-semibold
    text-white
  "
>
  4.9
</span>

<span
  className="
    font-[var(--font-avenir)]
    text-[11px]
    text-gray-400
  "
>
  (45 reviews)
</span>

      </div>

    </div>



    {/* =====================================================
        CENTER TITLE
    ===================================================== */}

    <div className="text-center mb-12">

      <p
        className="
          uppercase
          tracking-[7px]
          text-[#D4A85A]
          text-[10px]
          mb-5
        "
      >
        Client Experience
      </p>


      <h2
        className="
          font-heading
          text-4xl
          md:text-5xl
          font-light
        "
      >
        What Our Clients Say
      </h2>

    </div>



    {/* =====================================================
        REVIEW CARDS
    ===================================================== */}

    <div
      className="
        grid
        md:grid-cols-3
        gap-5
      "
    >

      {[
        {
          name: "Edward Omondi",
          review:
            "Clear drawings, professional presentation and very helpful guidance throughout the process.",
        },

        {
          name: "Peter Macharia",
          review:
            "The design was exactly what we were looking for and the team responded quickly whenever we needed clarification.",
        },

        {
          name: "Robert Onyango",
          review:
            "A smooth experience from choosing the design to discussing the adjustments we wanted.",
        },
      ].map((item) => (

        <div
          key={item.name}
          className="
  bg-white
  border
  border-gray-200
  rounded-2xl
  p-7
  shadow-[0_12px_35px_rgba(0,0,0,0.12)]

          "
        >

          {/* STARS */}

          <div
            className="
              flex
              gap-1
              text-[#D4A85A]
              mb-6
            "
          >

            {[1, 2, 3, 4, 5].map((star) => (

              <Star
                key={star}
                size={15}
                fill="currentColor"
              />

            ))}

          </div>


          {/* REVIEW */}

          <p
            className="
  font-[var(--font-avenir)]
  text-sm
  text-gray-600
  leading-relaxed
  mb-6
"
          >
            “{item.review}”
          </p>


          {/* NAME */}

          <p
            className="
              font-[var(--font-avenir)]
              text-xs
              text-[#071321]
font-semibold
            "
          >
            — {item.name}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>


      {/* =====================================================
          RELATED PLANS
      ===================================================== */}

      {relatedPlans.length > 0 && (

        <section
          className="
            py-20
            md:py-24
          "
        >

          <div
            className="
              max-w-[1500px]
              mx-auto
              px-5
              sm:px-6
              md:px-8
              lg:px-10
              xl:px-12
            "
          >

            <div className="text-center mb-12">

              <p
                className="
                  uppercase
                  tracking-[7px]
                  text-[#D4A85A]
                  text-[10px]
                  mb-5
                "
              >
                Explore More
              </p>

              <h2
                className="
                  font-heading
                  text-4xl
                  md:text-5xl
                  font-light
                "
              >
                Similar Plans
              </h2>

            </div>


            <div
              className="
                grid
                md:grid-cols-3
                gap-6
              "
            >

              {relatedPlans.map((item) => (

                <Link
                  key={item.slug}
                  href={`/house-plans/${item.slug}`}
                  className="
                    group
                    border
                    border-white/10
                    rounded-2xl
                    overflow-hidden
                    hover:-translate-y-2
                    hover:border-b-[#D4A85A]
                    transition-all
                    duration-500
                  "
                >

                  <div
                    className="
                      h-[240px]
                      overflow-hidden
                    "
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>


                  <div className="p-6">

                    <p
                      className="
                        text-[#D4A85A]
                        text-[9px]
                        tracking-[4px]
                        uppercase
                        mb-3
                      "
                    >
                      {item.category}
                    </p>

                    <h3
                      className="
                        font-heading
                        text-2xl
                        mb-4
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-[#D4A85A]
                        font-heading
                        text-xl
                      "
                    >
                      KES{" "}
                      {item.price.toLocaleString()}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}


      <Footer />

    </main>
  );
}