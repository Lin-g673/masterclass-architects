"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Star } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Phone,
  Mail,
  MapPin,} from "lucide-react";
  import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp
} from "react-icons/fa6";
import {
  BedDouble,
  Bath,
  Ruler,
  Building2,
} from "lucide-react";
export default function Home() {

const [currentHero, setCurrentHero] = useState(0);
const [currentVisualization, setCurrentVisualization] = useState(0);
const [currentProject, setCurrentProject] = useState(0);
const [currentInterior, setCurrentInterior] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentProject((prev) =>
      prev === featuredProjects.length - 1
        ? 0
        : prev + 1
    );
  }, 7000);

  return () => clearInterval(interval);
}, []);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentVisualization((prev) =>
      prev === visualizations.length - 1 ? 0 : prev + 1
    );
  }, 6000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
const interval = setInterval(() => {
setCurrentInterior((prev) =>
prev === interiorServices.length - 1
? 0
: prev + 1
);
}, 7000);

return () => clearInterval(interval);
}, []);

useEffect(() => {
  const duration =
    currentHero === 4
      ? 9000
      : 5000;

  const interval = setInterval(() => {
    setCurrentHero((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  }, duration);

  return () => clearInterval(interval);
}, [currentHero]);
  const services = [
  {
    title: "Architectural Design",
    desc: "Functional, aesthetic and innovative architectural solutions.",
    icon: "/architectural.svg",
  },
  {
    title: "Interior Design",
    desc: "Beautiful interiors tailored to your lifestyle and personality.",
    icon: "/interior.svg",
  },
  {
    title: "3D Visualization",
    desc: "High quality renders that bring your vision to life.",
    icon: "/visualization.svg",
  },
  {
    title: "House Plans",
    desc: "Bungalow, Maisonette & Mansion plans customized for you.",
    icon: "/houseplans.svg",
  },
  {
    title: "Construction Drawings",
    desc: "Accurate, detailed and build-ready drawings.",
    icon: "/drawings.svg",
  },
  {
    title: "Student Assistance",
    desc: "Academic support for architecture & design students.",
    icon: "/student.svg",
  },
];
const heroImages = [
  "/hero/concept.png",
  "/hero/interior.png",
  "/hero/exterior.png",
  "/hero/construction.png",
  "/hero/completed.png",
];

const heroMessages = [
  "Every remarkable space begins with a vision.",

  "Thoughtfully crafted interiors that elevate everyday living.",

  "Visualizing exceptional architecture before construction begins.",

  "Transforming concepts into reality through expert execution.",

  "From concept to completion, we create thoughtful architecture and interiors through integrated design, visualization and execution.",
];

const visualizations = [
  {
    nav: "Exterior",
    title: "Architectural Visualization",
    description:
      "High-end exterior renderings showcasing architecture, materials, lighting and environmental context.",
    media: "/visualization/exterior.png",
    type: "image",
  },

  {
    nav: "Interior",
    title: "Interior Visualization",
    description:
      "Photorealistic interiors showcasing textures, furniture, finishes and atmosphere with exceptional realism.",
    media: "/visualization/interior.png",
    type: "image",
  },

  {
    nav: "Animation",
    title: "Walkthrough Animation",
    description:
      "Cinematic fly-through videos that immerse viewers in the project and communicate scale, space and design intent.",
    media: "/visualization/walkthrough.mp4",
    type: "video",
  },

  {
    nav: "Marketing",
    title: "Real Estate Marketing Visuals",
    description:
      "Premium imagery, animations and presentation materials designed to attract buyers, investors and development partners.",
    media: "/visualization/marketing.mp4",
    type: "video",
  },
];

const featuredProjects = [
  {
    title: "Asembo Catholic Church",
    location: "Siaya, Kenya",
    category: "Religious Architecture",
    image: "/feature/asembo.png",
    description:
      "A contemporary place of worship designed to create a strong spiritual presence while embracing natural light and community gathering spaces.",
  },

  {
    title: "Benin Contemporary Maisonette",
    location: "Benin City",
    category: "Residential Architecture",
    image: "/feature/benin.png",
    description:
      "A modern family residence combining elegant proportions, clean architectural lines and luxurious contemporary living.",
  },

  {
    title: "Modern Family Bungalow",
    location: "Kakamega, Kenya",
    category: "Residential Architecture",
    image: "/feature/western.png",
    description:
      "A practical and beautiful bungalow designed around comfort, functionality and seamless indoor-outdoor living.",
  },
];

const interiorServices = [
{
  title: "Residential",
  category: "Luxury Homes • Villas • Apartments",
  image: "/minimalist/minimalistbed1.png",
  description:
    "Luxury residential interiors ranging from Modern Luxury, Japandi, Scandinavian, Minimalist, Classical and Coastal design styles.",
  button: "Explore Interior Styles",
  nav: "Residential",
  link: "/interiors",
},

{
  title: "Commercial",
  category: "Offices • Corporate Spaces • Law Firms",
  image: "/interiors/commercial/corporate/board4.png",
  description:
    "Professional workspaces designed to communicate prestige and productivity.",
  button: "Explore Commercial Design",
  nav: "Commercial",
  link: "/interiors#commercial",
},

{
  title: "Hospitality",
  category: "Restaurants • Cafés • Hotels",
  image: "/interiors/hospitality/restaurant/restaurant4.png",
  description:
    "Experiential hospitality interiors crafted to create memorable guest experiences.",
  button: "Explore Hospitality Design",
  nav: "Hospitality",
  link: "/interiors#hospitality",
},

{
  title: "Interior Fit-Out & Finishes",
  category: "Execution & Installation",
  image: "/fitout/hero/interiorfitout.png",
  description:
    "Complete interior execution including cabinetry, gypsum ceilings, lighting, wall paneling and flooring.",
  button: "Explore Fit-Out Services",
  nav: "Fit-Out",
  link: "/interiors#fitout",
},
];

 const projects = [
  {
    title: "Luxury Contemporary Villa",
    description:
      "A premium residence blending modern luxury with timeless elegance.",
    image: "/house-designs/villa.png",
    bedrooms: "5 Bedrooms",
    bathrooms: "6 Bathrooms",
    size: "550 SQM",
    floors: "2 Floors",
  },

  {
    title: "Modern Family Bungalow",
    description:
      "Spacious single-level living designed for comfort and functionality.",
    image: "/house-designs/bungalow.png",
    bedrooms: "4 Bedrooms",
    bathrooms: "4 Bathrooms",
    size: "240 SQM",
    floors: "1 Floor",
  },

  {
    title: "Elegant Maisonette",
    description:
      "Contemporary family living with generous spaces and natural light.",
    image: "/house-designs/maisonette.png",
    bedrooms: "4 Bedrooms",
    bathrooms: "5 Bathrooms",
    size: "320 SQM",
    floors: "2 Floors",
  },

  {
    title: "Modern Tropical Home",
    description:
      "A warm tropical retreat balancing indoor and outdoor living.",
    image: "/house-designs/tropical.jpg",
    bedrooms: "4 Bedrooms",
    bathrooms: "4 Bathrooms",
    size: "280 SQM",
    floors: "2 Floors",
  },

  {
    title: "Executive Apartment Block",
    description:
      "Efficient multi-family housing with modern amenities.",
    image: "/house-designs/apartment.png",
    bedrooms: "12 Units",
    bathrooms: "Multiple",
    size: "1200 SQM",
    floors: "4 Floors",
  },

  {
    title: "Mixed-Use Commercial Centre",
    description:
      "Retail and office spaces integrated into one vibrant development.",
    image: "/house-designs/commercial.png",
    bedrooms: "Retail + Offices",
    bathrooms: "Shared Facilities",
    size: "1800 SQM",
    floors: "3 Floors",
  },
];
return (
  <main className="bg-[#071321] text-white">
    
     {/* GLOBAL NAVBAR */}
<Navbar />

      {/* HERO */}
    <section
  className="
    relative
    min-h-[760px]
    h-[100svh]
    flex
    items-center
    overflow-hidden
  "
>
{heroImages.map((image, index) => (
  <div
    key={image}
    className={`
      absolute
      inset-0
      transition-opacity
      duration-[1800ms]
      ease-in-out
      ${
        currentHero === index
          ? "opacity-100"
          : "opacity-0"
      }
    `}
  >
    <img
      src={image}
      alt=""
      draggable={false}
      className="
        w-full
        h-full
        object-cover
        object-center
        select-none
      "
    />
  </div>
))}

 <div
  className="
  absolute
  inset-0
  bg-gradient-to-r
  from-[#071321]/95
  via-[#071321]/75
  via-50%
  to-transparent
  "
></div>
        <div className="relative max-w-[1500px]
mx-auto
w-full
px-5
sm:px-6
md:px-8
lg:px-10
xl:px-12
pt-20
md:pt-16">
          <div className="max-w-4xl">

            <div className="flex items-center gap-4 mb-5 md:mb-6">

  <div className="w-8 md:w-10 h-px bg-[#D4A85A] flex-shrink-0" />

  <p
    className="
      font-[var(--font-avenir)]
      uppercase
      tracking-[4px]
      md:tracking-[7px]
      text-[#D4A85A]
      text-[9px]
      md:text-[11px]
      whitespace-nowrap
    "
  >
    Welcome To Apiyo Design Studio
  </p>

  <div className="w-8 md:w-10 h-px bg-[#D4A85A] flex-shrink-0" />

</div>

           <h1
  className="
  font-heading
  text-[44px]
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  xl:text-[78px]
  font-light
  leading-[0.95]
  tracking-[-0.02em]
  mb-6
  md:mb-7
  max-w-[850px]
  "
>
  VISUALIZE
  <br />

  <span className="text-[#D4A85A]">
    DESIGN
  </span>

  <br />

  BUILD
</h1>

            <div className="w-24 h-[2px] bg-[#D4A85A] mb-8"></div>

            <p
  key={currentHero}
  className="
  font-[var(--font-avenir)]
  text-gray-200
  text-[12px]
  sm:text-[13px]
  md:text-sm
  leading-relaxed
  mb-6
  md:mb-7
  max-w-xl
  md:max-w-2xl
  animate-fadeUp
"
>
  {heroMessages[currentHero]}
</p>

            <div className="flex flex-wrap gap-4">
              <Link
  href="/consultation"
  className="
    inline-flex
    items-center
    justify-center
    bg-[#D4A85A]
    text-black
    px-6
    md:px-8
    py-3
    md:py-3.5
    rounded-full
    font-[var(--font-avenir)]
    text-xs
    md:text-sm
    font-medium
    transition-all
    duration-300
    hover:scale-[1.03]
    hover:shadow-[0_0_30px_rgba(212,168,90,0.35)]
  "
>
  Book Free Consultation
</Link>

              <Link
  href="#services"
  className="
    inline-flex
    items-center
    justify-center
    border
    border-[#D4A85A]
    text-[#D4A85A]
    px-6
    md:px-8
    py-3
    md:py-3.5
    rounded-full
    font-[var(--font-avenir)]
    text-xs
    md:text-sm
    transition-all
    duration-300
    hover:bg-[#D4A85A]
    hover:text-black
  "
>
  Our Services
</Link>
            </div>
          </div>
        </div>
      </section>

{/* FLOATING STATS */}

<section className="relative z-20 -mt-20 md:-mt-16">
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
    grid-cols-2
    md:grid-cols-4
    gap-2
    md:gap-3
    max-w-[760px]
  "
>

      {/* STAT 1 */}
      <div
        className="
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          rounded-xl
          px-4
py-1.5
md:px-5
md:py-2
          shadow-[0_0_15px_rgba(212,168,90,0.08)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_0_25px_rgba(212,168,90,0.18)]
        "
      >
        <h3
          className="
            font-heading
            text-lg
md:text-xl
            font-light
            text-[#D4A85A]
          "
        >
          5+
        </h3>

        <p
          className="
            mt-0.5
            font-[var(--font-avenir)]
            text-white/80
            text-[10px]
            sm:text-[11px]
            md:text-xs
            leading-tight
          "
        >
          Years Experience
        </p>
      </div>


      {/* STAT 2 */}
      <div
        className="
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          rounded-xl
          px-4
py-1.5
md:px-5
md:py-2
          shadow-[0_0_15px_rgba(212,168,90,0.08)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_0_25px_rgba(212,168,90,0.18)]
        "
      >
        <h3
          className="
            font-heading
            text-lg
md:text-xl
            font-light
            text-[#D4A85A]
          "
        >
          100+
        </h3>

        <p
          className="
            mt-0.5
            font-[var(--font-avenir)]
            text-white/80
            text-[10px]
            sm:text-[11px]
            md:text-xs
            leading-tight
          "
        >
          Projects Designed
        </p>
      </div>


      {/* STAT 3 */}
      <div
        className="
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          rounded-xl
          px-4
py-1.5
md:px-5
md:py-2
          shadow-[0_0_15px_rgba(212,168,90,0.08)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_0_25px_rgba(212,168,90,0.18)]
        "
      >
        <h3
          className="
            font-heading
            text-lg
md:text-xl
            font-light
            text-[#D4A85A]
          "
        >
          47
        </h3>

        <p
          className="
            mt-0.5
            font-[var(--font-avenir)]
            text-white/80
            text-[10px]
            sm:text-[11px]
            md:text-xs
            leading-tight
          "
        >
          Counties Covered
        </p>
      </div>


      {/* STAT 4 */}
      <div
        className="
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          rounded-xl
          px-4
py-1.5
md:px-5
md:py-2
          shadow-[0_0_15px_rgba(212,168,90,0.08)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_0_25px_rgba(212,168,90,0.18)]
        "
      >
        <h3
          className="
            font-heading
            text-lg
md:text-xl
            font-light
            text-[#D4A85A]
          "
        >
          100%
        </h3>

        <p
          className="
            mt-0.5
            font-[var(--font-avenir)]
            text-white/80
            text-[10px]
            sm:text-[11px]
            md:text-xs
            leading-tight
          "
        >
          Tailored Solutions
        </p>
      </div>

    </div>
  </div>
</section>


{/* PROJECTS */}
      {/* PROJECTS */}
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

         <div className="flex items-center gap-4 mb-5 md:mb-6">
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
    Popular House Designs
  </p>

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />
</div>

          <h2
  className="
    font-heading
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-light
    leading-[1.05]
    mb-8
    md:mb-10
  "
>
  Explore Our Most Requested Designs
</h2>
<div
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-5
    md:gap-6
    lg:gap-8
    w-full
  "
>

            {projects.map((project) => (
  <div
 className="
group
relative
overflow-hidden
rounded-3xl
bg-transparent
border
border-[#1c3a60]/50
shadow-[0_10px_30px_rgba(28,58,96,0.25)]
transition-all
duration-500
hover:-translate-y-3
hover:border-[#D4A85A]
hover:shadow-[0_20px_50px_rgba(212,168,90,0.28)]
"
>
 
{/* GOLD GLOW */}
<div
  className="
  absolute
  inset-0
  opacity-0
  transition-all
  duration-500
  pointer-events-none
  group-hover:opacity-100
  group-hover:shadow-[15px_15px_40px_rgba(212,168,90,0.25)]
  "
></div>

  {/* IMAGE */}
  <div className="overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="
      w-full
      h-[300px]
sm:h-[340px]
md:h-[360px]
lg:h-[390px]
      object-cover
      transition-all
      duration-700
      group-hover:scale-105
      "
    />
  </div>
  {/* CONTENT BELOW IMAGE */}
<div
  className="
p-5
md:p-6
  backdrop-blur-xl
  bg-[#071321]/85
  border-t
  border-white/10
  transition-all
  duration-500
  group-hover:bg-white/95
  "
>
    {/* ICON ROW */}
    <div className="grid
grid-cols-2
gap-3
text-xs
md:text-sm
text-gray-700
mb-5">

      <div className="flex items-center gap-2">
        <BedDouble size={18} />
        <span>{project.bedrooms}</span>
      </div>

      <div className="flex items-center gap-2">
        <Bath size={18} />
        <span>{project.bathrooms}</span>
      </div>

      <div className="flex items-center gap-2">
        <Ruler size={18} />
        <span>{project.size}</span>
      </div>

      <div className="flex items-center gap-2">
        <Building2 size={18} />
        <span>{project.floors}</span>
      </div>

    </div>

    <Link
  href="/house-plans"
  className="
    inline-flex
    font-[var(--font-avenir)]
    text-xs
    md:text-sm
    font-medium
    text-[#1c3a60]
    hover:text-[#D4A85A]
    transition-all
  "
>
  Explore Design →
</Link>

  </div>

</div>
))}
          </div>
        </div>
      </section>

{/* =====================================================
    CUSTOMIZE YOUR PLAN
===================================================== */}

<section className="py-10 md:py-12 lg:py-14 overflow-hidden bg-[#071321]">

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
        lg:grid-cols-[0.78fr_1.22fr]
        gap-10
        md:gap-12
        lg:gap-10
        xl:gap-12
        items-center
      "
    >

      {/* =================================================
          LEFT CONTENT
      ================================================= */}
      <div className="max-w-[520px]">

        {/* EYEBROW */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5 md:mb-6">

          <div className="w-8 sm:w-10 h-px bg-[#D4A85A] flex-shrink-0" />

          <p
            className="
              font-[var(--font-avenir)]
              uppercase
              tracking-[4px]
              md:tracking-[7px]
              text-[#D4A85A]
              text-[9px]
              md:text-[10px]
              whitespace-nowrap
            "
          >
            Designed Around You
          </p>

          <div className="w-8 sm:w-10 h-px bg-[#D4A85A] flex-shrink-0" />

        </div>


        {/* HEADING */}
        <h2
          className="
            font-heading
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-light
            leading-[1.05]
            mb-5
            md:mb-6
          "
        >
          Customize Your
          <br />
          Dream Home
        </h2>


        {/* DESCRIPTION */}
        <p
          className="
            font-[var(--font-avenir)]
            text-[12px]
            sm:text-[13px]
            md:text-sm
            text-gray-300
            leading-relaxed
            max-w-[470px]
            mb-6
            md:mb-7
          "
        >
          Start with a design you love, then tailor it to your
          lifestyle, plot and location. We refine the layout and
          details so the home feels truly yours.
        </p>


        {/* FEATURES */}
        <div
          className="
            space-y-2.5
            md:space-y-3
            mb-7
          "
        >

          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A85A] flex-shrink-0" />

            <span className="font-[var(--font-avenir)] text-[11px] md:text-xs text-white/80">
              Choose a house design you love
            </span>
          </div>


          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A85A] flex-shrink-0" />

            <span className="font-[var(--font-avenir)] text-[11px] md:text-xs text-white/80">
              Adjust layouts and room dimensions
            </span>
          </div>


          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A85A] flex-shrink-0" />

            <span className="font-[var(--font-avenir)] text-[11px] md:text-xs text-white/80">
              Adapt the design to your plot
            </span>
          </div>


          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A85A] flex-shrink-0" />

            <span className="font-[var(--font-avenir)] text-[11px] md:text-xs text-white/80">
              Receive professional approval drawings
            </span>
          </div>

        </div>


        {/* BUTTON */}
        <Link
          href="/house-plans"
          className="
            inline-flex
            items-center
            justify-center
            bg-[#D4A85A]
            text-black
            px-6
            md:px-7
            py-3
            rounded-full
            font-[var(--font-avenir)]
            text-[11px]
            md:text-xs
            font-medium
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_30px_rgba(212,168,90,0.35)]
          "
        >
          Customize Your Plan
        </Link>

      </div>


      {/* =================================================
          RIGHT VISUAL
      ================================================= */}
      <div
        className="
          relative
          w-full
          min-h-[420px]
          sm:min-h-[470px]
          lg:min-h-[440px]
          xl:min-h-[470px]
          flex
          flex-col
          items-center
          lg:block
        "
      >

        {/* BLUEPRINT */}
        <div
          className="
            relative
            w-full
            max-w-[560px]
            sm:max-w-[620px]

            lg:absolute
            lg:left-[-40px]
            lg:top-1/2
            lg:-translate-y-1/2
            lg:max-w-[500px]

            xl:left-[-70px]
            xl:max-w-[560px]
          "
        >
          <img
            src="/blueprint/blueprint.png"
            alt="Architectural floor plan"
            className="
              w-full
              h-auto
              object-contain
              opacity-50
            "
          />
        </div>


        {/* =================================================
            HELP CARD
        ================================================= */}
        <div
          className="
            relative
            z-20
            w-full
            max-w-[300px]
            mt-5

            sm:max-w-[310px]

            lg:absolute
            lg:right-0
            lg:top-1/2
            lg:-translate-y-1/2
            lg:mt-0

            xl:max-w-[320px]

            bg-[#071321]/95
            backdrop-blur-xl
            border
            border-white/15
            rounded-2xl
            p-5
            md:p-5
            xl:p-6
          "
        >

          {/* EYEBROW */}
          <div className="flex items-center gap-2.5 mb-3">

            <div className="w-5 h-px bg-[#D4A85A] flex-shrink-0" />

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[3px]
                text-[#D4A85A]
                text-[7px]
                whitespace-nowrap
              "
            >
              Need Assistance?
            </p>

            <div className="w-5 h-px bg-[#D4A85A] flex-shrink-0" />

          </div>


          {/* CARD HEADING */}
          <h3
            className="
              font-heading
              text-2xl
              lg:text-[26px]
              font-light
              leading-[1.05]
              mb-3
            "
          >
            Personalized help
            <br />
            is just a click away.
          </h3>


          {/* CARD TEXT */}
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              md:text-[11px]
              text-gray-300
              leading-relaxed
              mb-4
            "
          >
            Need guidance? Tell us about your project and we’ll help
            you choose, customize and plan the right design solution.
          </p>


          {/* CARD BUTTON */}
          <Link
            href="/consultation"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-[#D4A85A]
              text-[#D4A85A]
              rounded-full
              px-4
              py-2
              font-[var(--font-avenir)]
              text-[9px]
              md:text-[10px]
              transition-all
              duration-300
              hover:bg-[#D4A85A]
              hover:text-black
            "
          >
            Send Us A Message →
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    INTERIOR DESIGN
===================================================== */}

{/* INTERIOR DESIGN INTRO */}
<section className="pt-10 md:pt-12 lg:pt-14 pb-8 md:pb-10 bg-[#071321]">

  <div
    className="
      max-w-[1500px]
      mx-auto
      px-5
      sm:px-6
      md:px-8
      lg:px-10
      xl:px-12
      text-center
    "
  >

    {/* EYEBROW */}
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
        Interior Design
      </p>

      <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

    </div>


    {/* HEADING */}
    <h2
      className="
        font-heading
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-light
        leading-[1.05]
        mb-6
      "
    >
      Luxury interiors
      <br className="hidden sm:block" />
      {" "}crafted for every lifestyle
    </h2>


    {/* DESCRIPTION */}
    <p
      className="
        max-w-3xl
        mx-auto
        font-[var(--font-avenir)]
        text-sm
        md:text-base
        text-gray-300
        leading-relaxed
      "
    >
      From private residences and executive offices
      to restaurants and complete fit-out solutions,
      we design interiors that balance elegance,
      functionality and timeless appeal.
    </p>

  </div>

</section>


{/* INTERIOR DESIGN SHOWCASE */}
<section
  className="
    relative
    min-h-[620px]
    md:min-h-[680px]
    lg:min-h-[720px]
    overflow-hidden
  "
>

  {/* BACKGROUND IMAGE */}
  <div
    key={currentInterior}
    className="
      absolute
      inset-0
      animate-fadeVisual
    "
  >
    <img
      src={interiorServices[currentInterior].image}
      alt={interiorServices[currentInterior].title}
      className="
        w-full
        h-full
        object-cover
        object-center
      "
    />
  </div>


  {/* DARK OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#071321]/95
      via-[#071321]/75
      md:via-[#071321]/65
      to-[#071321]/20
    "
  />


  {/* MAIN CONTENT */}
  <div
    className="
      relative
      z-10
      min-h-[620px]
      md:min-h-[680px]
      lg:min-h-[720px]
      max-w-[1500px]
      mx-auto
      px-5
      sm:px-6
      md:px-8
      lg:px-10
      xl:px-12
      pt-16
      pb-32
      md:pb-28
      flex
      items-center
    "
  >

    <div
      key={currentInterior}
      className="
        max-w-xl
        md:max-w-2xl
        animate-fadeUp
      "
    >

      {/* CURRENT CATEGORY */}
      <div className="flex items-center gap-4 mb-5 md:mb-6">

        <div className="w-10 h-px bg-[#D4A85A]" />

        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[4px]
            md:tracking-[6px]
            text-[#D4A85A]
            text-[9px]
            md:text-[10px]
          "
        >
          {interiorServices[currentInterior].category}
        </p>

      </div>


      {/* TITLE */}
      <h2
        className="
          font-heading
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-light
          leading-[1.02]
          mb-5
          md:mb-6
        "
      >
        {interiorServices[currentInterior].title}
      </h2>


      {/* GOLD DIVIDER */}
      <div
        className="
          h-px
          w-16
          md:w-20
          bg-[#D4A85A]
          mb-5
          md:mb-6
        "
      />


      {/* DESCRIPTION */}
      <p
        className="
          font-[var(--font-avenir)]
          text-sm
          md:text-base
          text-gray-200
          leading-relaxed
          max-w-xl
          mb-7
          md:mb-8
        "
      >
        {interiorServices[currentInterior].description}
      </p>


      {/* LINK */}
      <Link
        href={interiorServices[currentInterior].link}
        className="
          inline-flex
          items-center
          justify-center
          border
          border-[#D4A85A]
          text-[#D4A85A]
          px-6
          md:px-8
          py-3
          md:py-3.5
          rounded-full
          font-[var(--font-avenir)]
          text-xs
          md:text-sm
          font-medium
          transition-all
          duration-300
          hover:bg-[#D4A85A]
          hover:text-black
          hover:shadow-[0_0_25px_rgba(212,168,90,0.30)]
        "
      >
        {interiorServices[currentInterior].button}
      </Link>

    </div>

  </div>


  {/* =====================================================
      CATEGORY NAVIGATION
  ===================================================== */}
  <div
    className="
      absolute
      z-20
      bottom-5
      md:bottom-8
      left-0
      right-0
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

      {/* MOBILE SWIPE HINT */}
      <p
        className="
          md:hidden
          font-[var(--font-avenir)]
          uppercase
          tracking-[3px]
          text-[8px]
          text-white/50
          mb-3
        "
      >
        Swipe To Explore →
      </p>


      {/* NAVIGATION */}
      <div
        className="
          flex
          items-center
          gap-6
          md:gap-8
          lg:gap-10
          overflow-x-auto
          pb-4
          md:pb-3
          scrollbar-hide
        "
      >

        {interiorServices.map((service, index) => (

          <button
            key={service.title}
            type="button"
            onClick={() => setCurrentInterior(index)}
            className={`
              relative
              flex-none
              pb-2
              font-[var(--font-avenir)]
              uppercase
              tracking-[2px]
              md:tracking-[3px]
              text-[10px]
              md:text-xs
              whitespace-nowrap
              transition-all
              duration-300
              ${
                currentInterior === index
                  ? "text-[#D4A85A]"
                  : "text-white/60 hover:text-white"
              }
            `}
          >

            {service.nav}

            {currentInterior === index && (
              <span
                className="
                  absolute
                  left-0
                  bottom-0
                  h-px
                  w-full
                  bg-[#D4A85A]
                "
              />
            )}

          </button>

        ))}

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    3D VISUALIZATION INTRO
===================================================== */}

<section
  className="
    bg-[#071321]
    pt-10
    md:pt-12
    lg:pt-14
    pb-8
    md:pb-10
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
      text-center
    "
  >

    {/* EYEBROW */}
    <div
      className="
        flex
        items-center
        justify-center
        gap-3
        sm:gap-4
        mb-5
        md:mb-6
      "
    >

      <div className="w-8 sm:w-10 h-px bg-[#D4A85A]" />

      <p
        className="
          font-[var(--font-avenir)]
          uppercase
          tracking-[4px]
          md:tracking-[7px]
          text-[#D4A85A]
          text-[9px]
          md:text-[10px]
          whitespace-nowrap
        "
      >
        3D Visualization
      </p>

      <div className="w-8 sm:w-10 h-px bg-[#D4A85A]" />

    </div>


    {/* HEADING */}
    <h2
      className="
        font-heading
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-light
        leading-[1.05]
        max-w-4xl
        mx-auto
        mb-5
      "
    >
      See the design
      <br className="hidden sm:block" />
      {" "}before it is built.
    </h2>


    {/* DESCRIPTION */}
    <p
      className="
        font-[var(--font-avenir)]
        text-sm
        md:text-base
        text-gray-400
        leading-relaxed
        max-w-2xl
        mx-auto
      "
    >
      Explore architectural spaces through detailed visualizations
      that communicate form, materials, lighting and atmosphere
      before construction begins.
    </p>

  </div>

</section>

{/* =====================================================
    3D VISUALIZATION
===================================================== */}

<section
  className="
    relative
    min-h-[620px]
    md:min-h-[680px]
    lg:min-h-[720px]
    overflow-hidden
  "
>

  {/* MEDIA */}
  <div
    key={currentVisualization}
    className="
      absolute
      inset-0
      animate-fadeVisual
    "
  >

    {visualizations[currentVisualization].type === "video" ? (

      <video
        key={visualizations[currentVisualization].media}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/3d/3d1.png"
        className="
          w-full
          h-full
          object-cover
          object-center
        "
      >
        <source
          src={visualizations[currentVisualization].media}
          type="video/mp4"
        />
      </video>

    ) : (

      <img
        src={visualizations[currentVisualization].media}
        alt={visualizations[currentVisualization].title}
        className="
          w-full
          h-full
          object-cover
          object-center
          animate-cinematicZoom
        "
      />

    )}

  </div>


  {/* DARK OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#071321]/95
      via-[#071321]/70
      md:via-[#071321]/55
      to-[#071321]/15
    "
  />


  {/* MAIN CONTENT */}
  <div
    className="
      relative
      z-10
      min-h-[620px]
      md:min-h-[680px]
      lg:min-h-[720px]
      max-w-[1500px]
      mx-auto
      px-5
      sm:px-6
      md:px-8
      lg:px-10
      xl:px-12
      pt-16
      pb-32
      md:pb-28
      flex
      items-center
    "
  >

    <div
      key={currentVisualization}
      className="
        max-w-xl
        md:max-w-2xl
        animate-fadeUp
      "
    >

      {/* EYEBROW */}
      <div className="flex items-center gap-4 mb-5 md:mb-6">

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
          3D Visualization
        </p>

        <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

      </div>


      {/* TITLE */}
      <h2
        className="
          font-heading
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-light
          leading-[1.02]
          mb-5
          md:mb-6
        "
      >
        {visualizations[currentVisualization].title}
      </h2>


      {/* GOLD LINE */}
      <div
        className="
          h-px
          w-16
          md:w-20
          bg-[#D4A85A]
          mb-5
          md:mb-6
          animate-goldLine
        "
      />


      {/* DESCRIPTION */}
      <p
        className="
          font-[var(--font-avenir)]
          text-sm
          md:text-base
          text-gray-200
          leading-relaxed
          max-w-xl
          mb-7
          md:mb-8
        "
      >
        {visualizations[currentVisualization].description}
      </p>


      {/* BUTTON */}
      <Link
        href="/3d"
        className="
          inline-flex
          items-center
          justify-center
          border
          border-[#D4A85A]
          text-[#D4A85A]
          px-6
          md:px-8
          py-3
          md:py-3.5
          rounded-full
          font-[var(--font-avenir)]
          text-xs
          md:text-sm
          font-medium
          transition-all
          duration-300
          hover:bg-[#D4A85A]
          hover:text-black
          hover:shadow-[0_0_25px_rgba(212,168,90,0.30)]
        "
      >
        Explore Visualization →
      </Link>

    </div>

  </div>


  {/* =====================================================
      VISUALIZATION NAVIGATION
  ===================================================== */}
  <div
    className="
      absolute
      z-20
      bottom-5
      md:bottom-8
      left-0
      right-0
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

      {/* MOBILE SWIPE HINT */}
      <p
        className="
          md:hidden
          font-[var(--font-avenir)]
          uppercase
          tracking-[3px]
          text-[8px]
          text-white/50
          mb-3
        "
      >
        Swipe To Explore →
      </p>


      {/* NAVIGATION */}
      <div
        className="
          flex
          items-center
          gap-6
          md:gap-8
          lg:gap-10
          overflow-x-auto
          pb-4
          md:pb-3
          scrollbar-hide
        "
      >

        {visualizations.map((item, index) => (

          <button
            key={index}
            type="button"
            onClick={() => setCurrentVisualization(index)}
            className={`
              relative
              flex-none
              pb-2
              font-[var(--font-avenir)]
              uppercase
              tracking-[2px]
              md:tracking-[3px]
              text-[10px]
              md:text-xs
              whitespace-nowrap
              transition-all
              duration-300
              ${
                currentVisualization === index
                  ? "text-[#D4A85A]"
                  : "text-white/60 hover:text-white"
              }
            `}
          >

            {item.nav}

            {currentVisualization === index && (
              <span
                className="
                  absolute
                  left-0
                  bottom-0
                  h-px
                  w-full
                  bg-[#D4A85A]
                "
              />
            )}

          </button>

        ))}

      </div>

    </div>

  </div>

</section>


{/* SECTION DIVIDER */}
<section className="py-8 md:py-10 bg-[#071321]">

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
        h-px
        bg-gradient-to-r
        from-transparent
        via-[#D4A85A]/40
        to-transparent
      "
    />

  </div>

</section>

{/* =====================================================
    FEATURED PROJECTS
===================================================== */}

{/* FEATURED PROJECTS INTRO */}
<section className="pt-10 md:pt-12 lg:pt-14 pb-8 md:pb-10 bg-[#071321]">

  <div
    className="
      max-w-[1500px]
      mx-auto
      px-5
      sm:px-6
      md:px-8
      lg:px-10
      xl:px-12
      text-center
    "
  >

    {/* EYEBROW */}
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
        Featured Projects
      </p>

      <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

    </div>


    {/* HEADING */}
    <h2
      className="
        font-heading
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-light
        leading-[1.05]
        mb-6
      "
    >
      Architecture designed
      <br className="hidden sm:block" />
      {" "}to leave a lasting impression
    </h2>


    {/* DESCRIPTION */}
    <p
      className="
        max-w-3xl
        mx-auto
        font-[var(--font-avenir)]
        text-sm
        md:text-base
        text-gray-300
        leading-relaxed
      "
    >
      A selection of residential, religious and commercial projects
      showcasing our approach to design excellence, functionality
      and timeless architectural expression.
    </p>

  </div>

</section>


{/* FEATURED PROJECTS SHOWCASE */}
<section
  className="
    relative
    min-h-[620px]
    md:min-h-[680px]
    lg:min-h-[720px]
    overflow-hidden
  "
>

  {/* IMAGE */}
  <div
    key={currentProject}
    className="
      absolute
      inset-0
      animate-fadeVisual
    "
  >

    <img
      src={featuredProjects[currentProject].image}
      alt={featuredProjects[currentProject].title}
      className="
        w-full
        h-full
        object-cover
        object-center
      "
    />

  </div>


  {/* DARK OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#071321]/95
      via-[#071321]/75
      md:via-[#071321]/60
      to-[#071321]/15
    "
  />


  {/* MAIN CONTENT */}
  <div
    className="
      relative
      z-10
      min-h-[620px]
      md:min-h-[680px]
      lg:min-h-[720px]
      max-w-[1500px]
      mx-auto
      px-5
      sm:px-6
      md:px-8
      lg:px-10
      xl:px-12
      pt-16
      pb-32
      md:pb-28
      flex
      items-center
    "
  >

    <div
      key={currentProject}
      className="
        max-w-xl
        md:max-w-2xl
        animate-fadeUp
      "
    >

      {/* CATEGORY */}
      <div className="flex items-center gap-4 mb-5 md:mb-6">

        <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[3px]
            md:tracking-[5px]
            text-[#D4A85A]
            text-[9px]
            md:text-[10px]
            leading-relaxed
          "
        >
          {featuredProjects[currentProject].category}
          {" • "}
          {featuredProjects[currentProject].location}
        </p>

      </div>


      {/* PROJECT TITLE */}
      <h2
        className="
          font-heading
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-light
          leading-[1.02]
          mb-5
          md:mb-6
        "
      >
        {featuredProjects[currentProject].title}
      </h2>


      {/* GOLD DIVIDER */}
      <div
        className="
          h-px
          w-16
          md:w-20
          bg-[#D4A85A]
          mb-5
          md:mb-6
        "
      />


      {/* DESCRIPTION */}
      <p
        className="
          font-[var(--font-avenir)]
          text-sm
          md:text-base
          text-gray-200
          leading-relaxed
          max-w-xl
          mb-7
          md:mb-8
        "
      >
        {featuredProjects[currentProject].description}
      </p>


      {/* PROJECT LINK */}
      <Link
        href="/projects"
        className="
          inline-flex
          items-center
          justify-center
          border
          border-[#D4A85A]
          text-[#D4A85A]
          px-6
          md:px-8
          py-3
          md:py-3.5
          rounded-full
          font-[var(--font-avenir)]
          text-xs
          md:text-sm
          font-medium
          transition-all
          duration-300
          hover:bg-[#D4A85A]
          hover:text-black
          hover:shadow-[0_0_25px_rgba(212,168,90,0.30)]
        "
      >
        View Project →
      </Link>

    </div>

  </div>


  {/* =====================================================
      PROJECT NAVIGATION
  ===================================================== */}
  <div
    className="
      absolute
      z-20
      bottom-5
      md:bottom-8
      left-0
      right-0
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

      {/* MOBILE SWIPE HINT */}
      <p
        className="
          md:hidden
          font-[var(--font-avenir)]
          uppercase
          tracking-[3px]
          text-[8px]
          text-white/50
          mb-3
        "
      >
        Swipe To Explore →
      </p>


      {/* PROJECT NAVIGATION */}
      <div
        className="
          flex
          items-center
          gap-6
          md:gap-8
          lg:gap-10
          overflow-x-auto
          pb-4
          md:pb-3
          scrollbar-hide
        "
      >

        {featuredProjects.map((project, index) => (

          <button
            key={project.title}
            type="button"
            onClick={() => setCurrentProject(index)}
            className={`
              relative
              flex-none
              pb-2
              font-[var(--font-avenir)]
              uppercase
              tracking-[2px]
              md:tracking-[3px]
              text-[10px]
              md:text-xs
              whitespace-nowrap
              transition-all
              duration-300
              ${
                currentProject === index
                  ? "text-[#D4A85A]"
                  : "text-white/60 hover:text-white"
              }
            `}
          >

            {project.location}

            {currentProject === index && (
              <span
                className="
                  absolute
                  left-0
                  bottom-0
                  h-px
                  w-full
                  bg-[#D4A85A]
                "
              />
            )}

          </button>

        ))}

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    WHY CHOOSE APIYO DESIGN STUDIO
===================================================== */}

<section className="py-10 md:py-12 lg:py-14 bg-[#071321]">

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

    {/* =================================================
        INTRO
    ================================================= */}
    <div
      className="
        grid
        lg:grid-cols-[1.1fr_0.9fr]
        gap-8
        lg:gap-14
        items-end
        mb-8
        md:mb-10
      "
    >

      {/* LEFT */}
      <div>

        {/* EYEBROW */}
        <div className="flex items-center gap-4 mb-5 md:mb-6">

          <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

          <p
            className="
              font-[var(--font-avenir)]
              uppercase
              tracking-[4px]
              md:tracking-[7px]
              text-[#D4A85A]
              text-[9px]
              md:text-xs
              leading-relaxed
            "
          >
            Why Apiyo Design Studio
          </p>

          <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

        </div>


        {/* HEADING */}
        <h2
          className="
            font-heading
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-light
            leading-[1.05]
            max-w-3xl
          "
        >
          Where visionary design
          meets technical precision.
        </h2>

      </div>


      {/* RIGHT */}
      <div className="lg:pb-1">

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            md:text-base
            text-gray-300
            leading-relaxed
            max-w-xl
            mb-5
          "
        >
          From architecture and interiors to visualization and
          technical documentation, we bring every discipline together
          to create thoughtful, functional and enduring spaces.
        </p>


        <Link
          href="/about"
          className="
            inline-flex
            items-center
            gap-3
            font-[var(--font-avenir)]
            text-[10px]
            md:text-xs
            uppercase
            tracking-[3px]
            text-[#D4A85A]
            transition-all
            duration-300
            hover:gap-5
          "
        >
          Discover Our Studio
          <span>→</span>
        </Link>

      </div>

    </div>


    {/* =================================================
        VALUE CARDS
    ================================================= */}
    <div
      className="
        grid
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
        md:gap-5
      "
    >

      {/* CARD 01 */}
      <div
        className="
          group
          border
          border-white/10
          rounded-2xl
          p-5
          md:p-6
          lg:p-7
          bg-white/[0.02]
          transition-all
          duration-500
          hover:bg-white
          hover:-translate-y-1
          hover:border-[#D4A85A]
          hover:shadow-[0_15px_35px_rgba(212,168,90,0.12)]
        "
      >

        <span
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            text-[#D4A85A]
          "
        >
          01
        </span>


        <h3
          className="
            font-heading
            text-2xl
            md:text-3xl
            font-light
            leading-tight
            mt-5
            mb-3
            text-white
            transition-colors
            duration-500
            group-hover:text-[#071321]
          "
        >
          End-to-End
          <br />
          Design
        </h3>


        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            md:text-sm
            text-gray-400
            leading-relaxed
            transition-colors
            duration-500
            group-hover:text-gray-700
          "
        >
          From concept development and planning to visualization
          and implementation support, everything is coordinated
          under one roof.
        </p>

      </div>


      {/* CARD 02 */}
      <div
        className="
          group
          border
          border-white/10
          rounded-2xl
          p-5
          md:p-6
          lg:p-7
          bg-white/[0.02]
          transition-all
          duration-500
          hover:bg-white
          hover:-translate-y-1
          hover:border-[#D4A85A]
          hover:shadow-[0_15px_35px_rgba(212,168,90,0.12)]
        "
      >

        <span
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            text-[#D4A85A]
          "
        >
          02
        </span>


        <h3
          className="
            font-heading
            text-2xl
            md:text-3xl
            font-light
            leading-tight
            mt-5
            mb-3
            text-white
            transition-colors
            duration-500
            group-hover:text-[#071321]
          "
        >
          Visualize Before
          <br />
          You Build
        </h3>


        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            md:text-sm
            text-gray-400
            leading-relaxed
            transition-colors
            duration-500
            group-hover:text-gray-700
          "
        >
          Experience your project through photorealistic
          visualization and walkthroughs before construction
          begins.
        </p>

      </div>


      {/* CARD 03 */}
      <div
        className="
          group
          border
          border-white/10
          rounded-2xl
          p-5
          md:p-6
          lg:p-7
          bg-white/[0.02]
          transition-all
          duration-500
          hover:bg-white
          hover:-translate-y-1
          hover:border-[#D4A85A]
          hover:shadow-[0_15px_35px_rgba(212,168,90,0.12)]
        "
      >

        <span
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            text-[#D4A85A]
          "
        >
          03
        </span>


        <h3
          className="
            font-heading
            text-2xl
            md:text-3xl
            font-light
            leading-tight
            mt-5
            mb-3
            text-white
            transition-colors
            duration-500
            group-hover:text-[#071321]
          "
        >
          Designed Around
          <br />
          You
        </h3>


        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            md:text-sm
            text-gray-400
            leading-relaxed
            transition-colors
            duration-500
            group-hover:text-gray-700
          "
        >
          Every project responds to your site, budget,
          lifestyle, requirements and long-term vision.
        </p>

      </div>


      {/* CARD 04 */}
      <div
        className="
          group
          border
          border-white/10
          rounded-2xl
          p-5
          md:p-6
          lg:p-7
          bg-white/[0.02]
          transition-all
          duration-500
          hover:bg-white
          hover:-translate-y-1
          hover:border-[#D4A85A]
          hover:shadow-[0_15px_35px_rgba(212,168,90,0.12)]
        "
      >

        <span
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            text-[#D4A85A]
          "
        >
          04
        </span>


        <h3
          className="
            font-heading
            text-2xl
            md:text-3xl
            font-light
            leading-tight
            mt-5
            mb-3
            text-white
            transition-colors
            duration-500
            group-hover:text-[#071321]
          "
        >
          Technical
          <br />
          Precision
        </h3>


        <p
          className="
            font-[var(--font-avenir)]
            text-xs
            md:text-sm
            text-gray-400
            leading-relaxed
            transition-colors
            duration-500
            group-hover:text-gray-700
          "
        >
          Detailed construction drawings, approvals and
          technical documentation are developed to professional
          standards.
        </p>

      </div>

    </div>


    {/* =================================================
        CTA
    ================================================= */}
    <div
      className="
        mt-10
        md:mt-12
        pt-8
        md:pt-10
        border-t
        border-white/10
        flex
        flex-col
        lg:flex-row
        lg:items-end
        lg:justify-between
        gap-7
        lg:gap-10
      "
    >

      <div className="max-w-2xl">

        <h3
          className="
            font-heading
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-light
            leading-[1.08]
            mb-4
          "
        >
          Ready to transform your vision
          into a remarkable space?
        </h3>


        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            md:text-base
            text-gray-300
            leading-relaxed
            max-w-xl
          "
        >
          Whether you're planning a home, commercial development,
          interior renovation or visualization project, we're ready
          to help move your idea from concept to reality.
        </p>

      </div>


      {/* BUTTONS */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-3
          w-full
          sm:w-auto
          flex-shrink-0
        "
      >

        <Link
          href="/consultation"
          className="
            inline-flex
            items-center
            justify-center
            bg-[#D4A85A]
            text-black
            px-7
            py-3
            rounded-full
            font-[var(--font-avenir)]
            text-xs
            md:text-sm
            font-medium
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(212,168,90,0.30)]
          "
        >
          Book Consultation
        </Link>


        <Link
          href="/projects"
          className="
            inline-flex
            items-center
            justify-center
            border
            border-[#D4A85A]
            text-[#D4A85A]
            px-7
            py-3
            rounded-full
            font-[var(--font-avenir)]
            text-xs
            md:text-sm
            font-medium
            transition-all
            duration-300
            hover:bg-[#D4A85A]
            hover:text-black
          "
        >
          View Projects
        </Link>

      </div>

    </div>

  </div>

</section>
      
{/* TESTIMONIALS */}
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

    {/* SECTION HEADER */}
<div className="mb-8 md:mb-10">

  {/* EYEBROW */}
  <div className="flex items-center gap-4 mb-5 md:mb-6">

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
      Client Testimonials
    </p>

    <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

  </div>


  {/* HEADING */}
  <h2
    className="
      font-heading
      text-4xl
      sm:text-5xl
      md:text-6xl
      font-light
      leading-[1.05]
    "
  >
    Spaces designed.
    <br />
    Relationships built.
  </h2>

</div>

    {/* TESTIMONIAL CARDS */}
    <div className="grid lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div
        className="
        group
        relative
        overflow-hidden
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:bg-white
        hover:border-[#D4A85A]
        hover:shadow-[0_0_35px_rgba(212,168,90,0.25)]
        "
      >

        <div className="absolute top-2 right-6 text-[120px] text-white/5 leading-none">
          "
        </div>

        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-[#D4A85A] text-[#D4A85A]"
            />
          ))}
        </div>

        <p className="text-gray-300 group-hover:text-gray-700 leading-relaxed mb-8 transition-all duration-500">
          Apiyo Design Studio transformed our vision into a beautiful family
          home. Their creativity, professionalism and attention to detail
          exceeded every expectation.
        </p>

        <div>
          <h4 className="text-[#D4A85A] font-semibold">
            Homeowner
          </h4>

          <p className="text-sm text-gray-400 group-hover:text-gray-600">
            Nairobi
          </p>
        </div>

      </div>

      {/* CARD 2 */}
      <div
        className="
        group
        relative
        overflow-hidden
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:bg-white
        hover:border-[#D4A85A]
        hover:shadow-[0_0_35px_rgba(212,168,90,0.25)]
        "
      >

        <div className="absolute top-2 right-6 text-[120px] text-white/5 leading-none">
          "
        </div>

        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-[#D4A85A] text-[#D4A85A]"
            />
          ))}
        </div>

        <p className="text-gray-300 group-hover:text-gray-700 leading-relaxed mb-8 transition-all duration-500">
          The 3D visualizations helped us make confident decisions before
          construction began. The realism and quality of presentation were
          exceptional.
        </p>

        <div>
          <h4 className="text-[#D4A85A] font-semibold">
            Property Developer
          </h4>

          <p className="text-sm text-gray-400 group-hover:text-gray-600">
            Kisumu
          </p>
        </div>

      </div>

      {/* CARD 3 */}
      <div
        className="
        group
        relative
        overflow-hidden
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:bg-white
        hover:border-[#D4A85A]
        hover:shadow-[0_0_35px_rgba(212,168,90,0.25)]
        "
      >

        <div className="absolute top-2 right-6 text-[120px] text-white/5 leading-none">
          "
        </div>

        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-[#D4A85A] text-[#D4A85A]"
            />
          ))}
        </div>

        <p className="text-gray-300 group-hover:text-gray-700 leading-relaxed mb-8 transition-all duration-500">
          From concept design to final drawings, the process was smooth,
          professional and highly collaborative. We would gladly work together
          again.
        </p>

        <div>
          <h4 className="text-[#D4A85A] font-semibold">
            Business Owner
          </h4>

          <p className="text-sm text-gray-400 group-hover:text-gray-600">
            Kakamega
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    STUDENT SERVICES
===================================================== */}

<section className="py-10 md:py-12 lg:py-14 overflow-hidden">

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
        lg:grid-cols-[0.9fr_1.1fr]
        gap-10
        lg:gap-14
        xl:gap-20
        items-center
      "
    >

      {/* =================================================
          LEFT CONTENT
      ================================================= */}
      <div className="min-w-0">

        {/* EYEBROW */}
        <div
          className="
            flex
            items-center
            gap-3
            sm:gap-4
            mb-5
            md:mb-6
          "
        >

          <div
            className="
              w-7
              sm:w-10
              h-px
              bg-[#D4A85A]
              flex-shrink-0
            "
          />

          <p
            className="
              font-[var(--font-avenir)]
              uppercase
              tracking-[3px]
              sm:tracking-[4px]
              md:tracking-[6px]
              text-[#D4A85A]
              text-[8px]
              sm:text-[9px]
              md:text-[10px]
              leading-relaxed
            "
          >
            For Architecture &amp; Design Students
          </p>

          <div
            className="
              w-7
              sm:w-10
              h-px
              bg-[#D4A85A]
              flex-shrink-0
            "
          />

        </div>


        {/* HEADING */}
        <h2
          className="
            font-heading
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-light
            leading-[1.08]
            mb-5
            md:mb-6
          "
        >
          Academic support
          <br />
          for future designers.
        </h2>


        {/* DESCRIPTION */}
        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            md:text-base
            text-gray-300
            leading-relaxed
            max-w-xl
            mb-7
            md:mb-8
          "
        >
          From presentation boards and photorealistic renders to
          architectural models and portfolio development, we help
          students transform ideas into professional-quality
          submissions that stand out.
        </p>


        {/* BUTTON */}
        <Link
          href="/students"
          className="
            inline-flex
            items-center
            justify-center
            border
            border-[#D4A85A]
            text-[#D4A85A]
            px-6
            md:px-8
            py-3
            md:py-3.5
            rounded-full
            font-[var(--font-avenir)]
            text-xs
            md:text-sm
            font-medium
            transition-all
            duration-300
            hover:bg-[#D4A85A]
            hover:text-black
            hover:shadow-[0_0_25px_rgba(212,168,90,0.25)]
          "
        >
          Explore Student Services →
        </Link>

      </div>


      {/* =================================================
          PIN BOARD
      ================================================= */}
      <div
        className="
          relative
          w-full
          flex
          justify-center
          items-start
        "
      >

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            w-full
            max-w-[760px]
          "
        >

          {/* =================================================
              SHEET 01
          ================================================= */}
          <div
            className="
              group
              relative
              min-h-[230px]
              md:min-h-[260px]
              lg:h-[280px]
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-5
              sm:p-6
              lg:p-8
              transition-all
              duration-500
              hover:bg-white
              hover:-translate-y-1
              lg:hover:-translate-y-2
            "
          >

            {/* PINS */}
            <div className="absolute top-[-6px] left-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute top-[-6px] right-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute bottom-[-6px] left-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute bottom-[-6px] right-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />

            <div className="w-full h-16 sm:h-20 lg:h-24 bg-black/10 mb-5 lg:mb-6" />

            <h3
              className="
                font-heading
                text-[#D4A85A]
                text-2xl
                lg:text-3xl
                font-light
                mb-2
                lg:mb-3
              "
            >
              3D Rendering
            </h3>

            <p
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-300
                leading-relaxed
                group-hover:text-gray-700
                transition-all
                duration-500
              "
            >
              Photorealistic visualizations for studio projects and presentations.
            </p>

          </div>


          {/* =================================================
              SHEET 02
          ================================================= */}
          <div
            className="
              group
              relative
              min-h-[230px]
              md:min-h-[260px]
              lg:h-[280px]
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-5
              sm:p-6
              lg:p-8
              transition-all
              duration-500
              hover:bg-white
              hover:-translate-y-1
              lg:hover:-translate-y-2
            "
          >

            {/* PINS */}
            <div className="absolute top-[-6px] left-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute top-[-6px] right-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute bottom-[-6px] left-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute bottom-[-6px] right-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />

            <div className="w-full h-16 sm:h-20 lg:h-24 bg-black/10 mb-5 lg:mb-6" />

            <h3
              className="
                font-heading
                text-[#D4A85A]
                text-2xl
                lg:text-3xl
                font-light
                mb-2
                lg:mb-3
              "
            >
              Drawing Enhancement
            </h3>

            <p
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-300
                leading-relaxed
                group-hover:text-gray-700
                transition-all
                duration-500
              "
            >
              Refining drawings, layouts and visual documentation to
              communicate design intent with greater clarity and precision.
            </p>

          </div>


          {/* =================================================
              SHEET 03
          ================================================= */}
          <div
            className="
              group
              relative
              min-h-[230px]
              md:min-h-[260px]
              lg:h-[280px]
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-5
              sm:p-6
              lg:p-8
              transition-all
              duration-500
              hover:bg-white
              hover:-translate-y-1
              lg:hover:-translate-y-2
            "
          >

            {/* PINS */}
            <div className="absolute top-[-6px] left-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute top-[-6px] right-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute bottom-[-6px] left-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute bottom-[-6px] right-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />

            <div className="w-full h-16 sm:h-20 lg:h-24 bg-black/10 mb-5 lg:mb-6" />

            <h3
              className="
                font-heading
                text-[#D4A85A]
                text-2xl
                lg:text-3xl
                font-light
                mb-2
                lg:mb-3
              "
            >
              Architectural Models
            </h3>

            <p
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-300
                leading-relaxed
                group-hover:text-gray-700
                transition-all
                duration-500
              "
            >
              Physical and digital model development for design exploration
              and project presentation.
            </p>

          </div>


          {/* =================================================
              SHEET 04
          ================================================= */}
          <div
            className="
              group
              relative
              min-h-[230px]
              md:min-h-[260px]
              lg:h-[280px]
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-5
              sm:p-6
              lg:p-8
              transition-all
              duration-500
              hover:bg-white
              hover:-translate-y-1
              lg:hover:-translate-y-2
            "
          >

            {/* PINS */}
            <div className="absolute top-[-6px] left-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute top-[-6px] right-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute bottom-[-6px] left-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />
            <div className="absolute bottom-[-6px] right-[-6px] w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]" />

            <div className="w-full h-16 sm:h-20 lg:h-24 bg-black/10 mb-5 lg:mb-6" />

            <h3
              className="
                font-heading
                text-[#D4A85A]
                text-2xl
                lg:text-3xl
                font-light
                mb-2
                lg:mb-3
              "
            >
              Portfolio Development
            </h3>

            <p
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-300
                leading-relaxed
                group-hover:text-gray-700
                transition-all
                duration-500
              "
            >
              Curated project presentations that showcase skills, process
              and design thinking.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    ARCHITECTURAL QUOTE
===================================================== */}

<section
  className="
    relative
    py-28
    sm:py-32
    md:py-40
    lg:py-48
    xl:py-56
    overflow-hidden
  "
>

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">

    <img
      src="/vision/vision.png"
      alt=""
      className="
        w-full
        h-full
        object-cover
        object-center
      "
    />

  </div>


  {/* CINEMATIC BLUE OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#071321]/85
      via-[#071321]/70
      to-[#071321]/55
    "
  />


  {/* CONTENT */}
  <div
    className="
      relative
      z-10
      max-w-6xl
      mx-auto
      px-5
      sm:px-6
      md:px-8
      lg:px-10
      text-center
      animate-quoteFade
    "
  >

    {/* MAIN STATEMENT */}
    <h2
      className="
        font-heading
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        font-light
        leading-[1.05]
        text-white
      "
    >
      Architecture is not simply
      <br />
      about buildings.
    </h2>


    {/* GOLD LINE */}
    <div
      className="
        w-20
        sm:w-28
        md:w-36
        h-px
        bg-[#D4A85A]
        mx-auto
        my-8
        md:my-10
      "
    />


    {/* SECOND STATEMENT */}
    <p
      className="
        font-heading
        italic
        font-light
        text-2xl
        sm:text-3xl
        md:text-4xl
        text-gray-300
        leading-[1.25]
        max-w-4xl
        mx-auto
      "
    >
      It is about creating spaces
      <br className="hidden sm:block" />
      {" "}that improve how people live.
    </p>


    {/* STUDIO SIGNATURE */}
    <div
      className="
        mt-8
        md:mt-10
        flex
        items-center
        justify-center
        gap-3
        sm:gap-4
      "
    >

      {/* LEFT GOLD DASH */}
      <div
        className="
          w-7
          sm:w-10
          md:w-12
          h-px
          bg-[#D4A85A]
          flex-shrink-0
        "
      />


      <p
        className="
          font-[var(--font-avenir)]
          uppercase
          tracking-[4px]
          sm:tracking-[6px]
          md:tracking-[8px]
          text-[#D4A85A]
          text-[8px]
          sm:text-[9px]
          md:text-[10px]
          whitespace-nowrap
        "
      >
        Apiyo Design Studio
      </p>


      {/* RIGHT GOLD DASH */}
      <div
        className="
          w-7
          sm:w-10
          md:w-12
          h-px
          bg-[#D4A85A]
          flex-shrink-0
        "
      />

    </div>

  </div>

</section>

  {/* FOOTER */}
<Footer />

    </main>
  );
}