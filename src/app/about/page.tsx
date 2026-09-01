"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Link from "next/link";

import {
  HeartHandshake,
  Users,
  Leaf,
  ShieldCheck,
  Fingerprint,
  Sun,
  Wind,
  Droplets,
  Trees,
  ArrowRight,
  Quote,
} from "lucide-react";


/* =====================================================
   CORE PILLARS
===================================================== */

const pillars = [
  {
    number: "01",
    title: "Dignity",
    subtitle: "Design For The Person First.",
    description:
      "We believe good architecture should improve everyday life regardless of status, income or project scale. Comfort, safety, privacy, accessibility and beauty should never be privileges reserved for a few.",
    icon: Users,
  },

  {
    number: "02",
    title: "Service",
    subtitle: "Architecture With Purpose Beyond Itself.",
    description:
      "Architecture should serve the people who inhabit it, the communities around it and the generations that follow. We measure the value of architecture by what it contributes to life.",
    icon: HeartHandshake,
  },

  {
    number: "03",
    title: "Responsibility",
    subtitle: "Build With Tomorrow In Mind.",
    description:
      "We design with an awareness of climate, resources and future generations. Passive strategies, responsible materials, water, energy, adaptability and durability are considered from the beginning.",
    icon: Leaf,
  },

  {
    number: "04",
    title: "Resilience",
    subtitle: "Design For When Architecture Is Needed Most.",
    description:
      "We believe architecture can help communities prepare for, withstand and recover from difficult circumstances including flooding, drought, displacement, inadequate housing and humanitarian crises.",
    icon: ShieldCheck,
  },

  {
    number: "05",
    title: "Identity",
    subtitle: "Architecture With A Point Of View.",
    description:
      "Every project should respond to its place while carrying the thinking of the studio that created it. Our ambition is to develop architecture that is purposeful, recognisable and distinctly ours.",
    icon: Fingerprint,
  },
];


/* =====================================================
   APIYO FRAMEWORK
===================================================== */

const apiyoFramework = [
  {
    letter: "A",
    title: "Architecture",
    description:
      "As an instrument of positive change.",
  },

  {
    letter: "P",
    title: "People",
    description:
      "At the centre of every decision.",
  },

  {
    letter: "I",
    title: "Impact",
    description:
      "Measured beyond the building.",
  },

  {
    letter: "Y",
    title: "Years Ahead",
    description:
      "Designing responsibly for generations to come.",
  },

  {
    letter: "O",
    title: "Opportunity",
    description:
      "To leave every place better than we found it.",
  },
];


/* =====================================================
   PASSIVE PRINCIPLES
===================================================== */

const passivePrinciples = [
  {
    title: "Light",
    icon: Sun,
  },
  {
    title: "Air",
    icon: Wind,
  },
  {
    title: "Water",
    icon: Droplets,
  },
  {
    title: "Landscape",
    icon: Trees,
  },
];


/* =====================================================
   PAGE
===================================================== */

