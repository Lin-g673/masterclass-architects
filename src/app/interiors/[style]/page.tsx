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
    hero: "/modern-luxury/modernluxurylounge1.webp",
    description:
      "Elegant interiors crafted with timeless sophistication, premium materials and refined detailing.",
  },

  japandi: {
    title: "Japandi",
    hero: "/japandi/japandihero.webp",
    description:
      "A harmonious blend of Japanese minimalism and Scandinavian warmth.",
  },

  minimalist: {
    title: "Minimalist",
    hero: "/minimalist/minimalistbed3.webp",
    description:
      "Clean lines, uncluttered spaces and purposeful simplicity.",
  },

  scandinavian: {
    title: "Scandinavian",
    hero: "/scandinavian/scandinaviandining1.webp",
    description:
      "Bright, functional and welcoming interiors inspired by Nordic design.",
  },

  classical: {
    title: "Classical",
    hero: "/classical/classicalliving3.webp",
    description:
      "Timeless elegance defined by symmetry, detailing and luxury finishes.",
  },

  coastal: {
    title: "Coastal",
    hero: "/coastal/coastalliving3.webp",
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
      "/modern-luxury/modernluxurylounge1.webp",
      "/modern-luxury/modernluxurylounge2.webp",
      "/modern-luxury/modernluxurylounge3.webp",
    ],

    Dining: [
      "/modern-luxury/modernluxurydining1.webp",
      "/modern-luxury/modernluxurydining2.webp",
      "/modern-luxury/modernluxurydining3.webp",
    ],

    Kitchen: [
      "/modern-luxury/modernluxurykitchen1.webp",
      "/modern-luxury/modernluxurykitchen2.webp",
      "/modern-luxury/modernluxurykitchen3.webp",
    ],

    Bedroom: [
      "/modern-luxury/modernluxurybed1.webp",
      "/modern-luxury/modernluxurybed2.webp",
      "/modern-luxury/modernluxurybed3.webp",
    ],

    Bathroom: [
      "/modern-luxury/modernluxurybath1.webp",
      "/modern-luxury/modernluxurybath2.webp",
      "/modern-luxury/modernluxurybath3.webp",
    ],

    Office: [
      "/modern-luxury/modernluxuryoffice1.webp",
      "/modern-luxury/modernluxuryoffice2.webp",
      "/modern-luxury/modernluxuryoffice3.webp",
    ],
  },

  japandi: {
    "Living Room": [
      "/japandi/japandiliving1.webp",
      "/japandi/japandiliving2.webp",
      "/japandi/japandiliving3.webp",
    ],

    Dining: [
      "/japandi/japandidining1.webp",
      "/japandi/japandidining2.webp",
      "/japandi/japandidining3.webp",
    ],

    Kitchen: [
      "/japandi/japandikitchen1.webp",
      "/japandi/japandikitchen2.webp",
      "/japandi/japandikitchen3.webp",
    ],

    Bedroom: [
      "/japandi/japandibed1.webp",
      "/japandi/japandibed2.webp",
      "/japandi/japandibed3.webp",
    ],

    Bathroom: [
      "/japandi/japandibath1.webp",
      "/japandi/japandibath2.webp",
      "/japandi/japandibath3.webp",
    ],

    Office: [
      "/japandi/japandioffice1.webp",
      "/japandi/japandioffice2.webp",
      "/japandi/japandioffice3.webp",
    ],
  },

  minimalist: {
    "Living Room": [
      "/minimalist/minimalistliving1.webp",
      "/minimalist/minimalistliving2.webp",
      "/minimalist/minimalistliving3.webp",
    ],

    Dining: [
      "/minimalist/minimalistdining1.webp",
      "/minimalist/minimalistdining2.webp",
      "/minimalist/minimalistdining3.webp",
    ],

    Kitchen: [
      "/minimalist/minimalistkitchen1.webp",
      "/minimalist/minimalistkitchen2.webp",
      "/minimalist/minimalistkitchen3.webp",
    ],

    Bedroom: [
      "/minimalist/minimalistbed1.webp",
      "/minimalist/minimalistbed2.webp",
      "/minimalist/minimalistbed3.webp",
    ],

    Bathroom: [
      "/minimalist/minimalistbath1.webp",
      "/minimalist/minimalistbath2.webp",
      "/minimalist/minimalistbath3.webp",
    ],

    Office: [
      "/minimalist/minimalistoffice1.webp",
      "/minimalist/minimalistoffice2.webp",
      "/minimalist/minimalistoffice3.webp",
    ],
  },

  scandinavian: {
    "Living Room": [
      "/scandinavian/scandinavianliving1.webp",
      "/scandinavian/scandinavianliving2.webp",
      "/scandinavian/scandinavianliving3.webp",
    ],

    Dining: [
      "/scandinavian/scandinaviandining1.webp",
      "/scandinavian/scandinaviandining2.webp",
      "/scandinavian/scandinaviandining3.webp",
    ],

    Kitchen: [
      "/scandinavian/scandinaviankitchen1.webp",
      "/scandinavian/scandinaviankitchen2.webp",
      "/scandinavian/scandinaviankitchen3.webp",
    ],

    Bedroom: [
      "/scandinavian/scandinavianbed1.webp",
      "/scandinavian/scandinavianbed2.webp",
      "/scandinavian/scandinavianbed3.webp",
    ],

    Bathroom: [
      "/scandinavian/scandinavianbath1.webp",
      "/scandinavian/scandinavianbath2.webp",
      "/scandinavian/scandinavianbath3.webp",
    ],

    Office: [
      "/scandinavian/scandinavianoffice1.webp",
      "/scandinavian/scandinavianoffice2.webp",
      "/scandinavian/scandinavianoffice3.webp",
    ],
  },

  classical: {
    "Living Room": [
      "/classical/classicalliving1.webp",
      "/classical/classicalliving2.webp",
      "/classical/classicalliving3.webp",
    ],

    Dining: [
      "/classical/classicaldining1.webp",
      "/classical/classicaldining2.webp",
      "/classical/classicaldining3.webp",
    ],

    Kitchen: [
      "/classical/classicalkitchen1.webp",
      "/classical/classicalkitchen2.webp",
      "/classical/classicalkitchen3.webp",
    ],

    Bedroom: [
      "/classical/classicalbed1.webp",
      "/classical/classicalbed2.webp",
      "/classical/classicalbed3.webp",
    ],

    Bathroom: [
      "/classical/classicalbath1.webp",
      "/classical/classicalbath2.webp",
      "/classical/classicalbath3.webp",
    ],

    Office: [
      "/classical/classicaloffice1.webp",
      "/classical/classicaloffice2.webp",
      "/classical/classicaloffice3.webp",
    ],
  },

  coastal: {
    "Living Room": [
      "/coastal/coastalliving1.webp",
      "/coastal/coastalliving2.webp",
      "/coastal/coastalliving3.webp",
    ],

    Dining: [
      "/coastal/coastaldining1.webp",
      "/coastal/coastaldining2.webp",
      "/coastal/coastaldining3.webp",
    ],

    Kitchen: [
      "/coastal/coastalkitchen1.webp",
      "/coastal/coastalkitchen2.webp",
      "/coastal/coastalkitchen3.webp",
    ],

    Bedroom: [
      "/coastal/coastalbed1.webp",
      "/coastal/coastalbed2.webp",
      "/coastal/coastalbed3.webp",
    ],

    Bathroom: [
      "/coastal/coastalbath1.webp",
      "/coastal/coastalbath2.webp",
      "/coastal/coastalbath3.webp",
    ],

    Office: [
      "/coastal/coastaloffice1.webp",
      "/coastal/coastaloffice2.webp",
      "/coastal/coastaloffice3.webp",
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