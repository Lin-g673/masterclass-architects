"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  House,
  Hotel,
  Landmark,
  GraduationCap,
  HeartPulse,
  Factory,
  Church,
  Blocks,
  Map,
  PencilRuler,
  Lightbulb,
  FileText,
  ScanLine,
  ClipboardCheck,
  HardHat,
  CheckCircle2,
  Ruler,
} from "lucide-react";


/* =====================================================
   PROJECT TYPES
===================================================== */

const projectTypes = [
  {
    number: "01",
    title: "Residential",
    description:
      "Bespoke homes, villas, maisonettes and private residences designed around the site, lifestyle and ambitions of the people who will call them home.",
    icon: House,
  },
  {
    number: "02",
    title: "Apartments & Multi-Residential",
    description:
      "Apartment buildings, rental developments, housing schemes and multi-residential projects balancing quality of life with efficient development.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Commercial & Office",
    description:
      "Workplaces, offices, retail environments and commercial developments shaped around function, identity, customer experience and long-term value.",
    icon: Blocks,
  },
  {
    number: "04",
    title: "Hospitality",
    description:
      "Hotels, resorts, lodges, restaurants and hospitality environments where architecture, experience, landscape and identity work together.",
    icon: Hotel,
  },
  {
    number: "05",
    title: "Mixed-Use",
    description:
      "Integrated developments bringing together residential, commercial, hospitality, retail and other complementary uses within one architectural vision.",
    icon: Landmark,
  },
  {
    number: "06",
    title: "High-Rise",
    description:
      "Larger vertical developments approached through planning, circulation, efficiency, structure, environmental response and a strong urban presence.",
    icon: Building2,
  },
  {
    number: "07",
    title: "Institutional & Educational",
    description:
      "Schools, learning environments, public facilities and institutional buildings designed around people, purpose, movement and community.",
    icon: GraduationCap,
  },
  {
    number: "08",
    title: "Religious & Community",
    description:
      "Churches, places of worship, community centres and gathering spaces designed with dignity, identity, congregation and shared experience in mind.",
    icon: Church,
  },
  {
    number: "09",
    title: "Healthcare",
    description:
      "Healthcare and wellness environments approached through clarity, comfort, accessibility, operational needs and the experience of patients and staff.",
    icon: HeartPulse,
  },
  {
    number: "10",
    title: "Industrial & Specialised",
    description:
      "Industrial, production, workshop and specialised facilities where architecture responds carefully to workflow, performance and technical requirements.",
    icon: Factory,
  },
  {
    number: "11",
    title: "Masterplanning",
    description:
      "Planning larger sites, developments and communities through coordinated land use, movement, landscape, infrastructure and long-term growth.",
    icon: Map,
  },
];


/* =====================================================
   ARCHITECTURAL SERVICES
===================================================== */

const architecturalServices = [
  {
    number: "01",
    title: "Brief & Site Understanding",
    description:
      "We begin by understanding what you want to build, how it should work, your site, priorities, aspirations, programme and project constraints.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "The first architectural ideas take shape through planning, massing, spatial relationships, form, circulation, climate response and overall design direction.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "The selected concept is developed in greater depth as spaces, materials, elevations, structure, building systems and architectural character are resolved.",
    icon: PencilRuler,
  },
  {
    number: "04",
    title: "3D Visualization",
    description:
      "Architectural visualization helps you understand the project before construction and supports informed decisions on form, material, atmosphere and experience.",
    icon: ScanLine,
  },
  {
    number: "05",
    title: "Technical Documentation",
    description:
      "Detailed architectural drawings and documentation communicate the project clearly for coordination, approvals, pricing and construction.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Approvals & Coordination",
    description:
      "We support the architectural approval process and coordinate the design with relevant consultants and project requirements as the project progresses.",
    icon: CheckCircle2,
  },
  {
    number: "07",
    title: "Construction Support",
    description:
      "Architectural involvement can continue into construction through clarification, design coordination, reviews and support in protecting the design intent.",
    icon: HardHat,
  },
];


