"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* =====================================================
   DATA
===================================================== */

const renderImages = [
  "/3d/3d1.png",
  "/3d/3d2.png",
  "/3d/3d3.png",
  "/3d/3d4.png",
  "/3d/3d5.png",
  "/3d/3d6.png",
  "/3d/3d7.png",
  "/3d/3d8.png",
  "/3d/3d9.png",
  "/3d/3d10.png",
];

const expertise = [
  {
    number: "01",
    title: "Exterior 3D Rendering",
    description:
      "Photorealistic exterior visuals that communicate architecture, materials, lighting, landscape and context with clarity.",
  },
  {
    number: "02",
    title: "Interior 3D Rendering",
    description:
      "Detailed interior visualisations that capture atmosphere, finishes, furniture, lighting and spatial character.",
  },
  {
    number: "03",
    title: "Material & Design Studies",
    description:
      "Explore finishes, colours, materials and design directions before committing to construction or production.",
  },
  {
    number: "04",
    title: "Walkthrough Animations",
    description:
      "Cinematic walkthroughs that allow clients, investors and audiences to experience spaces before they exist.",
  },
  {
    number: "05",
    title: "Interactive Visualisation",
    description:
      "Immersive visual experiences that help people understand spaces, environments and design decisions more naturally.",
  },
  {
    number: "06",
    title: "Marketing Render Packages",
    description:
      "High-quality visual assets prepared for websites, brochures, social media, presentations and property campaigns.",
  },
];

const valueCards = [
  {
    symbol: "✦",
    title: "Client Presentations",
    description:
      "Help clients understand depth, flow, atmosphere and spatial dynamics before construction begins.",
  },
  {
    symbol: "◇",
    title: "Property Marketing",
    description:
      "Create compelling visuals for property campaigns, development websites, brochures and social channels.",
  },
  {
    symbol: "✓",
    title: "Project Approval",
    description:
      "Communicate design intent clearly, reducing ambiguity and helping stakeholders make confident decisions.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Send Your Project Details",
    description:
      "Share drawings, 3D models, reference imagery, mood boards, specifications, timelines and your visual expectations.",
  },
  {
    number: "02",
    title: "We Define The Visual Direction",
    description:
      "We review the project and establish the right cameras, materials, lighting, atmosphere and overall visual language.",
  },
  {
    number: "03",
    title: "First Draft & Review",
    description:
      "Receive the first visual direction and frame development so we can refine the design before the final high-detail render.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Your approved visual assets are rendered, polished and prepared for presentation, marketing or project communication.",
  },
];

const projectNeeds = [
  {
    number: "01",
    title: "Full Technical Drawings",
    description:
      "Plans, elevations, sections and specifications provide the strongest foundation for accurate visualisation.",
  },
  {
    number: "02",
    title: "3D Models Available",
    description:
      "Existing architectural or interior models can speed up setup and allow us to focus more time on design, materials and visual refinement.",
  },
  {
    number: "03",
    title: "Partial Documentation",
    description:
      "We can assess incomplete documentation and determine what can be developed from the information currently available.",
  },
  {
    number: "04",
    title: "Still In Planning",
    description:
      "If your project is still at an early stage, we can help establish the information and visual direction needed next.",
  },
];

