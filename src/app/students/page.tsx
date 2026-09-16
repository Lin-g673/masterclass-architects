"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import {
  Box,
  Image as ImageIcon,
  PanelsTopLeft,
  Ruler,
  Lightbulb,
  CheckCircle2,
  Clock3,
  MessageCircle,
  FileCheck2,
  ArrowRight,
  Monitor,
  Printer,
  GraduationCap,
  Laptop,
} from "lucide-react";

import Link from "next/link";


/* =====================================================
   STUDENT SERVICES DATA
===================================================== */

const studentServices = [
  {
    title: "Design & Presentation Assistance",
    description:
      "Guidance with concept development, design refinement, presentation drawings, plans, sections, elevations and working or production drawings.",
    icon: Ruler,
  },

  {
    title: "3D & Rendering Assistance",
    description:
      "Guidance with 3D modelling, architectural visualisation and rendering to help you communicate your design clearly.",
    icon: ImageIcon,
  },

  {
    title: "Model-Making Assistance",
    description:
      "Guidance with physical and digital architectural models for design exploration, development and presentation.",
    icon: Box,
  },

  {
    title: "Thesis Assistance",
    description:
      "Structured assistance with architectural thesis development, drawings, visual presentation, final printing and binding.",
    icon: GraduationCap,
  },

  {
    title: "Printing & Delivery",
    description:
      "Have your completed drawings professionally printed, prepared and delivered to you for reviews, pin-ups or final submission.",
    icon: Printer,
  },
];

/* =====================================================
   PROCESS
===================================================== */

const studentProcess = [
  {
    number: "01",
    title: "Share Your Brief",
    description:
      "Tell us what you are working on, where you need guidance, your current progress and your deadline.",
  },
  {
    number: "02",
    title: "Review & Plan",
    description:
      "We review your project or training goals together and identify the most useful approach for your needs.",
  },
  {
    number: "03",
    title: "Develop With Guidance",
    description:
      "Work through your drawings, models, visualisations or software workflow with practical guidance and support along the way.",
  },
  {
    number: "04",
    title: "Review & Progress",
    description:
      "Review your progress, clarify remaining questions and leave better prepared for your next project stage, review or submission.",
  },
];


/* =====================================================
   DELIVERABLES
===================================================== */

const studentBenefits = [
  {
    title: "Practical Guidance",
    description:
      "Clear, project-specific support that helps you understand what to improve, how to approach it and why it matters.",
    icon: CheckCircle2,
  },
  {
    title: "Project-Specific Support",
    description:
      "Guidance shaped around your own brief, design direction, current progress and academic requirements.",
    icon: FileCheck2,
  },
  {
    title: "Stronger Presentation",
    description:
      "Improve how you communicate your ideas through drawings, models, visualisations and architectural presentation.",
    icon: PanelsTopLeft,
  },
  {
    title: "Deadline Conscious",
    description:
      "Clear timelines and realistic expectations established early so you can plan properly around reviews and submissions.",
    icon: Clock3,
  },
  {
    title: "Skills You Keep",
    description:
      "Develop practical knowledge and workflows that you can confidently apply to your next project and beyond.",
    icon: GraduationCap,
  },
];


