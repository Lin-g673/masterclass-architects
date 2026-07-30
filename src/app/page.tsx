"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Star } from "lucide-react";
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
 const [scrolled, setScrolled] = useState(false);
const [currentHero, setCurrentHero] = useState(0);
const [currentVisualization, setCurrentVisualization] = useState(0);
const [currentProject, setCurrentProject] = useState(0);
const [currentInterior, setCurrentInterior] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
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
  "/hero/concept.png.png",
  "/hero/interior.png.png",
  "/hero/exterior.png.png",
  "/hero/construction.png.png",
  "/hero/completed.png.png",
];

const heroMessages = [
  "Every remarkable space begins with a vision.",

  "Thoughtfully crafted interiors that elevate everyday living.",

  "Visualizing exceptional architecture before construction begins.",

  "Transforming concepts into reality through expert execution.",

  "From concept to completion, we craft exceptional architectural and interior experiences through integrated design and expert construction, transforming visionary ideas into timeless spaces that inspire, elevate lifestyles, and leave a lasting impression.",
];

const visualizations = [
  {
    nav: "Exterior",
    title: "ARCHITECTURAL VISUALIZATION",
    description:
      "High-end exterior renderings showcasing architecture, materials, lighting and environmental context.",
    media: "/visualization/exterior.png",
    type: "image",
  },

  {
    nav: "Interior",
    title: "INTERIOR VISUALIZATION",
    description:
      "Photorealistic interiors showcasing textures, furniture, finishes and atmosphere with exceptional realism.",
    media: "/visualization/interior.png",
    type: "image",
  },

  {
    nav: "Animation",
    title: "WALKTHROUGH ANIMATION",
    description:
      "Cinematic fly-through videos that immerse viewers in the project and communicate scale, space and design intent.",
    media: "/visualization/walkthrough.mp4",
    type: "video",
  },

  {
    nav: "Marketing",
    title: "REAL ESTATE MARKETING VISUALS",
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
  image: "/interiors/homeinterior.png",
  description:
    "Luxury residential interiors ranging from Modern Luxury, Japandi, Scandinavian, Minimalist, Classical and Coastal design styles.",
  button: "Explore Interior Styles",
  nav: "Residential",
  link: "/interiors",
},

{
  title: "Commercial",
  category: "Offices • Corporate Spaces • Law Firms",
  image: "/interiors/law.png",
  description:
    "Professional workspaces designed to communicate prestige and productivity.",
  button: "Explore Commercial Design",
  nav: "Commercial",
  link: "/interiors#commercial",
},

{
  title: "Hospitality",
  category: "Restaurants • Cafés • Hotels",
  image: "/interiors/restaurant.png",
  description:
    "Experiential hospitality interiors crafted to create memorable guest experiences.",
  button: "Explore Hospitality Design",
  nav: "Hospitality",
  link: "/interiors#hospitality",
},

{
  title: "Interior Fit-Out & Finishes",
  category: "Execution & Installation",
  image: "/interiors/interiorfitout.png",
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
    
      {/* NAVBAR */}
      <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white shadow-lg py-2"
      : "bg-transparent py-4"
  }`}
>
        <div className="max-w-[1800px] mx-auto flex items-center px-16 py-6">

          <div className="flex items-center flex-shrink-0">
 <img
  src={
    scrolled
      ? "/logo/logo-black.png"
      : "/logo/logo-white.png"
  }
  alt="Apiyo Design Studio"
  className="
  h-16
  transition-all
  duration-300
  "
/>
</div>

         <nav
  className={`hidden xl:flex mx-auto items-center gap-10 text-sm uppercase tracking-[1.5px] ${
    scrolled ? "text-[#1c3a60]" : "text-white"
  }`}
>
  {[
    "Home",
    "House Plans",
    "Interior Design",
    "3D Visualization",
    "Projects",
    "Students",
    "About Us",
  
  ].map((item) => (
    <a
      key={item}
      href="#"
      className="
      relative
      transition-all
      duration-300
      hover:text-[#D4A85A]
      hover:tracking-[3px]
      hover:scale-105
      after:absolute
      after:left-0
      after:-bottom-2
      after:h-[2px]
      after:w-0
      after:bg-[#1c3a60]
      after:transition-all
      after:duration-300
      hover:after:w-full
      "
    >
      {item}
    </a>
  ))}
</nav>

          <button
 className={`px-7 py-3 rounded-full transition-all duration-300 border font-medium ${
  scrolled
    ? "bg-[#1c3a60] text-white border-[#1c3a60] hover:bg-[#D4A85A] hover:text-black hover:border-[#D4A85A]"
    : "border-[#D4A85A] text-[#D4A85A] hover:bg-[#D4A85A] hover:text-black hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]"
}`}
>


            Book Consultation
          </button>
        </div>
      </header>

      {/* HERO */}
    <section
  className="relative min-h-screen flex items-center overflow-hidden"
>

  <div
  className="
  absolute
  inset-0
  scale-105
  transition-all
  duration-[2500ms]
  "
  style={{
    backgroundImage: `url(${heroImages[currentHero]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>

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
        <div className="relative max-w-[1800px] mx-auto px-10 w-full">
          <div className="max-w-4xl">

            <p className="uppercase tracking-[4px] text-[#D4A85A] mb-5">
              Welcome To Apiyo Design Studio
            </p>

           <h1
  style={{ fontFamily: "var(--font-bodoni)" }}
  className="
  text-5xl
  md:text-6xl
  lg:text-[82px]
  leading-[1.25]
  mb-8
  max-w-[900px]
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
  text-gray-200
  text-xl
  leading-relaxed
  mb-10
  max-w-2xl
  animate-fadeUp
  "
>
  {heroMessages[currentHero]}
</p>

            <div className="flex flex-wrap gap-4">
              <button className="
bg-[#D4A85A]
text-black
px-10
py-4
rounded-full
font-semibold
hover:scale-105
transition-all
duration-300
hover:shadow-[0_0_30px_rgba(212,168,90,0.45)]
">
                Book Free Consultation
              </button>

              <button
  className="
  border
  border-[#D4A85A]
  text-[#D4A85A]
  px-10
  py-4
  rounded-full
  transition-all
  duration-300
  hover:bg-[#D4A85A]
  hover:text-black
  hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]
  "
>
  Our Services
</button>
            </div>
          </div>
        </div>
      </section>

{/* FLOATING STATS */}
<section className="relative z-20 -mt-25 px-8">
  <div className="max-w-[1800px] mx-auto px-10">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[620px]">

      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-3 shadow-[0_0_15px_rgba(212,168,90,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,168,90,0.18)]">
        <h3 className="text-2xl font-bold text-[#D4A85A]">
          5+
        </h3>
        <p className="mt-1 text-white text-sm">
          Years Experience
        </p>
      </div>

      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-3 shadow-[0_0_15px_rgba(212,168,90,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,168,90,0.18)]">
        <h3 className="text-2xl font-bold text-[#D4A85A]">
          100+
        </h3>
        <p className="mt-1 text-white text-sm">
          Projects Designed
        </p>
      </div>

      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-3 shadow-[0_0_15px_rgba(212,168,90,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,168,90,0.18)]">
        <h3 className="text-2xl font-bold text-[#D4A85A]">
          47
        </h3>
        <p className="mt-1 text-white text-sm">
          Counties Covered
        </p>
      </div>

      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-3 shadow-[0_0_15px_rgba(212,168,90,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,168,90,0.18)]">
        <h3 className="text-2xl font-bold text-[#D4A85A]">
          100%
        </h3>
        <p className="mt-1 text-white text-sm">
          Tailored Solutions
        </p>
      </div>

    </div>
  </div>
</section>


      {/* PROJECTS */}
      <section className="py-24">
        <div className="w-full px-8 xl:px-16">

          <p className="uppercase tracking-[4px] text-[#D4A85A]">
            Popular House Designs
          </p>

          <h2 className="text-5xl ${cormorant.className} mt-4 mb-14">
            Explore Our Most Requested Designs
          </h2>

          <div
  className="
  grid
  md:grid-cols-2
  xl:grid-cols-3
  gap-10
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
      h-[520px]
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
  p-8
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
    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">

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

    <button
      className="
      text-[#1c3a60]
      font-semibold
      hover:text-[#D4A85A]
      transition-all
      "
    >
      Explore Design →
    </button>

  </div>

</div>
))}
          </div>
        </div>
      </section>
{/* CUSTOMIZE YOUR PLAN */}
<section className="py-32 overflow-hidden bg-[#071321]">

  <div className="w-full px-12 lg:px-50">

    <div className="grid lg:grid-cols-[1.2fr_1.2fr_0.9fr] gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>

        <p className="uppercase tracking-[4px] text-[#D4A85A] mb-5 -mt-25">
          DESIGNED AROUND YOU
        </p>

        <h2 className="text-5xl lg:text-6xl ${cormorant.className} leading-tight mb-8">
          Customize Your
          <br />
          Dream Home
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10">
          Choose your dream design and customize it based on your
          location, lifestyle and unique requirements. We can make
          small adjustments or complete redesigns to create a home
          that feels truly yours.
        </p>

        <div className="space-y-5 mb-12">

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#D4A85A]" />
            <span>Choose a house design you love</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#D4A85A]" />
            <span>Adjust room layouts and dimensions</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#D4A85A]" />
            <span>Adapt the design to your plot and location</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#D4A85A]" />
            <span>Receive professional drawings ready for approval</span>
          </div>

        </div>

        <button
          className="
          bg-[#D4A85A]
          text-black
          px-10
          py-4
          rounded-full
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(212,168,90,0.45)]
          "
        >
          Customize Your Plan
        </button>

      </div>

      {/* BLUEPRINT */}
      <div className="relative flex justify-center items-center -ml-12 -mt-30">

        <img
          src="/blueprint/blueprint.png"
          alt="Custom House Plan"
          className="
          w-full
          max-w-[900px]
          opacity-75
          animate-blueprint
          drop-shadow-[0_0_25px_rgba(255,255,255,0.18)]
          "
        />

        {/* SCAN GLOW */}
        <div
          className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
          "
        >
          <div className="blueprint-scan"></div>
        </div>

      </div>

      {/* SEND MESSAGE */}
      <div className="w-full max-w-[420px] ml-40
  -mt-60">

        <p className="uppercase tracking-[4px] text-[#D4A85A] mb-4">
          Need Assistance?
        </p>

        <h3
  className="
  text-5xl
  lg:text-6xl
  ${cormorant.className}
  text-[#D4A85A]
  leading-tight
  mb-8
  "
>
          Personalized help
          is just a click away.
        </h3>

        <p
          className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10
          "
        >
          New to the process and looking for guidance?
          Tell us about your project and we will help you
          choose, customize and plan the perfect design solution.
        </p>

        <button
          className="
          border
          border-[#D4A85A]
          text-[#D4A85A]
          px-8
          py-4
          rounded-full
          transition-all
          duration-300
          hover:bg-[#D4A85A]
          hover:text-black
          hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]
          "
        >
          Send Us A Message
        </button>

      </div>

    </div>

  </div>

</section>

{/* INTERIOR DESIGN INTRO */}

<section className="pt-28 pb-16 bg-[#071321]">

  <div className="w-full px-20 text-center">


<p className="uppercase tracking-[4px] text-[#D4A85A] mb-5">
  Interior Design
</p>

<h2
  className="
  text-5xl
  lg:text-6xl
  leading-tight
  mb-8
  "
>
  Luxury interiors
  crafted for every lifestyle
</h2>

<p
  className="
  max-w-3xl
  mx-auto
  text-gray-300
  text-lg
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

<section className="relative h-[900px] overflow-hidden">

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
      "
    />
  </div>

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
    h-full
    flex
    items-center
    px-20
    pb-24
    "
  >


<div
  key={currentInterior}
  className="
  max-w-3xl
  animate-fadeUp
  "
>

  <h2
    className="
    text-6xl
    lg:text-7xl
    leading-tight
    mb-6
    "
  >
    {interiorServices[currentInterior].title}
  </h2>

  <div
    className="
    h-[2px]
    w-32
    bg-[#D4A85A]
    mb-8
    "
  />

  <p className="text-[#D4A85A] mb-6 tracking-[2px] uppercase">
  {interiorServices[currentInterior].category}
</p>

  <p
    className="
    text-xl
    text-gray-200
    leading-relaxed
    max-w-2xl
    mb-10
    "
  >
    {interiorServices[currentInterior].description}
  </p>

  <a
  href={interiorServices[currentInterior].link}
  className="
  border
  border-[#D4A85A]
  text-[#D4A85A]
  px-10
  py-4
  rounded-full
  inline-block
  transition-all
  duration-300
  hover:bg-[#D4A85A]
  hover:text-black
  hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]
  "
>
  {interiorServices[currentInterior].button}
</a>

</div>


  </div>

  <div
    className="
    absolute
    bottom-14
    left-20
    flex
    gap-10
    uppercase
    tracking-[3px]
    text-sm
    "
  >


{interiorServices.map((service, index) => (
  <button
    key={service.title}
    onClick={() => setCurrentInterior(index)}
    className={`
      relative
      transition-all
      duration-300
      ${
        currentInterior === index
          ? "text-[#D4A85A]"
          : "text-white/60 hover:text-white"
      }
    `}
  >

    {service.title}

    {currentInterior === index && (
      <span
        className="
        absolute
        left-0
        -bottom-3
        h-[2px]
        w-full
        bg-[#D4A85A]
        "
      />
    )}

  </button>
))}


  </div>

</section>
<div className="h-32 bg-[#071321]" />

{/* 3D VISUALIZATION */}
<section className="relative h-[1100px] overflow-hidden">

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
        className="w-full h-full object-cover"
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
from-[#071321]/92
via-[#071321]/55
to-transparent
    "
  />

  {/* CONTENT */}
  <div
  className="
  relative
  h-full
  flex
  items-center
  px-20
  pb-24
  "
>

    <div
      key={currentVisualization}
      className="
      max-w-3xl
      animate-fadeUp
      "
    >

      <p className="uppercase tracking-[4px] text-[#D4A85A] mb-5">
        3D VISUALIZATION
      </p>

      <h2
        className="
        text-6xl
        lg:text-7xl
        ${cormorant.className}
        leading-tight
        mb-8
        "
      >
        {visualizations[currentVisualization].title}
      </h2>
<div
  className="
  h-[2px]
  w-32
  bg-[#D4A85A]
  mb-8
  animate-goldLine
  "
></div>
      <p
        className="
        text-xl
        text-gray-200
        leading-relaxed
        max-w-2xl
        mb-10
        "
      >
        {visualizations[currentVisualization].description}
      </p>

      <button
        className="
        border
        border-[#D4A85A]
        text-[#D4A85A]
        px-10
        py-4
        rounded-full
        transition-all
        duration-300
        hover:bg-[#D4A85A]
        hover:text-black
        hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]
        "
      >
        Explore Visualization →
      </button>

    </div>

  </div>

  {/* VISUALIZATION NAVIGATION */}
<div
  className="
  absolute
  bottom-12
  left-20
  flex
  gap-10
  uppercase
  tracking-[3px]
  text-sm
  "
>

  {visualizations.map((item, index) => (
    <button
      key={index}
      onClick={() => setCurrentVisualization(index)}
      className={`
        relative
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
          -bottom-3
          h-[2px]
          w-full
          bg-[#D4A85A]
          "
        />
      )}

    </button>
  ))}

</div>

</section>
{/* SECTION DIVIDER */}

<section className="py-10 bg-[#071321]">

  <div className="w-full px-20">

    <div
      className="
      h-[1px]
      bg-gradient-to-r
      from-transparent
      via-[#D4A85A]/60
      to-transparent
      "
    ></div>

  </div>

</section>

{/* FEATURED PROJECTS INTRO */}

<section className="pt-20 pb-12 bg-[#071321]">

  <div className="w-full px-20 text-center">

    <p className="uppercase tracking-[4px] text-[#D4A85A] mb-5">
      Featured Projects
    </p>

    <h2
      className="
      text-5xl
      lg:text-6xl
      ${cormorant.className}
      leading-tight
      mb-8
      "
    >
      Architecture designed
      to leave a lasting impression
    </h2>

    <p
      className="
      max-w-3xl
      mx-auto
      text-gray-300
      text-lg
      leading-relaxed
      "
    >
      A selection of residential, religious and commercial projects
      showcasing our approach to design excellence, functionality
      and timeless architectural expression.
    </p>

  </div>

</section>
{/* FEATURED PROJECTS */}
<section className="relative h-[900px] overflow-hidden">


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
  
      "
    />
  </div>

  {/* OVERLAY */}
  <div
    className="
    absolute
    inset-0
    bg-gradient-to-r
    from-[#071321]/95
    via-[#071321]/65
    to-transparent
    "
  />

  {/* CONTENT */}
  <div
  className="
  relative
  h-full
  flex
  items-center
  px-20
  pb-24
  "
>

    <div
      key={currentProject}
      className="
      max-w-3xl
      animate-fadeUp
      "
    >

      

      <h2
        className="
        text-6xl
        lg:text-7xl
        ${cormorant.className}
        leading-tight
        mb-6
        "
      >
        {featuredProjects[currentProject].title}
      </h2>

      <div
        className="
        h-[2px]
        w-32
        bg-[#D4A85A]
        mb-8
        "
      />

      <p className="text-[#D4A85A] mb-6 tracking-[2px] uppercase">
        {featuredProjects[currentProject].category}
        {" • "}
        {featuredProjects[currentProject].location}
      </p>

      <p
        className="
        text-xl
        text-gray-200
        leading-relaxed
        max-w-2xl
        mb-10
        "
      >
        {featuredProjects[currentProject].description}
      </p>

      <button
        className="
        border
        border-[#D4A85A]
        text-[#D4A85A]
        px-10
        py-4
        rounded-full
        transition-all
        duration-300
        hover:bg-[#D4A85A]
        hover:text-black
        hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]
        "
      >
        View Project →
      </button>

    </div>

  </div>

  {/* NAVIGATION */}
  <div
    className="
    absolute
    bottom-14
    left-20
    flex
    gap-10
    uppercase
    tracking-[3px]
    text-sm
    "
  >

    {featuredProjects.map((project, index) => (
      <button
        key={project.title}
        onClick={() => setCurrentProject(index)}
        className={`
          relative
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
            -bottom-3
            h-[2px]
            w-full
            bg-[#D4A85A]
            "
          />
        )}

      </button>
    ))}

  </div>

</section>

      {/* WHY CHOOSE APIYO DESIGN STUDIO */}
<section className="py-32 bg-[#071321]">

  <div className="w-full px-20">

    {/* HEADING */}
    <div className="max-w-5xl mb-24">

      <p className="uppercase tracking-[4px] text-[#D4A85A] mb-5">
        WHY CLIENTS CHOOSE APIYO DESIGN STUDIO
      </p>

      <h2
        className="
        text-5xl
        lg:text-7xl
        ${cormorant.className}
        leading-tight
        mb-8
        "
      >
        Where visionary design
        meets technical precision.
      </h2>

      <p
        className="
        text-xl
        text-gray-300
        max-w-3xl
        leading-relaxed
        "
      >
        From architectural design and interior spaces to
        photorealistic visualization and construction
        documentation, we deliver an integrated design
        experience that transforms ideas into exceptional spaces.
      </p>

    </div>

    {/* VALUE CARDS */}
    <div className="grid lg:grid-cols-2 gap-8 mb-24">

      {/* CARD 1 */}
      <div
        className="
group
border
border-[#1c3a60]
rounded-3xl
p-10
bg-[#071321]
transition-all
duration-500
hover:bg-white
hover:-translate-y-3
hover:border-[#D4A85A]
hover:shadow-[15px_15px_40px_rgba(212,168,90,0.20)]
"
      >

        <span
  className="
  text-[#D4A85A]
  text-5xl
  font-light
  "
>
          01
        </span>

        <h3
  className="
  text-3xl
  ${cormorant.className}
  mt-6
  mb-5
  text-white
  transition-all
  duration-500
  group-hover:text-[#071321]
  "
>
          End-to-End Design
        </h3>

        <p
  className="
  text-gray-300
  leading-relaxed
  transition-all
  duration-500
  group-hover:text-gray-700
  "
>
          From concept development and planning to visualization
          and implementation support, everything is handled
          under one roof.
        </p>

      </div>

      {/* CARD 2 */}
      <div
       className="
group
border
border-[#1c3a60]
rounded-3xl
p-10
bg-[#071321]
transition-all
duration-500
hover:bg-white
hover:-translate-y-3
hover:border-[#D4A85A]
hover:shadow-[15px_15px_40px_rgba(212,168,90,0.20)]
"
      >

        <span
  className="
  text-[#D4A85A]
  text-5xl
  font-light
  "
>
          02
        </span>

        <h3
  className="
  text-3xl
  ${cormorant.className}
  mt-6
  mb-5
  text-white
  transition-all
  duration-500
  group-hover:text-[#071321]
  "
>
          Visualization Before Construction
        </h3>

        <p
  className="
  text-gray-300
  leading-relaxed
  transition-all
  duration-500
  group-hover:text-gray-700
  "
>
          Experience your project through photorealistic renders,
          walkthroughs and immersive presentations before
          construction begins.
        </p>

      </div>

      {/* CARD 3 */}
      <div
        className="
group
border
border-[#1c3a60]
rounded-3xl
p-10
bg-[#071321]
transition-all
duration-500
hover:bg-white
hover:-translate-y-3
hover:border-[#D4A85A]
hover:shadow-[15px_15px_40px_rgba(212,168,90,0.20)]
"
      >

        <span
  className="
  text-[#D4A85A]
  text-5xl
  font-light
  "
>
          03
        </span>

        <h3
  className="
  text-3xl
  ${cormorant.className}
  mt-6
  mb-5
  text-white
  transition-all
  duration-500
  group-hover:text-[#071321]
  "
>
          Tailored For Every Client
        </h3>

        <p
  className="
  text-gray-300
  leading-relaxed
  transition-all
  duration-500
  group-hover:text-gray-700
  "
>
          Every project is customized to your site conditions,
          budget, lifestyle requirements and long-term vision.
        </p>

      </div>

      {/* CARD 4 */}
      <div
        className="
group
border
border-[#1c3a60]
rounded-3xl
p-10
bg-[#071321]
transition-all
duration-500
hover:bg-white
hover:-translate-y-3
hover:border-[#D4A85A]
hover:shadow-[15px_15px_40px_rgba(212,168,90,0.20)]
"
      >

        <span
  className="
  text-[#D4A85A]
  text-5xl
  font-light
  "
>
          04
        </span>

        <h3
  className="
  text-3xl
  ${cormorant.className}
  mt-6
  mb-5
  text-white
  transition-all
  duration-500
  group-hover:text-[#071321]
  "
>
          Professional Documentation
        </h3>

        <p
  className="
  text-gray-300
  leading-relaxed
  transition-all
  duration-500
  group-hover:text-gray-700
  "
>
          Detailed construction drawings, approvals and
          technical documentation prepared to professional
          industry standards.
        </p>

      </div>

    </div>

   {/* METRICS */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* CARD 1 */}
  <div
    className="
    relative
    overflow-hidden
    backdrop-blur-xl
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
hover:border-[#D4A85A]
hover:shadow-[0_0_35px_rgba(212,168,90,0.18)]
    group
    "
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

    <h3 className="text-6xl font-light text-[#D4A85A] mb-3">
      5+
    </h3>

    <p className="text-[#D4A85A] tracking-wide">
      Years Experience
    </p>
  </div>

  {/* CARD 2 */}
  <div
    className="
    relative
    overflow-hidden
    backdrop-blur-xl
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
hover:border-[#D4A85A]
hover:shadow-[0_0_35px_rgba(212,168,90,0.18)]
    "
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

    <h3 className="text-6xl font-light text-[#D4A85A] mb-3">
      100+
    </h3>

    <p className="text-[#D4A85A] tracking-wide">
      Projects Designed
    </p>
  </div>

  {/* CARD 3 */}
  <div
    className="
    relative
    overflow-hidden
    backdrop-blur-xl
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
hover:border-[#D4A85A]
hover:shadow-[0_0_35px_rgba(212,168,90,0.18)]
    "
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

    <h3 className="text-6xl font-light text-[#D4A85A] mb-3">
      47
    </h3>

    <p className="text-[#D4A85A] tracking-wide">
      Counties Reached
    </p>
  </div>

  {/* CARD 4 */}
  <div
    className="
    relative
    overflow-hidden
    backdrop-blur-xl
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
hover:border-[#D4A85A]
hover:shadow-[0_0_35px_rgba(212,168,90,0.18)]
    "
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

    <h3 className="text-6xl font-light text-[#D4A85A] mb-3">
      100%
    </h3>

    <p className="text-[#D4A85A] tracking-wide">
      Tailored Solutions
    </p>
  </div>

</div>

    {/* CTA */}
    <div
      className="
      mt-24
      flex
      flex-col
      lg:flex-row
      justify-between
      items-center
      gap-10
      "
    >

      <div className="max-w-3xl">

        <h3
          className="
          text-4xl
          lg:text-5xl
          ${cormorant.className}
          mb-6
          "
        >
          Ready to transform your vision
          into a remarkable space?
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          Whether you're planning a home, commercial development,
          interior renovation or visualization project,
          our team is ready to help you move from concept to reality.
        </p>

      </div>

      <div className="flex gap-5 flex-wrap">

        <button
          className="
          bg-[#D4A85A]
          text-black
          px-10
          py-4
          rounded-full
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(212,168,90,0.45)]
          "
        >
          Book Consultation
        </button>

        <button
          className="
          border
          border-[#D4A85A]
          text-[#D4A85A]
          px-10
          py-4
          rounded-full
          transition-all
          duration-300
          hover:bg-[#D4A85A]
          hover:text-black
          "
        >
          View Projects
        </button>

      </div>

    </div>

  </div>

</section>

      
{/* TESTIMONIALS */}
<section className="py-32">

  <div className="w-full px-20">

    {/* SECTION HEADER */}
    <div className="mb-20">

      <p className="uppercase tracking-[4px] text-[#D4A85A] mb-5">
        CLIENT TESTIMONIALS
      </p>

      <h2 className="text-5xl lg:text-6xl ${cormorant.className} leading-tight">
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
{/* STUDENT SERVICES */}
<section className="py-36 overflow-hidden">

  <div className="w-full px-20">

    <div className="grid lg:grid-cols-[1fr_1.3fr] gap-24 items-center">

      {/* LEFT CONTENT */}
      <div>

        <p className="uppercase tracking-[4px] text-[#D4A85A] mb-5">
          FOR ARCHITECTURE & DESIGN STUDENTS
        </p>

        <h2 className="text-5xl lg:text-6xl ${cormorant.className} leading-tight mb-8">
          Academic support
          <br />
          for future designers.
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
          From presentation boards and photorealistic renders to
          architectural models and portfolio development, we help
          students transform ideas into professional-quality
          submissions that stand out.
        </p>

        <button
          className="
          border
          border-[#D4A85A]
          text-[#D4A85A]
          px-10
          py-4
          rounded-full
          transition-all
          duration-300
          hover:bg-[#D4A85A]
          hover:text-black
          "
        >
          Explore Student Services
        </button>

      </div>

      {/* RIGHT BOARD */}
<div
  className="
  relative
  flex
  justify-center
  items-start
  -mt-10
  "
>

  <div
    className="
    grid
    grid-cols-2
    w-[760px]
    "
  >

    {/* SHEET 1 */}
    <div
      className="
      group
      relative
      h-[280px]
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-8
      transition-all
      duration-500
      hover:bg-white
      hover:-translate-y-2
      "
    >

      {/* FOUR PINS */}
      <div className="absolute top-[-8px] left-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute top-[-8px] right-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute bottom-[-8px] left-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute bottom-[-8px] right-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="w-full h-24 bg-black/10 mb-6"></div>

      <h3 className="text-[#D4A85A] text-xl mb-3">
        3D Rendering
      </h3>

      <p className="text-gray-300 group-hover:text-gray-700 transition-all duration-500">
        Photorealistic visualizations for studio projects and presentations.
      </p>

    </div>

    {/* SHEET 2 */}
    <div
      className="
      group
      relative
      h-[280px]
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-8
      transition-all
      duration-500
      hover:bg-white
      hover:-translate-y-2
      "
    >

      <div className="absolute top-[-8px] left-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute top-[-8px] right-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute bottom-[-8px] left-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute bottom-[-8px] right-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="w-full h-24 bg-black/10 mb-6"></div>

      <h3 className="text-[#D4A85A] text-xl mb-3">
        Drawing Enhancement
      </h3>

      <p className="text-gray-300 group-hover:text-gray-700 transition-all duration-500">
        Refining drawings, layouts and visual documentation to communicate design intent with greater clarity and precision.
      </p>

    </div>

    {/* SHEET 3 */}
    <div
      className="
      group
      relative
      h-[280px]
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-8
      transition-all
      duration-500
      hover:bg-white
      hover:-translate-y-2
      "
    >

      <div className="absolute top-[-8px] left-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute top-[-8px] right-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute bottom-[-8px] left-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute bottom-[-8px] right-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="w-full h-24 bg-black/10 mb-6"></div>

      <h3 className="text-[#D4A85A] text-xl mb-3">
        Architectural Models
      </h3>

      <p className="text-gray-300 group-hover:text-gray-700 transition-all duration-500">
        Physical and digital model development for design exploration and project presentation.
      </p>

    </div>

    {/* SHEET 4 */}
    <div
      className="
      group
      relative
      h-[280px]
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-8
      transition-all
      duration-500
      hover:bg-white
      hover:-translate-y-2
      "
    >

      <div className="absolute top-[-8px] left-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute top-[-8px] right-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute bottom-[-8px] left-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="absolute bottom-[-8px] right-[-8px] w-5 h-5 rounded-full bg-gradient-to-br from-[#f4d28a] via-[#D4A85A] to-[#8f6a2e]"></div>

      <div className="w-full h-24 bg-black/10 mb-6"></div>

      <h3 className="text-[#D4A85A] text-xl mb-3">
        Portfolio Development
      </h3>

      <p className="text-gray-300 group-hover:text-gray-700 transition-all duration-500">
        Curated project presentations that showcase skills, process and design thinking.
      </p>

    </div>

  </div>

</div>
    </div>

  </div>

</section>
{/* ARCHITECTURAL QUOTE */}
<section className="relative py-56 overflow-hidden">
{/* BACKGROUND IMAGE */}
<div className="absolute inset-0">

  <img
    src="/vision/vision.png"
    alt=""
    className="
    w-full
    h-full
    object-cover
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
  <div
  className="
  relative
  z-10
  max-w-6xl
  mx-auto
  px-10
  text-center
  animate-quoteFade
  "
>

   <h2
  className="
  ${cormorant.className}
  text-5xl
  md:text-6xl
  lg:text-7xl
  leading-tight
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
  w-56
  h-[2px]
  bg-[#D4A85A]
  mx-auto
  my-14
  "
/>

<p
  className="
  italic
  text-2xl
  md:text-3xl
  text-gray-300
  leading-relaxed
  max-w-4xl
  mx-auto
  "
>
  It is about creating spaces
  that improve how people live.
</p>

<div
  className="
  mt-14
  uppercase
  tracking-[8px]
  text-[#D4A85A]
  text-sm
  "
>
  APIYO DESIGN STUDIO
</div>

  </div>

</section>

     {/* FOOTER */}
<footer
  className="
  border-t
  border-white/10
  py-24
  overflow-hidden
  "
>

  <div className="w-full px-20 lg:px-32">

    <div
      className="
      grid
      lg:grid-cols-[1.8fr_1fr_1fr_1fr_0.8fr]
      gap-20
      "
    >

      {/* BRAND */}
      <div className="flex flex-col items-center">

        <img
          src="/logo/logo-white.png"
          alt="Apiyo Design Studio"
          className="
          w-80
          object-contain
          mb-8
          "
        />

        <p
          className="
          uppercase
          tracking-[5px]
          text-[#D4A85A]
          text-sm
          text-center
          "
        >
          Architecture • Interiors • Visualization
        </p>

      </div>

      {/* QUICK LINKS */}
      <div>

        <p
          className="
          uppercase
          tracking-[4px]
          text-[#D4A85A]
          mb-8
          "
        >
          Quick Links
        </p>

        <div className="flex flex-col gap-4">

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Home
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            House Plans
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Custom Design
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Interior Design
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            3D Visualization
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Student Services
          </a>

          <a href="#" className="text-gray-300 hover:text-[#D4A85A] transition-all duration-300">
            Contact
          </a>

        </div>

      </div>

      {/* SERVICES */}
      <div>

        <p
          className="
          uppercase
          tracking-[4px]
          text-[#D4A85A]
          mb-8
          "
        >
          Services
        </p>

        <div className="flex flex-col gap-4 text-gray-300">

          <p>Architectural Design</p>

          <p>Interior Design</p>

          <p>3D Visualization</p>

          <p>Custom Home Design</p>

          <p>House Plans</p>

          <p>Student Services</p>

        </div>

      </div>

      {/* CONTACT */}
      <div>

        <p
          className="
          uppercase
          tracking-[4px]
          text-[#D4A85A]
          mb-8
          "
        >
          Contact
        </p>

        <div className="space-y-5">

          <div className="flex items-center gap-4">

            <Mail
              size={18}
              className="text-[#D4A85A]"
            />

            <span className="text-gray-300">
              info@apiyodesignstudio.co.ke
            </span>

          </div>

          <div className="flex items-center gap-4">

            <Phone
              size={18}
              className="text-[#D4A85A]"
            />

            <span className="text-gray-300">
              0720 468 033
            </span>

          </div>

          <div className="flex items-center gap-4">

            <MapPin
              size={18}
              className="text-[#D4A85A]"
            />

            <span className="text-gray-300">
              Nairobi, Kenya
            </span>

          </div>

        </div>

      </div>

      {/* FOLLOW US */}
      <div>

        <p
          className="
          uppercase
          tracking-[4px]
          text-[#D4A85A]
          mb-8
          "
        >
          Follow Us
        </p>

        <div className="flex gap-5 flex-wrap">

          <FaInstagram
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

          <FaFacebookF
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

          <FaLinkedinIn
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

          <FaXTwitter
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

          <FaWhatsapp
            className="
            text-[#D4A85A]
            text-xl
            cursor-pointer
            hover:text-white
            hover:scale-125
            transition-all
            duration-300
            "
          />

        </div>

      </div>

    </div>

    {/* DIVIDER */}
    <div
      className="
      h-px
      bg-gradient-to-r
      from-transparent
      via-[#D4A85A]/40
      to-transparent
      my-16
      "
    />

    {/* COPYRIGHT */}
    <div
      className="
      text-center
      text-gray-500
      text-sm
      "
    >
      © 2026 Apiyo Design Studio. All Rights Reserved.
    </div>

  </div>

</footer>

{/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/254720468033"
  target="_blank"
  rel="noopener noreferrer"
  className="
  fixed
  bottom-8
  right-8
  z-50
  w-25
  h-25
  rounded-full
  backdrop-blur-xl
  bg-white/10
  border
  border-white/20
  flex
  items-center
  justify-center
  transition-all
  duration-300
  hover:bg-[#D4A85A]
  hover:scale-110
  hover:shadow-[0_0_30px_rgba(212,168,90,0.35)]
  "
>
  <FaWhatsapp
    className="
    text-white
    text-2xl
    "
  />
</a>
    </main>
  );
}