/* =====================================================
   PROCESS
===================================================== */

const process = [
  {
    number: "01",
    title: "Tell Us What You Want To Build",
    description:
      "You do not need drawings to begin. Bring us your site, requirements, business idea, development ambition or simply the intention to build.",
  },
  {
    number: "02",
    title: "We Study The Opportunity",
    description:
      "We consider the site, context, programme, scale, priorities and project requirements before establishing the right architectural direction.",
  },
  {
    number: "03",
    title: "We Design Together",
    description:
      "The project develops from concept into increasingly resolved architecture through review, discussion, visualization and coordinated design decisions.",
  },
  {
    number: "04",
    title: "We Prepare It To Be Built",
    description:
      "The architecture is translated into the drawings, information and coordination required to move confidently toward approvals and construction.",
  },
];


/* =====================================================
   PAGE
===================================================== */

export default function ArchitecturePage() {
    const [renovationSliderPosition, setRenovationSliderPosition] = useState(50);
const renovationSliderRef = useRef<HTMLDivElement>(null);
const renovationDragging = useRef(false);

const updateRenovationSlider = (clientX: number) => {
  if (!renovationSliderRef.current) return;

  const rect = renovationSliderRef.current.getBoundingClientRect();

  const position =
    ((clientX - rect.left) / rect.width) * 100;

  setRenovationSliderPosition(
    Math.max(0, Math.min(100, position))
  );
};

const startRenovationDragging = () => {
  renovationDragging.current = true;
};

useEffect(() => {
  const handleMouseMove = (event: MouseEvent) => {
    if (!renovationDragging.current) return;

    updateRenovationSlider(event.clientX);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!renovationDragging.current) return;

    updateRenovationSlider(event.touches[0].clientX);
  };

  const stopDragging = () => {
    renovationDragging.current = false;
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", stopDragging);
  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", stopDragging);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", stopDragging);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", stopDragging);
  };
}, []);
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

        <img
          src="/architecture/3d2.png"
          alt="Contemporary apartment architecture by Apiyo Design Studio"
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

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#071321]/96
            via-[#071321]/76
            to-[#071321]/25
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071321]/45
            via-transparent
            to-[#071321]/10
          "
        />

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

            <div className="max-w-5xl">

              <div
                className="
                  flex
                  items-center
                  gap-4
                  mb-7
                  md:mb-8
                "
              >
                <div className="w-8 sm:w-10 h-px bg-[#D4A85A]" />

                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[5px]
                    sm:tracking-[7px]
                    md:tracking-[8px]
                    text-[#D4A85A]
                    text-[9px]
                    md:text-xs
                  "
                >
                  Architectural Design
                </p>

                <div className="w-8 sm:w-10 h-px bg-[#D4A85A]" />
              </div>


              <h1
                className="
                  font-heading
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  font-light
                  leading-[0.98]
                  max-w-5xl
                  mb-7
                  md:mb-8
                "
              >
                <span className="block">
                  Want To Build?
                </span>

                <span className="block mt-2">
                  Start With Architecture.
                </span>
              </h1>


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
                  mb-9
                "
              >
                From private homes and apartments to commercial,
                hospitality, religious, institutional, mixed-use
                and large-scale developments, we transform sites,
                ideas and ambitions into considered architecture.
              </p>


              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  gap-4
                "
              >

                <Link
                  href="/consultation"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-7
                    md:px-9
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
                    hover:scale-[1.02]
                  "
                >
                  Start Your Project
                  <ArrowRight size={17} />
                </Link>


                <p
                  className="
                    font-[var(--font-avenir)]
                    text-xs
                    md:text-sm
                    text-white/55
                    leading-relaxed
                    sm:ml-2
                  "
                >
                  Have land? Have an idea?
                  <br className="hidden sm:block" />
                  Planning a development? Let&apos;s talk.
                </p>

              </div>

            </div>

          </div>

        </div>


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
              tracking-[5px]
              md:tracking-[8px]
              text-[9px]
              md:text-[10px]
              text-[#D4A85A]
              whitespace-nowrap
            "
          >
            Explore Architecture
          </span>

          <div className="w-px h-10 bg-[#D4A85A]" />
        </div>

      </section>



      {/* =====================================================
          OPENING STATEMENT
      ===================================================== */}

      <section className="py-20 md:py-24 lg:py-28">

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
              lg:grid-cols-[0.8fr_1.2fr]
              gap-10
              lg:gap-24
              items-start
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
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[6px]
                    md:tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                  "
                >
                  Full Architectural Services
                </p>

                <div className="hidden sm:block w-10 h-px bg-[#D4A85A]" />
              </div>


              <h2
                className="
                  font-heading
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-light
                  leading-[1.04]
                "
              >
                You Don&apos;t Need
                <br />
                To Arrive With
                <br />
                Drawings.
              </h2>

            </div>


            <div
              className="
                lg:pt-16
                max-w-3xl
              "
            >

              <p
                className="
                  font-heading
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-light
                  leading-[1.25]
                  text-white
                  mb-8
                "
              >
                Bring us the site, the brief, the ambition —
                or simply the idea of what you want to build.
              </p>


              <div
                className="
                  space-y-6
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                "
              >
                <p>
                  Apiyo Design Studio provides architectural
                  design from the earliest conversation through
                  concept development, design resolution,
                  visualization, technical documentation and
                  support toward construction.
                </p>

                <p>
                  Whether you are an individual planning your
                  first home, an investor developing apartments,
                  a company planning commercial premises, a
                  congregation envisioning a church, or a
                  developer considering a larger mixed-use
                  project, the architectural process can begin
                  with us.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          DESIGN ACROSS TYPES + COMMERCIAL IMAGE
      ===================================================== */}

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

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.08fr_0.92fr]
              gap-12
              lg:gap-20
              items-center
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                aspect-[4/3]
                lg:aspect-auto
                lg:min-h-[600px]
              "
            >
              <img
                src="/architecture/commercial.png"
                alt="Commercial architecture by Apiyo Design Studio"
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

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#071321]/45
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  left-6
                  right-6
                  bottom-6
                  md:left-8
                  md:right-8
                  md:bottom-8
                "
              >
                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[4px]
                    text-[9px]
                    text-[#D4A85A]
                    mb-2
                  "
                >
                  Architecture Across Scale
                </p>

                <p
                  className="
                    font-heading
                    text-2xl
                    md:text-3xl
                    font-light
                  "
                >
                  Beyond The Individual Building.
                </p>
              </div>

            </div>


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
                    tracking-[6px]
                    md:tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                  "
                >
                  What Are You Planning?
                </p>

                <div className="hidden sm:block w-10 h-px bg-[#D4A85A]" />
              </div>


              <h2
                className="
                  font-heading
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-light
                  leading-[1.05]
                  mb-7
                "
              >
                Different Buildings.
                <br />
                One Architectural
                <br />
                Approach.
              </h2>


              <p
                className="
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                  mb-8
                  max-w-xl
                "
              >
                Architecture changes with programme, scale,
                context and the people it serves. Our role is
                to understand those differences and develop a
                response specific to each project.
              </p>


              <div
                className="
                  border-l
                  border-[#D4A85A]
                  pl-6
                  py-1
                "
              >
                <p
                  className="
                    font-heading
                    text-2xl
                    md:text-3xl
                    font-light
                    leading-snug
                  "
                >
                  If it needs to be thoughtfully planned,
                  experienced and built, it belongs within
                  the conversation of architecture.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          PROJECT TYPES
      ===================================================== */}

      <section className="py-16 md:py-20 lg:py-24">

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
              max-w-4xl
              mx-auto
              text-center
              mb-14
              md:mb-20
            "
          >

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[6px]
                md:tracking-[8px]
                text-[#D4A85A]
                text-[10px]
                md:text-xs
                mb-6
              "
            >
              Architecture Without A Narrow Brief
            </p>


            <h2
              className="
                font-heading
                text-4xl
                md:text-5xl
                lg:text-7xl
                font-light
                leading-[1.05]
                mb-7
              "
            >
              We Design Across
              <br />
              Building Types.
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
              These are some of the project types we undertake —
              not limits to what we can design. Every new brief
              begins with understanding the opportunity.
            </p>

          </div>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              md:gap-5
            "
          >

            {projectTypes.map((project) => {

              const Icon = project.icon;

              return (
                <div
                  key={project.number}
                  className="
                    group
                    min-h-[330px]
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
                  "
                >

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
                        font-[var(--font-avenir)]
                        text-[10px]
                        tracking-[3px]
                        text-[#D4A85A]
                      "
                    >
                      {project.number}
                    </span>

                    <Icon
                      size={24}
                      strokeWidth={1.25}
                      className="text-[#D4A85A]"
                    />
                  </div>


                  <h3
                    className="
                      font-heading
                      text-2xl
                      md:text-3xl
                      font-light
                      leading-tight
                      mb-5
                    "
                  >
                    {project.title}
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
                    {project.description}
                  </p>

                </div>
              );
            })}

          </div>


          <div
            className="
              mt-10
              md:mt-12
              text-center
            "
          >
            <p
  className="
    font-heading
    text-2xl
    md:text-3xl
    font-light
    text-white/80
  "
>
  Have something different in mind?{" "}

  <Link
    href="/consultation"
    className="
      text-[#D4A85A]
      underline
      underline-offset-8
      decoration-[#D4A85A]/40
      transition-all
      duration-300
      hover:text-white
      hover:decoration-white
    "
  >
    Talk to us.
  </Link>
</p>
          </div>

        </div>

      </section>



      {/* =====================================================
          HOSPITALITY EDITORIAL
      ===================================================== */}

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

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              md:rounded-[32px]
              min-h-[560px]
              md:min-h-[650px]
              lg:min-h-[720px]
            "
          >

            <img
              src="/architecture/hotel.png"
              alt="Hospitality architecture by Apiyo Design Studio"
              draggable={false}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                select-none
                transition-transform
                duration-[1400ms]
                hover:scale-[1.02]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#071321]/92
                via-[#071321]/48
                to-transparent
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#071321]/55
                via-transparent
                to-transparent
              "
            />


            <div
              className="
                relative
                z-10
                min-h-[560px]
                md:min-h-[650px]
                lg:min-h-[720px]
                flex
                items-center
                px-6
                sm:px-8
                md:px-12
                lg:px-16
                py-16
              "
            >

              <div className="max-w-2xl">

                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[6px]
                    md:tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                    mb-7
                  "
                >
                  Architecture As Experience
                </p>


                <h2
                  className="
                    font-heading
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    font-light
                    leading-[1.04]
                    mb-7
                  "
                >
                  More Than
                  <br />
                  A Building.
                </h2>


                <p
                  className="
                    max-w-xl
                    font-[var(--font-avenir)]
                    text-sm
                    md:text-base
                    lg:text-lg
                    text-gray-300
                    leading-relaxed
                  "
                >
                  Whether a hotel, workplace, church, home or
                  urban development, architecture shapes how
                  people arrive, move, gather, work, rest and
                  remember a place. We design with that
                  experience in mind.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          FULL ARCHITECTURAL SERVICE
      ===================================================== */}

      <section className="py-16 md:py-20 lg:py-24">

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
                tracking-[6px]
                md:tracking-[8px]
                text-[#D4A85A]
                text-[10px]
                md:text-xs
              "
            >
              Full Architectural Service
            </p>

            <div className="hidden sm:block w-10 h-px bg-[#D4A85A]" />
          </div>


          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.8fr_1.2fr]
              gap-10
              lg:gap-20
              mb-14
              md:mb-20
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
              "
            >
              From The First Idea
              <br />
              To A Building
              <br />
              Ready To Take Shape.
            </h2>


            <div
              className="
                max-w-2xl
                lg:ml-auto
                lg:pt-4
              "
            >
              <p
                className="
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                  mb-6
                "
              >
                Architectural design is a process of progressively
                turning an ambition into something that can be
                understood, coordinated, approved and ultimately built.
              </p>

              <p
                className="
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                "
              >
                The exact scope is shaped around the project,
                but ADS can support the architectural journey
                across the following stages.
              </p>
            </div>

          </div>


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

            {architecturalServices.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    group
                    min-h-[350px]
                    border
                    border-white/10
                    rounded-2xl
                    p-7
                    md:p-8
                    bg-white/[0.015]
                    transition-all
                    duration-500
                    hover:bg-white
                    hover:text-[#071321]
                    hover:-translate-y-2
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mb-10
                    "
                  >
                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-[10px]
                        tracking-[3px]
                        text-[#D4A85A]
                      "
                    >
                      {item.number}
                    </span>

                    <Icon
                      size={23}
                      strokeWidth={1.25}
                      className="text-[#D4A85A]"
                    />
                  </div>


                  <h3
                    className="
                      font-heading
                      text-2xl
                      md:text-3xl
                      font-light
                      leading-tight
                      mb-5
                    "
                  >
                    {item.title}
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
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          DESIGN PROCESS IMAGE
      ===================================================== */}

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

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.92fr_1.08fr]
              gap-12
              lg:gap-20
              items-center
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
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[6px]
                    md:tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                  "
                >
                  Behind The Architecture
                </p>

                <div className="hidden sm:block w-10 h-px bg-[#D4A85A]" />
              </div>


              <h2
                className="
                  font-heading
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-light
                  leading-[1.05]
                  mb-7
                "
              >
                Every Building
                <br />
                Begins With
                <br />
                A Question.
              </h2>


              <p
                className="
                  max-w-xl
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                  mb-7
                "
              >
                How should this project respond to its site?
                How should people move through it? Where should
                light enter? What should be protected from heat,
                rain or noise? How can the building serve its
                purpose efficiently and still create something
                memorable?
              </p>


              <p
                className="
                  max-w-xl
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-300
                  leading-relaxed
                "
              >
                Sketching, planning, modelling, testing and
                refinement turn those questions into architecture.
              </p>

            </div>


            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                aspect-[4/3]
                lg:min-h-[580px]
                lg:aspect-auto
              "
            >
              <img
                src="/architecture/sketch.png"
                alt="Architectural concept development and sketch process"
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

          </div>

        </div>

      </section>



      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="py-16 md:py-20 lg:py-24">

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
              max-w-4xl
              mx-auto
              text-center
              mb-14
              md:mb-20
            "
          >

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[6px]
                md:tracking-[8px]
                text-[#D4A85A]
                text-[10px]
                md:text-xs
                mb-6
              "
            >
              How It Begins
            </p>


            <h2
              className="
                font-heading
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-light
                leading-[1.05]
                mb-7
              "
            >
              From A Conversation
              <br />
              To Architecture.
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
              You do not need to know every answer before
              contacting us. The purpose of the architectural
              process is to discover and develop them.
            </p>

          </div>


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

            {process.map((item) => (
              <div
                key={item.number}
                className="
                  relative
                  border-t
                  border-white/15
                  pt-8
                  md:pt-10
                  pb-4
                "
              >

                <span
                  className="
                    block
                    font-heading
                    text-5xl
                    md:text-6xl
                    font-light
                    text-[#D4A85A]
                    mb-8
                  "
                >
                  {item.number}
                </span>


                <h3
                  className="
                    font-heading
                    text-2xl
                    md:text-3xl
                    font-light
                    leading-tight
                    mb-5
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    font-[var(--font-avenir)]
                    text-sm
                    text-gray-400
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          LARGE SCALE / HIGH RISE
      ===================================================== */}

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

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.1fr_0.9fr]
              gap-12
              lg:gap-20
              items-stretch
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                aspect-[4/3]
                lg:aspect-auto
                lg:min-h-[650px]
              "
            >
              <img
                src="/architecture/3d1.png"
                alt="Large scale architecture and high rise development"
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


            <div
              className="
                flex
                items-center
              "
            >
              <div className="max-w-xl">

                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[6px]
                    md:tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                    mb-7
                  "
                >
                  From Homes To Larger Developments
                </p>


                <h2
                  className="
                    font-heading
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-light
                    leading-[1.05]
                    mb-7
                  "
                >
                  Scale Changes.
                  <br />
                  Design Still
                  <br />
                  Matters.
                </h2>


                <p
                  className="
                    font-[var(--font-avenir)]
                    text-sm
                    md:text-base
                    text-gray-400
                    leading-relaxed
                    mb-7
                  "
                >
                  Larger developments introduce different
                  questions — density, movement, vertical
                  circulation, public and private space,
                  efficiency, infrastructure, structure and
                  relationship to the wider urban context.
                </p>


                <p
                  className="
                    font-[var(--font-avenir)]
                    text-sm
                    md:text-base
                    text-gray-300
                    leading-relaxed
                  "
                >
                  We approach them with the same principle:
                  understand the problem carefully, then develop
                  architecture appropriate to its scale.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          READY HOUSE DESIGNS BRIDGE
      ===================================================== */}

      <section className="py-16 md:py-20 lg:py-24">

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
              lg:grid-cols-[0.95fr_1.05fr]
              gap-12
              lg:gap-20
              items-center
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
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[6px]
                    md:tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                  "
                >
                  Already Have Your Plot?
                </p>

                <div className="hidden sm:block w-10 h-px bg-[#D4A85A]" />
              </div>


              <h2
                className="
                  font-heading
                  text-2xl
sm:text-3xl
md:text-4xl
lg:text-5xl
                  font-light
                  leading-[1.04]
                  mb-7
                "
              >
                40×60.
                <br />
                50×100.
                <br />
                100×100.
              </h2>


              <p
                className="
                  font-heading
                  text-2xl
                  md:text-3xl
                  font-light
                  text-white
                  leading-snug
                  mb-6
                "
              >
                Your plot may already have a design waiting for it.
              </p>


              <p
                className="
                  max-w-xl
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                  mb-9
                "
              >
                If you already own a residential plot and want
                a faster starting point, explore our collection
                of ready house designs developed for common plot
                sizes and different ways of living. We can help
                you identify a suitable design and discuss how
                it relates to your specific site and requirements.
              </p>


              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                "
              >
                <Link
                  href="/house-plans"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-7
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
                  "
                >
                  Explore House Designs
                  <ArrowRight size={17} />
                </Link>


                <Link
                  href="/consultation"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-7
                    py-4
                    rounded-full
                    border
                    border-white/20
                    text-white
                    font-[var(--font-avenir)]
                    text-sm
                    transition-all
                    duration-300
                    hover:border-[#D4A85A]
                    hover:text-[#D4A85A]
                  "
                >
                  Need A Custom Design?
                </Link>
              </div>

            </div>


            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                aspect-[4/3]
                lg:min-h-[620px]
                lg:aspect-auto
              "
            >
              <img
                src="/architecture/villa.png"
                alt="Bespoke residential villa architecture"
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

          </div>

        </div>

      </section>

{/* =====================================================
    RENOVATION & EXISTING BUILDINGS
===================================================== */}

<section
  className="
    py-16
    md:py-20
    lg:py-24
    bg-[#071321]
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
        md:mb-14
      "
    >
      <div className="h-px w-10 bg-[#D4A85A]" />

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
        Renovation & Existing Buildings
      </p>

      <div className="h-px w-10 bg-[#D4A85A]" />
    </div>


    {/* INTRODUCTION */}

    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-8
        lg:gap-20
        items-end
        mb-12
        md:mb-16
      "
    >

      <div>
        <h2
          className="
            font-heading
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-light
            leading-[1.05]
          "
        >
          Existing Building.
          <br />

          <span className="text-[#D4A85A]">
            New Possibilities.
          </span>
        </h2>
      </div>

      <div>
        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            md:text-base
            text-white/60
            leading-relaxed
            max-w-xl
          "
        >
          Not every architectural project starts from an empty site.
          We work with existing buildings to understand what is there,
          document it accurately, and develop considered interventions
          that improve how the building looks, functions and performs.
        </p>
      </div>

    </div>


    {/* BEFORE / AFTER SLIDER */}

    <div
      ref={renovationSliderRef}
      className="
        relative
        w-full
        aspect-[16/9]
        md:aspect-[2/1]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        select-none
        touch-none
        bg-[#0a1828]
      "
      onMouseDown={startRenovationDragging}
      onTouchStart={startRenovationDragging}
    >

      {/* AFTER IMAGE */}

      <img
        src="/architecture/after.png"
        alt="Renovated architectural project"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
        "
      />


      {/* BEFORE IMAGE */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          overflow-hidden
          pointer-events-none
        "
        style={{
          width: `${renovationSliderPosition}%`,
        }}
      >

        <img
          src="/architecture/before.png"
          alt="Building before architectural renovation"
          draggable={false}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            pointer-events-none
            select-none
          "
          style={{
            width: renovationSliderRef.current
              ? `${renovationSliderRef.current.offsetWidth}px`
              : "100%",
            maxWidth: "none",
          }}
        />

      </div>


      {/* BEFORE LABEL */}

      <div
        className="
          absolute
          top-5
          left-5
          md:top-7
          md:left-7
          px-4
          py-2
          rounded-full
          bg-black/30
          backdrop-blur-md
          border
          border-white/20
          font-[var(--font-avenir)]
          text-[9px]
          uppercase
          tracking-[3px]
          text-white
          pointer-events-none
        "
      >
        Before
      </div>


      {/* AFTER LABEL */}

      <div
        className="
          absolute
          top-5
          right-5
          md:top-7
          md:right-7
          px-4
          py-2
          rounded-full
          bg-black/30
          backdrop-blur-md
          border
          border-white/20
          font-[var(--font-avenir)]
          text-[9px]
          uppercase
          tracking-[3px]
          text-white
          pointer-events-none
        "
      >
        After
      </div>


      {/* DIVIDER */}

      <div
        className="
          absolute
          top-0
          bottom-0
          w-[2px]
          bg-white
          shadow-[0_0_20px_rgba(0,0,0,0.4)]
          cursor-ew-resize
        "
        style={{
          left: `${renovationSliderPosition}%`,
          transform: "translateX(-50%)",
        }}
      >

        {/* DRAG HANDLE */}

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-12
            h-12
            md:w-14
            md:h-14
            rounded-full
            bg-white
            text-[#071321]
            border-2
            border-[#D4A85A]
            shadow-xl
            flex
            items-center
            justify-center
            cursor-ew-resize
          "
        >
          <div
            className="
              flex
              items-center
              gap-1
              text-lg
            "
          >
            <span>‹</span>
            <span>›</span>
          </div>
        </div>

      </div>

    </div>


    {/* DRAG TEXT */}

    <p
      className="
        text-center
        font-[var(--font-avenir)]
        uppercase
        tracking-[3px]
        text-[9px]
        text-white/40
        mt-4
      "
    >
      Drag to compare
    </p>


    {/* SERVICES */}

    <div
      className="
        mt-12
        md:mt-16
        pt-10
        border-t
        border-white/10
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-x-10
        gap-y-8
      "
    >

      {[
        "As-Built Survey & Documentation",
        "Renovation & Alteration Design",
        "Extensions & Additions",
        "Space Replanning",
        "Façade Upgrades",
        "Change of Use",
        "Technical Documentation",
        "Approval & Submission Support",
      ].map((item) => (
        <div
          key={item}
          className="
            flex
            items-start
            gap-3
          "
        >
          <span
            className="
              mt-[9px]
              w-1.5
              h-1.5
              rounded-full
              bg-[#D4A85A]
              shrink-0
            "
          />

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
              text-white/70
              leading-relaxed
            "
          >
            {item}
          </p>
        </div>
      ))}

    </div>


    {/* CTA */}

    <div
      className="
        mt-12
        md:mt-16
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-7
        pt-10
        border-t
        border-white/10
      "
    >

      <div>
        <p
          className="
            font-heading
            text-2xl
            md:text-3xl
            font-light
            text-white
          "
        >
          Planning a renovation?
        </p>

        <p
          className="
            mt-2
            font-[var(--font-avenir)]
            text-sm
            text-white/50
          "
        >
          Let&apos;s understand the existing building and explore
          what it could become.
        </p>
      </div>


      <Link
        href="/consultation"
        className="
          inline-flex
          items-center
          justify-center
          gap-3
          self-start
          md:self-auto
          rounded-full
          bg-[#D4A85A]
          px-7
          py-4
          font-[var(--font-avenir)]
          text-[11px]
          uppercase
          tracking-[2px]
          text-[#071321]
          transition-all
          duration-300
          hover:bg-white
        "
      >
        Discuss Your Project
        <span>→</span>
      </Link>

    </div>

  </div>
</section>

      {/* =====================================================
          FEES / CONSULTATION
      ===================================================== */}

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

          <div
            className="
              border-y
              border-white/10
              py-12
              md:py-16
              grid
              grid-cols-1
              lg:grid-cols-[0.8fr_1.2fr]
              gap-8
              lg:gap-20
              items-center
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <Ruler
                size={23}
                strokeWidth={1.3}
                className="text-[#D4A85A]"
              />

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[5px]
                  text-[#D4A85A]
                  text-[10px]
                  md:text-xs
                "
              >
                Architectural Fees
              </p>
            </div>


            <div>
              <h3
                className="
                  font-heading
                  text-3xl
                  md:text-4xl
                  font-light
                  mb-4
                "
              >
                Every Project Has A Different Brief.
              </h3>

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
                Professional fees are developed around the
                project&apos;s scope, scale, complexity and required
                architectural services. Start with a consultation
                and we can establish the appropriate scope for
                your project.
              </p>
            </div>

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
              border-[#D4A85A]/25
              rounded-[28px]
              md:rounded-[36px]
              lg:rounded-[44px]
              bg-gradient-to-br
              from-white/[0.04]
              to-white/[0.01]
              px-6
              sm:px-8
              md:px-12
              lg:px-16
              py-14
              md:py-16
              lg:py-20
            "
          >

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[1fr_auto]
                gap-10
                lg:gap-16
                items-center
              "
            >

              <div>

                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[6px]
                    md:tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                    mb-7
                  "
                >
                  Your Project Can Start Here
                </p>


                <h2
                  className="
                    font-heading
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    font-light
                    leading-[1.04]
                    mb-6
                  "
                >
                  Have Land?
                  <br />
                  Have An Idea?
                  <br />
                  Let&apos;s Design It.
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
                  A home. Apartments. A hotel. A church.
                  A workplace. A commercial development.
                  A mixed-use project. Something entirely
                  different. Tell us what you want to build
                  and let&apos;s begin the architectural conversation.
                </p>

              </div>


              <Link
                href="/consultation"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-8
                  md:px-10
                  py-4
                  rounded-full
                  bg-[#D4A85A]
                  text-[#071321]
                  font-[var(--font-avenir)]
                  text-sm
                  font-medium
                  whitespace-nowrap
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:scale-[1.02]
                "
              >
                Discuss Your Project
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}