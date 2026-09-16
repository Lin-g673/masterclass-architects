"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import { useState } from "react";

export default function ConsultationPage() {
const [service, setService] =
  useState("Interior Design");

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitSuccess, setSubmitSuccess] = useState(false);
const [submitError, setSubmitError] = useState("");

const [openFAQ, setOpenFAQ] = useState<number | null>(0);
const faqs = [
  {
    question: "How much does a design project cost?",
    answer:
      "Every project is unique. Pricing depends on scope, size, complexity and services required. We provide a customized quotation after the initial consultation.",
  },
  {
    question: "Do you work on projects outside Nairobi?",
    answer:
      "Yes. We handle projects across Kenya and can also support international clients through virtual consultations and digital design delivery.",
  },
  {
    question: "Can I hire you for design only?",
    answer:
      "Absolutely. Clients may engage us for design-only services or full project support from concept development through implementation.",
  },
  {
    question: "How long does the design process take?",
    answer:
      "Timelines vary depending on project complexity. Typical residential design projects range from a few weeks to several months.",
  },
  {
    question: "Do you provide 3D visualizations before construction?",
    answer:
      "Yes. We create photorealistic visualizations, walkthroughs and presentation materials that help clients confidently visualize the final outcome.",
  },
  {
    question: "Can you redesign an existing space?",
    answer:
      "Yes. We handle renovations, interior transformations, remodeling projects and upgrades for both residential and commercial spaces.",
  },
];

const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  setIsSubmitting(true);
  setSubmitSuccess(false);
  setSubmitError("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
    // GENERAL
    service,
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    notes: formData.get("notes"),

    // ARCHITECTURE

projectType: formData.get("projectType"),

siteSize: formData.get("siteSize"),

landStatus: formData.get("landStatus"),

budget: formData.get("budget"),

projectStage: formData.get("projectStage"),

architectureSupport: formData.getAll("architectureSupport"),

    // INTERIOR DESIGN
    preferredStyle: formData.get("preferredStyle"),

    // HOUSE PLANS
    plotSize: formData.get("plotSize"),
    bedrooms: formData.get("bedrooms"),
    floors: formData.get("floors"),

    // 3D VISUALIZATION
    companyName: formData.get("companyName"),
    renderingService: formData.get("renderingService"),
    numberOfRenders: formData.get("numberOfRenders"),
    animationDuration: formData.get("animationDuration"),
    modelAvailable: formData.get("modelAvailable"),
    documentation: formData.get("documentation"),
    visualizationProjectType: formData.get(
      "visualizationProjectType"
    ),
    deadline: formData.get("deadline"),

    // STUDENT SERVICES
    university: formData.get("university"),
    course: formData.get("course"),

    studentRequestType: formData.getAll(
      "studentRequestType"
    ),

    studentServices: formData.getAll(
      "studentServices"
    ),

    softwareTraining: formData.getAll("softwareTraining"),
trainingPackage: formData.get("trainingPackage"),
trainingFormat: formData.get("trainingFormat"),
skillLevel: formData.get("skillLevel"),
    trainingGoals: formData.get("trainingGoals"),
  };

  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Unable to submit consultation request.");
    }

    setSubmitSuccess(true);
    form.reset();

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 10000);

  } catch (error) {

    setSubmitError(
      "We couldn't send your request. Please try again or contact us directly on WhatsApp."
    );

  } finally {

    setIsSubmitting(false);

  }
};

