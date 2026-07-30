"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState, useEffect } from "react";
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
} from "lucide-react";
import Link from "next/link";

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
    hero: "/minimalist/minimalisthero.png",
    description:
      "Clean lines, uncluttered spaces and purposeful simplicity.",
  },

  scandinavian: {
    title: "Scandinavian",
    hero: "/scandinavian/scandinavianliving3.jpeg",
    description:
      "Bright, functional and welcoming interiors inspired by Nordic design.",
  },

  classical: {
    title: "Classical",
    hero: "/classical/classicalliving2.jpeg",
    description:
      "Timeless elegance defined by symmetry, detailing and luxury finishes.",
  },

  coastal: {
    title: "Coastal",
    hero: "/coastal/coastaldining2.jpeg",
    description:
      "Relaxed interiors inspired by natural light, sea tones and airy living.",
  },
};

import { useParams } from "next/navigation";

export default function StylePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  const disableContextMenu = (e: MouseEvent) => {
    e.preventDefault();
  };

  window.addEventListener("scroll", handleScroll);
  document.addEventListener("contextmenu", disableContextMenu);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener(
      "contextmenu",
      disableContextMenu
    );
  };
}, []);
const galleryData = {
  "modern-luxury": {
    "Living Room": [
      "/modern-luxury/modernluxurylounge1.png",
      "/modern-luxury/modernluxurylounge2.png",
      "/modern-luxury/modernluxurylounge3.png",
    ],

    Dining: [
      "/modern-luxury/modernluxurydining1.png",
    ],

    Kitchen: [
      "/modern-luxury/modernluxurykitchen1.png",
    ],

    Bedroom: [
      "/modern-luxury/modernluxurybed1.png",
    ],

    Bathroom: [
      "/modern-luxury/modernluxurybath3.png",
    ],

    Office: [
      "/modern-luxury/modernluxuryoffice1.png",
    ],
  },

  japandi: {
    "Living Room": [],
    Dining: [],
    Kitchen: [],
    Bedroom: [],
    Bathroom: [],
    Office: [],
  },

  minimalist: {
    "Living Room": [],
    Dining: [],
    Kitchen: [],
    Bedroom: [],
    Bathroom: [],
    Office: [],
  },

  scandinavian: {
    "Living Room": [],
    Dining: [],
    Kitchen: [],
    Bedroom: [],
    Bathroom: [],
    Office: [],
  },

  classical: {
    "Living Room": [],
    Dining: [],
    Kitchen: [],
    Bedroom: [],
    Bathroom: [],
    Office: [],
  },

  coastal: {
    "Living Room": [],
    Dining: [],
    Kitchen: [],
    Bedroom: [],
    Bathroom: [],
    Office: [],
  },
};
  const params = useParams();
const style = params.style as string;

  const currentStyle =
    styleData[style as keyof typeof styleData];
if (!currentStyle) {
  return <div>Style not found</div>;
}
const [activeSpace, setActiveSpace] =
  useState("Living Room");
  const [selectedImage, setSelectedImage] =
  useState<string | null>(null);
  const [currentIndex, setCurrentIndex] =
  useState<number>(0);
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
  const currentGallery: string[] =
  galleryData[
    style as keyof typeof galleryData
  ]?.[
    activeSpace as keyof typeof galleryData["modern-luxury"]
  ] || [];
