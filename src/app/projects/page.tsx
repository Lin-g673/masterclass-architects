import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Link from "next/link";

import {
  ArrowRight,
  MapPin,
  Building2,
  CalendarDays,
} from "lucide-react";


/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [
  {
    slug: "asembo-catholic-church",
    title: "Asembo Catholic Church",
    year: "2025",
    status: "Ongoing",
    location: "Asembo",
    type: "Religious Architecture",
    image:
      "/projects/asembo/asembo.jpg",
    description:
      "A contemporary place of worship designed to create a strong spiritual presence while embracing natural light and community gathering spaces.",
  },

  {
    slug: "benin-contemporary-maisonette",
    title: "Benin Contemporary Maisonette",
    year: "2025",
    status: "Ongoing",
    location: "Benin",
    type: "Residential Architecture",
    image:
      "/projects/benin/benin.png",
    description:
      "A modern family residence combining elegant proportions, clean architectural lines and luxurious contemporary living.",
  },

  {
    slug: "modern-family-bungalow",
    title: "Modern Family Bungalow",
    year: "",
    status: "Completed",
    location: "",
    type: "Residential Architecture",
    image:
      "/projects/bungalow/bungalow.png",
    description:
      "A practical and beautiful bungalow designed around comfort, functionality and seamless indoor-outdoor living.",
  },

  {
    slug: "djibouti-gated-community",
    title: "Djibouti Gated Community",
    year: "2025",
    status: "Ongoing",
    location: "Djibouti",
    type: "17 Maisonette Units",
    image:
      "/projects/djibouti/djibouti.png",
    description:
      "A contemporary gated residential community comprising seventeen maisonette units designed around privacy, cohesive architectural character and comfortable family living.",
  },
];


/* =====================================================
   PROJECTS PAGE
===================================================== */

export default function ProjectsPage() {
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
    PROJECTS HERO
===================================================== */}

<section
  className="
    relative
    min-h-[80vh]
    lg:min-h-screen
    overflow-hidden
    flex
    items-center
  "
