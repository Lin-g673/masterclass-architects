"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  CalendarDays,
  CircleCheck,
  Phone,
} from "lucide-react";


/* =====================================================
   PROJECT DATA
===================================================== */

const projectData = {
  "asembo-catholic-church": {
    title: "Asembo Catholic Church",
    year: "2025",
    status: "Ongoing",
    location: "Asembo",
    type: "Religious Architecture",
    client: "Private / Parish Project",

    hero:
      "/projects/asembo/asembo.jpg",

    gallery: [
      "/projects/asembo/asembo.jpg",
    ],

    description:
      "A contemporary place of worship designed to create a strong spiritual presence while embracing natural light and community gathering spaces.",

    designIntent:
      "The project explores how architecture can support worship through proportion, light, procession and a strong sense of arrival. The church is conceived as both a spiritual landmark and a welcoming gathering place for the surrounding community.",

    highlights: [
      "Strong central worship axis and clear processional approach",
      "Natural daylight used to strengthen the spiritual atmosphere",
      "Covered gathering areas for congregation overflow and community events",
      "Carefully framed entrances that reinforce arrival and transition",
      "Passive ventilation and shaded openings for thermal comfort",
      "Flexible supporting spaces for parish and community activities",
    ],
  },


  "benin-contemporary-maisonette": {
    title: "Benin Contemporary Maisonette",
    year: "2025",
    status: "Ongoing",
    location: "Benin",
    type: "Residential Architecture",
    client: "Private Client",

    hero:
      "/projects/benin/benin.png",

    gallery: [
      "/projects/benin/benin.png",
    ],

    description:
      "A modern family residence combining elegant proportions, clean architectural lines and luxurious contemporary living.",

    designIntent:
      "The maisonette is designed around contemporary family life, balancing openness, privacy and visual connection between key living spaces. The architectural language is restrained, elegant and defined by strong proportions, layered façades and carefully controlled openings.",

    highlights: [
      "Contemporary family-focused planning",
      "Strong balance between privacy and open-plan living",
      "Clean architectural lines and refined massing",
      "Large openings positioned for daylight and selected views",
      "Integrated indoor-outdoor living spaces",
      "Layered façade composition with a modern residential character",
    ],
  },


  "modern-family-bungalow": {
    title: "Modern Family Bungalow",
    year: "",
    status: "Completed",
    location: "",
    type: "Residential Architecture",
    client: "Private Client",

    hero:
      "/projects/bungalow/bungalow.png",

    gallery: [
      "/projects/bungalow/bungalow.png",
    ],

    description:
      "A practical and beautiful bungalow designed around comfort, functionality and seamless indoor-outdoor living.",

    designIntent:
      "The project focuses on efficient family living without compromising architectural quality. Spaces are arranged to create clear circulation, strong natural lighting and a direct relationship between interior living areas and the outdoor environment.",

    highlights: [
      "Efficient single-level family planning",
      "Clear separation between private and shared spaces",
      "Natural daylight throughout principal rooms",
      "Strong indoor-outdoor connection",
      "Simple contemporary architectural language",
      "Practical planning designed for long-term family use",
    ],
  },


  "djibouti-gated-community": {
    title: "Djibouti Gated Community",
    year: "2025",
    status: "Ongoing",
    location: "Djibouti",
    type: "17 Maisonette Units",
    client: "Private Developer",

    hero:
      "/projects/djibouti/djibouti.png",

    gallery: [
      "/projects/djibouti/djibouti.png",
    ],

    description:
      "A contemporary gated residential community comprising seventeen maisonette units designed around privacy, cohesive architectural character and comfortable family living.",

    designIntent:
      "The development creates a unified residential identity while giving each household a clear sense of privacy and ownership. The planning balances efficient land use with comfortable internal spaces, shared infrastructure and a coherent streetscape.",

    highlights: [
      "Seventeen contemporary maisonette units",
      "Unified architectural language across the development",
      "Privacy-focused residential planning",
      "Efficient site planning and circulation",
      "Integrated parking and access strategy",
      "Climate-conscious openings, shading and outdoor spaces",
    ],
  },
};


/* =====================================================
   PROJECT PAGE
===================================================== */