/* =====================================================
   SECTION HEADING
===================================================== */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        centered ? "text-center" : ""
      }`}
    >
      <div
  className={`
    flex
    items-center
    gap-4
    mb-14
    ${centered ? "justify-center" : ""}
  `}
>
  {/* LEFT GOLD DASH */}

  <div
    className="
      h-px
      w-10
      flex-shrink-0
      bg-[#D4A85A]
    "
  />

  {/* EYEBROW */}

  <p
    className="
      font-[var(--font-avenir)]
      uppercase
      tracking-[8px]
      md:tracking-[8px]
      text-[#D4A85A]
      text-[10px]
      md:text-xs
      whitespace-nowrap
    "
  >
    {eyebrow}
  </p>

  {/* RIGHT GOLD DASH */}

  <div
    className="
      h-px
      w-10
      flex-shrink-0
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
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            max-w-2xl
            text-gray-400
            font-[var(--font-avenir)]
            text-sm
            md:text-base
            leading-relaxed
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function VisualizationPage() {
  /* ===================================================
     SKETCH / RENDER SLIDER
  =================================================== */

  const [sliderPosition, setSliderPosition] =
    useState(50);

  const sliderRef =
    useRef<HTMLDivElement | null>(null);

  const dragging =
    useRef(false);

  const updateSlider = (
    clientX: number
  ) => {
    if (!sliderRef.current) return;

    const rect =
      sliderRef.current.getBoundingClientRect();

    let position =
      ((clientX - rect.left) / rect.width) *
      100;

    position =
      Math.max(0, Math.min(100, position));

    setSliderPosition(position);
  };

  const startDragging = (
    e:
      | React.MouseEvent<HTMLDivElement>
      | React.TouchEvent<HTMLDivElement>
  ) => {
    dragging.current = true;

    if ("touches" in e) {
      updateSlider(e.touches[0].clientX);
    } else {
      updateSlider(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (
      e: MouseEvent
    ) => {
      if (!dragging.current) return;

      updateSlider(e.clientX);
    };

    const handleTouchMove = (
      e: TouchEvent
    ) => {
      if (!dragging.current) return;

      updateSlider(e.touches[0].clientX);
    };

    const stopDragging = () => {
      dragging.current = false;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseup",
      stopDragging
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: false }
    );

    window.addEventListener(
      "touchend",
      stopDragging
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseup",
        stopDragging
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        stopDragging
      );
    };
  }, []);

  /* ===================================================
     IMAGE PROTECTION
  =================================================== */

  useEffect(() => {
    const disableContextMenu = (
      e: MouseEvent
    ) => {
      e.preventDefault();
    };

    document.addEventListener(
      "contextmenu",
      disableContextMenu
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        disableContextMenu
      );
    };
  }, []);

  /* ===================================================
     RENDER
  =================================================== */

  return (
    <main
      className="
        min-h-screen
        bg-[#071321]
        text-white
        overflow-x-hidden
      "
    >

      <Navbar />

      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="
          relative
          min-h-[720px]
          h-[92vh]
          max-h-[950px]
          overflow-hidden
          flex
          items-center
        "
      >

        {/* VIDEO */}

        <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster="/3d/3d1.png"
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    select-none
    pointer-events-none
  "
>
  <source
    src="/3d/3dvideo.mp4"
    type="video/mp4"
  />
</video>

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-[#071321]/65
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#071321]/95
            via-[#071321]/60
            to-[#071321]/20
          "
        />

        {/* HERO CONTENT */}

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
            pt-24
            md:pt-28
          "
        >

          <div className="max-w-3xl">

            <div
  className="
    flex
    items-center
    gap-4
    mb-6
  "
>
  {/* LEFT GOLD DASH */}

  <div
    className="
      w-10
      h-px
      bg-[#D4A85A]
      flex-shrink-0
    "
  />

  {/* TITLE */}

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
    3D Visualization
  </p>

  {/* RIGHT GOLD DASH */}

  <div
    className="
      w-10
      h-px
      bg-[#D4A85A]
      flex-shrink-0
    "
  />
</div>

            <h1
              className="
                font-heading
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-light
                leading-[1.1]
                max-w-4xl
              "
            >
              Experience The Space
              <br />
              Before It Is Built
             
            </h1>

            <div
              className="
                w-20
                md:w-28
                h-px
                bg-[#D4A85A]
                mt-8
                mb-7
              "
            />

            <p
              className="
                font-[var(--font-avenir)]
                text-base
                md:text-lg
                lg:text-xl
                text-gray-300
                font-light
                leading-relaxed
                max-w-2xl
              "
            >
              We create photorealistic 3D
              visualisations that bring architectural
              and interior design concepts to life
              before they are built.
            </p>

            <Link
              href="/consultation"
              className="
                inline-flex
                items-center
                justify-center
                mt-8
                px-7
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
              Request Visualization
              <span className="ml-3">
                →
              </span>
            </Link>

          </div>

        </div>

        {/* HERO BOTTOM LABEL */}

        <div
          className="
            absolute
            bottom-8
            left-0
            right-0
            z-10
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
              flex
              items-center
              justify-between
              gap-6
            "
          >

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[3px]
                text-[9px]
                md:text-[10px]
                text-white/60
              "
            >
              Residential · Commercial · Hospitality
            </p>

            <div
              className="
                hidden
                sm:block
                w-24
                md:w-40
                h-px
                bg-white/20
              "
            />

          </div>
        </div>

      </section>

      {/* =================================================
          INTRO / TRUST
      ================================================= */}

      <section
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

          <div className="w-full">

  {/* TITLE */}

  <div
    className="
      flex
      items-center
      gap-4
      mb-14
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
      Design, Made Visible
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

  <h2
    className="
      font-heading
      text-4xl
      md:text-5xl
      lg:text-6xl
      font-light
      leading-[1.05]
      whitespace-normal
      lg:whitespace-nowrap
    "
  >
    See The Design. Understand The Space.
  </h2>


  {/* DESCRIPTION */}

  <p
    className="
      mt-6
      max-w-3xl
      font-[var(--font-avenir)]
      text-gray-400
      leading-relaxed
      text-sm
      md:text-base
    "
  >
    A strong visual does more than make a project look beautiful.
    It helps clients, investors and decision-makers understand the
    experience before construction begins.
  </p>

</div>

          <div
            className="
              grid
              md:grid-cols-3
              gap-4
              mt-10
            "
          >

            {valueCards.map((item) => (
              <div
                key={item.title}
                className="
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  md:p-7
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
                    text-[#D4A85A]
                    text-2xl
                    mb-5
                  "
                >
                  {item.symbol}
                </div>

                <h3
                  className="
                    font-heading
                    text-2xl
                    font-light
                    mb-3
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    hover:text-[#071321]/70
                    font-[var(--font-avenir)]
                    text-sm
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

      {/* =================================================
          OUR EXPERTISE
      ================================================= */}

      <section
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

          <SectionHeading
            eyebrow="Our Expertise"
            title="Everything You Need To Present A Project Before It's Built"
            description="From individual visual assets to complete presentation packages, we combine design understanding with high-end visual production."
          />

          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-4
              md:gap-5
            "
          >

            {expertise.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  relative
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  md:p-8
                  min-h-[250px]
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
                    mb-10
                  "
                >

                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-[#D4A85A]
                      text-xs
                      tracking-[3px]
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      w-8
                      h-px
                      bg-white/10
                      group-hover:bg-[#071321]/20
                    "
                  />

                </div>

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
                    group-hover:text-[#071321]/70
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

      {/* =================================================
          SKETCH → RENDER
      ================================================= */}

      <section
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

          {/* SECTION HEADING */}

<div className="mb-10 md:mb-14">

  {/* EYEBROW — LEFT ALIGNED */}

  <div
    className="
      flex
      items-center
      gap-4
      mb-14
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
      From Concept To Visual
    </p>

    <div className="h-px w-10 bg-[#D4A85A]" />
  </div>


  {/* MAIN HEADING + DESCRIPTION — CENTERED */}

  <div
    className="
      max-w-4xl
      mx-auto
      text-center
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
      See The Transformation
    </h2>

    <p
      className="
        mt-5
        max-w-2xl
        mx-auto
        font-[var(--font-avenir)]
        text-sm
        md:text-base
        text-gray-400
        leading-relaxed
        text-center
      "
    >
      Drag the control to reveal how a design concept becomes a
      photorealistic visual.
    </p>
  </div>

</div>

          <div
            ref={sliderRef}
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
            onMouseDown={startDragging}
            onTouchStart={startDragging}
          >

            {/* RENDER IMAGE */}

            <img
              src="/3d/apartment1.png"
              alt="Photorealistic 3D render"
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

            {/* SKETCH IMAGE */}

            <div
              className="
                absolute
                inset-y-0
                left-0
                overflow-hidden
                pointer-events-none
              "
              style={{
                width: `${sliderPosition}%`,
              }}
            >

              <img
                src="/3d/sketch1.png"
                alt="Design sketch"
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
                  width:
                    sliderRef.current
                      ? `${sliderRef.current.offsetWidth}px`
                      : "100%",
                  maxWidth: "none",
                }}
              />

            </div>

            {/* LABELS */}

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
              Sketch
            </div>

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
              Render
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
                left: `${sliderPosition}%`,
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

        </div>

      </section>

      {/* =================================================
          PROCESS
      ================================================= */}

      <section
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

          <SectionHeading
            eyebrow="Our Process"
            title="A Clear Process From Concept To Final Visual"
            description="A structured workflow keeps the creative direction clear while ensuring every stage of the visualisation serves the project."
          />

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="
                  group
                  border
                  border-white/10
                  rounded-2xl
                  p-6
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
                    mb-8
                  "
                >

                  <span
                    className="
                      font-[var(--font-avenir)]
                      text-[#D4A85A]
                      tracking-[3px]
                      text-xs
                    "
                  >
                    {step.number}
                  </span>

                  <div
                    className="
                      h-px
                      w-16
                      bg-white/10
                      group-hover:bg-[#071321]/20
                    "
                  />

                </div>

                <p
                  className="
                    font-[var(--font-avenir)]
                    uppercase
                    tracking-[3px]
                    text-[9px]
                    text-white/40
                    group-hover:text-[#071321]/50
                    mb-3
                  "
                >
                  Step {step.number}
                </p>

                <h3
                  className="
                    font-heading
                    text-2xl
                    md:text-3xl
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
                    group-hover:text-[#071321]/70
                    leading-relaxed
                  "
                >
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          SELECTED WORKS / MASONRY
      ================================================= */}

      <section
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

          <div className="mb-10 md:mb-14">

  {/* EYEBROW — LEFT ALIGNED */}

  <div
    className="
      flex
      items-center
      gap-4
      mb-14
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
      Selected Works
    </p>

    <div className="h-px w-10 bg-[#D4A85A]" />
  </div>


  {/* HEADING + DESCRIPTION — CENTERED */}

  <div
    className="
      max-w-4xl
      mx-auto
      text-center
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
      Visual Proof Of Concept
    </h2>

    <p
      className="
        mt-5
        max-w-2xl
        mx-auto
        font-[var(--font-avenir)]
        text-sm
        md:text-base
        text-gray-400
        leading-relaxed
        text-center
      "
    >
      A selection of architectural and interior visualisations
      created to communicate design with clarity and atmosphere.
    </p>

  </div>

</div>
{/* =====================================================
    SELECTED WORKS — RESPONSIVE ARCHITECTURAL COLLAGE
===================================================== */}

<div
  className="
    flex
    flex-col
    gap-4
    md:gap-5
  "
>

  {/* =====================================================
      ROW 1 — LANDSCAPE | PORTRAIT
  ===================================================== */}

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-[1.55fr_1fr]
      lg:grid-cols-[2.25fr_1fr]
      gap-4
      md:gap-5
    "
  >

    {/* 3D1 LANDSCAPE */}

    <div
      className="
        group
        relative
        w-full
        h-[240px]
        sm:h-auto
        sm:aspect-[3/2]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[0]}
        alt="3D visualisation 1"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>


    {/* 3D7 PORTRAIT */}

    <div
      className="
        group
        relative
        w-full
        h-[320px]
        sm:h-auto
        sm:aspect-[2/3]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[6]}
        alt="3D visualisation 7"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>

  </div>


  {/* =====================================================
      ROW 2 — PORTRAIT | LANDSCAPE
  ===================================================== */}

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-[1fr_1.55fr]
      lg:grid-cols-[1fr_2.25fr]
      gap-4
      md:gap-5
    "
  >

    {/* 3D8 PORTRAIT */}

    <div
      className="
        group
        relative
        w-full
        h-[320px]
        sm:h-auto
        sm:aspect-[2/3]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[7]}
        alt="3D visualisation 8"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>


    {/* 3D2 LANDSCAPE */}

    <div
      className="
        group
        relative
        w-full
        h-[240px]
        sm:h-auto
        sm:aspect-[3/2]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[1]}
        alt="3D visualisation 2"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>

  </div>


  {/* =====================================================
      ROW 3 — LANDSCAPE | PORTRAIT
  ===================================================== */}

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-[1.55fr_1fr]
      lg:grid-cols-[2.25fr_1fr]
      gap-4
      md:gap-5
    "
  >

    {/* 3D3 LANDSCAPE */}

    <div
      className="
        group
        relative
        w-full
        h-[240px]
        sm:h-auto
        sm:aspect-[3/2]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[2]}
        alt="3D visualisation 3"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>


    {/* 3D9 PORTRAIT */}

    <div
      className="
        group
        relative
        w-full
        h-[320px]
        sm:h-auto
        sm:aspect-[2/3]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[8]}
        alt="3D visualisation 9"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>

  </div>


  {/* =====================================================
      ROW 4 — PORTRAIT | LANDSCAPE
  ===================================================== */}

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-[1fr_1.55fr]
      lg:grid-cols-[1fr_2.25fr]
      gap-4
      md:gap-5
    "
  >

    {/* 3D10 PORTRAIT */}

    <div
      className="
        group
        relative
        w-full
        h-[320px]
        sm:h-auto
        sm:aspect-[2/3]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[9]}
        alt="3D visualisation 10"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>


    {/* 3D4 LANDSCAPE */}

    <div
      className="
        group
        relative
        w-full
        h-[240px]
        sm:h-auto
        sm:aspect-[3/2]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[3]}
        alt="3D visualisation 4"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>

  </div>


  {/* =====================================================
      ROW 5 — LANDSCAPE | LANDSCAPE
  ===================================================== */}

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-4
      md:gap-5
    "
  >

    {/* 3D5 LANDSCAPE */}

    <div
      className="
        group
        relative
        w-full
        h-[240px]
        sm:h-auto
        sm:aspect-[3/2]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[4]}
        alt="3D visualisation 5"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>


    {/* 3D6 LANDSCAPE */}

    <div
      className="
        group
        relative
        w-full
        h-[240px]
        sm:h-auto
        sm:aspect-[3/2]
        overflow-hidden
        rounded-2xl
        bg-[#0a1828]
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={renderImages[5]}
        alt="3D visualisation 6"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />
    </div>

  </div>

</div>

</div>

</section>
      {/* =================================================
          PARTNERSHIP
      ================================================= */}

      <section
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

          <SectionHeading
            eyebrow="The Partnership"
            title="Built For Professional Project Teams"
            description="We collaborate with architects, developers, designers and project teams to create visual assets that support real design and business decisions."
            
          />

          <div
            className="
              grid
              md:grid-cols-3
              gap-5
            "
          >

            <div
              className="
                border
                border-white/10
                rounded-2xl
                p-7
                md:p-8
              "
            >

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[3px]
                  text-[#D4A85A]
                  text-[10px]
                  mb-5
                "
              >
                Who We Work With
              </p>

              <p
                className="
                  text-gray-300
                  leading-relaxed
                  font-[var(--font-avenir)]
                  text-sm
                "
              >
                Architecture firms, property developers,
                hospitality studios, interior architecture
                studios, commercial design teams and other
                professional project teams.
              </p>

            </div>

            <div
              className="
                border
                border-white/10
                rounded-2xl
                p-7
                md:p-8
              "
            >

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[3px]
                  text-[#D4A85A]
                  text-[10px]
                  mb-5
                "
              >
                Project Types
              </p>

              <p
                className="
                  text-gray-300
                  leading-relaxed
                  font-[var(--font-avenir)]
                  text-sm
                "
              >
                Residential interiors, hospitality interiors,
                commercial interiors, property developments
                and custom visualisation projects.
              </p>

            </div>

            <div
              className="
                border
                border-white/10
                rounded-2xl
                p-7
                md:p-8
              "
            >

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  tracking-[3px]
                  text-[#D4A85A]
                  text-[10px]
                  mb-5
                "
              >
                Deliverables
              </p>

              <p
                className="
                  text-gray-300
                  leading-relaxed
                  font-[var(--font-avenir)]
                  text-sm
                "
              >
                Photorealistic still renders, cinematic
                animation, interactive experiences,
                presentation visuals and social media content.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          WHAT WE NEED + FINAL CTA
      ================================================= */}

      <section
        className="
          pt-10
md:pt-12
lg:pt-14
pb-10
md:pb-12
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

          {/* =============================================
    WHAT WE NEED — INTRO
============================================= */}

<div className="mb-14 md:mb-18">

  <div className="max-w-4xl mx-auto text-center">

    {/* SECTION INTRO */}

<div className="mb-14 md:mb-16">

  {/* LEFT-ALIGNED EYEBROW */}

  <div
  className="
    flex
    items-center
    gap-4
  
    mb-14
    -ml-8
    md:-ml-10
    lg:-ml-60                              
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
      What We Need From You
    </p>

    <div className="h-px w-10 bg-[#D4A85A]" />
  </div>

  {/* CENTERED MAIN HEADING + DESCRIPTION */}

  <div className="max-w-4xl mx-auto text-center">

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
      What We Need To Start Your Visualisation
    </h2>

    <p
      className="
        mt-5
        max-w-2xl
        mx-auto
        text-gray-400
        font-[var(--font-avenir)]
        text-sm
        md:text-base
        leading-relaxed
        text-center
      "
    >
      The more information available, the more accurately we can
      develop the visual direction. But your project does not need
      to be completely finished before you speak with us.
    </p>

  </div>

</div>

  </div>

</div>


{/* =============================================
    WHAT WE NEED — CARDS
============================================= */}

<div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-5
    md:gap-6
  "
>

  {projectNeeds.map((item, index) => (

    <div
      key={item.number}
      className={`
        group
        min-h-[360px]
        md:min-h-[410px]
        border
        rounded-2xl
        p-8
        md:p-10
        flex
        flex-col
        items-center
        text-center
        transition-all
        duration-500

        bg-white/[0.015]
