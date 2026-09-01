"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import {
  Sparkles,
  Gem,
  ClipboardCheck,
  Building2,
  Sofa,
  UtensilsCrossed,
  ChefHat,
  BedDouble,
  Bath,
  Briefcase,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =====================================================
   STYLE DATA
===================================================== */

const styleData = {
  "modern-luxury": {
    title: "Modern Luxury",
    hero: "/modern-luxury/modernluxurylounge1.png",
    description:
      "Elegant interiors crafted with timeless sophistication, premium materials and refined detailing.",
  },

  japandi: {
    title: "Japandi",
    hero: "/japandi/japandihero.png",
    description:
      "A harmonious blend of Japanese minimalism and Scandinavian warmth.",
  },

  minimalist: {
    title: "Minimalist",
    hero: "/minimalist/minimalistbed3.png",
    description:
      "Clean lines, uncluttered spaces and purposeful simplicity.",
  },

  scandinavian: {
    title: "Scandinavian",
    hero: "/scandinavian/scandinaviandining1.png",
    description:
      "Bright, functional and welcoming interiors inspired by Nordic design.",
  },

  classical: {
    title: "Classical",
    hero: "/classical/classicalliving3.png",
    description:
      "Timeless elegance defined by symmetry, detailing and luxury finishes.",
  },

  coastal: {
    title: "Coastal",
    hero: "/coastal/coastalliving3.png",
    description:
      "Relaxed interiors inspired by natural light, sea tones and airy living.",
  },
};

/* =====================================================
   GALLERY DATA
===================================================== */

