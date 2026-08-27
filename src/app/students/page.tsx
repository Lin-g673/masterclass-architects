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
} from "lucide-react";

import Link from "next/link";


/* =====================================================
   STUDENT SERVICES DATA
===================================================== */

const studentServices = [
  {
    title: "3D Modelling",
    description:
      "Accurate architectural and interior models developed from your drawings, sketches or design concept.",
    icon: Box,
  },

  {
    title: "3D Visualisation",
    description:
      "High-quality architectural and interior renders that clearly communicate your design intent.",
    icon: ImageIcon,
  },

  {
    title: "Presentation Boards",
    description:
      "Clean, compelling presentation layouts that organise drawings, visuals and project information professionally.",
    icon: PanelsTopLeft,
  },

  {
    title: "Technical Drawings",
    description:
      "Support in developing clear plans, sections, elevations and architectural drawing packages.",
    icon: Ruler,
  },

  {
    title: "Project Guidance",
    description:
      "Practical design guidance to help you strengthen your concept, presentation and overall project direction.",
    icon: Lightbulb,
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
      "Send your project brief, drawings, reference material and submission requirements.",
  },

  {
    number: "02",
    title: "We Review & Plan",
    description:
      "We review what you have, identify what is required and agree on the most suitable approach.",
  },

  {
    number: "03",
    title: "We Develop",
    description:
      "Your models, visuals, drawings or presentation materials are developed with close attention to your design.",
  },

  {
    number: "04",
    title: "You Review & Receive",
    description:
      "You review the work, provide feedback and receive the agreed final deliverables.",
  },
];


/* =====================================================
   DELIVERABLES
===================================================== */

const studentBenefits = [
  {
    title: "High-Quality Output",
    description:
      "Professional work prepared with strong visual clarity and careful attention to presentation.",
    icon: CheckCircle2,
  },

  {
    title: "Project-Specific",
    description:
      "Support developed around your own brief, design direction and academic requirements.",
    icon: FileCheck2,
  },

  {
    title: "Presentation Ready",
    description:
      "Visuals and drawings prepared for reviews, pin-ups, presentations and portfolio use.",
    icon: PanelsTopLeft,
  },

  {
    title: "Deadline Conscious",
    description:
      "Clear timelines and realistic delivery expectations established before work begins.",
    icon: Clock3,
  },

  {
    title: "Continued Guidance",
    description:
      "Communication throughout the process so that you understand what is being developed and why.",
    icon: MessageCircle,
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
          WHY STUDENTS CHOOSE US
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
                alt="Architecture students working on a physical model"
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

            </div>


            {/* CONTENT */}

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
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                    whitespace-nowrap
                  "
                >
                  Why Students Choose Us
                </p>

                <div className="w-10 h-px bg-[#D4A85A]" />

              </div>


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
                More Than Support.
                <br />
                A Design Partnership.
              </h2>


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
                We understand the pressure of design school —
                demanding briefs, reviews, presentation deadlines
                and the constant need to communicate ideas clearly.
                Our role is to strengthen your presentation while
                respecting your own design thinking.
              </p>


              <div className="space-y-4">

                {[
                  "Professional architectural and design experience",
                  "Project-specific guidance",
                  "Clear communication and defined deliverables",
                  "Confidential and student-focused support",
                  "Support across different academic project stages",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >

                    <CheckCircle2
                      size={18}
                      className="
                        text-[#D4A85A]
                        flex-shrink-0
                        mt-[2px]
                      "
                    />

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-sm
                        md:text-base
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
                Request Support
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

          {/* LEFT EYEBROW */}

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
              "
            >
              Our Process
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


          {/* CENTERED HEADING */}

          <div
            className="
              text-center
              max-w-4xl
              mx-auto
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
              Simple. Clear. Effective.
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
              A straightforward process designed around your
              project requirements and academic deadlines.
            </p>

          </div>


          {/* PROCESS CARDS */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-4
              md:gap-5
            "
          >

            {studentProcess.map((step) => (

              <div
                key={step.number}
                className="
                  group
                  relative
                  min-h-[270px]
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

                <span
                  className="
                    block
                    font-heading
                    text-5xl
                    text-[#D4A85A]
                    font-light
                    mb-9
                  "
                >
                  {step.number}
                </span>


                <h3
                  className="
                    font-heading
                    text-2xl
                    font-light
                    mb-4
                  "
                >
                  {step.title}
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
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          DELIVERABLES
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
              "
            >
              What You Get
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


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
              Deliverables You Can Rely On
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
              Clear expectations, professional output and
              carefully prepared project material.
            </p>

          </div>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
              gap-8
              lg:gap-6
            "
          >

            {studentBenefits.map((benefit) => {

              const Icon = benefit.icon;

              return (

                <div
                  key={benefit.title}
                  className="
                    text-center
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      mx-auto
                      rounded-full
                      border
                      border-[#D4A85A]/40
                      flex
                      items-center
                      justify-center
                      text-[#D4A85A]
                      mb-6
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.4}
                    />
                  </div>


                  <h3
                    className="
                      font-heading
                      text-xl
                      md:text-2xl
                      font-light
                      mb-3
                    "
                  >
                    {benefit.title}
                  </h3>


                  <p
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                      text-gray-400
                      leading-relaxed
                    "
                  >
                    {benefit.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          pt-12
          md:pt-16
          pb-24
          md:pb-28
          lg:pb-32
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
              relative
              overflow-hidden
              border
              border-[#D4A85A]/30
              rounded-[28px]
              md:rounded-[36px]
              lg:rounded-[42px]
              px-6
              sm:px-8
              md:px-12
              lg:px-16
              py-14
              md:py-16
              lg:py-20
              bg-gradient-to-br
              from-white/[0.04]
              to-white/[0.01]
            "
          >

            <div
              className="
                relative
                z-10
                grid
                grid-cols-1
                lg:grid-cols-[1fr_auto]
                gap-10
                lg:gap-16
                items-center
              "
            >

              {/* COPY */}

              <div>

                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                    mb-7
                  "
                >
                  Start Your Project
                </p>


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
                  Let's Bring Your
                  <br />
                  Ideas To Life.
                </h2>


                <p
                  className="
                    max-w-2xl
                    font-[var(--font-avenir)]
                    text-sm
                    md:text-base
                    text-gray-400
                    leading-relaxed
                  "
                >
                  Whether you need help with a model,
                  visualisation, drawing package or presentation,
                  tell us what you're working on and what you need.
                </p>

              </div>


              {/* BUTTONS */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  lg:flex-col
                  xl:flex-row
                  gap-4
                "
              >

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
                    bg-[#D4A85A]
                    text-black
                    font-[var(--font-avenir)]
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:scale-[1.02]
                    whitespace-nowrap
                  "
                >
                  WhatsApp Us
                </a>


                <Link
                  href="/consultation"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white/25
                    text-white
                    font-[var(--font-avenir)]
                    text-sm
                    transition-all
                    duration-300
                    hover:border-[#D4A85A]
                    hover:text-[#D4A85A]
                    whitespace-nowrap
                  "
                >
                  Request Support
                </Link>

              </div>

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