return (
  <main className="bg-[#071321] text-white min-h-screen">

    <Navbar />


{/* HERO */}

<section className="relative min-h-screen overflow-hidden">

  <img
    src="/consultation/consultationhero.png"
    alt="Consultation"
    className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    "
  />

  <div
    className="
    absolute
    inset-0
    bg-gradient-to-r
    from-[#071321]/95
    via-[#071321]/80
    to-[#071321]/40
    "
  />

  <div
  className="
    relative
    z-10
    min-h-screen
    flex
    items-center
    px-5
    sm:px-6
    md:px-8
    lg:px-10
    xl:px-12
  "
>

    <div className="max-w-4xl">

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
      font-[var(--font-avenir)]
      uppercase
      tracking-[5px]
      md:tracking-[8px]
      text-[#D4A85A]
      text-[10px]
      md:text-xs
      whitespace-nowrap
    "
  >
    Design Consultation
  </p>

  <div className="w-10 h-px bg-[#D4A85A]" />
</div>

      <h1
        className="
        text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl
        font-heading
        leading-[0.95]
        mb-10
        "
      >
        Luxury Design Begins
        <br />
        With A Conversation
      </h1>

      <div
        className="
        w-32
        h-[2px]
        bg-[#D4A85A]
        mb-10
        "
      />

      <p
        className="
        text-base
sm:text-lg
md:text-xl
        text-gray-300
        max-w-3xl
        leading-relaxed
        mb-12
        "
      >
        Tell us about your project and we'll guide
        you towards the perfect architectural,
        interior, visualization or planning solution.
      </p>

      <div className="flex flex-wrap gap-5">

        <a
  href="https://wa.me/254754525407"
  target="_blank"
  rel="noopener noreferrer"
  className="
  px-8
  py-4
  rounded-full
  bg-[#D4A85A]
  text-black
  font-medium
  transition-all
  duration-300
  hover:scale-105
  "
>
  WhatsApp Us
</a>

        <a
  href="tel:+254712345678"
  className="
  px-8
  py-4
  rounded-full
  border
  border-[#D4A85A]
  text-[#D4A85A]
  font-medium
  transition-all
  duration-300
  hover:bg-[#D4A85A]
  hover:text-black
  "
>
  Call  0754 525 407
</a>

      </div>

    </div>

  </div>

</section>



<section
  id="service-selector"
  className="py-14 md:py-16 lg:py-20"
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

    <p
      className="
      uppercase
      tracking-[5px]
      text-[#D4A85A]
      text-center
      mb-4
      "
    >
      Select Service
    </p>

    <h2
      className="
      text-center
      text-4xl
md:text-5xl
      font-heading
      mb-12
md:mb-16
lg:mb-20
      "
    >
      What Do You Need Help With?
    </h2>

    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-5
      gap-6
      "
    >

      {[
        "Architecture",
        "Interior Design",
        "House Plans",
        "3D Visualization",
        "Student Services",
      ].map((item) => (

        <button
          key={item}
          onClick={() => {
  setService(item);

  setTimeout(() => {
    document
      .getElementById("consultation-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 100);
}}
          className={`
          rounded-[32px]
          border
          p-6
md:p-8
lg:p-10
          text-center
          transition-all
          duration-300

          ${
            service === item
              ? "border-[#D4A85A] bg-[#D4A85A]/10"
              : "border-white/10"
          }
          `}
        >

          <h3
            className="
            text-2xl
            font-heading
            mb-4
            "
          >
            {item}
          </h3>

          <p className="text-gray-400">
            Click to customize your consultation.
          </p>

        </button>

      ))}

    </div>

  </div>

</section>

<section
  id="consultation-form"
   className="
    scroll-mt-24
    py-14
    md:py-16
    lg:py-20"
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
grid
lg:grid-cols-2
gap-12
lg:gap-20
    items-start
    "
  >
{/* LEFT SIDE */}

<div className="max-w-[620px]">

  <p
    className="
    uppercase
    tracking-[5px]
    text-[#D4A85A]
    text-[10px]
md:text-xs
tracking-[8px]
    mb-6
    "
  >
    Consultation Request
  </p>

  <h2
    className="
    text-4xl
md:text-5xl
lg:text-6xl
    font-heading
    leading-tight
    mb-8
    "
  >
    Let's Discuss
    <br />
    Your Project
  </h2>

  <p
    className="
    text-xl
    text-gray-300
    leading-relaxed
    mb-12
    "
  >
    Select a service and tell us about your
    project. Our team will review your inquiry
    and recommend the most suitable solution.
  </p>

  <div className="space-y-8">

    <div className="flex gap-5">
      <div className="text-[#D4A85A] text-2xl">
        ✦
      </div>

      <div>
        <h3 className="text-xl mb-2">
          Tailored Consultation
        </h3>

        <p className="text-gray-400">
          Advice specific to your project goals,
          site conditions and budget.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="text-[#D4A85A] text-2xl">
        ✦
      </div>

      <div>
        <h3 className="text-xl mb-2">
          Expert Guidance
        </h3>

        <p className="text-gray-400">
          Architecture, interiors, planning and
          visualization specialists.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="text-[#D4A85A] text-2xl">
        ✦
      </div>

      <div>
        <h3 className="text-xl mb-2">
          Fast Response
        </h3>

        <p className="text-gray-400">
          Most inquiries receive a response
          within 24 hours.
        </p>
      </div>
    </div>

  </div>

</div>

<div>

<form
  onSubmit={handleSubmit}
  className="
  bg-white/[0.03]
  backdrop-blur-xl
  border
  border-white/10
  rounded-[28px]
md:rounded-[40px]
p-6
md:p-8
lg:p-10
  grid
  gap-6
  "
>

  {/* COMMON FIELDS */}
<input
  type="text"
  name="fullName"
  placeholder="Full Name"
  required
  className="
  bg-transparent
  border
  border-white/10
  rounded-2xl
  px-7
  py-5
  outline-none
  focus:border-[#D4A85A]
  "
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  required
  className="
  bg-transparent
  border
  border-white/10
  rounded-2xl
  px-7
  py-5
  outline-none
  focus:border-[#D4A85A]
  "
/>

<input
  type="tel"
  name="phone"
  placeholder="Phone / WhatsApp"
  required
  className="
  bg-transparent
  border
  border-white/10
  rounded-2xl
  px-7
  py-5
  outline-none
  focus:border-[#D4A85A]
  "
/>

<input
  type="text"
  name="location"
  placeholder="Project Location"
  required
  className="
  bg-transparent
  border
  border-white/10
  rounded-2xl
  px-7
  py-5
  outline-none
  focus:border-[#D4A85A]
  "
/>{/* =====================================================
    ARCHITECTURE
===================================================== */}

{service === "Architecture" && (
  <>

    {/* PROJECT TYPE */}

    <select
      name="projectType"
      required
      defaultValue=""
      className="
        bg-[#071321]
        border
        border-white/10
        rounded-2xl
        px-6
        py-5
        text-white
      "
    >
      <option value="" disabled>
        What Are You Planning To Build?
      </option>

      <option value="Private Home / Villa">
        Private Home / Villa
      </option>
<option value="Renovation / Alteration">
  Renovation / Alteration
</option>
      <option value="Apartments / Multi-Residential">
        Apartments / Multi-Residential
      </option>

      <option value="Commercial / Office">
        Commercial / Office
      </option>

      <option value="Hospitality">
        Hotel / Hospitality
      </option>

      <option value="Mixed-Use Development">
        Mixed-Use Development
      </option>

      <option value="High-Rise Development">
        High-Rise Development
      </option>

      <option value="Institutional / Educational">
        Institutional / Educational
      </option>

      <option value="Religious / Community">
        Church / Religious / Community
      </option>

      <option value="Healthcare">
        Healthcare
      </option>

      <option value="Industrial / Specialised">
        Industrial / Specialised
      </option>

      <option value="Masterplanning / Larger Development">
        Masterplanning / Larger Development
      </option>

      <option value="Other">
        Other / Something Different
      </option>
    </select>


    {/* SITE SIZE */}

    <input
      type="text"
      name="siteSize"
      placeholder="Approximate Site / Plot Size"
      className="
        bg-transparent
        border
        border-white/10
        rounded-2xl
        px-7
        py-5
      "
    />


    {/* LAND STATUS */}

    <select
      name="landStatus"
      defaultValue=""
      className="
        bg-[#071321]
        border
        border-white/10
        rounded-2xl
        px-6
        py-5
        text-white
      "
    >
      <option value="" disabled>
        Site / Land Status
      </option>

      <option value="I already own the site">
        I Already Own The Site
      </option>

      <option value="I am purchasing / securing the site">
        I Am Purchasing / Securing The Site
      </option>

      <option value="I am still looking for land">
        I Am Still Looking For Land
      </option>

      <option value="Existing building / redevelopment">
        Existing Building / Redevelopment
      </option>

      <option value="Not applicable / Not sure yet">
        Not Applicable / Not Sure Yet
      </option>
    </select>


    {/* PROJECT STAGE */}

    <select
      name="projectStage"
      defaultValue=""
      className="
        bg-[#071321]
        border
        border-white/10
        rounded-2xl
        px-6
        py-5
        text-white
      "
    >
      <option value="" disabled>
        Where Are You In The Project?
      </option>

      <option value="Starting from an idea">
        Starting From An Idea
      </option>

      <option value="I have a brief / requirements">
        I Have A Brief / Requirements
      </option>

      <option value="I have sketches / an initial concept">
        I Have Sketches / An Initial Concept
      </option>

      <option value="I have an existing design that needs development">
        I Have An Existing Design That Needs Development
      </option>

      <option value="Project already under development / construction">
        Project Already Under Development / Construction
      </option>
    </select>


    {/* BUDGET */}

    <input
      type="text"
      name="budget"
      placeholder="Estimated Construction Budget (If Known)"
      className="
        bg-transparent
        border
        border-white/10
        rounded-2xl
        px-7
        py-5
      "
    />

{/* ARCHITECTURAL SUPPORT */}

<div
  className="
    border
    border-white/10
    rounded-2xl
    px-7
    py-6
  "
>
  <p className="text-white mb-2">
    What Architectural Support Do You Need?
  </p>

  <p className="text-white/50 text-sm mb-6">
    Select all that apply.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">

    {[
      "Concept Design",
      "Design Development",
      "As-Built Survey & Documentation",
      "Renovation / Alteration Design",
      "Technical / Construction Drawings",
      "Approval / Submission Documentation",
      "Construction Support",
      "Full Architectural Service",
      "Not Sure — I Need Guidance",
    ].map((item) => (
      <label
        key={item}
        className="
          flex
          items-center
          gap-3
          cursor-pointer
          text-white/75
        "
      >
        <input
          type="checkbox"
          name="architectureSupport"
          value={item}
          className="
            w-4
            h-4
            accent-[#D4A85A]
            cursor-pointer
          "
        />

        <span>{item}</span>
      </label>
    ))}

  </div>
</div>

  </>
)}

  {/* INTERIOR DESIGN */}

  {service === "Interior Design" && (
    <>

      <select className="bg-[#071321] border border-white/10 rounded-2xl px-6 py-5">
        <option>Project Type</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Office</option>
        <option>Restaurant</option>
        <option>Hotel</option>
      </select>

      <select className="bg-[#071321] border border-white/10 rounded-2xl px-6 py-5">
        <option>Preferred Style</option>
        <option>Modern Luxury</option>
        <option>Japandi</option>
        <option>Minimalist</option>
        <option>Scandinavian</option>
        <option>Classical</option>
        <option>Coastal</option>
      </select>

      <input
        type="text"
        placeholder="Budget Range"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

    </>
  )}

  {/* HOUSE PLANS */}

  {service === "House Plans" && (
    <>

      <input
        type="text"
        placeholder="Plot Size"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

      <input
        type="text"
        placeholder="Number Of Bedrooms"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

      <input
        type="text"
        placeholder="Number Of Floors"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

    </>
  )}
  {/* 3D VISUALIZATION */}

  {service === "3D Visualization" && (
    <>

      {/* COMPANY NAME */}

      <input
        type="text"
        name="companyName"
        placeholder="Company Name (Optional)"
        className="
          bg-transparent
          border
          border-white/10
          rounded-2xl
          px-7
          py-5
          outline-none
          transition-colors
          focus:border-[#D4A85A]/60
        "
      />


      {/* SERVICE REQUIRED */}

      <select
        name="renderingService"
        defaultValue=""
        required
        className="
          bg-[#071321]
          border
          border-white/10
          rounded-2xl
          px-6
          py-5
          outline-none
          transition-colors
          focus:border-[#D4A85A]/60
        "
      >
        <option value="" disabled>
          Service Required *
        </option>

        <option value="Exterior Still Render">
          Exterior Still Render
        </option>

        <option value="Interior Still Render">
          Interior Still Render
        </option>

        <option value="Exterior + Interior Renders">
          Exterior + Interior Renders
        </option>

        <option value="Architectural Animation">
          Architectural Animation
        </option>

        <option value="3D Modelling + Rendering">
          3D Modelling + Rendering
        </option>

        <option value="Complete Visualization Package">
          Complete Visualization Package
        </option>
      </select>


      {/* NUMBER OF RENDERS */}

      <input
        type="number"
        name="numberOfRenders"
        min="1"
        placeholder="Number of Still Renders Required"
        className="
          bg-transparent
          border
          border-white/10
          rounded-2xl
          px-7
          py-5
          outline-none
          transition-colors
          focus:border-[#D4A85A]/60
        "
      />


      {/* ANIMATION DURATION */}

      <select
        name="animationDuration"
        defaultValue=""
        className="
          bg-[#071321]
          border
          border-white/10
          rounded-2xl
          px-6
          py-5
          outline-none
          transition-colors
          focus:border-[#D4A85A]/60
        "
      >
        <option value="" disabled>
          Animation Duration (If Required)
        </option>

        <option value="30 Seconds">
          30 Seconds
        </option>

        <option value="1 Minute">
          1 Minute
        </option>

        <option value="2 Minutes">
          2 Minutes
        </option>

        <option value="3 Minutes">
          3 Minutes
        </option>

        <option value="More Than 3 Minutes">
          More Than 3 Minutes
        </option>
      </select>


      {/* EXISTING 3D MODEL */}

      <select
        name="modelAvailable"
        defaultValue=""
        required
        className="
          bg-[#071321]
          border
          border-white/10
          rounded-2xl
          px-6
          py-5
          outline-none
          transition-colors
          focus:border-[#D4A85A]/60
        "
      >
        <option value="" disabled>
          Do You Have A 3D Model? *
        </option>

        <option value="Yes - Complete 3D Model">
          Yes — Complete 3D Model
        </option>

        <option value="Yes - Partial 3D Model">
          Yes — Partial 3D Model
        </option>

        <option value="No 3D Model">
          No — I Need 3D Modelling
        </option>
      </select>


      {/* DOCUMENTATION */}

      <select
        name="documentation"
        defaultValue=""
        required
        className="
          bg-[#071321]
          border
          border-white/10
          rounded-2xl
          px-6
          py-5
          outline-none
          transition-colors
          focus:border-[#D4A85A]/60
        "
      >
        <option value="" disabled>
          Documentation Available *
        </option>

        <option value="Technical Drawings">
          Technical Drawings
        </option>

        <option value="3D Model + Technical Drawings">
          3D Model + Technical Drawings
        </option>

        <option value="Sketches / Concept Drawings">
          Sketches / Concept Drawings
        </option>

        <option value="Reference Images Only">
          Reference Images Only
        </option>

        <option value="Partial Documentation">
          Partial Documentation
        </option>
      </select>


      {/* PROJECT TYPE */}

      <select
        name="visualizationProjectType"
        defaultValue=""
        className="
          bg-[#071321]
          border
          border-white/10
          rounded-2xl
          px-6
          py-5
          outline-none
          transition-colors
          focus:border-[#D4A85A]/60
        "
      >
        <option value="" disabled>
          Project Type
        </option>

        <option value="Residential">
          Residential
        </option>

        <option value="Commercial">
          Commercial
        </option>

        <option value="Hospitality">
          Hospitality
        </option>

        <option value="Interior Design">
          Interior Design
        </option>

        <option value="Property Development">
          Property Development
        </option>

        <option value="Other">
          Other
        </option>
      </select>


      {/* DELIVERY DATE */}

      <div
        className="
          border
          border-white/10
          rounded-2xl
          px-7
          py-3
          focus-within:border-[#D4A85A]/60
          transition-colors
        "
      >
        <label
          htmlFor="visualizationDeadline"
          className="
            block
            font-[var(--font-avenir)]
            text-[10px]
            uppercase
            tracking-[2px]
            text-gray-500
            mb-1
          "
        >
          Required Delivery Date
        </label>

        <input
          id="visualizationDeadline"
          type="date"
          name="deadline"
          className="
            w-full
            bg-transparent
            outline-none
            text-gray-200
            font-[var(--font-avenir)]
          "
        />
      </div>

    </>
  )}
    {/* STUDENT SERVICES */}

  {service === "Student Services" && (
  <>

    {/* =====================================================
        UNIVERSITY / INSTITUTION
    ===================================================== */}

    <input
      type="text"
      name="university"
      placeholder="University / Institution"
      className="
        bg-transparent border border-white/10 rounded-2xl
        px-7 py-5 outline-none transition-colors
        focus:border-[#D4A85A]/60
      "
    />


    {/* COURSE */}

    <input
      type="text"
      name="course"
      placeholder="Course / Programme"
      className="
        bg-transparent border border-white/10 rounded-2xl
        px-7 py-5 outline-none transition-colors
        focus:border-[#D4A85A]/60
      "
    />


    {/* =====================================================
        TYPE OF SUPPORT
    ===================================================== */}

    <div
      className="
        sm:col-span-2
        border border-white/10 rounded-2xl
        p-6 md:p-7 bg-white/[0.015]
      "
    >

      <div className="mb-6">

        <p className="font-[var(--font-avenir)] text-sm text-gray-200 mb-2">
          What Do You Need Help With?
        </p>

        <p className="font-[var(--font-avenir)] text-xs text-gray-500 leading-relaxed">
          Select one or both depending on the support you require.
        </p>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {[
          "Project / Academic Design Assistance",
          "Software Training & Mentorship",
        ].map((item) => (

          <label
            key={item}
            className="
              flex items-center gap-4
              border border-white/10 rounded-xl
              px-5 py-4 cursor-pointer
              transition-all duration-300
              hover:border-[#D4A85A]/50
              hover:bg-white/[0.03]
            "
          >

            <input
              type="checkbox"
              name="studentRequestType"
              value={item}
              className="w-4 h-4 accent-[#D4A85A] shrink-0"
            />

            <span className="font-[var(--font-avenir)] text-sm text-gray-300">
              {item}
            </span>

          </label>

        ))}

      </div>

    </div>


    {/* =====================================================
        PROJECT / ACADEMIC ASSISTANCE
    ===================================================== */}

    <div
      className="
        sm:col-span-2
        border border-white/10 rounded-2xl
        p-6 md:p-7 bg-white/[0.015]
      "
    >

      <div className="mb-6">

        <p className="font-[var(--font-avenir)] text-sm text-gray-200 mb-2">
          Project &amp; Academic Design Assistance
        </p>

        <p className="font-[var(--font-avenir)] text-xs text-gray-500 leading-relaxed">
          Select the areas where you would like guidance and support
          with your current project.
        </p>

      </div>


      {/* ASSISTANCE OPTIONS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {[
          "Concept & Design Development Assistance",
          "Architectural Drawing Assistance",
          "3D Modelling Assistance",
          "Architectural Visualization / Rendering Assistance",
          "Presentation & Portfolio Assistance",
          "Model-Making Assistance",
          "Thesis Assistance",
        ].map((item) => (

          <label
            key={item}
            className="
              flex items-start gap-4
              border border-white/10 rounded-xl
              px-5 py-4 cursor-pointer
              transition-all duration-300
              hover:border-[#D4A85A]/50
              hover:bg-white/[0.03]
            "
          >

            <input
              type="checkbox"
              name="studentServices"
              value={item}
              className="
                mt-1 w-4 h-4
                accent-[#D4A85A]
                shrink-0
              "
            />

            <span
              className="
                font-[var(--font-avenir)]
                text-sm text-gray-300
                leading-relaxed
              "
            >
              {item}
            </span>

          </label>

        ))}

      </div>


      {/* =====================================================
          COMPLETE ASSISTANCE PACKAGE
      ===================================================== */}

      <label
        className="
          flex items-start gap-4
          mt-4
          border border-[#D4A85A]/40
          rounded-xl
          px-5 py-5
          cursor-pointer
          bg-[#D4A85A]/[0.04]
          transition-all duration-300
          hover:bg-[#D4A85A]/[0.08]
          hover:border-[#D4A85A]/70
        "
      >

        <input
          type="checkbox"
          name="studentServices"
          value="Complete Project Guidance Package"
          className="
            mt-1 w-4 h-4
            accent-[#D4A85A]
            shrink-0
          "
        />

        <div>

          <span
            className="
              block
              font-[var(--font-avenir)]
              text-sm
              text-[#D4A85A]
              font-medium
            "
          >
            Complete Project Guidance Package
          </span>

          <span
            className="
              block mt-1
              font-[var(--font-avenir)]
              text-xs text-gray-500
              leading-relaxed
            "
          >
            Broader guidance across design development, drawings,
            modelling, visualization and presentation depending on
            your project's requirements.
          </span>

        </div>

      </label>


      {/* =====================================================
          PRINTING ADD-ON
      ===================================================== */}

      <label
        className="
          flex items-start gap-4
          mt-4
          border border-white/10
          rounded-xl
          px-5 py-5
          cursor-pointer
          transition-all duration-300
          hover:border-[#D4A85A]/40
          hover:bg-white/[0.025]
        "
      >

        <input
          type="checkbox"
          name="studentServices"
          value="Include Final Printing, Binding & Delivery"
          className="
            mt-1 w-4 h-4
            accent-[#D4A85A]
            shrink-0
          "
        />

        <div>

          <span
            className="
              block
              font-[var(--font-avenir)]
              text-sm
              text-gray-200
            "
          >
            Include Final Printing, Binding &amp; Delivery
          </span>

          <span
            className="
              block mt-1
              font-[var(--font-avenir)]
              text-xs text-gray-500
              leading-relaxed
            "
          >
            Optional add-on for projects supported by ADS. We can
            arrange the final physical output and delivery once your
            project is ready.
          </span>

        </div>

      </label>

    </div>


    {/* =====================================================
        SOFTWARE TRAINING
    ===================================================== */}

    <div
      className="
        sm:col-span-2
        border border-[#D4A85A]/30
        rounded-2xl
        p-6 md:p-8
        bg-[#D4A85A]/[0.025]
      "
    >

      {/* TRAINING HEADER */}

      <div className="mb-7">

        <p
          className="
            font-heading
            text-2xl md:text-3xl
            text-white
            mb-2
          "
        >
          Learn The Tools. Design With Confidence.
        </p>

        <p
          className="
            font-[var(--font-avenir)]
            text-xs md:text-sm
            text-gray-400
            leading-relaxed
            max-w-2xl
          "
        >
          Practical software training focused on architectural drawing,
          modelling, documentation and visualization workflows. Choose
          the software and training package that best fits your goals.
        </p>

      </div>


      {/* =====================================================
          SOFTWARE OPTIONS
      ===================================================== */}

      <div className="mb-8">

        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            text-gray-400
            mb-3
          "
        >
          Which software would you like to learn?
        </p>


        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

          {[
            "ArchiCAD",
            "AutoCAD",
            "SketchUp",
            "Revit",
            "Lumion",
            "3ds Max",
          ].map((software) => (

            <label
              key={software}
              className="
                flex items-center gap-3
                border border-white/10
                rounded-xl
                px-4 md:px-5
                py-4
                cursor-pointer
                transition-all duration-300
                hover:border-[#D4A85A]/60
                hover:bg-white/[0.03]
              "
            >

              <input
                type="checkbox"
                name="softwareTraining"
                value={software}
                className="
                  w-4 h-4
                  accent-[#D4A85A]
                  shrink-0
                "
              />

              <span
                className="
                  font-[var(--font-avenir)]
                  text-sm text-gray-200
                "
              >
                {software}
              </span>

            </label>

          ))}

        </div>

      </div>


      {/* =====================================================
          TRAINING PACKAGES
      ===================================================== */}

      <div>

        <div className="mb-4">

          <p className="font-[var(--font-avenir)] text-sm text-gray-200 mb-1">
            Select Your Training Package
          </p>

          <p className="font-[var(--font-avenir)] text-xs text-gray-500">
            Each software includes 12 hours of guided training.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* SINGLE SOFTWARE */}

          <label
            className="
              flex flex-col
              border border-white/10
              rounded-xl
              p-5
              cursor-pointer
              transition-all duration-300
              hover:border-[#D4A85A]/50
              hover:bg-white/[0.03]
            "
          >

            <div className="flex items-start gap-3">

              <input
                type="radio"
                name="trainingPackage"
                value="Single Software — KSh 4,000"
                className="
                  mt-1 w-4 h-4
                  accent-[#D4A85A]
                  shrink-0
                "
              />

              <div>

                <span
                  className="
                    block
                    font-[var(--font-avenir)]
                    text-sm text-gray-200
                    mb-2
                  "
                >
                  Single Software
                </span>

                <span
                  className="
                    block
                    font-heading
                    text-3xl
                    font-light
                    text-[#D4A85A]
                    mb-2
                  "
                >
                  KSh 4,000
                </span>

                <span
                  className="
                    block
                    font-[var(--font-avenir)]
                    text-[11px]
                    text-gray-500
                    leading-relaxed
                  "
                >
                  2 weeks · 12 hours
                  <br />
                  6 sessions × 2 hours
                </span>

              </div>

            </div>

          </label>


          {/* ANY TWO SOFTWARE */}

          <label
            className="
              relative
              flex flex-col
              border border-[#D4A85A]/45
              rounded-xl
              p-5
              cursor-pointer
              bg-[#D4A85A]/[0.04]
              transition-all duration-300
              hover:border-[#D4A85A]/70
              hover:bg-[#D4A85A]/[0.07]
            "
          >

            <span
              className="
                absolute
                top-4
                right-4
                font-[var(--font-avenir)]
                uppercase
                tracking-[2px]
                text-[7px]
                text-[#D4A85A]
              "
            >
              Popular
            </span>


            <div className="flex items-start gap-3">

              <input
                type="radio"
                name="trainingPackage"
                value="Any 2 Software — KSh 7,000"
                className="
                  mt-1 w-4 h-4
                  accent-[#D4A85A]
                  shrink-0
                "
              />

              <div>

                <span
                  className="
                    block
                    font-[var(--font-avenir)]
                    text-sm text-gray-200
                    mb-2
                  "
                >
                  Any 2 Software
                </span>

                <span
                  className="
                    block
                    font-heading
                    text-3xl
                    font-light
                    text-[#D4A85A]
                    mb-2
                  "
                >
                  KSh 7,000
                </span>

                <span
                  className="
                    block
                    font-[var(--font-avenir)]
                    text-[11px]
                    text-gray-500
                    leading-relaxed
                  "
                >
                  24 total hours
                  <br />
                  Save KSh 1,000
                </span>

              </div>

            </div>

          </label>


          {/* DESIGN TO RENDER */}

          <label
            className="
              flex flex-col
              border border-white/10
              rounded-xl
              p-5
              cursor-pointer
              transition-all duration-300
              hover:border-[#D4A85A]/50
              hover:bg-white/[0.03]
            "
          >

            <div className="flex items-start gap-3">

              <input
                type="radio"
                name="trainingPackage"
                value="Design-to-Render Path — KSh 10,000"
                className="
                  mt-1 w-4 h-4
                  accent-[#D4A85A]
                  shrink-0
                "
              />

              <div>

                <span
                  className="
                    block
                    font-[var(--font-avenir)]
                    text-sm text-gray-200
                    mb-2
                  "
                >
                  Design-To-Render Path
                </span>

                <span
                  className="
                    block
                    font-heading
                    text-3xl
                    font-light
                    text-[#D4A85A]
                    mb-2
                  "
                >
                  KSh 10,000
                </span>

                <span
                  className="
                    block
                    font-[var(--font-avenir)]
                    text-[11px]
                    text-gray-500
                    leading-relaxed
                  "
                >
                  3 complementary software
                  <br />
                  36 total hours
                </span>

              </div>

            </div>

          </label>

        </div>

      </div>


      {/* TRAINING NOTE */}

      <div
        className="
          mt-6
          pt-5
          border-t border-white/10
        "
      >

        <p
          className="
            font-[var(--font-avenir)]
            text-[10px] md:text-xs
            text-gray-500
            leading-relaxed
          "
        >
          Practical skills-based training focused on improving your
          architectural software workflow. ADS software training is
          not an accredited or certification course.
        </p>

      </div>

    </div>


    {/* =====================================================
        TRAINING FORMAT
    ===================================================== */}

    <select
      name="trainingFormat"
      defaultValue=""
      className="
        bg-[#071321]
        border border-white/10
        rounded-2xl
        px-6 py-5
        outline-none
        transition-colors
        focus:border-[#D4A85A]/60
      "
    >

      <option value="" disabled>
        Preferred Training Format
      </option>

      <option value="Online Training">
        Online Training
      </option>

      <option value="In-Person Training">
        In-Person Training
      </option>

      <option value="Either Online or In-Person">
        Either Online or In-Person
      </option>

    </select>


    {/* =====================================================
        SKILL LEVEL
    ===================================================== */}

    <select
      name="skillLevel"
      defaultValue=""
      className="
        bg-[#071321]
        border border-white/10
        rounded-2xl
        px-6 py-5
        outline-none
        transition-colors
        focus:border-[#D4A85A]/60
      "
    >

      <option value="" disabled>
        Current Skill Level
      </option>

      <option value="Complete Beginner">
        Complete Beginner
      </option>

      <option value="Beginner">
        Beginner
      </option>

      <option value="Intermediate">
        Intermediate
      </option>

      <option value="Advanced">
        Advanced
      </option>

      <option value="Specific Skills">
        I Need Help With Specific Skills
      </option>

    </select>


    {/* =====================================================
        TRAINING GOALS
    ===================================================== */}

    <textarea
      name="trainingGoals"
      rows={4}
      placeholder="What would you like to learn? e.g. ArchiCAD modelling, construction drawings, Lumion rendering..."
      className="
        sm:col-span-2
        bg-transparent
        border border-white/10
        rounded-2xl
        px-7 py-5
        outline-none
        resize-none
        transition-colors
        focus:border-[#D4A85A]/60
      "
    />

  </>
)}

  <textarea
  name="notes"
  rows={6}
  placeholder="Additional Notes"
  className="
  bg-transparent
  border
  border-white/10
  rounded-2xl
  px-7
  py-5
  resize-none
  outline-none
  focus:border-[#D4A85A]
  "
/>

 <button
  type="submit"
  disabled={isSubmitting}
  className="
    py-5
    rounded-full
    bg-[#D4A85A]
    text-black
    font-medium
    transition-all
    duration-300
    hover:scale-[1.02]
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  {isSubmitting
    ? "Sending Request..."
    : "Submit Consultation Request"}
</button>
{submitSuccess && (
  <div
    className="
      rounded-2xl
      border
      border-[#D4A85A]/30
      bg-[#D4A85A]/10
      px-6
      py-5
      text-center
    "
  >
    <p className="font-heading text-2xl text-[#D4A85A] mb-2">
      Thank You
    </p>

    <p className="text-gray-300 leading-relaxed">
      Your consultation request has been received.
      Our team will review your project details and
      one of our experts will reach out shortly.
    </p>
  </div>
)}

{submitError && (
  <div
    className="
      rounded-2xl
      border
      border-red-400/20
      bg-red-400/10
      px-6
      py-4
      text-center
      text-red-200
    "
  >
    {submitError}
  </div>
)}
</form>

</div>
  </div>
</section>

{/* CONTACT OPTIONS */}

<section className="py-14 md:py-16 lg:py-20">

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

    <p
      className="
      uppercase
      tracking-[5px]
      text-[#D4A85A]
      text-center
      mb-4
      "
    >
      Prefer Direct Contact?
    </p>

    <h2
      className="
      text-center
      text-5xl
      font-heading
      mb-20
      "
    >
      We're Always Available
    </h2>

    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-8
      "
    >

      {/* WHATSAPP */}

      <a
        href="https://wa.me/254754525407"
        target="_blank"
        className="
        bg-white/[0.03]
        border
        border-white/10
        rounded-[32px]
        p-10
        text-center
        hover:border-[#D4A85A]
        transition-all
        duration-300
        "
      >
        <div className="text-[#D4A85A] text-4xl mb-6">
          <FaWhatsapp />
        </div>

        <h3 className="text-2xl font-heading mb-3">
          WhatsApp
        </h3>

        <p className="text-gray-400">
          Chat instantly with our team.
        </p>

        <p className="mt-4 text-[#D4A85A]">
          0754 525 407
        </p>
      </a>

      {/* PHONE */}

      <div
        className="
        bg-white/[0.03]
        border
        border-white/10
        rounded-[32px]
        p-10
        text-center
        "
      >
        <div className="text-[#D4A85A] mb-6 flex justify-center">
          <Phone size={40} />
        </div>

        <h3 className="text-2xl font-heading mb-3">
          Call Us
        </h3>

        <p className="text-gray-400">
          Speak directly with a consultant.
        </p>

        <p className="mt-4 text-[#D4A85A]">
          0754 525 407
        </p>
      </div>

      {/* EMAIL */}

      <div
        className="
        bg-white/[0.03]
        border
        border-white/10
        rounded-[32px]
        p-10
        text-center
        "
      >
        <div className="text-[#D4A85A] mb-6 flex justify-center">
          <Mail size={40} />
        </div>

        <h3 className="text-2xl font-heading mb-3">
          Email
        </h3>

        <p className="text-gray-400">
          Send project details anytime.
        </p>

        <p className="mt-4 text-[#D4A85A]">
          info@apiyodesignstudio.co.ke
        </p>
      </div>

      {/* LOCATION */}

      <div
        className="
        bg-white/[0.03]
        border
        border-white/10
        rounded-[32px]
        p-10
        text-center
        "
      >
        <div className="text-[#D4A85A] mb-6 flex justify-center">
          <MapPin size={40} />
        </div>

        <h3 className="text-2xl font-heading mb-3">
          Location
        </h3>

        <p className="text-gray-400">
          Serving projects across Kenya.
        </p>

        <p className="mt-4 text-[#D4A85A]">
          Nairobi, Kenya
        </p>
      </div>

    </div>

  </div>

</section>
{/* SOCIAL MEDIA */}

<section className="pb-28">

  <div className="text-center">

    <p
      className="
      uppercase
      tracking-[5px]
      text-[#D4A85A]
      mb-10
      "
    >
      Follow Our Work
    </p>

    <div
      className="
      flex
      justify-center
      items-center
      gap-8
      sm:gap-10
      text-3xl
      flex-wrap
      "
    >

      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/apiyo_designstudio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apiyo Design Studio on Instagram"
      >
        <FaInstagram className="text-[#D4A85A] hover:text-white hover:scale-110 transition-all duration-300" />
      </a>

      {/* FACEBOOK */}
      <a
        href="https://www.facebook.com/apiyodesignstudio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apiyo Design Studio on Facebook"
      >
        <FaFacebookF className="text-[#D4A85A] hover:text-white hover:scale-110 transition-all duration-300" />
      </a>

      {/* TIKTOK */}
      <a
        href="https://www.tiktok.com/@apiyodesignstudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apiyo Design Studio on TikTok"
      >
        <FaTiktok className="text-[#D4A85A] hover:text-white hover:scale-110 transition-all duration-300" />
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/company/apiyo-design-studio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apiyo Design Studio on LinkedIn"
      >
        <FaLinkedinIn className="text-[#D4A85A] hover:text-white hover:scale-110 transition-all duration-300" />
      </a>

      {/* X */}
      <a
        href="https://x.com/jojovil2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apiyo Design Studio on X"
      >
        <FaXTwitter className="text-[#D4A85A] hover:text-white hover:scale-110 transition-all duration-300" />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/254754525407"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Apiyo Design Studio on WhatsApp"
      >
        <FaWhatsapp className="text-[#D4A85A] hover:text-white hover:scale-110 transition-all duration-300" />
      </a>

    </div>

  </div>

</section>


<section className="py-14 md:py-16 lg:py-20">

  <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
    <p
      className="
      uppercase
      tracking-[5px]
      text-[#D4A85A]
      text-center
      mb-4
      "
    >
      Frequently Asked Questions
    </p>

    <h2
      className="
      text-center
      text-4xl
md:text-5xl
      font-heading
      mb-20
      "
    >
      Everything You Need To Know
    </h2>

    <div className="space-y-5">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="
          border
          border-white/10
          rounded-[28px]
          overflow-hidden
          "
        >

          <button
            onClick={() =>
              setOpenFAQ(
                openFAQ === index ? null : index
              )
            }
            className="
            w-full
            flex
            justify-between
            items-center
            px-8
            py-7
            text-left
            "
          >

            <span
              className="
              text-xl
              font-medium
              "
            >
              {faq.question}
            </span>

            <span
              className="
              text-[#D4A85A]
              text-3xl
              "
            >
              {openFAQ === index ? "−" : "+"}
            </span>

          </button>

          {openFAQ === index && (

            <div
              className="
              px-8
              pb-8
              text-gray-400
              leading-relaxed
              "
            >
              {faq.answer}
            </div>

          )}

        </div>

      ))}

    </div>

  </div>

</section>


<section className="pb-24 md:pb-28 lg:pb-32">

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
      border
      border-[#D4A85A]/20
      rounded-[28px]
      md:rounded-[40px]
lg:rounded-[50px]
      bg-gradient-to-br
      from-white/[0.03]
      to-white/[0.01]
      backdrop-blur-xl
      py-16
md:py-20
lg:py-24
px-6
md:px-10
lg:px-12
      text-center
      "
    >

      <p
        className="
        uppercase
        tracking-[5px]
        text-[#D4A85A]
        mb-5
        "
      >
        Ready To Begin?
      </p>

      <h2
        className="
        text-4xl
md:text-5xl
lg:text-7xl
        font-heading
        mb-8
        "
      >
        Let's Create Something Exceptional
      </h2>

      <p
        className="
        max-w-3xl
        mx-auto
        text-xl
        text-gray-300
        leading-relaxed
        mb-12
        "
      >
        Whether you're planning a luxury residence,
        commercial development, interior transformation,
        visualization project, or architectural concept,
        our team is ready to bring your vision to life.
      </p>

      <div
        className="
        flex
        justify-center
        gap-6
        flex-wrap
        "
      >

        <a
          href="https://wa.me/254754525407"
          target="_blank"
          className="
          px-10
          py-5
          rounded-full
          bg-[#D4A85A]
          text-black
          font-medium
          hover:scale-105
          transition-all
          duration-300
          "
        >
          WhatsApp Us
        </a>

        <a
  href="tel:+254754525407"
  className="
  px-8
  py-4
  rounded-full
  border
  border-[#D4A85A]
  text-[#D4A85A]
  font-medium
  transition-all
  duration-300
  hover:bg-[#D4A85A]
  hover:text-black
  "
>
  Call Us
</a>

      </div>

    </div>

  </div>

</section>

  <Footer />

</main>
  );
}