const galleryData = {
  "modern-luxury": {
    "Living Room": [
      "/modern-luxury/modernluxurylounge1.png",
      "/modern-luxury/modernluxurylounge2.png",
      "/modern-luxury/modernluxurylounge3.png",
    ],

    Dining: [
      "/modern-luxury/modernluxurydining1.png",
      "/modern-luxury/modernluxurydining2.png",
      "/modern-luxury/modernluxurydining3.png",
    ],

    Kitchen: [
      "/modern-luxury/modernluxurykitchen1.png",
      "/modern-luxury/modernluxurykitchen2.png",
      "/modern-luxury/modernluxurykitchen3.png",
    ],

    Bedroom: [
      "/modern-luxury/modernluxurybed1.png",
      "/modern-luxury/modernluxurybed2.png",
      "/modern-luxury/modernluxurybed3.png",
    ],

    Bathroom: [
      "/modern-luxury/modernluxurybath1.png",
      "/modern-luxury/modernluxurybath2.png",
      "/modern-luxury/modernluxurybath3.png",
    ],

    Office: [
      "/modern-luxury/modernluxuryoffice1.png",
      "/modern-luxury/modernluxuryoffice2.png",
      "/modern-luxury/modernluxuryoffice3.png",
    ],
  },

  japandi: {
    "Living Room": [
      "/japandi/japandiliving1.png",
      "/japandi/japandiliving2.png",
      "/japandi/japandiliving3.png",
    ],

    Dining: [
      "/japandi/japandidining1.png",
      "/japandi/japandidining2.png",
      "/japandi/japandidining3.png",
    ],

    Kitchen: [
      "/japandi/japandikitchen1.png",
      "/japandi/japandikitchen2.png",
      "/japandi/japandikitchen3.png",
    ],

    Bedroom: [
      "/japandi/japandibed1.png",
      "/japandi/japandibed2.png",
      "/japandi/japandibed3.png",
    ],

    Bathroom: [
      "/japandi/japandibath1.png",
      "/japandi/japandibath2.png",
      "/japandi/japandibath3.png",
    ],

    Office: [
      "/japandi/japandioffice1.png",
      "/japandi/japandioffice2.png",
      "/japandi/japandioffice3.png",
    ],
  },

  minimalist: {
    "Living Room": [
      "/minimalist/minimalistliving1.png",
      "/minimalist/minimalistliving2.png",
      "/minimalist/minimalistliving3.png",
    ],

    Dining: [
      "/minimalist/minimalistdining1.png",
      "/minimalist/minimalistdining2.png",
      "/minimalist/minimalistdining3.png",
    ],

    Kitchen: [
      "/minimalist/minimalistkitchen1.png",
      "/minimalist/minimalistkitchen2.png",
      "/minimalist/minimalistkitchen3.png",
    ],

    Bedroom: [
      "/minimalist/minimalistbed1.png",
      "/minimalist/minimalistbed2.png",
      "/minimalist/minimalistbed3.png",
    ],

    Bathroom: [
      "/minimalist/minimalistbath1.png",
      "/minimalist/minimalistbath2.png",
      "/minimalist/minimalistbath3.png",
    ],

    Office: [
      "/minimalist/minimalistoffice1.png",
      "/minimalist/minimalistoffice2.png",
      "/minimalist/minimalistoffice3.png",
    ],
  },

  scandinavian: {
    "Living Room": [
      "/scandinavian/scandinavianliving1.png",
      "/scandinavian/scandinavianliving2.png",
      "/scandinavian/scandinavianliving3.png",
    ],

    Dining: [
      "/scandinavian/scandinaviandining1.png",
      "/scandinavian/scandinaviandining2.png",
      "/scandinavian/scandinaviandining3.png",
    ],

    Kitchen: [
      "/scandinavian/scandinaviankitchen1.png",
      "/scandinavian/scandinaviankitchen2.png",
      "/scandinavian/scandinaviankitchen3.png",
    ],

    Bedroom: [
      "/scandinavian/scandinavianbed1.png",
      "/scandinavian/scandinavianbed2.png",
      "/scandinavian/scandinavianbed3.png",
    ],

    Bathroom: [
      "/scandinavian/scandinavianbath1.png",
      "/scandinavian/scandinavianbath2.png",
      "/scandinavian/scandinavianbath3.png",
    ],

    Office: [
      "/scandinavian/scandinavianoffice1.png",
      "/scandinavian/scandinavianoffice2.png",
      "/scandinavian/scandinavianoffice3.png",
    ],
  },

  classical: {
    "Living Room": [
      "/classical/classicalliving1.png",
      "/classical/classicalliving2.png",
      "/classical/classicalliving3.png",
    ],

    Dining: [
      "/classical/classicaldining1.png",
      "/classical/classicaldining2.png",
      "/classical/classicaldining3.png",
    ],

    Kitchen: [
      "/classical/classicalkitchen1.png",
      "/classical/classicalkitchen2.png",
      "/classical/classicalkitchen3.png",
    ],

    Bedroom: [
      "/classical/classicalbed1.png",
      "/classical/classicalbed2.png",
      "/classical/classicalbed3.png",
    ],

    Bathroom: [
      "/classical/classicalbath1.png",
      "/classical/classicalbath2.png",
      "/classical/classicalbath3.png",
    ],

    Office: [
      "/classical/classicaloffice1.png",
      "/classical/classicaloffice2.png",
      "/classical/classicaloffice3.png",
    ],
  },

  coastal: {
    "Living Room": [
      "/coastal/coastalliving1.png",
      "/coastal/coastalliving2.png",
      "/coastal/coastalliving3.png",
    ],

    Dining: [
      "/coastal/coastaldining1.png",
      "/coastal/coastaldining2.png",
      "/coastal/coastaldining3.png",
    ],

    Kitchen: [
      "/coastal/coastalkitchen1.png",
      "/coastal/coastalkitchen2.png",
      "/coastal/coastalkitchen3.png",
    ],

    Bedroom: [
      "/coastal/coastalbedroom1.png",
      "/coastal/coastalbedroom2.png",
      "/coastal/coastalbedroom3.png",
    ],

    Bathroom: [
      "/coastal/coastalbath1.png",
      "/coastal/coastalbath2.png",
      "/coastal/coastalbath3.png",
    ],

    Office: [
      "/coastal/coastaloffice1.png",
      "/coastal/coastaloffice2.png",
      "/coastal/coastaloffice3.png",
    ],
  },
};

/* =====================================================
   SPACE DATA
===================================================== */

const spaces = [
  {
    name: "Living Room",
    icon: Sofa,
  },
  {
    name: "Dining",
    icon: UtensilsCrossed,
  },
  {
    name: "Kitchen",
    icon: ChefHat,
  },
  {
    name: "Bedroom",
    icon: BedDouble,
  },
  {
    name: "Bathroom",
    icon: Bath,
  },
  {
    name: "Office",
    icon: Briefcase,
  },
];

/* =====================================================
   PAGE
===================================================== */