export default function AboutPage() {
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
          src="/about/abouthero.png"
          alt="Apiyo Design Studio"
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
            bg-gradient-to-r
            from-[#071321]/95
            via-[#071321]/76
            to-[#071321]/30
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

            <div className="max-w-5xl">

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
                    tracking-[8px]
                    text-[#D4A85A]
                    text-[10px]
                    md:text-xs
                    whitespace-nowrap
                  "
                >
                  About Apiyo Design Studio
                </p>

                <div className="w-10 h-px bg-[#D4A85A]" />

              </div>


              {/* MAIN HEADING */}

              <h1
                className="
                  font-heading
                  text-4xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  font-light
                  leading-[1.03]
                  max-w-5xl
                  mb-8
                "
              >
                <span className="block">
  Designing What Matters.
</span>

<span className="block mt-2">
  Building What Lasts.
</span>
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
                "
              >
                We believe architecture carries a responsibility
                beyond appearance — to people, place, climate
                and the generations that follow.
              </p>

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
            Our Story
          </span>

          <div className="w-px h-10 bg-[#D4A85A]" />

        </div>

      </section>



      {/* =====================================================
          PURPOSE
      ===================================================== */}

      <section
        className="
          py-20
          md:py-24
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
              Our Purpose
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


          {/* CENTER STATEMENT */}

          <div
            className="
              max-w-5xl
              mx-auto
              text-center
            "
          >

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[5px]
                text-[#D4A85A]
                text-[10px]
                md:text-xs
                mb-6
              "
            >
              Design In Service Of Life
            </p>


            <h2
              className="
                font-heading
                text-4xl
                md:text-5xl
                lg:text-7xl
                font-light
                leading-[1.05]
                mb-8
              "
            >
              Architecture
                                               
              Of Dignity.
            </h2>


            <p
              className="
                max-w-3xl
                mx-auto
                font-[var(--font-avenir)]
                text-base
                md:text-lg
                text-gray-400
                leading-relaxed
              "
            >
              At Apiyo Design Studio, architecture is not simply
              the creation of buildings. It is the shaping of
              environments in which people live, work, gather,
              grow and build their futures.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          ORIGIN STORY
      ===================================================== */}

      <section
        className="
          py-20
          md:py-24
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
{/* IMAGE */}

<div
  className="
    relative
    overflow-hidden
    rounded-2xl

    aspect-[4/3]

    lg:aspect-auto
    lg:h-full
    lg:min-h-0
  "
>
  <img
    src="/about/origin.png"
    alt="The origin of Apiyo Design Studio"
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


            {/* STORY */}

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
                  Where The Purpose Began
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
                  mb-7
                "
              >
                Architecture Became
                A Way To Serve.
              </h2>


              <div
                className="
                  space-y-6
                  max-w-2xl
                  font-[var(--font-avenir)]
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-relaxed
                "
              >

                <p>
                  Growing up in Kibera made the relationship
                  between people and the built environment
                  impossible to ignore.
                </p>

                <p>
                  Housing, sanitation, infrastructure and access
                  to dignified spaces were not abstract design
                  discussions. They directly influenced health,
                  opportunity, safety and the experience of
                  everyday life.
                </p>

                <p>
                  Architecture therefore became more than a
                  profession. It became an opportunity to
                  participate in creating a better future.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          THE NAME — APIYO
      ===================================================== */}

      <section
        className="
    py-14
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
              More Than A Name
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.8fr_1.2fr]
              gap-12
              lg:gap-24
            "
          >

            {/* LEFT STATEMENT */}

            <div>

              <h2
                className="
                  font-heading
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-light
                  leading-[1.05]
                "
              >
                Apiyo Is Our Name.
                <br />
                But It Is Also
                <br />
                Our Inheritance.
              </h2>

            </div>


            {/* RIGHT STORY */}

            <div
              className="
                space-y-6
                font-[var(--font-avenir)]
                text-sm
                md:text-base
                lg:text-lg
                text-gray-400
                leading-relaxed
              "
            >

              <p>
                Across generations, the name has been associated
                within our family with service — the belief that
                progress means little unless it contributes to
                the lives of others.
              </p>


              <p>
                That principle took different forms across
                generations. Through community development,
                empowerment, better sanitation and improved
                living conditions, the generation before us
                demonstrated that meaningful change begins by
                serving people.
              </p>


              <p>
                For our founder, growing up in Kibera made the
                relationship between people and the built
                environment deeply personal. Housing was not
                simply architecture. The quality of one's
                surroundings could influence health, dignity,
                opportunity and the experience of everyday life.
              </p>


              <p>
                Architecture became a way of continuing that
                legacy.
              </p>


              <p
                className="
                  text-white
                  text-base
                  md:text-lg
                "
              >
                Apiyo Design Studio therefore carries the name
                not simply because it belongs to its founder,
                but because of what it represents: service,
                responsibility and the belief that the work we
                leave behind should make the world, in however
                small a way, better.
              </p>


              <p>
                That responsibility extends especially to moments
                when good design matters most — to communities
                facing inadequate housing, environmental change,
                displacement and disaster. We believe architecture
                can help create places that protect, adapt and
                restore dignity, even in the most difficult
                circumstances.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          APIYO FRAMEWORK
      ===================================================== */}

      <section
        className="
    py-14
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

          {/* TITLE */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-12
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
              The Name Today
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


          <div
            className="
              max-w-4xl
              mx-auto
              text-center
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
                mb-6
              "
            >
              A Name Inherited.
              <br />
              A Purpose Continued.
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
              Today, the values carried by the Apiyo name
              are expressed through five ideas.
            </p>

          </div>


          {/* APIYO LETTERS */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
              border-t
              border-b
              border-white/10
            "
          >

            {apiyoFramework.map((item, index) => (

              <div
                key={item.letter}
                className={`
                  group
                  py-10
                  md:py-12
                  px-6
                  text-center
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-[#071321]

                  ${
                    index < apiyoFramework.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : ""
                  }
                `}
              >

                <span
                  className="
                    block
                    font-heading
                    text-7xl
                    md:text-8xl
                    font-light
                    text-[#D4A85A]
                    mb-5
                  "
                >
                  {item.letter}
                </span>


                <h3
                  className="
                    font-heading
                    text-2xl
                    md:text-3xl
                    font-light
                    mb-4
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

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          FIVE PILLARS
      ===================================================== */}

      <section
        className="
    py-14
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
              What Guides Our Work
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


          <div
            className="
              max-w-4xl
              mx-auto
              text-center
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
                mb-6
              "
            >
              Five Principles.
              <br />
              One Responsibility.
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
              These principles guide how we think about
              architecture, how we make decisions and what
              we hope every Apiyo project contributes.
            </p>

          </div>


          {/* PILLARS */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-5
              gap-4
              md:gap-5
            "
          >

            {pillars.map((pillar) => {

              const Icon = pillar.icon;

              return (

                <div
                  key={pillar.number}
                  className="
                    group
                    min-h-[430px]
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
                      {pillar.number}
                    </span>


                    <Icon
                      size={24}
                      strokeWidth={1.3}
                      className="text-[#D4A85A]"
                    />

                  </div>


                  <h3
                    className="
                      font-heading
                      text-3xl
                      font-light
                      mb-3
                    "
                  >
                    {pillar.title}
                  </h3>


                  <p
                    className="
                      font-[var(--font-avenir)]
                      uppercase
                      tracking-[2px]
                      text-[9px]
                      text-[#D4A85A]
                      leading-relaxed
                      mb-6
                    "
                  >
                    {pillar.subtitle}
                  </p>


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
                    {pillar.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          RESPONSIBLE / PASSIVE DESIGN
      ===================================================== */}

      <section
        className="
    py-14
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

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.05fr_0.95fr]
              gap-12
              lg:gap-20
              items-center
            "
          >

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
                  Designing Responsibly
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
                  mb-7
                "
              >
                Let Architecture
                Do The Work First.
              </h2>


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
                We believe the most sustainable building
                systems begin with architecture itself.
                Before relying on technology, we design
                for orientation, shade, daylight, natural
                ventilation, water, landscape and material
                efficiency.
              </p>


              <div
                className="
                  grid
                  grid-cols-2
                  gap-4
                "
              >

                {passivePrinciples.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="
                        flex
                        items-center
                        gap-4
                        border
                        border-white/10
                        rounded-xl
                        px-5
                        py-5
                      "
                    >

                      <Icon
                        size={20}
                        strokeWidth={1.4}
                        className="
                          text-[#D4A85A]
                          flex-shrink-0
                        "
                      />

                      <span
                        className="
                          font-[var(--font-avenir)]
                          text-sm
                          text-gray-300
                        "
                      >
                        {item.title}
                      </span>

                    </div>

                  );

                })}

              </div>

            </div>


            {/* IMAGE */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                aspect-[4/3]
              "
            >

              <img
                src="/about/legacy.png"
                alt="Climate responsive architecture"
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
    RESILIENCE / HUMANITARIAN ARCHITECTURE
===================================================== */}

<section
  className="
    py-14
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

    {/* =====================================================
        EYEBROW — LEFT ALIGNED
    ===================================================== */}

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
    tracking-[4px]
    sm:tracking-[6px]
    md:tracking-[8px]
    text-[#D4A85A]
    text-[9px]
    md:text-xs
    leading-relaxed
    text-center
    sm:text-left
  "
>
  Architecture In Service Of Humanity
</p>
      <div className="w-10 h-px bg-[#D4A85A]" />

    </div>


    {/* =====================================================
        IMAGE + CONTENT
    ===================================================== */}

    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-[1.05fr_0.95fr]
        gap-12
        lg:gap-20
        items-stretch
      "
    >

      {/* =====================================================
          LEFT — IMAGE
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-2xl

          aspect-[4/3]

          lg:aspect-auto
          lg:h-full
          lg:min-h-[480px]
        "
      >

        <img
          src="/about/resilient.png"
          alt="Flood resilient housing designed for communities"
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
            from-[#071321]/20
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

      </div>


      {/* =====================================================
          RIGHT — CONTENT
      ===================================================== */}

      <div
        className="
          flex
          items-center
        "
      >

        <div className="max-w-2xl">

          {/* SMALL LABEL */}

          <p
            className="
              font-[var(--font-avenir)]
              uppercase
              tracking-[7px]
              text-[#D4A85A]
              text-[10px]
              md:text-xs
              mb-7
            "
          >
            Resilience
          </p>


          {/* HEADING */}

          <h2
  className="
    font-heading
    text-4xl
    md:text-5xl
    lg:text-6xl
    font-light
    leading-[1.18]
    md:leading-[1.1]
    lg:leading-[1.05]
    mb-7
  "
>
            Dignity Should Not
            <br className="hidden sm:block" />
            Disappear When
            <br className="hidden sm:block" />
            Disaster Strikes.
          </h2>


          {/* MAIN DESCRIPTION */}

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
              md:text-base
              text-gray-300
              leading-relaxed
              mb-7
            "
          >
            We believe architecture can contribute to how
            communities prepare for, withstand and recover
            from crisis. Our long-term ambition includes
            research and design solutions for flooding,
            drought, displacement, climate pressure,
            inadequate housing and humanitarian emergencies.
          </p>


          {/* SECOND DESCRIPTION */}

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
              md:text-base
              text-gray-400
              leading-relaxed
            "
          >
            Adaptable shelter, resilient housing, passive
            environmental design, modular construction,
            sanitation, water-conscious settlements and
            community infrastructure can all become
            instruments of service.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>



      {/* =====================================================
          THE FUTURE / SIGNATURE ARCHITECTURE
      ===================================================== */}

      <section
        className="
    py-14
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
              The Architecture We Seek
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


          <div
            className="
              max-w-5xl
              mx-auto
              text-center
            "
          >

            <Quote
              size={36}
              strokeWidth={1}
              className="
                text-[#D4A85A]
                mx-auto
                mb-8
              "
            />


            <h2
              className="
                font-heading
                text-4xl
                md:text-5xl
                lg:text-7xl
                font-light
                leading-[1.08]
                mb-8
              "
            >
              Architecture That Belongs
              To Its Place, Serves Its People
              And Carries A Recognisable Hand.
            </h2>


            <p
              className="
                max-w-3xl
                mx-auto
                font-[var(--font-avenir)]
                text-sm
                md:text-base
                lg:text-lg
                text-gray-400
                leading-relaxed
              "
            >
              Our ambition is not to repeat a shape or façade.
              It is to develop a body of work united by consistent
              convictions — light, shade, air, landscape,
              threshold, material honesty and human scale.
            </p>

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
                  Design With Purpose
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
                  Let's Create Something
                  <br />
                  Worth Leaving Behind.
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
                  Whether you are planning a home, development,
                  workplace, hospitality project or socially
                  driven initiative, we would be glad to hear
                  what you hope to create.
                </p>

              </div>


              {/* CTA */}

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
                Start A Conversation
                <ArrowRight size={17} />
              </Link>

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