border-white/10
hover:bg-white
hover:text-[#071321]
hover:border-t-[#D4A85A]
      `}
    >

      {/* NUMBER */}

      <div
        className="
          w-14
          h-14
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          flex
          items-center
          justify-center
          mb-8
        "
      >
        <span
          className="
            font-[var(--font-avenir)]
            text-[#D4A85A]
            text-xs
            tracking-[3px]
          "
        >
          {item.number}
        </span>
      </div>


      {/* TITLE */}

      <h3
        className="
          font-heading
          text-2xl
          md:text-3xl
          font-light
          leading-tight
          mb-6
          max-w-[230px]
        "
      >
        {item.title}
      </h3>


      {/* DESCRIPTION */}

      <p
        className="
          font-[var(--font-avenir)]
          text-sm
          md:text-base
          text-gray-400
          leading-relaxed
          max-w-[250px]
        "
      >
        {item.description}
      </p>

    </div>

  ))}

</div>

          {/* FINAL CTA */}

          <div
            className="
              text-center
              border-t
              border-white/10
              mt-16
              md:mt-20
              pt-16
              md:pt-20
            "
          >

            {/* EYEBROW */}

<div
  className="
    flex
    items-center
    gap-4
    mb-14
    text-left
  "
>
  <div
    className="
      w-10
      h-px
      bg-[#D4A85A]
      shrink-0
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
    Ready To Visualize?
  </p>

  <div
    className="
      w-10
      h-px
      bg-[#D4A85A]
      shrink-0
    "
  />
</div>
            <h2
              className="
                font-heading
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-light
                leading-[1]
              "
            >
              Let's Make Your
             
              Design Visible.
            </h2>

            <p
              className="
                max-w-xl
                mx-auto
                mt-6
                text-gray-400
                font-[var(--font-avenir)]
                text-sm
                md:text-base
                leading-relaxed
              "
            >
              Whether you have a finished design, an early
              concept or simply an idea, let's discuss how
              we can turn it into a compelling visual
              experience.
            </p>

            <Link
              href="/consultation"
              className="
                inline-flex
                items-center
                justify-center
                mt-8
                px-8
                md:px-10
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
              Request Visualization
              <span className="ml-3">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </main>
  );
}