const nextImage = () => {
  const newIndex =
    (currentIndex + 1) % currentGallery.length;

  setCurrentIndex(newIndex);
  setSelectedImage(currentGallery[newIndex]);
};
const prevImage = () => {
  const newIndex =
    currentIndex === 0
      ? currentGallery.length - 1
      : currentIndex - 1;

  setCurrentIndex(newIndex);
  setSelectedImage(currentGallery[newIndex]);
};
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

  window.addEventListener("keydown", handleKey);

  return () =>
    window.removeEventListener("keydown", handleKey);

}, [selectedImage, currentIndex]);

  return (
  <main className="bg-[#071321] text-white min-h-screen">
<Navbar />
    {/* HERO */}

    <section className="relative h-screen overflow-hidden">

      <img
        src={currentStyle.hero}
        alt={currentStyle.title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
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
        px-20
        "
      >

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[5px]
            text-[#D4A85A]
            mb-6
            "
          >
            Interior Design Style
          </p>

          <h1
            className="
            text-6xl
            lg:text-8xl
            font-serif
            leading-[0.95]
            mb-10
            "
          >
            {currentStyle.title}
          </h1>

          <div
            className="
            w-32
            h-[2px]
            bg-[#D4A85A]
            mb-10
            "
          />

          <p
            className="
            text-xl
            lg:text-2xl
            text-gray-300
            max-w-2xl
            leading-relaxed
            mb-12
            "
          >
            {currentStyle.description}
          </p>
          

          <div className="flex gap-5 flex-wrap">

      

          </div>

        </div>

      </div>

    </section>
<div
  className="
  absolute
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
    uppercase
    tracking-[12px]
    text-lg
    font-medium
    text-[#D4A85A]
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
{/* SPACE EXPLORER */}

<section className="pt-10 pb-10">

  <div className="max-w-[1900px] mx-auto px-10">

    <h2
      className="
      text-center
      text-5xl
      font-serif
      mb-16
      "
    >
      Explore Every Space
    </h2>

    <div
      className="
      grid
      grid-cols-6
      gap-4
      "
    >

      {spaces.map((space) => {

  const Icon = space.icon;

  return (

  <div
  key={space.name}
  onClick={() => setActiveSpace(space.name)}
  className={`
    h-[100px]
    rounded-3xl
    border
    cursor-pointer
    transition-all
    duration-300
    flex
flex-row
items-center
justify-center
gap-3
    text-center

    ${
      activeSpace === space.name
        ? "border-[#D4A85A] text-[#D4A85A]"
        : "border-white/10 text-white"
    }
  `}
>

  <Icon
  size={24}
  className="text-[#D4A85A]"
/>

<span className="text-lg font-medium">
  {space.name}
</span>

</div>
);
})}

    </div>

  </div>

</section>

      <section className="pb-32">

 <div className="w-full px-16 xl:px-24">

    <h2
      className="
      text-center
      text-5xl
      font-serif
      mb-16
      "
    >
      {activeSpace}
    </h2>

    <div
      className="
     grid
grid-cols-5
gap-4
w-full
      "
    >

      {currentGallery.map((image: string, index: number) => (

        <div
  key={index}
  onClick={() => {
  setSelectedImage(image);
  setCurrentIndex(index);
}}
  className="
  group
  relative
  cursor-pointer
          h-[380px]
          overflow-hidden
          rounded-3xl
          "
        >

          <img
            src={image}
            alt={activeSpace}
            draggable={false}
            className="
            w-full
            h-full
            object-cover
            select-none
            transition-all
            duration-700
            group-hover:scale-110
            "
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            "
          />

        </div>

      ))}

    </div>

  </div>

</section>

{selectedImage && (

  <div
    className="
    fixed
    inset-0
    z-[9999]
    bg-black/95
    flex
    items-center
    justify-center
    p-10
    "
    onClick={() => setSelectedImage(null)}
  >

    {/* CLOSE */}

    <button
      onClick={() => setSelectedImage(null)}
      className="
      absolute
      top-8
      right-8
      text-white
      text-5xl
      z-20
      "
    >
      ×
    </button>

    {/* PREVIOUS */}

    <button
      onClick={(e) => {
        e.stopPropagation();

        const currentIndex =
          currentGallery.indexOf(selectedImage);

        const prevIndex =
          currentIndex === 0
            ? currentGallery.length - 1
            : currentIndex - 1;

        setSelectedImage(currentGallery[prevIndex]);
      }}
      className="
      absolute
      left-8
      text-white
      text-6xl
      z-20
      hover:text-[#D4A85A]
      "
    >
      ←
    </button>

    {/* NEXT */}

    <button
      onClick={(e) => {
        e.stopPropagation();

        const currentIndex =
          currentGallery.indexOf(selectedImage);

        const nextIndex =
          currentIndex === currentGallery.length - 1
            ? 0
            : currentIndex + 1;

        setSelectedImage(currentGallery[nextIndex]);
      }}
      className="
      absolute
      right-8
      text-white
      text-6xl
      z-20
      hover:text-[#D4A85A]
      "
    >
      →
    </button>

    {/* IMAGE */}

    <img
      src={selectedImage}
      alt=""
      draggable={false}
      onClick={(e) => e.stopPropagation()}
      className="
      max-w-[90vw]
      max-h-[90vh]
      object-contain
      rounded-2xl
      "
    />

    {/* COUNTER */}

    <div
      className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      text-white
      tracking-[4px]
      "
    >
      {currentGallery.indexOf(selectedImage) + 1}
      {" / "}
      {currentGallery.length}
    </div>

  </div>

)}
<div
  className="
  max-w-[1900px]
  mx-auto
  px-5
  grid
  lg:grid-cols-2
  gap-40
  items-center
  "
>

  {/* LEFT SIDE */}

<div
  className="
  max-w-[800px]
  "
>

  <p
    className="
    uppercase
    tracking-[5px]
    text-[#D4A85A]
    text-lg
    mb-6
    "
  >
    Start Your Project
  </p>

  <h2
    className="
    text-5xl
    lg:text-7xl
    font-serif
    leading-[1.05]
    mb-8
    "
  >
    Let's Design
    <br />
    Something Exceptional
  </h2>

  <p
    className="
    text-xl
    text-gray-300
    leading-relaxed
    max-w-2xl
    mb-16
    "
  >
    Every interior project begins with a design consultation.
    We discuss your vision, lifestyle, functional needs,
    aesthetic preferences and project goals before preparing
    a tailored design strategy.
  </p>

  <div className="grid md:grid-cols-2 gap-10">

    <div>
      <div className="text-[#D4A85A] text-3xl mb-4">✦</div>

      <h3 className="text-xl font-medium mb-3">
        Personalized Design Direction
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Recommendations tailored specifically to your
        project, style preferences and lifestyle.
      </p>
    </div>

    <div>
      <div className="text-[#D4A85A] text-3xl mb-4">✦</div>

      <h3 className="text-xl font-medium mb-3">
        Residential & Commercial
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Luxury residences, apartments, offices,
        hospitality and mixed-use environments.
      </p>
    </div>

    <div>
      <div className="text-[#D4A85A] text-3xl mb-4">✦</div>

      <h3 className="text-xl font-medium mb-3">
        End-To-End Service
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Concept development, visualization,
        specifications and project guidance.
      </p>
    </div>

    <div>
      <div className="text-[#D4A85A] text-3xl mb-4">✦</div>

      <h3 className="text-xl font-medium mb-3">
        Fast Response
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Most consultation requests receive
        a response within 24 hours.
      </p>
    </div>

  </div>

</div>

{/* RIGHT SIDE */}

<div>

  <div
    className="
    bg-white/[0.03]
    backdrop-blur-xl
    border
    border-white/10
    rounded-[40px]
    p-12
    "
  >

    <p
      className="
      uppercase
      tracking-[4px]
      text-[#D4A85A]
      text-sm
      mb-6
      "
    >
      Design Consultation
    </p>

    <h3
      className="
      text-4xl
      font-serif
      mb-8
      "
    >
      Book Your Consultation
    </h3>

    <p
      className="
      text-gray-300
      leading-relaxed
      mb-10
      "
    >
      Tell us about your project, preferred style,
      budget expectations and timeline.
      Our consultation form adapts to residential,
      commercial, interior design, architecture
      and visualization projects.
    </p>

    <div className="space-y-5 mb-12">

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-gray-400">
          Residential Interiors
        </span>

        <span className="text-[#D4A85A]">
          ✓
        </span>
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-gray-400">
          Commercial Spaces
        </span>

        <span className="text-[#D4A85A]">
          ✓
        </span>
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-gray-400">
          Architecture Projects
        </span>

        <span className="text-[#D4A85A]">
          ✓
        </span>
      </div>

      <div className="flex items-center justify-between pb-2">
        <span className="text-gray-400">
          3D Visualization Services
        </span>

        <span className="text-[#D4A85A]">
          ✓
        </span>
      </div>

    </div>

    <a
      href="/consultation"
      className="
      block
      text-center
      py-6
      rounded-full
      bg-[#D4A85A]
      text-black
      font-medium
      text-lg
      transition-all
      duration-300
      hover:scale-105
      "
    >
      Book Consultation →
    </a>

  </div>

</div>
</div>
<section className="pt-48 pb-24">

  <div className="max-w-[1600px] mx-auto px-16">

    <p
      className="
      uppercase
      tracking-[5px]
      text-[#D4A85A]
      text-center
      mb-4
      "
    >
      Why Choose Us
    </p>

    <h2
      className="
      text-center
      text-5xl
      font-serif
      mb-20
      
      "
    >
      Designed Around Your Lifestyle
    </h2>

    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-8
      "
    >

      <div className="border border-white/10 rounded-3xl p-10">
       <Sparkles
    size={34}
    className="text-[#D4A85A] mb-6"
  />
        <h3 className="text-2xl font-serif mb-4">
          Tailored Design
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Every project is customized to reflect your
          lifestyle, vision and functional needs.
        </p>
      </div>

      <div className="border border-white/10 rounded-3xl p-10">
      <Gem
  size={34}
  className="text-[#D4A85A] mb-6"
/>
        <h3 className="text-2xl font-serif mb-4">
          Premium Materials
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Carefully selected finishes and materials
          that elevate both beauty and durability.
        </p>
      </div>

      <div className="border border-white/10 rounded-3xl p-10">
      <ClipboardCheck
  size={34}
  className="text-[#D4A85A] mb-6"
/>
        <h3 className="text-2xl font-serif mb-4">
          End-To-End Service
        </h3>

        <p className="text-gray-400 leading-relaxed">
          From concept development to final execution,
          we guide every stage of the journey.
        </p>
      </div>

      <div className="border border-white/10 rounded-3xl p-10">
      <Building2
  size={34}
  className="text-[#D4A85A] mb-6"
/>
        <h3 className="text-2xl font-serif mb-4">
          Timeless Aesthetics
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Spaces designed to remain elegant and relevant
          for years to come.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="pb-32">

  <div className="max-w-[1700px] mx-auto px-16">

    <p
      className="
      uppercase
      tracking-[5px]
      text-[#D4A85A]
      text-center
      mb-4
      "
    >
      Explore More
    </p>

    <h2
      className="
      text-center
      text-5xl
      font-serif
      mb-16
      "
    >
      You May Also Like
    </h2>

    <div
      className="
      grid
      md:grid-cols-5
      gap-6
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
            h-[220px]
            overflow-hidden
            rounded-3xl
            "
          >

            <img
              src={item.hero}
              alt={item.title}
              className="
              w-full
              h-full
              object-cover
              transition-all
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
              bottom-8
              left-8
              "
            >

              <h3
                className="
                text-3xl
                font-serif
                text-white
                mb-2
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-[#D4A85A]
                tracking-[3px]
                uppercase
                text-sm
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
<Footer />
  </main>
);
}