/* =====================================================
   PAGE
===================================================== */

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
        "
      >

        {/* HERO IMAGE */}

        <img
          src="/students/studenthero.png"
          alt="Architecture student studio model"
          draggable={false}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            select-none
          "
        />


        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#071321]/95
            via-[#071321]/72
            to-[#071321]/20
          "
        />


        {/* HERO CONTENT */}

        <div
          className="
            relative
            z-10
            min-h-screen
            flex
            items-center
          "
        >

          <div
            className="
              w-full
              max-w-[1500px]
              mx-auto
              px-5
              sm:px-6
              md:px-8
              lg:px-10
              xl:px-12
              pt-24
              md:pt-28
            "
          >

            <div className="max-w-4xl">


              {/* EYEBROW */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  mb-8
                "
              >

                <div
                  className="
                    w-10
                    h-px
                    bg-[#D4A85A]
                    flex-shrink-0
                  "
                />

                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                    whitespace-nowrap
                  "
                >
                  Student Services
                </p>

                <div
                  className="
                    w-10
                    h-px
                    bg-[#D4A85A]
                    flex-shrink-0
                  "
                />

              </div>


              {/* HEADING */}

              <h1
                className="
                  font-heading
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  font-light
                  leading-[1.02]
                  max-w-4xl
                  mb-8
                "
              >
                Support For Your
                <br />
                Design Journey.
              </h1>


              {/* DESCRIPTION */}

              <p
                className="
                  max-w-2xl
                  font-[var(--font-avenir)]
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-light
                  text-gray-300
                  leading-relaxed
                  mb-10
                "
              >
                Professional support for architecture and design
                students developing models, drawings, visualisations
                and presentation material for academic projects.
              </p>


              {/* CTA */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  sm:items-center
                "
              >

                <a
                  href="#student-services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-8
                    py-4
                    rounded-full
                    bg-[#D4A85A]
                    text-black
                    font-[var(--font-avenir)]
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:scale-[1.02]
                  "
                >
                  Explore Services
                  <ArrowRight size={17} />
                </a>


                <a
                  href="https://wa.me/254720468033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white/30
                    text-white
                    font-[var(--font-avenir)]
                    text-sm
                    transition-all
                    duration-300
                    hover:border-[#D4A85A]
                    hover:text-[#D4A85A]
                  "
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* SCROLL INDICATOR */}

        <div
          className="
            absolute
            z-20
            bottom-8
            md:bottom-10
            left-1/2
            -translate-x-1/2
            flex
            flex-col
            items-center
            gap-3
          "
        >

          <span
            className="
              font-[var(--font-avenir)]
              uppercase
              tracking-[6px]
              md:tracking-[9px]
              text-[9px]
              md:text-[10px]
              text-[#D4A85A]
              whitespace-nowrap
            "
          >
            Scroll To Explore
          </span>

          <div
            className="
              w-px
              h-10
              bg-[#D4A85A]
            "
          />

        </div>

      </section>



      {/* =====================================================
          STUDENT SERVICES
      ===================================================== */}

      <section
        id="student-services"
        className="
          py-10
  md:py-12
  lg:py-14
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

          {/* EYEBROW */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-10
            "
          >

            <div className="w-10 h-px bg-[#D4A85A]" />

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[8px]
                text-[#D4A85A]
                text-[10px]
                md:text-xs
                whitespace-nowrap
              "
            >
              How We Help
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


          {/* CENTERED HEADING */}

          <div
            className="
              max-w-4xl
              mx-auto
              text-center
              mb-12
              md:mb-16
            "
          >

            <h2
              className="
                font-heading
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-light
                leading-[1.05]
                mb-5
              "
            >
              Academic Support That
              Elevates Your Work
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto
                font-[var(--font-avenir)]
                text-sm
                md:text-base
                text-gray-400
                leading-relaxed
              "
            >
              Targeted architectural and presentation support
              designed to help you communicate your ideas with
              greater clarity, confidence and professionalism.
            </p>

          </div>


          {/* SERVICE CARDS */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
              gap-4
              md:gap-5
            "
          >

            {studentServices.map((service) => {

              const Icon = service.icon;

              return (

                <div
                  key={service.title}
                  className="
                    group
                    min-h-[290px]
                    border
                    border-white/10
                    rounded-2xl
                    p-7
                    md:p-8
                    bg-white/[0.015]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:bg-white
                    hover:text-[#071321]
                    hover:border-t-[#D4A85A]
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-[#D4A85A]
                      mb-8
                      transition-all
                      duration-500
                      group-hover:border-[#D4A85A]/30
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.4}
                    />
                  </div>


                  <h3
                    className="
                      font-heading
                      text-2xl
                      font-light
                      mb-4
                    "
                  >
                    {service.title}
                  </h3>


                  <p
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                      text-gray-400
                      leading-relaxed
                      transition-colors
                      duration-500
                      group-hover:text-[#071321]/70
                    "
                  >
                    {service.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

{/* =====================================================
    SOFTWARE TRAINING
===================================================== */}

<section className="py-10 md:py-12 lg:py-16">

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
        relative
        overflow-hidden
        rounded-[28px]
        md:rounded-[36px]
        border
        border-[#D4A85A]/20
        bg-white/[0.025]
        px-6
        sm:px-8
        md:px-10
        lg:px-14
        xl:px-16
        py-10
        md:py-14
        lg:py-16
      "
    >

      {/* SUBTLE BACKGROUND ACCENT */}
      <div
        className="
          absolute
          -top-32
          -right-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#D4A85A]/[0.04]
          blur-3xl
          pointer-events-none
        "
      />


      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          lg:grid-cols-[0.85fr_1.15fr]
          gap-12
          lg:gap-16
          xl:gap-24
          items-center
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div>

          {/* EYEBROW */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-7
            "
          >

            <div className="w-10 h-px bg-[#D4A85A]" />

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[5px]
                md:tracking-[7px]
                text-[#D4A85A]
                text-[9px]
                md:text-[10px]
              "
            >
              Learn The Software
            </p>

          </div>


          {/* HEADING */}

          <h2
            className="
              font-heading
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-light
              leading-[1.05]
              mb-6
            "
          >
            From Idea to Drawing.
            <br />
            From Model to Render.
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
              md:text-base
              text-gray-300
              leading-relaxed
              max-w-xl
              mb-8
            "
          >
            Build practical software skills for architecture and design
            through guided, hands-on training. Learn how to develop your
            drawings, models and visualisations while working through
            real architectural workflows.
          </p>


          {/* TRAINING MODES */}

          <div
            className="
              flex
              flex-wrap
              gap-3
              mb-9
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                px-4
                py-2.5
                font-[var(--font-avenir)]
                text-xs
                text-gray-300
              "
            >
              <Laptop
                size={15}
                strokeWidth={1.5}
                className="text-[#D4A85A]"
              />
              Online Training
            </div>


            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                px-4
                py-2.5
                font-[var(--font-avenir)]
                text-xs
                text-gray-300
              "
            >
              <GraduationCap
                size={15}
                strokeWidth={1.5}
                className="text-[#D4A85A]"
              />
              In-Person Training
            </div>


            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                px-4
                py-2.5
                font-[var(--font-avenir)]
                text-xs
                text-gray-300
              "
            >
              <MessageCircle
                size={15}
                strokeWidth={1.5}
                className="text-[#D4A85A]"
              />
              Guided Learning
            </div>

          </div>


          {/* CTA */}

          <Link
            href="/consultation"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              px-7
              md:px-8
              py-3.5
              md:py-4
              rounded-full
              bg-[#D4A85A]
              text-black
              font-[var(--font-avenir)]
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-white
              hover:scale-[1.02]
            "
          >
            Book Software Training
            <ArrowRight size={17} />
          </Link>

        </div>


        {/* =================================================
            SOFTWARE GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            gap-3
            sm:gap-4
          "
        >

          {[
            {
              name: "ArchiCAD",
              category: "BIM & Documentation",
              short: "AC",
            },
            {
              name: "AutoCAD",
              category: "Technical Drawing",
              short: "AU",
            },
            {
              name: "SketchUp",
              category: "3D Modelling",
              short: "SU",
            },
            {
              name: "Revit",
              category: "BIM & Documentation",
              short: "RV",
            },
            {
              name: "Lumion",
              category: "Visualization",
              short: "LU",
            },
            {
              name: "3ds Max",
              category: "3D & Visualization",
              short: "3D",
            },
          ].map((software) => (

            <div
              key={software.name}
              className="
                group
                min-h-[155px]
                sm:min-h-[175px]
                rounded-2xl
                border
                border-white/10
                bg-[#071321]/60
                p-5
                sm:p-6
                flex
                flex-col
                justify-between
                transition-all
                duration-500
                hover:bg-white
                hover:-translate-y-1
                hover:border-[#D4A85A]/40
              "
            >

              {/* SOFTWARE MARK */}

              <div
                className="
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-xl
                  border
                  border-[#D4A85A]/30
                  flex
                  items-center
                  justify-center
                  font-[var(--font-avenir)]
                  text-[10px]
                  sm:text-xs
                  tracking-[1px]
                  text-[#D4A85A]
                "
              >
                {software.short}
              </div>


              <div>

                <h3
                  className="
                    font-heading
                    text-xl
                    sm:text-2xl
                    font-light
                    mb-1
                    group-hover:text-[#071321]
                    transition-colors
                    duration-500
                  "
                >
                  {software.name}
                </h3>

                <p
                  className="
                    font-[var(--font-avenir)]
                    text-[10px]
                    sm:text-xs
                    text-gray-500
                    group-hover:text-[#071321]/60
                    transition-colors
                    duration-500
                  "
                >
                  {software.category}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* =================================================
          LEARNING PATHS + PRICING
      ================================================= */}

      <div
        className="
          relative
          z-10
          mt-10
          lg:mt-14
          pt-8
          lg:pt-10
          border-t
          border-white/10
        "
      >

        {/* =================================================
            LEARNING PATHS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            lg:gap-10
          "
        >

          {/* PATH 01 */}

          <div
            className="
              flex
              gap-4
              sm:gap-5
              items-start
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#D4A85A]/30
                flex
                items-center
                justify-center
                text-[#D4A85A]
                flex-shrink-0
              "
            >
              <Ruler size={17} strokeWidth={1.4} />
            </div>

            <div>

              <h3
                className="
                  font-heading
                  text-xl
                  md:text-2xl
                  font-light
                  mb-2
                "
              >
                Design &amp; Documentation
              </h3>

              <p
                className="
                  font-[var(--font-avenir)]
                  text-xs
                  md:text-sm
                  text-gray-400
                  leading-relaxed
                  max-w-xl
                "
              >
                Develop practical skills for architectural drawing,
                modelling and documentation using ArchiCAD, AutoCAD,
                Revit and SketchUp.
              </p>

            </div>

          </div>


          {/* PATH 02 */}

          <div
            className="
              flex
              gap-4
              sm:gap-5
              items-start
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#D4A85A]/30
                flex
                items-center
                justify-center
                text-[#D4A85A]
                flex-shrink-0
              "
            >
              <ImageIcon size={17} strokeWidth={1.4} />
            </div>

            <div>

              <h3
                className="
                  font-heading
                  text-xl
                  md:text-2xl
                  font-light
                  mb-2
                "
              >
                Visualization &amp; Presentation
              </h3>

              <p
                className="
                  font-[var(--font-avenir)]
                  text-xs
                  md:text-sm
                  text-gray-400
                  leading-relaxed
                  max-w-xl
                "
              >
                Learn modelling, materials, lighting, rendering and
                presentation workflows using SketchUp, Lumion and
                3ds Max.
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            PRICING HEADER
        ================================================= */}

        <div
          className="
            mt-10
            lg:mt-12
            pt-8
            lg:pt-10
            border-t
            border-white/10
          "
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-5
              mb-7
              md:mb-8
            "
          >

            <div>

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[5px]
                  text-[#D4A85A]
                  text-[9px]
                  md:text-[10px]
                  mb-3
                "
              >
                Student Training Fees
              </p>

              <h3
                className="
                  font-heading
                  text-3xl
                  md:text-4xl
                  font-light
                  leading-[1.08]
                "
              >
                Choose Your Training Path.
              </h3>

            </div>


            <p
              className="
                max-w-lg
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-400
                leading-relaxed
              "
            >
              Start with one software or combine complementary
              programs to build a broader architectural workflow.
            </p>

          </div>


          {/* =================================================
              PRICING CARDS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
            "
          >

            {/* SINGLE SOFTWARE */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#071321]/60
                p-6
                lg:p-7
                flex
                flex-col
                min-h-[300px]
              "
            >

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[3px]
                  text-[#D4A85A]
                  text-[9px]
                  mb-5
                "
              >
                Single Software
              </p>

              <h4
                className="
                  font-heading
                  text-4xl
                  lg:text-5xl
                  font-light
                  mb-1
                "
              >
                KSh 4,000
              </h4>

              <p
                className="
                  font-[var(--font-avenir)]
                  text-xs
                  text-gray-500
                  mb-6
                "
              >
                per software
              </p>


              <div className="space-y-3 mb-7">

                {[
                  "2 weeks of training",
                  "12 total training hours",
                  "6 sessions × 2 hours",
                  "Online or in-person",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={15}
                      strokeWidth={1.5}
                      className="
                        text-[#D4A85A]
                        flex-shrink-0
                        mt-[2px]
                      "
                    />

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-xs
                        text-gray-300
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>


              <Link
                href="/consultation"
                className="
                  mt-auto
                  inline-flex
                  items-center
                  gap-2
                  font-[var(--font-avenir)]
                  text-xs
                  text-[#D4A85A]
                  hover:text-white
                  transition-colors
                "
              >
                Book One Software
                <ArrowRight size={14} />
              </Link>

            </div>


            {/* ANY TWO SOFTWARE */}

            <div
              className="
                relative
                rounded-2xl
                border
                border-[#D4A85A]/45
                bg-[#D4A85A]/[0.05]
                p-6
                lg:p-7
                flex
                flex-col
                min-h-[300px]
              "
            >

              <span
                className="
                  absolute
                  top-5
                  right-5
                  rounded-full
                  border
                  border-[#D4A85A]/30
                  bg-[#D4A85A]/10
                  px-3
                  py-1
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[2px]
                  text-[#D4A85A]
                  text-[8px]
                "
              >
                Popular
              </span>


              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[3px]
                  text-[#D4A85A]
                  text-[9px]
                  mb-5
                "
              >
                Any 2 Software
              </p>

              <h4
                className="
                  font-heading
                  text-4xl
                  lg:text-5xl
                  font-light
                  mb-1
                "
              >
                KSh 7,000
              </h4>

              <p
                className="
                  font-[var(--font-avenir)]
                  text-xs
                  text-gray-500
                  mb-6
                "
              >
                save KSh 1,000
              </p>


              <div className="space-y-3 mb-7">

                {[
                  "Choose any 2 software",
                  "12 hours per software",
                  "24 total training hours",
                  "Simultaneous or consecutive",
                  "Online or in-person",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={15}
                      strokeWidth={1.5}
                      className="
                        text-[#D4A85A]
                        flex-shrink-0
                        mt-[2px]
                      "
                    />

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-xs
                        text-gray-300
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>


              <Link
                href="/consultation"
                className="
                  mt-auto
                  inline-flex
                  items-center
                  gap-2
                  font-[var(--font-avenir)]
                  text-xs
                  text-[#D4A85A]
                  hover:text-white
                  transition-colors
                "
              >
                Choose Two Software
                <ArrowRight size={14} />
              </Link>

            </div>


            {/* DESIGN TO RENDER */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#071321]/60
                p-6
                lg:p-7
                flex
                flex-col
                min-h-[300px]
              "
            >

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[3px]
                  text-[#D4A85A]
                  text-[9px]
                  mb-5
                "
              >
                Design-To-Render Path
              </p>

              <h4
                className="
                  font-heading
                  text-4xl
                  lg:text-5xl
                  font-light
                  mb-1
                "
              >
                KSh 10,000
              </h4>

              <p
                className="
                  font-[var(--font-avenir)]
                  text-xs
                  text-gray-500
                  mb-6
                "
              >
                3 complementary software
              </p>


              <div className="space-y-3 mb-7">

                {[
                  "Choose 3 complementary software",
                  "12 hours per software",
                  "36 total training hours",
                  "Complete design workflow",
                  "Online or in-person",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={15}
                      strokeWidth={1.5}
                      className="
                        text-[#D4A85A]
                        flex-shrink-0
                        mt-[2px]
                      "
                    />

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-xs
                        text-gray-300
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>


              <Link
                href="/consultation"
                className="
                  mt-auto
                  inline-flex
                  items-center
                  gap-2
                  font-[var(--font-avenir)]
                  text-xs
                  text-[#D4A85A]
                  hover:text-white
                  transition-colors
                "
              >
                Build Your Learning Path
                <ArrowRight size={14} />
              </Link>

            </div>

          </div>


          {/* =================================================
              TRAINING NOTE
          ================================================= */}

          <div
            className="
              mt-5
              rounded-xl
              border
              border-white/[0.07]
              px-5
              py-4
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-3
            "
          >

            <p
              className="
                font-[var(--font-avenir)]
                text-[10px]
                md:text-xs
                text-gray-500
                leading-relaxed
                max-w-3xl
              "
            >
              Practical skills training focused on architectural
              software workflows. This is not an accredited or
              certification course.
            </p>


            <div
              className="
                flex
                items-center
                gap-2
                text-[#D4A85A]
                flex-shrink-0
              "
            >

              <Clock3
                size={14}
                strokeWidth={1.5}
              />

              <span
                className="
                  font-[var(--font-avenir)]
                  text-[10px]
                  md:text-xs
                "
              >
                6 Sessions × 2 Hours / Software
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* =====================================================
    WHY STUDENTS CHOOSE US
===================================================== */}

<section className="py-10 md:py-12 lg:py-14">

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
        grid-cols-1
        lg:grid-cols-2
        gap-12
        lg:gap-20
        items-center
      "
    >

      {/* IMAGE */}

      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          aspect-[4/3]
          lg:aspect-[5/4]
        "
      >

        <img
          src="/students/studentsupport.png"
          alt="Architecture students developing a design project"
          draggable={false}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            select-none
            transition-transform
            duration-[1200ms]
            hover:scale-[1.03]
          "
        />

        {/* SUBTLE IMAGE OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071321]/35
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div>

        {/* EYEBROW */}

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
              md:tracking-[7px]
              text-[#D4A85A]
              text-[9px]
              md:text-[10px]
            "
          >
            Why Students Choose Us
          </p>

          <div className="w-10 h-px bg-[#D4A85A]" />

        </div>


        {/* HEADING */}

        <h2
          className="
            font-heading
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-light
            leading-[1.05]
            mb-6
          "
        >
          Guidance That Builds
          <br />
          Better Designers.
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            md:text-base
            text-gray-400
            leading-relaxed
            max-w-xl
            mb-9
          "
        >
          Design school can move quickly — from concept development
          and studio reviews to technical drawings, visualisation and
          final presentation. We provide practical guidance that helps
          you improve your work while developing skills you can carry
          into future projects.
        </p>


        {/* BENEFITS */}

        <div className="space-y-5">

          {[
            {
              title: "Your Design Remains Yours",
              description:
                "We guide and assist the process while keeping your ideas, decisions and learning at the centre.",
            },
            {
              title: "Learn From Practical Experience",
              description:
                "Get guidance informed by real architectural design, documentation and visualisation workflows.",
            },
            {
              title: "Project-Specific Support",
              description:
                "Assistance is tailored to your brief, current project stage, challenges and submission requirements.",
            },
            {
              title: "Build Skills, Not Just Submissions",
              description:
                "Our goal is to help you understand the process and become more confident working independently.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="
                flex
                items-start
                gap-4
              "
            >

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  border
                  border-[#D4A85A]/30
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  mt-[2px]
                "
              >
                <CheckCircle2
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#D4A85A]"
                />
              </div>


              <div>

                <h3
                  className="
                    font-heading
                    text-lg
                    md:text-xl
                    font-light
                    mb-1
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    font-[var(--font-avenir)]
                    text-xs
                    md:text-sm
                    text-gray-400
                    leading-relaxed
                    max-w-lg
                  "
                >
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* CTA */}

        <Link
          href="/consultation"
          className="
            inline-flex
            items-center
            gap-3
            mt-10
            px-8
            py-4
            rounded-full
            bg-[#D4A85A]
            text-black
            font-[var(--font-avenir)]
            text-sm
            font-medium
            transition-all
            duration-300
            hover:bg-white
            hover:scale-[1.02]
          "
        >
          Request Student Support
          <ArrowRight size={17} />
        </Link>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    PROCESS
===================================================== */}

<section
  id="process"
  className="
    py-12
    md:py-16
    lg:py-20
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

    {/* SECTION HEADER */}

    <div
      className="
        max-w-3xl
        mb-10
        md:mb-14
      "
    >

      <div
  className="
    flex
    items-center
    gap-4
    mb-6
  "
>
  <div className="w-10 h-px bg-[#D4A85A]" />

  <p
    className="
      font-[var(--font-avenir)]
      uppercase
      tracking-[5px]
      md:tracking-[7px]
      text-[#D4A85A]
      text-[9px]
      md:text-[10px]
    "
  >
    How It Works
  </p>

  <div className="w-10 h-px bg-[#D4A85A]" />
</div>


      <h2
        className="
          font-heading
          text-4xl
          sm:text-5xl
          md:text-6xl
          font-light
          leading-[1.05]
          mb-5
        "
      >
        Guidance Built Around
        <br />
        Your Project.
      </h2>


      <p
        className="
          font-[var(--font-avenir)]
          text-sm
          md:text-base
          text-gray-400
          leading-relaxed
          max-w-2xl
        "
      >
        Whether you need project assistance or software training,
        we start with where you are and structure the support around
        what you need to understand, improve and complete confidently.
      </p>

    </div>


    {/* =================================================
        PROCESS STEPS
    ================================================= */}

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-4
      "
    >

      {studentProcess.map((step) => (

        <div
          key={step.number}
          className="
            group
            relative
            min-h-[285px]
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            p-6
            md:p-7
            flex
            flex-col
            transition-all
            duration-500
            hover:bg-white
            hover:-translate-y-1
            hover:border-white
          "
        >

          {/* STEP NUMBER */}

          <div
            className="
              flex
              items-center
              justify-between
              mb-12
            "
          >

            <span
              className="
                font-heading
                text-4xl
                font-light
                text-[#D4A85A]
              "
            >
              {step.number}
            </span>


            <div
              className="
                w-8
                h-8
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                text-gray-500
                group-hover:border-[#071321]/15
                group-hover:text-[#071321]
                transition-colors
                duration-500
              "
            >
              <ArrowRight
                size={14}
                strokeWidth={1.4}
              />
            </div>

          </div>


          {/* STEP CONTENT */}

          <div className="mt-auto">

            <h3
              className="
                font-heading
                text-2xl
                md:text-[26px]
                font-light
                mb-3
                group-hover:text-[#071321]
                transition-colors
                duration-500
              "
            >
              {step.title}
            </h3>


            <p
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-400
                leading-relaxed
                group-hover:text-[#071321]/65
                transition-colors
                duration-500
              "
            >
              {step.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* =====================================================
    STUDENT BENEFITS
===================================================== */}

<section className="py-12 md:py-16 lg:py-20">

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

    {/* SECTION HEADER */}

    <div
      className="
        max-w-3xl
        mb-10
        md:mb-14
      "
    >

      <div
        className="
          flex
          items-center
          gap-4
          mb-6
        "
      >
        <div className="w-10 h-px bg-[#D4A85A]" />

        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[5px]
            md:tracking-[7px]
            text-[#D4A85A]
            text-[9px]
            md:text-[10px]
          "
        >
          What You Gain
        </p>

        <div className="w-10 h-px bg-[#D4A85A]" />
      </div>


      <h2
        className="
          font-heading
          text-4xl
          sm:text-5xl
          md:text-6xl
          font-light
          leading-[1.05]
          mb-5
        "
      >
        Support That Moves
        <br />
        You Forward.
      </h2>


      <p
        className="
          font-[var(--font-avenir)]
          text-sm
          md:text-base
          text-gray-400
          leading-relaxed
          max-w-2xl
        "
      >
        The goal is not only to improve the project in front of you,
        but to strengthen how you design, communicate and work through
        future architectural projects.
      </p>

    </div>


    {/* =================================================
        BENEFIT CARDS
    ================================================= */}

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-4
      "
    >

      {studentBenefits.map((benefit) => {

        const Icon = benefit.icon;

        return (

          <div
            key={benefit.title}
            className="
              group
              min-h-[275px]
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              p-6
              flex
              flex-col
              transition-all
              duration-500
              hover:bg-white
              hover:-translate-y-1
              hover:border-white
            "
          >

            {/* ICON */}

            <div
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#D4A85A]/30
                flex
                items-center
                justify-center
                text-[#D4A85A]
                mb-10
                transition-colors
                duration-500
                group-hover:border-[#D4A85A]
              "
            >
              <Icon
                size={18}
                strokeWidth={1.4}
              />
            </div>


            {/* CONTENT */}

            <div className="mt-auto">

              <h3
                className="
                  font-heading
                  text-xl
                  md:text-2xl
                  font-light
                  mb-3
                  group-hover:text-[#071321]
                  transition-colors
                  duration-500
                "
              >
                {benefit.title}
              </h3>


              <p
                className="
                  font-[var(--font-avenir)]
                  text-xs
                  text-gray-400
                  leading-relaxed
                  group-hover:text-[#071321]/65
                  transition-colors
                  duration-500
                "
              >
                {benefit.description}
              </p>

            </div>

          </div>

        );

      })}

    </div>


    {/* =================================================
        PRINTING / PHYSICAL OUTPUT STRIP
    ================================================= */}

    <div
      className="
        mt-5
        rounded-2xl
        border
        border-[#D4A85A]/20
        bg-[#D4A85A]/[0.035]
        px-6
        md:px-8
        py-6
        md:py-7
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-6
      "
    >

      <div
        className="
          flex
          items-start
          gap-4
        "
      >

        <div
          className="
            w-10
            h-10
            rounded-full
            border
            border-[#D4A85A]/30
            flex
            items-center
            justify-center
            text-[#D4A85A]
            flex-shrink-0
          "
        >
          <Printer
            size={17}
            strokeWidth={1.4}
          />
        </div>


        <div>

          <h3
            className="
              font-heading
              text-xl
              md:text-2xl
              font-light
              mb-1
            "
          >
            Final Printing &amp; Delivery
          </h3>

          <p
  className="
    font-[var(--font-avenir)]
    text-xs
    md:text-sm
    text-gray-400
    leading-relaxed
    max-w-2xl
  "
>
  For projects supported by Apiyo Design Studio, we can arrange final drawing
  printing, binding and delivery — giving you a convenient path
  from project assistance to presentation-ready output.
</p>

        </div>

      </div>


      <Link
        href="/consultation"
        className="
          inline-flex
          items-center
          gap-2
          flex-shrink-0
          font-[var(--font-avenir)]
          text-xs
          text-[#D4A85A]
          hover:text-white
          transition-colors
          duration-300
        "
      >
        Add Printing &amp; Delivery
        <ArrowRight size={14} />
      </Link>

    </div>

  </div>

</section>

{/* =====================================================
    FINAL CTA
===================================================== */}

<section className="py-12 md:py-16 lg:py-20">

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
        relative
        overflow-hidden
        rounded-[28px]
        md:rounded-[36px]
        border
        border-[#D4A85A]/20
        bg-white/[0.025]
        px-6
        sm:px-8
        md:px-12
        lg:px-16
        py-12
        md:py-16
        lg:py-20
        text-center
      "
    >

      {/* SUBTLE BACKGROUND ACCENT */}

      <div
        className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[550px]
          h-[550px]
          rounded-full
          bg-[#D4A85A]/[0.045]
          blur-3xl
          pointer-events-none
        "
      />


      <div
        className="
          relative
          z-10
          max-w-4xl
          mx-auto
        "
      >

        {/* EYEBROW */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-4
            mb-7
          "
        >

          <div className="w-10 h-px bg-[#D4A85A]" />

          <p
            className="
              font-[var(--font-avenir)]
              uppercase
              tracking-[5px]
              md:tracking-[7px]
              text-[#D4A85A]
              text-[9px]
              md:text-[10px]
            "
          >
            Ready When You Are
          </p>

          <div className="w-10 h-px bg-[#D4A85A]" />

        </div>


        {/* HEADING */}

        <h2
          className="
            font-heading
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-light
            leading-[1.02]
            mb-6
          "
        >
          Your Next Project
          <br />
          Starts With Better Skills.
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            md:text-base
            text-gray-400
            leading-relaxed
            max-w-2xl
            mx-auto
            mb-9
          "
        >
          Whether you need guidance with an architectural project,
          want to improve your software skills or need help preparing
          your completed work for presentation, tell us what you're
          working on and we'll help you choose the right support.
        </p>


        {/* =================================================
            SERVICE OPTIONS
        ================================================= */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            mb-10
          "
        >

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-4
              py-2.5
              font-[var(--font-avenir)]
              text-[10px]
              md:text-xs
              text-gray-300
            "
          >
            <Ruler
              size={14}
              strokeWidth={1.5}
              className="text-[#D4A85A]"
            />
            Project Assistance
          </div>


          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-4
              py-2.5
              font-[var(--font-avenir)]
              text-[10px]
              md:text-xs
              text-gray-300
            "
          >
            <Laptop
              size={14}
              strokeWidth={1.5}
              className="text-[#D4A85A]"
            />
            Software Training
          </div>


          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-4
              py-2.5
              font-[var(--font-avenir)]
              text-[10px]
              md:text-xs
              text-gray-300
            "
          >
            <Printer
              size={14}
              strokeWidth={1.5}
              className="text-[#D4A85A]"
            />
            Printing &amp; Delivery
          </div>

        </div>


        {/* =================================================
            CTA BUTTONS
        ================================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
          "
        >

          {/* PRIMARY */}

          <Link
            href="/consultation"
            className="
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-3
              px-8
              md:px-9
              py-4
              rounded-full
              bg-[#D4A85A]
              text-black
              font-[var(--font-avenir)]
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-white
              hover:scale-[1.02]
            "
          >
            Request Student Support
            <ArrowRight size={17} />
          </Link>


          {/* WHATSAPP */}

          <a
            href="https://wa.me/254754525407"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-3
              px-8
              md:px-9
              py-4
              rounded-full
              border
              border-white/15
              text-white
              font-[var(--font-avenir)]
              text-sm
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#071321]
            "
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>

        </div>


        {/* SMALL NOTE */}

        <p
          className="
            mt-7
            font-[var(--font-avenir)]
            text-[10px]
            md:text-xs
            text-gray-600
          "
        >
          Architecture &amp; design students · Online &amp; in-person support
        </p>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}