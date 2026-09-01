"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Link from "next/link";

import { useMemo, useState } from "react";

import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  BedDouble,
  Bath,
  Layers3,
  Ruler,
  CheckCircle2,
  Download,
  House,
  PenTool,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import {
  housePlans,
  planCategories,
} from "./plansData";


export default function HousePlansPage() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");


  const filteredPlans = useMemo(() => {

    return housePlans.filter((plan) => {

      const categoryMatch =
        activeCategory === "All" ||
        plan.category === activeCategory;

      const searchMatch =
        plan.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        plan.category
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        String(plan.bedrooms).includes(search);

      return categoryMatch && searchMatch;

    });

  }, [activeCategory, search]);


  return (

    <main className="min-h-screen bg-[#071321] text-white">

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-[85vh]
          lg:min-h-screen
          overflow-hidden
          flex
          items-center
        "
      >

        <img
          src="/house-plans/hero/houseplanshero.png"
          alt="Apiyo Design Studio house plans"
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
            via-[#071321]/75
            to-[#071321]/20
          "
        />

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
            pt-28
            md:pt-32
          "
        >

          <div className="max-w-5xl">

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
                "
              >
                Architectural Plans
              </p>

              <div className="w-10 h-px bg-[#D4A85A]" />

            </div>


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
              Ready Designs.
              <br />

              <span
                className="
                  inline-block
                  mt-2
                  md:mt-3
                "
              >
                Thoughtfully Planned.
              </span>

              <br />

              <span
                className="
                  inline-block
                  mt-2
                  md:mt-3
                "
              >
                Made For Real Living.
              </span>
            </h1>


            <p
              className="
                mt-8
                max-w-2xl
                font-[var(--font-avenir)]
                text-base
                md:text-lg
                text-gray-300
                leading-relaxed
              "
            >
              Professionally designed architectural plans shaped 
              around real needs, practical functionality and 
              thoughtful architectural planning.
            </p>


            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-10
              "
            >

              <a
                href="#catalogue"
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
                Browse Plans
                <ArrowRight size={16} />
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
                  border-white/30
                  font-[var(--font-avenir)]
                  text-sm
                  text-white
                  hover:border-[#D4A85A]
                  hover:text-[#D4A85A]
                  transition-all
                  duration-300
                "
              >
                Custom Design
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section
        className="
          border-y
          border-white/10
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

            grid
            grid-cols-2
            lg:grid-cols-4
          "
        >

          {[
            ["12", "Ready Plans"],
            ["Context", "Plot Conscious"],
            ["Digital", "PDF Delivery"],
            ["Professional", "Drawing Packages"],
          ].map(([value, label], index) => (

            <div
              key={label}
              className={`
                py-8
                md:py-10
                text-center

                ${
                  index < 3
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }
              `}
            >

              <p
                className="
                  font-heading
                  text-3xl
                  md:text-4xl
                  text-white
                  mb-2
                "
              >
                {value}
              </p>

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[3px]
                  text-[9px]
                  md:text-[10px]
                  text-[#D4A85A]
                "
              >
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* =====================================================
          CATALOGUE INTRO
      ===================================================== */}

      <section
        id="catalogue"
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
              Premium Catalogue
            </p>

            <div className="w-10 h-px bg-[#D4A85A]" />

          </div>


          <div
            className="
              max-w-4xl
              mx-auto
              text-center
              mb-14
            "
          >

            <h2
              className="
                font-heading
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-light
                mb-6
              "
            >
              You Bought The Land.
              <br />
              Now Build It Right.
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
              Explore carefully developed house designs
              created around comfortable living, efficient
              construction and practical residential planning.
            </p>

          </div>



          {/* BENEFITS */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-4
              mb-16
            "
          >

            {[
              {
                icon: ShieldCheck,
                title: "Kenyan Requirements Considered",
              },
              {
                icon: House,
                title: "Designed For Real Plots",
              },
              {
                icon: Download,
                title: "Professional PDF Delivery",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-5
                  "
                >

                  <Icon
                    size={19}
                    className="text-[#D4A85A]"
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



          {/* =====================================================
              FILTERS
          ===================================================== */}

          <div
            className="
              border
              border-white/10
              rounded-[24px]
              p-5
              md:p-6
              mb-10
              bg-white/[0.015]
            "
          >

            <div
              className="
                flex
                flex-col
                xl:flex-row
                gap-5
                xl:items-center
                xl:justify-between
              "
            >

              {/* SEARCH */}

              <div
                className="
                  relative
                  w-full
                  xl:max-w-[380px]
                "
              >

                <Search
                  size={17}
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search plans..."
                  className="
                    w-full
                    bg-[#071321]
                    border
                    border-white/10
                    rounded-full
                    pl-12
                    pr-5
                    py-4
                    outline-none
                    font-[var(--font-avenir)]
                    text-sm
                    text-white
                    placeholder:text-gray-500
                    focus:border-[#D4A85A]
                  "
                />

              </div>


              {/* CATEGORY BUTTONS */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {planCategories.map((category) => (

                  <button
                    key={category}
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`
                      px-6
                      py-3
                      rounded-full
                      border
                      font-[var(--font-avenir)]
                      text-xs
                      transition-all
                      duration-300

                      ${
                        activeCategory === category
                          ? "bg-[#D4A85A] text-black border-[#D4A85A]"
                          : "border-white/10 text-gray-300 hover:border-[#D4A85A]"
                      }
                    `}
                  >
                    {category}
                  </button>

                ))}

              </div>

            </div>

          </div>



          {/* RESULTS */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              mb-8
            "
          >

            <p
              className="
                font-[var(--font-avenir)]
                text-sm
                text-gray-400
              "
            >
              Showing{" "}
              <span className="text-white">
                {filteredPlans.length}
              </span>{" "}
              designs
            </p>


            <div
              className="
                flex
                items-center
                gap-2
                text-gray-500
              "
            >
              <SlidersHorizontal size={15} />

              <span
                className="
                  hidden
                  sm:inline
                  font-[var(--font-avenir)]
                  text-xs
                "
              >
                Browse Catalogue
              </span>
            </div>

          </div>



          {/* =====================================================
              PLAN CARDS
          ===================================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
              lg:gap-8
            "
          >

            {filteredPlans.map((plan) => (

              <article
                key={plan.slug}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
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

                {/* IMAGE */}

                <div
                  className="
                    relative
                    w-full
                    h-[270px]
                    sm:h-[300px]
                    lg:h-[320px]
                    overflow-hidden
                  "
                >

                  <img
                    src={plan.image}
                    alt={plan.title}
                    draggable={false}
                    className="
                      block
                      w-full
                      h-full
                      object-cover
                      select-none
                      transition-transform
                      duration-[1000ms]
                      group-hover:scale-[1.035]
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
                      border
                      border-white/10
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

                </div>



                {/* CONTENT */}

                <div
                  className="
                    p-6
                    md:p-7
                  "
                >

                  <p
                    className="
                      font-[var(--font-avenir)]
                      uppercase
                      tracking-[4px]
                      text-[#D4A85A]
                      text-[9px]
                      mb-3
                    "
                  >
                    {plan.code}
                  </p>


                  <h3
                    className="
                      font-heading
                      text-3xl
                      font-light
                      leading-[1.08]
                      mb-4
                    "
                  >
                    {plan.title}
                  </h3>


                  <p
                    className="
                      font-[var(--font-avenir)]
                      text-sm
                      text-gray-400
                      leading-relaxed
                      min-h-[66px]
                      mb-6
                    "
                  >
                    {plan.shortDescription}
                  </p>


                  {/* SPECS */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-x-5
                      gap-y-3
                      border-y
                      border-white/10
                      py-4
                      mb-6
                    "
                  >

                    <div className="flex items-center gap-2">
                      <BedDouble
                        size={15}
                        className="text-[#D4A85A]"
                      />
                      <span className="text-xs text-gray-300">
                        {plan.bedrooms} Beds
                      </span>
                    </div>


                    <div className="flex items-center gap-2">
                      <Bath
                        size={15}
                        className="text-[#D4A85A]"
                      />
                      <span className="text-xs text-gray-300">
                        {plan.bathrooms} Baths
                      </span>
                    </div>


                    <div className="flex items-center gap-2">
                      <Ruler
                        size={15}
                        className="text-[#D4A85A]"
                      />
                      <span className="text-xs text-gray-300">
                        {plan.area} m²
                      </span>
                    </div>

                  </div>



                  {/* PRICE */}

                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      gap-5
                    "
                  >

                    <div>

                      <p
                        className="
                          font-[var(--font-avenir)]
                          uppercase
                          tracking-[2px]
                          text-[9px]
                          text-gray-500
                          mb-1
                        "
                      >
                        PDF Plan
                      </p>

                      <p
                        className="
                          font-heading
                          text-2xl
                          text-[#D4A85A]
                        "
                      >
                        KES{" "}
                        {plan.price.toLocaleString()}
                      </p>

                    </div>


                    <Link
                      href={`/house-plans/${plan.slug}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        font-[var(--font-avenir)]
                        text-xs
                        uppercase
                        tracking-[2px]
                        text-white
                        group-hover:text-[#D4A85A]
                        transition-colors
                      "
                    >
                      View Plan
                      <ArrowRight size={15} />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          CUSTOMIZE
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
                  "
                >
                  Designed Around You
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
                Like A Plan?
                <br />
                Make It Yours.
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
                We can adapt selected designs to your
                plot, lifestyle and requirements without
                forcing you to start the design process
                from zero.
              </p>


              <div className="space-y-4">

                {[
                  "Adjust room layouts and dimensions",
                  "Adapt the footprint to your plot",
                  "Modify selected elevations and façade elements",
                  "Review the design against your location and needs",
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
                        mt-[2px]
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
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>



            {/* HELP CARD */}

            <div
              className="
                border
                border-[#D4A85A]/25
                rounded-[28px]
                md:rounded-[34px]
                p-8
                md:p-10
                bg-white/[0.025]
              "
            >

              <PenTool
                size={34}
                className="
                  text-[#D4A85A]
                  mb-7
                "
              />


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
                Need Something Different?
              </p>


              <h3
                className="
                  font-heading
                  text-3xl
                  md:text-4xl
                  font-light
                  mb-5
                "
              >
                Personalized Help Is
                Just A Click Away.
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
                Tell us about your plot, family,
                budget and goals and we can help
                you choose an existing plan or
                develop a completely custom design.
              </p>


              <Link
                href="/consultation"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-[#D4A85A]
                  text-black
                  font-[var(--font-avenir)]
                  text-sm
                  font-medium
                  hover:bg-white
                  transition-all
                "
              >
                Talk To Our Team
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          KNOW BEFORE YOU BUILD
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
            max-w-[1200px]
            mx-auto
            px-5
            sm:px-6
            md:px-8
            lg:px-10
          "
        >

          <div
            className="
              text-center
              mb-14
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
              Before You Build
            </p>


            <h2
              className="
                font-heading
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-light
              "
            >
              Choosing The Right House Plan
            </h2>

          </div>


          <div
            className="
              space-y-12
              font-[var(--font-avenir)]
              text-gray-400
              leading-relaxed
              text-sm
              md:text-base
            "
          >

            <div>
              <h3 className="font-heading text-3xl text-white mb-4">
                Start With Your Plot
              </h3>

              <p>
                Plot dimensions, orientation, access,
                neighbouring development and local planning
                requirements all influence whether a particular
                house design is appropriate. A beautiful plan
                must also work correctly on the land where it
                will eventually be built.
              </p>
            </div>


            <div>
              <h3 className="font-heading text-3xl text-white mb-4">
                Bungalow Or Maisonette?
              </h3>

              <p>
                Bungalows provide comfortable single-level
                living and are particularly attractive where
                generous land is available. Maisonettes use
                the plot vertically and can provide more
                accommodation while retaining external space.
                The right choice depends on your lifestyle,
                plot and construction priorities.
              </p>
            </div>


            <div>
              <h3 className="font-heading text-3xl text-white mb-4">
                Ready Plans Still Need Site Review
              </h3>

              <p>
                A ready design gives you a strong architectural
                starting point, but every site has unique
                conditions. Before construction, the selected
                plan should be reviewed against the actual
                property, applicable planning requirements,
                structural conditions and consultant input.
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
          pt-10
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
              rounded-[30px]
              md:rounded-[40px]
              p-8
              md:p-12
              lg:p-16
              bg-white/[0.025]
              grid
              lg:grid-cols-[1fr_auto]
              gap-10
              items-center
            "
          >

            <div>

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[7px]
                  text-[#D4A85A]
                  text-[10px]
                  mb-6
                "
              >
                Need Guidance?
              </p>


              <h2
                className="
                  font-heading
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-light
                  mb-5
                "
              >
                Let Us Help You
                Choose The Right Plan.
              </h2>


              <p
                className="
                  max-w-2xl
                  font-[var(--font-avenir)]
                  text-sm
                  text-gray-400
                  leading-relaxed
                "
              >
                Tell us your plot size, preferred number
                of bedrooms, budget and location and we'll
                help you determine the best next step.
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
                py-4
                rounded-full
                bg-[#D4A85A]
                text-black
                font-[var(--font-avenir)]
                text-sm
                font-medium
                hover:bg-white
                transition-all
              "
            >
              Get Recommendation
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}