>

  {/* HERO IMAGE */}

  <img
    src="/projects/projecthero.png"
    alt="Apiyo Design Studio selected architectural projects"
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


  {/* DARK OVERLAY */}

  <div
    className="
      absolute
      inset-0
      bg-[#071321]/25
    "
  />


  {/* LEFT GRADIENT FOR TEXT LEGIBILITY */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#071321]/95
      via-[#071321]/70
      to-[#071321]/10
    "
  />


  {/* SUBTLE BOTTOM GRADIENT */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#071321]/65
      via-transparent
      to-[#071321]/15
    "
  />


  {/* =====================================================
      HERO CONTENT
  ===================================================== */}

  <div
    className="
      relative
      z-10
      w-full
      max-w-[1500px]
      mx-auto

      px-5
      sm:px-6
      md:px-8
      lg:px-10
      xl:px-12

      pt-32
      md:pt-36
      lg:pt-40

      pb-20
      md:pb-24
    "
  >

    <div
      className="
        max-w-5xl
      "
    >

      {/* EYEBROW */}

      <div
        className="
          flex
          items-center
          gap-4
          mb-8
          md:mb-10
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
            tracking-[6px]
            md:tracking-[8px]
            text-[#D4A85A]
            text-[10px]
            md:text-xs
            whitespace-nowrap
          "
        >
          Selected Projects
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


      {/* MAIN HEADING */}

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
        "
      >
        Architecture
        <br />

        <span
          className="
            inline-block
            mt-2
            md:mt-3
          "
        >
          Designed With Purpose.
        </span>

      </h1>


      {/* GOLD LINE */}

      <div
        className="
          w-20
          md:w-28
          h-px
          bg-[#D4A85A]
          mt-8
          md:mt-10
        "
      />


      {/* DESCRIPTION */}

      <p
        className="
          mt-7
          md:mt-8

          max-w-2xl

          font-[var(--font-avenir)]

          text-sm
          sm:text-base
          md:text-lg

          font-light
          text-gray-300
          leading-relaxed
        "
      >
        A selection of residential, community and
        architectural projects shaped by thoughtful
        planning, strong design intent and a commitment
        to creating spaces that serve people well.
      </p>


      {/* SCROLL INDICATOR */}

      <a
        href="#projects"
        className="
          inline-flex
          items-center
          gap-4

          mt-10
          md:mt-12

          font-[var(--font-avenir)]
          uppercase
          tracking-[4px]

          text-[9px]
          md:text-[10px]

          text-white/60

          transition-colors
          duration-300

          hover:text-[#D4A85A]
        "
      >
        Explore Projects

        <span
          className="
            text-[#D4A85A]
            text-base
          "
        >
          ↓
        </span>

      </a>

    </div>

  </div>


  {/* BOTTOM FADE INTO PROJECTS PAGE */}

  <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      h-24
      md:h-32

      bg-gradient-to-t
      from-[#071321]
      to-transparent

      pointer-events-none
    "
  />

</section>



      {/* =====================================================
          PROJECT INDEX
      ===================================================== */}

      <section
      id="projects"
        className="
          pb-24
          md:pb-28
          lg:pb-36
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

          {/* SECTION HEADING */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-12
              md:mb-16
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
              Explore Our Work
            </p>

            <div
              className="
                w-10
                h-px
                bg-[#D4A85A]
              "
            />

          </div>


          {/* =====================================================
              PROJECT GRID
          ===================================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
              lg:gap-8
            "
          >

            {projects.map((project) => (

              <article
                key={project.slug}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  md:rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.02]
                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-r-[#D4A85A]/60
                  hover:border-b-[#D4A85A]/60
                  hover:shadow-[12px_14px_35px_rgba(0,0,0,0.28)]
                "
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
  className="
    relative
    w-full
    h-[280px]
    sm:h-[320px]
    md:h-[360px]
    lg:h-[390px]
    overflow-hidden
  "
>
  <img
    src={project.image}
    alt={project.title}
    draggable={false}
    className="
      block
      w-full
      h-full
      object-cover
      select-none
      transition-transform
      duration-[1000ms]
      ease-out
      group-hover:scale-[1.035]h
                    "
                  />


                  {/* IMAGE OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#071321]/45
                      via-transparent
                      to-transparent
                    "
                  />


                  {/* STATUS */}

                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      flex
                      items-center
                      gap-3
                    "
                  >

                    {project.year && (
                      <span
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-[#071321]/80
                          backdrop-blur-md
                          border
                          border-white/10
                          font-[var(--font-avenir)]
                          text-[9px]
                          uppercase
                          tracking-[2px]
                          text-white
                        "
                      >
                        {project.year}
                      </span>
                    )}


                    <span
                      className={`
                        px-4
                        py-2
                        rounded-full
                        backdrop-blur-md
                        border
                        font-[var(--font-avenir)]
                        text-[9px]
                        uppercase
                        tracking-[2px]

                        ${
                          project.status === "Completed"
                            ? "bg-[#D4A85A] text-black border-[#D4A85A]"
                            : "bg-[#071321]/80 text-[#D4A85A] border-[#D4A85A]/30"
                        }
                      `}
                    >
                      {project.status}
                    </span>

                  </div>

                </div>


                {/* =================================================
                    PROJECT INFORMATION
                ================================================= */}

                <div
                  className="
                    p-6
                    sm:p-7
                    md:p-8
                    lg:p-9
                  "
                >

                  {/* PROJECT LABEL */}

                  <p
                    className="
                      font-[var(--font-avenir)]
                      uppercase
                      tracking-[5px]
                      text-[#D4A85A]
                      text-[9px]
                      md:text-[10px]
                      mb-4
                    "
                  >
                    Project
                  </p>


                  {/* TITLE */}

                  <h2
                    className="
                      font-heading
                      text-3xl
                      md:text-4xl
                      font-light
                      leading-[1.05]
                      mb-5
                    "
                  >
                    {project.title}
                  </h2>


                  {/* META */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-6
                      gap-y-3
                      mb-6
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
                          size={15}
                          strokeWidth={1.5}
                          className="text-[#D4A85A]"
                        />

                        <span
                          className="
                            font-[var(--font-avenir)]
                            text-xs
                            md:text-sm
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
                        size={15}
                        strokeWidth={1.5}
                        className="text-[#D4A85A]"
                      />

                      <span
                        className="
                          font-[var(--font-avenir)]
                          text-xs
                          md:text-sm
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
                          size={15}
                          strokeWidth={1.5}
                          className="text-[#D4A85A]"
                        />

                        <span
                          className="
                            font-[var(--font-avenir)]
                            text-xs
                            md:text-sm
                          "
                        >
                          {project.year}
                        </span>

                      </div>

                    )}

                  </div>


                  {/* DESCRIPTION */}

                  <p
                    className="
                      max-w-2xl
                      font-[var(--font-avenir)]
                      text-sm
                      md:text-base
                      text-gray-400
                      leading-relaxed
                      mb-8
                    "
                  >
                    {project.description}
                  </p>


                  {/* LINK */}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      font-[var(--font-avenir)]
                      text-xs
                      uppercase
                      tracking-[3px]
                      text-[#D4A85A]
                      transition-all
                      duration-300

                      group-hover:gap-5
                    "
                  >
                    View Project

                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                    />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          PROJECT CTA
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
                  Have A Project In Mind?
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
                  Let's Design
                  <br />
                  Something Meaningful.
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
                  Tell us about your site, project requirements
                  and vision. We will help you determine the
                  right architectural approach and next steps.
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
                  href="tel:+254754525407"
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
                    whitespace-nowrap
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:scale-[1.02]
                  "
                >
                  Call: 0754 525 407
                </a>


                <Link
                  href="/consultation"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white/25
                    text-white
                    font-[var(--font-avenir)]
                    text-sm
                    whitespace-nowrap
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

      </section>



      <Footer />

    </main>
  );
}