export default function ProjectPage() {
  const params = useParams();

  const slug = params.slug as string;

  const project =
    projectData[
      slug as keyof typeof projectData
    ];


  /* =====================================================
     INVALID PROJECT
  ===================================================== */

  if (!project) {
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

        <div
          className="
            text-center
            px-6
          "
        >

          <h1
            className="
              font-heading
              text-4xl
              md:text-5xl
              font-light
              mb-6
            "
          >
            Project Not Found
          </h1>

          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-3
              text-[#D4A85A]
              font-[var(--font-avenir)]
              text-sm
            "
          >
            <ArrowLeft size={16} />
            Return To Projects
          </Link>

        </div>

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


      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}

      <section
        className="
          pt-36
          md:pt-40
          lg:pt-44
          pb-12
          md:pb-16
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

          {/* BACK */}

          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-3
              mb-10
              font-[var(--font-avenir)]
              text-[10px]
              md:text-xs
              uppercase
              tracking-[4px]
              text-gray-400
              hover:text-[#D4A85A]
              transition-colors
              duration-300
            "
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
            />

            All Projects
          </Link>


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
              Project Showcase
            </p>

            <div
              className="
                w-10
                h-px
                bg-[#D4A85A]
              "
            />

          </div>


          {/* TITLE + META */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.15fr_0.85fr]
              gap-8
              lg:gap-20
              items-end
            "
          >

            <h1
              className="
                font-heading
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-light
                leading-[1.02]
                max-w-5xl
              "
            >
              {project.title}
            </h1>


            <div
              className="
                flex
                flex-wrap
                gap-x-6
                gap-y-4
                lg:justify-end
                lg:pb-2
              "
            >

              {project.location && (

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                  "
                >
                  <MapPin
                    size={16}
                    className="text-[#D4A85A]"
                  />

                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                    "
                  >
                    {project.location}
                  </span>
                </div>

              )}


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-gray-400
                "
              >
                <Building2
                  size={16}
                  className="text-[#D4A85A]"
                />

                <span
                  className="
                    font-[var(--font-avenir)]
                    text-sm
                  "
                >
                  {project.type}
                </span>
              </div>


              {project.year && (

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                  "
                >
                  <CalendarDays
                    size={16}
                    className="text-[#D4A85A]"
                  />

                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                    "
                  >
                    {project.year}
                  </span>
                </div>

              )}

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <section
        className="
          pb-20
          md:pb-24
          lg:pb-28
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
              rounded-[24px]
              md:rounded-[30px]
              aspect-[4/3]
              md:aspect-[16/9]
              lg:aspect-[2/1]
            "
          >

            <img
              src={project.hero}
              alt={project.title}
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

          </div>

        </div>

      </section>



      {/* =====================================================
          FUTURE PROJECT COLLAGE
      ===================================================== */}

      {project.gallery.length > 1 && (

        <section
          className="
            pb-20
            md:pb-24
            lg:pb-28
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
                md:grid-cols-2
                gap-4
                md:gap-5
              "
            >

              {project.gallery.map(
                (image, index) => (

                  <div
                    key={image}
                    className={`
                      relative
                      overflow-hidden
                      rounded-2xl
                      bg-[#0a1828]

                      ${
                        index % 3 === 0
                          ? "aspect-[3/2]"
                          : index % 3 === 1
                          ? "aspect-[2/3]"
                          : "aspect-[3/2]"
                      }
                    `}
                  >

                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
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

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          ABOUT PROJECT
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
              lg:grid-cols-[1.15fr_0.85fr]
              gap-12
              lg:gap-24
              items-start
            "
          >

            {/* =================================================
                LEFT
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

                <div
                  className="
                    w-10
                    h-px
                    bg-[#D4A85A]
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
                  "
                >
                  About This Project
                </p>

                <div
                  className="
                    w-10
                    h-px
                    bg-[#D4A85A]
                  "
                />

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
                The Project
              </h2>


              <p
                className="
                  max-w-3xl
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                  mb-12
                "
              >
                {project.description}
              </p>


              {/* DESIGN INTENT */}

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[6px]
                  text-[#D4A85A]
                  text-[10px]
                  md:text-xs
                  mb-5
                "
              >
                Design Intent
              </p>


              <p
                className="
                  max-w-3xl
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                  mb-12
                "
              >
                {project.designIntent}
              </p>


              {/* HIGHLIGHTS */}

              <h3
                className="
                  font-heading
                  text-3xl
                  md:text-4xl
                  font-light
                  mb-7
                "
              >
                Project Highlights
              </h3>


              <div
                className="
                  space-y-4
                "
              >

                {project.highlights.map(
                  (highlight) => (

                    <div
                      key={highlight}
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >

                      <CircleCheck
                        size={18}
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
                          text-sm
                          md:text-base
                          text-gray-300
                          leading-relaxed
                        "
                      >
                        {highlight}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>



            {/* =================================================
                RIGHT — DETAILS
            ================================================= */}

            <div
              className="
                lg:sticky
                lg:top-32
              "
            >

              <div
                className="
                  border
                  border-white/10
                  rounded-[24px]
                  md:rounded-[28px]
                  overflow-hidden
                  bg-white/[0.02]
                "
              >

                {/* TITLE */}

                <div
                  className="
                    px-6
                    md:px-8
                    py-6
                    border-b
                    border-white/10
                  "
                >

                  <p
                    className="
                      font-[var(--font-avenir)]
                      uppercase
                      tracking-[5px]
                      text-[#D4A85A]
                      text-[10px]
                    "
                  >
                    Project Details
                  </p>

                </div>


                {/* LOCATION */}

                {project.location && (

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-6
                      px-6
                      md:px-8
                      py-5
                      border-b
                      border-white/10
                    "
                  >

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-sm
                        text-gray-500
                      "
                    >
                      Location
                    </span>

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-sm
                        text-white
                        text-right
                      "
                    >
                      {project.location}
                    </span>

                  </div>

                )}


                {/* CLIENT */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-6
                    px-6
                    md:px-8
                    py-5
                    border-b
                    border-white/10
                  "
                >

                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                      text-gray-500
                    "
                  >
                    Client
                  </span>

                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                      text-white
                      text-right
                    "
                  >
                    {project.client}
                  </span>

                </div>


                {/* YEAR */}

                {project.year && (

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-6
                      px-6
                      md:px-8
                      py-5
                      border-b
                      border-white/10
                    "
                  >

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-sm
                        text-gray-500
                      "
                    >
                      Year
                    </span>

                    <span
                      className="
                        font-[var(--font-avenir)]
                        text-sm
                        text-white
                      "
                    >
                      {project.year}
                    </span>

                  </div>

                )}


                {/* TYPE */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-6
                    px-6
                    md:px-8
                    py-5
                    border-b
                    border-white/10
                  "
                >

                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                      text-gray-500
                    "
                  >
                    Project Type
                  </span>

                  <span
                    className="
                      max-w-[220px]
                      font-[var(--font-avenir)]
                      text-sm
                      text-white
                      text-right
                    "
                  >
                    {project.type}
                  </span>

                </div>


                {/* STATUS */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-6
                    px-6
                    md:px-8
                    py-5
                  "
                >

                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                      text-gray-500
                    "
                  >
                    Status
                  </span>


                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      font-[var(--font-avenir)]
                      text-sm

                      ${
                        project.status ===
                        "Completed"
                          ? "text-[#D4A85A]"
                          : "text-white"
                      }
                    `}
                  >

                    {project.status ===
                      "Completed" && (
                      <CircleCheck size={15} />
                    )}

                    {project.status}

                  </span>

                </div>

              </div>



              {/* =================================================
                  NEED A SIMILAR PROJECT
              ================================================= */}

              <div
                className="
                  mt-5
                  rounded-[24px]
                  md:rounded-[28px]
                  border
                  border-[#D4A85A]/25
                  bg-[#D4A85A]/[0.05]
                  p-6
                  md:p-8
                "
              >

                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[5px]
                    text-[#D4A85A]
                    text-[10px]
                    mb-5
                  "
                >
                  Need A Similar Project?
                </p>


                <h3
                  className="
                    font-heading
                    text-3xl
                    font-light
                    leading-[1.1]
                    mb-4
                  "
                >
                  Let's Discuss Your Project.
                </h3>


                <p
                  className="
                    font-[var(--font-avenir)]
                    text-sm
                    text-gray-400
                    leading-relaxed
                    mb-8
                  "
                >
                  Contact us to discuss your
                  architectural or design project
                  and receive guidance on the
                  next steps.
                </p>


                <div
                  className="
                    flex
                    flex-col
                    gap-3
                  "
                >

                  {/* CALL */}

                  <a
                    href="tel:+254754525407"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      w-full
                      px-6
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
                    "
                  >

                    <Phone
                      size={16}
                      strokeWidth={1.5}
                    />

                    Call: 0754 525 407

                  </a>


                  {/* GET QUOTE */}

                  <Link
                    href="/consultation"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      w-full
                      px-6
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
                    Get Quote

                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                    />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          NEXT PROJECT CTA
      ===================================================== */}

      <section
        className="
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
              border-t
              border-white/10
              pt-14
              md:pt-16
              text-center
            "
          >

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[8px]
                text-[#D4A85A]
                text-[10px]
                md:text-xs
                mb-6
              "
            >
              Explore More
            </p>


            <h2
              className="
                font-heading
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-light
                mb-8
              "
            >
              Discover More Projects
            </h2>


            <Link
              href="/projects"
              className="
                inline-flex
                items-center
                gap-3
                font-[var(--font-avenir)]
                text-sm
                text-[#D4A85A]
                uppercase
                tracking-[3px]
                transition-all
                duration-300
                hover:gap-5
              "
            >
              View All Projects

              <ArrowRight
                size={16}
                strokeWidth={1.5}
              />

            </Link>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}