export default function StylePage() {
  const params = useParams();

  const style = params.style as string;

  const currentStyle =
    styleData[style as keyof typeof styleData];



  const [activeSpace, setActiveSpace] =
    useState("Living Room");

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  /* =====================================================
     SCROLL + IMAGE PROTECTION
  ===================================================== */

  useEffect(() => {
    
    const disableContextMenu = (e: MouseEvent) => {
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

  /* =====================================================
     CURRENT GALLERY
  ===================================================== */

  const currentGallery =
    galleryData[
      style as keyof typeof galleryData
    ]?.[
      activeSpace as keyof typeof galleryData["modern-luxury"]
    ] || [];

  /* =====================================================
     CHANGE SPACE
  ===================================================== */

  const handleSpaceChange = (space: string) => {
    setActiveSpace(space);
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  /* =====================================================
     OPEN IMAGE
  ===================================================== */

  const openImage = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  /* =====================================================
     NEXT IMAGE
  ===================================================== */

  const nextImage = () => {
    if (!currentGallery.length) return;

    const newIndex =
      (currentIndex + 1) %
      currentGallery.length;

    setCurrentIndex(newIndex);
    setSelectedImage(
      currentGallery[newIndex]
    );
  };

  /* =====================================================
     PREVIOUS IMAGE
  ===================================================== */

  const prevImage = () => {
    if (!currentGallery.length) return;

    const newIndex =
      currentIndex === 0
        ? currentGallery.length - 1
        : currentIndex - 1;

    setCurrentIndex(newIndex);
    setSelectedImage(
      currentGallery[newIndex]
    );
  };

  /* =====================================================
     KEYBOARD CONTROLS
  ===================================================== */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }

      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [
    selectedImage,
    currentIndex,
    currentGallery,
  ]);

  /* =====================================================
     INVALID STYLE
  ===================================================== */

  if (!currentStyle) {
    return (
      <main className="min-h-screen bg-[#071321] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl mb-4">
            Style Not Found
          </h1>

          <Link
            href="/interiors"
            className="text-[#D4A85A] hover:text-white transition-colors"
          >
            Return to Interiors
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#071321] text-white min-h-screen">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-screen overflow-hidden">

        <img
          src={currentStyle.hero}
          alt={currentStyle.title}
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
            from-[#071321]/95
            via-[#071321]/70
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            h-full
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

            <div className="flex items-center gap-4 mb-6 md:mb-8">
  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

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
    Interior Design Style
  </p>

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />
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
md:leading-[0.98]
mb-7
md:mb-10
              "
            >
              {currentStyle.title}
            </h1>

            <div
              className="
                w-24
                md:w-32
                h-[2px]
                bg-[#D4A85A]
                mb-10
              "
            />

            <p
              className="
                font-[var(--font-avenir)]
                text-sm
sm:text-base
md:text-lg
lg:text-xl
                font-light
                text-gray-300
                max-w-2xl
                leading-relaxed
              "
            >
              {currentStyle.description}
            </p>

          </div>

        </div>

        {/* SCROLL INDICATOR */}

        <div
          className="
            absolute
            z-20
            bottom-10
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
              md:tracking-[10px]
              text-[10px]
              md:text-xs
              text-[#D4A85A]
              whitespace-nowrap
            "
          >
            Scroll To Explore
          </span>

          <div
            className="
              w-[1px]
              h-12
              bg-[#D4A85A]
              animate-pulse
            "
          />

        </div>

      </section>

      {/* =====================================================
          SPACE EXPLORER
      ===================================================== */}

      <section className="pt-10 md:pt-12 lg:pt-14 pb-8 md:pb-10">

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

          <div className="flex items-center justify-center gap-4 mb-5 md:mb-6">
  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

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
    Explore The Style
  </p>

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />
</div>

          <h2
            className="
              font-heading
              text-center
              text-3xl
sm:text-4xl
md:text-5xl
font-light
leading-[1.08]
mb-8
md:mb-10
            "
          >
            Explore Every Space
          </h2>

          <div
            className="
              grid
grid-cols-2
sm:grid-cols-3
lg:grid-cols-3
xl:grid-cols-6
gap-3
md:gap-4
            "
          >

            {spaces.map((space) => {

              const Icon = space.icon;

              return (
                <button
                  key={space.name}
                  type="button"
                  onClick={() =>
                    handleSpaceChange(space.name)
                  }
                  className={`
                   min-h-[72px]
sm:min-h-[78px]
md:h-[90px]
rounded-2xl
                    border
                    cursor-pointer
                    transition-all
                    duration-300
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    justify-center
                    gap-2
                    md:gap-3
                    text-center
                    font-[var(--font-avenir)]

                    ${
                      activeSpace === space.name
                        ? "border-[#D4A85A] text-[#D4A85A] bg-[#D4A85A]/5"
                        : "border-white/10 text-white hover:border-[#D4A85A]/50 hover:bg-white/[0.02]"
                    }
                  `}
                >

                  <Icon
                    size={22}
                    className="text-[#D4A85A]"
                  />

                  <span className="text-xs sm:text-sm md:text-base font-medium">
                    {space.name}
                  </span>

                </button>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="pb-10 md:pb-12 lg:pb-14">

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

          <div className="text-center mb-8 md:mb-10">

  <div className="flex items-center justify-center gap-4 mb-5">

    <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

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
      {currentStyle.title}
    </p>

    <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

  </div>

  <h2
    className="
      font-heading
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-light
      leading-[1.08]
    "
  >
    {activeSpace}
  </h2>

</div>

          {currentGallery.length > 0 ? (
<div
  className="
    mt-0
    mb-1
    grid
    grid-cols-1
    md:grid-cols-3
    gap-5
    w-full
    max-w-[1800px]
    mx-auto
   
  "
>
              {currentGallery.map(
                (image: string, index: number) => (

                  <button
                    key={image}
                    type="button"
                    onClick={() =>
                      openImage(image, index)
                    }
                     className="
      group
    relative
    w-full
    overflow-hidden
    rounded-2xl
    bg-[#0a1828]
    text-left
    focus:outline-none
  "
>

                    <img
  src={image}
  alt={`${currentStyle.title} ${activeSpace}`}
  draggable={false}
  className="
    w-full
    aspect-[4/3]
    object-cover
    select-none
    transition-transform
    duration-700
    group-hover:scale-105
  "
/>

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/0
                        group-hover:bg-black/45
                        transition-all
                        duration-500
                      "
                    />

                    {/* VIEW BUTTON */}

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-500
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          px-6
                          py-3
                          rounded-full
                          border
                          border-white/30
                          bg-black/30
                          backdrop-blur-md
                          text-white
                        "
                      >

                        <Eye
                          size={18}
                          strokeWidth={1.5}
                        />

                        <span
                          className="
                            font-[var(--font-avenir)]
                            text-xs
                            uppercase
                            tracking-[3px]
                          "
                        >
                          View
                        </span>

                      </div>

                    </div>

                    {/* IMAGE NUMBER */}

                    <div
                      className="
                        absolute
                        bottom-5
                        right-5
                        w-9
                        h-9
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                        text-xs
                        text-white
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-500
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  </button>

                )
              )}

            </div>

          ) : (

            <div
              className="
                py-20
                text-center
                border
                border-white/10
                rounded-3xl
              "
            >
              <p className="text-gray-400">
                Images coming soon.
              </p>
            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/95
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-6
            md:p-10
          "
          onClick={() =>
            setSelectedImage(null)
          }
        >

          {/* CLOSE */}

          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() =>
              setSelectedImage(null)
            }
            className="
              absolute
              top-6
              right-6
              md:top-8
              md:right-8
              z-30
              w-12
              h-12
              rounded-full
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-white
              hover:bg-[#D4A85A]
              hover:text-black
              transition-all
              duration-300
            "
          >
            <X size={24} />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="
              absolute
              left-4
              md:left-8
              z-30
              w-12
              h-12
              rounded-full
              border
              border-white/20
              bg-black/30
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-white
              hover:bg-[#D4A85A]
              hover:text-black
              transition-all
              duration-300
            "
          >
            <ChevronLeft size={28} />
          </button>

          {/* NEXT */}

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="
              absolute
              right-4
              md:right-8
              z-30
              w-12
              h-12
              rounded-full
              border
              border-white/20
              bg-black/30
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-white
              hover:bg-[#D4A85A]
              hover:text-black
              transition-all
              duration-300
            "
          >
            <ChevronRight size={28} />
          </button>

          {/* IMAGE */}

          <img
            src={selectedImage}
            alt={`${currentStyle.title} ${activeSpace}`}
            draggable={false}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              max-w-[90vw]
              max-h-[82vh]
              md:max-h-[86vh]
              object-contain
              rounded-2xl
              select-none
              shadow-2xl
            "
          />

          {/* COUNTER */}

          <div
            className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
              font-[var(--font-avenir)]
              text-xs
              tracking-[4px]
              text-white/70
            "
          >
            {currentIndex + 1}
            {" / "}
            {currentGallery.length}
          </div>

        </div>

      )}

      {/* =====================================================
          CONSULTATION CTA
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
            grid
            lg:grid-cols-2
            gap-10
md:gap-14
lg:gap-20
            items-center
          "
        >

          {/* LEFT */}

          <div className="max-w-[800px]">

            <div className="flex items-center gap-4 mb-6 md:mb-8">
  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

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
    Start Your Project
  </p>

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />
</div>

            <h2
              className="
                font-heading
                text-4xl
md:text-5xl
lg:text-6xl
font-light
leading-[1.05]
                font-light
                leading-[1.05]
                mb-6
              "
            >
              Let's Design
              <br />
              Something Exceptional
            </h2>

            <p
              className="
                font-[var(--font-avenir)]
                text-sm
md:text-base
                font-light
                text-gray-300
                leading-relaxed
                max-w-2xl
                mb-8
md:mb-10
              "
            >
              Every interior project begins with a design
              consultation. We discuss your vision, lifestyle,
              functional needs, aesthetic preferences and
              project goals before preparing a tailored design
              strategy.
            </p>

            <div
              className="
               grid
sm:grid-cols-2
gap-6
md:gap-8
              "
            >

              <div>

                <div className="text-[#D4A85A] text-2xl mb-3">
                  ✦
                </div>

                <h3 className="text-base md:text-lg font-medium mb-2">
                  Personalized Design Direction
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Recommendations tailored specifically to
                  your project, style preferences and lifestyle.
                </p>

              </div>

              <div>

                <div className="text-[#D4A85A] text-2xl mb-3">
                  ✦
                </div>

                <h3 className="text-base md:text-lg font-medium mb-2">
                  Residential & Commercial
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Luxury residences, apartments, offices,
                  hospitality and mixed-use environments.
                </p>

              </div>

              <div>

                <div className="text-[#D4A85A] text-2xl mb-3">
                  ✦
                </div>

                <h3 className="text-base md:text-lg font-medium mb-2">
                  End-To-End Service
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Concept development, visualization,
                  specifications and project guidance.
                </p>

              </div>

              <div>

                <div className="text-[#D4A85A] text-2xl mb-3">
                  ✦
                </div>

                <h3 className="text-base md:text-lg font-medium mb-2">
                  Fast Response
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Most consultation requests receive a
                  response within 24 hours.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
                bg-white/[0.03]
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
md:rounded-[28px]
p-5
sm:p-6
md:p-8
lg:p-10
              "
            >

              <p
                className="
                  font-[var(--font-avenir)]
                  uppercase
                  text-[#D4A85A]
                  text-[10px]
md:text-xs
tracking-[4px]
md:tracking-[6px]
mb-4
                "
              >
                Design Consultation
              </p>

              <h3
                className="
                  font-heading
                  text-3xl
md:text-4xl
lg:text-5xl
leading-[1.08]

                  font-light
                  mb-5
                "
              >
                Book Your Consultation
              </h3>

              <p
                className="
                  font-[var(--font-avenir)]
                  text-gray-300
                  leading-relaxed
                  mb-7
md:mb-8
                "
              >
                Tell us about your project, preferred style,
                budget expectations and timeline. Our
                consultation form adapts to residential,
                commercial, interior design, architecture
                and visualization projects.
              </p>

              <div className="space-y-4 mb-8">

                {[
                  "Residential Interiors",
                  "Commercial Spaces",
                  "Architecture Projects",
                  "3D Visualization Services",
                ].map((item, index) => (

                  <div
                    key={item}
                    className={`
                      flex
                      items-center
                      justify-between
                      ${
                        index < 3
                          ? "border-b border-white/10 pb-4"
                          : "pb-2"
                      }
                    `}
                  >

                    <span className="text-gray-400">
                      {item}
                    </span>

                    <span className="text-[#D4A85A]">
                      ✓
                    </span>

                  </div>

                ))}

              </div>

              <Link
                href="/consultation"
                className="
                  block
                  text-center
                  py-3.5
md:py-4
                  rounded-full
                  bg-[#D4A85A]
                  text-black
                  font-[var(--font-avenir)]
                  font-medium
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-white
                "
              >
                Book Consultation →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
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

          <div className="flex items-center justify-center gap-4 mb-5 md:mb-6">

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

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
    Why Choose Us
  </p>

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

</div>

          <h2
            className="
              font-heading
              text-center
              text-3xl
sm:text-4xl
md:text-5xl
font-light
leading-[1.08]
mb-8
md:mb-10
            "
          >
            Designed Around Your Lifestyle
          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-4
              gap-4
              md:gap-6
            "
          >

            <div className="border
border-white/10
rounded-2xl
p-6
md:p-7
lg:p-8
transition-all
duration-300
hover:border-[#D4A85A]/40
hover:bg-white/[0.02]">

              <Sparkles
                size={28}
strokeWidth={1.5}
className="text-[#D4A85A] mb-5"
              />

              <h3 className="font-heading text-2xl font-light mb-3">
                Tailored Design
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Every project is customized to reflect your
                lifestyle, vision and functional needs.
              </p>

            </div>

            <div className="border
border-white/10
rounded-2xl
p-6
md:p-7
lg:p-8
transition-all
duration-300
hover:border-[#D4A85A]/40
hover:bg-white/[0.02]">

              <Gem
                size={28}
strokeWidth={1.5}
className="text-[#D4A85A] mb-5"
              />

              <h3 className="font-heading text-2xl font-light mb-3">
                Premium Materials
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Carefully selected finishes and materials
                that elevate both beauty and durability.
              </p>

            </div>

            <div className="border
border-white/10
rounded-2xl
p-6
md:p-7
lg:p-8
transition-all
duration-300
hover:border-[#D4A85A]/40
hover:bg-white/[0.02]">

              <ClipboardCheck
                size={28}
strokeWidth={1.5}
className="text-[#D4A85A] mb-5"
              />

              <h3 className="font-heading text-2xl font-light mb-3">
                End-To-End Service
              </h3>

              <p className="text-gray-400 leading-relaxed">
                From concept development to final execution,
                we guide every stage of the journey.
              </p>

            </div>

            <div className="border
border-white/10
rounded-2xl
p-6
md:p-7
lg:p-8
transition-all
duration-300
hover:border-[#D4A85A]/40
hover:bg-white/[0.02]">

              <Building2
                size={28}
strokeWidth={1.5}
className="text-[#D4A85A] mb-5"
              />

              <h3 className="font-heading text-2xl font-light mb-3">
                Timeless Aesthetics
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Spaces designed to remain elegant and
                relevant for years to come.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPLORE MORE
      ===================================================== */}

      <section className="pb-16 md:pb-24 lg:pb-32">

        <div
          className="
            max-w-[1700px]
            mx-auto
            px-6
            md:px-10
            lg:px-16
          "
        >

          <div className="flex items-center justify-center gap-4 mb-5 md:mb-6">

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

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
    Explore More
  </p>

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

</div>

          <h2
            className="
              font-heading
              text-center
              text-3xl
sm:text-4xl
md:text-5xl
font-light
leading-[1.08]
mb-8
md:mb-10
            "
          >
            You May Also Like
          </h2>

          <div
  className="
    flex
    overflow-x-auto
    gap-4
    pb-3
    snap-x
    snap-mandatory
    scrollbar-hide

    lg:grid
    lg:grid-cols-5
    lg:overflow-visible
    lg:pb-0
    lg:gap-5
  "
>

            {Object.entries(styleData)
              .filter(([key]) => key !== style)
              .slice(0, 5)
              .map(([key, item]) => (

                <Link
                  key={key}
                  href={`/interiors/${key}`}
                  className="
  group
  relative
  flex-none
  w-[78vw]
  sm:w-[46vw]
  lg:w-auto
  h-[240px]
  md:h-[250px]
  lg:h-[260px]
  overflow-hidden
  rounded-2xl
  snap-start
                  "
                >

<p
  className="
    lg:hidden
    mt-4
    text-center
    font-[var(--font-avenir)]
    uppercase
    tracking-[3px]
    text-[9px]
    text-[#D4A85A]
  "
>
  Swipe To Explore →
</p>

                  <img
                    src={item.hero}
                    alt={item.title}
                    draggable={false}
                    className="
                      w-full
                      h-full
                      object-cover
                      select-none
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/90
                      via-black/30
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-5
left-5
right-5
md:bottom-6
md:left-6
md:right-6
                    "
                  >

                    <h3
                      className="
                        font-heading
                        text-2xl
lg:text-3xl
                        font-light
                        text-white
                        mb-2
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        font-[var(--font-avenir)]
                        text-[#D4A85A]
                        tracking-[3px]
                        uppercase
                        text-[10px]
                      "
                    >
                      Explore Style →
                    </p>

                  </div>

                </Link>

              ))}

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