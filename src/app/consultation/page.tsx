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
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { useState } from "react";

export default function ConsultationPage() {
const [service, setService] =
  useState("Interior Design");

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
    placeholder="Full Name"
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
    placeholder="Email Address"
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
    placeholder="Phone / WhatsApp"
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
    placeholder="Project Location"
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

  {/* ARCHITECTURE */}

  {service === "Architecture" && (
    <>

      <select className="bg-[#071321] border border-white/10 rounded-2xl px-6 py-5">
        <option>Project Type</option>
        <option>Residential</option>
        <option>Commercial</option>
        <option>Mixed Use</option>
        <option>Hospitality</option>
      </select>

      <input
        type="text"
        placeholder="Approximate Site Size"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

      <select className="bg-[#071321] border border-white/10 rounded-2xl px-6 py-5">
        <option>Do You Have Land?</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <input
        type="text"
        placeholder="Estimated Budget"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

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

      <input
        type="text"
        placeholder="Company Name"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

      <select className="bg-[#071321] border border-white/10 rounded-2xl px-6 py-5">
        <option>Rendering Service</option>
        <option>Architectural Rendering</option>
        <option>Interior Rendering</option>
        <option>Animation</option>
        <option>Interactive Walkthrough</option>
      </select>

      <select className="bg-[#071321] border border-white/10 rounded-2xl px-6 py-5">
        <option>Documentation Available</option>
        <option>Technical Drawings</option>
        <option>3D Models</option>
        <option>Partial Documentation</option>
      </select>

    </>
  )}

  {/* STUDENT SERVICES */}

  {service === "Student Services" && (
    <>

      <input
        type="text"
        placeholder="University"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

      <input
        type="text"
        placeholder="Course"
        className="bg-transparent border border-white/10 rounded-2xl px-7 py-5"
      />

      <select className="bg-[#071321] border border-white/10 rounded-2xl px-6 py-5">
        <option>Service Needed</option>
        <option>3D Modelling</option>
        <option>Rendering</option>
        <option>Portfolio Assistance</option>
        <option>Presentation Boards</option>
      </select>

    </>
  )}

  <textarea
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
    className="
    py-5
    rounded-full
    bg-[#D4A85A]
    text-black
    font-medium
    transition-all
    duration-300
    hover:scale-105
    "
  >
    Submit Consultation Request
  </button>

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
      gap-10
      text-3xl
      "
    >

      <FaInstagram className="text-[#D4A85A] hover:text-white transition-all duration-300 cursor-pointer" />

      <FaFacebookF className="text-[#D4A85A] hover:text-white transition-all duration-300 cursor-pointer" />

      <FaLinkedinIn className="text-[#D4A85A] hover:text-white transition-all duration-300 cursor-pointer" />

      <FaXTwitter className="text-[#D4A85A] hover:text-white transition-all duration-300 cursor-pointer" />

      <FaWhatsapp className="text-[#D4A85A] hover:text-white transition-all duration-300 cursor-pointer" />

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