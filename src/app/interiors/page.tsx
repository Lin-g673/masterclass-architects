"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Trophy,
  Users,
  Gem,
  Clock3,
  Layers3,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
const commercialGallery = {
  corporate: {
    title: "Corporate Offices",
    hero: "/interiors/commercial/corporate/corporatehero.png",
    spaces: [
      {
        name: "Reception",
        images: [
          "/interiors/commercial/corporate/reception1.png",
          "/interiors/commercial/corporate/reception2.png",
          "/interiors/commercial/corporate/reception3.png",
          "/interiors/commercial/corporate/reception4.png",
        ],
      },
      {
        name: "Boardroom",
        images: [
          "/interiors/commercial/corporate/boardroom1.png",
          "/interiors/commercial/corporate/boardroom2.png",
          "/interiors/commercial/corporate/boardroom3.png",
          "/interiors/commercial/corporate/boardroom4.png",
        ],
      },
      {
        name: "Private Offices",
        images: [
          "/interiors/commercial/corporate/office1.png",
          "/interiors/commercial/corporate/office2.png",
          "/interiors/commercial/corporate/office3.png",
          "/interiors/commercial/corporate/office4.png",
        ],
      },
      {
        name: "Co-working Area",
        images: [
          "/interiors/commercial/corporate/coworking1.png",
          "/interiors/commercial/corporate/coworking2.png",
          "/interiors/commercial/corporate/coworking3.png",
          "/interiors/commercial/corporate/coworking4.png",
        ],
      },
    ],
  },

  retail: {
    title: "Retail Spaces",
    hero: "/interiors/commercial/retail/retailhero.png",
    spaces: [
      {
        name: "Car Showroom",
        images: [
          "/interiors/commercial/retail/car1.png",
          "/interiors/commercial/retail/car2.png",
          "/interiors/commercial/retail/car3.png",
          "/interiors/commercial/retail/car4.png",
        ],
      },

      {
        name: "Wine & Liquor Store",
        images: [
          "/interiors/commercial/retail/wine1.png",
          "/interiors/commercial/retail/wine2.png",
          "/interiors/commercial/retail/wine3.png",
          "/interiors/commercial/retail/wine4.png",
        ],
      },

      {
        name: "Beauty & Perfume Retail",
        images: [
          "/interiors/commercial/retail/beauty1.png",
          "/interiors/commercial/retail/beauty2.png",
          "/interiors/commercial/retail/beauty3.png",
          "/interiors/commercial/retail/beauty4.png",
        ],
      },

      {
        name: "Electronics Store",
        images: [
          "/interiors/commercial/retail/electronics1.png",
          "/interiors/commercial/retail/electronics2.png",
          "/interiors/commercial/retail/electronics3.png",
          "/interiors/commercial/retail/electronics4.png",
        ],
      },

      {
        name: "Shoes & Fashion Store",
        images: [
          "/interiors/commercial/retail/shoes1.png",
          "/interiors/commercial/retail/shoes2.png",
          "/interiors/commercial/retail/shoes3.png",
          "/interiors/commercial/retail/shoes4.png",
        ],
      },

      {
        name: "Supermarket / Convenience Store",
        images: [
          "/interiors/commercial/retail/supermarket1.png",
          "/interiors/commercial/retail/supermarket2.png",
          "/interiors/commercial/retail/supermarket3.png",
          "/interiors/commercial/retail/supermarket4.png",
        ],
      },
    ],
  },

  mall: {
    title: "Shopping Malls",
    hero: "/interiors/commercial/mall/mallhero.png",
    spaces: [
      {
        name: "Mall Interior",
        images: [
          "/interiors/commercial/mall/mall1.png",
          "/interiors/commercial/mall/mall2.png",
          "/interiors/commercial/mall/mall3.png",
          "/interiors/commercial/mall/mall4.png",
        ],
      },
    ],
  },

  medical: {
    title: "Medical Facilities",
hero: "/interiors/commercial/medical/medicalhero.png",
    spaces: [
      {
        name: "Lobby & Reception",
        images: [
          "/interiors/commercial/medical/lobby1.png",
          "/interiors/commercial/medical/lobby2.png",
        ],
      },

      {
        name: "Waiting Area",
        images: [
          "/interiors/commercial/medical/waiting1.png",
          "/interiors/commercial/medical/waiting2.png",
          "/interiors/commercial/medical/waiting3.png",
          "/interiors/commercial/medical/waiting4.png",
        ],
      },

      {
        name: "Consultation Room",
        images: [
          "/interiors/commercial/medical/consultation1.png",
          "/interiors/commercial/medical/consultation2.png",
          "/interiors/commercial/medical/consultation3.png",
          "/interiors/commercial/medical/consultation4.png",
        ],
      },

      {
        name: "Treatment Room",
        images: [
          "/interiors/commercial/medical/treatment1.png",
          "/interiors/commercial/medical/treatment2.png",
          "/interiors/commercial/medical/treatment3.png",
          "/interiors/commercial/medical/treatment4.png",
        ],
      },

      {
        name: "Pharmacy",
        images: [
          "/interiors/commercial/medical/pharmacy1.png",
          "/interiors/commercial/medical/pharmacy2.png",
          "/interiors/commercial/medical/pharmacy3.png",
          "/interiors/commercial/medical/pharmacy4.png",
        ],
      },
    ],
  },

  banking: {
    title: "Banking Facilities",
    hero: "/interiors/commercial/banking/bankhero.png",
    spaces: [
      {
        name: "Banking Hall",
        images: [
          "/interiors/commercial/banking/hall1.png",
          "/interiors/commercial/banking/hall2.png",
        ],
      },

      {
        name: "VIP Lounge",
        images: [
          "/interiors/commercial/banking/lounge1.png",
          "/interiors/commercial/banking/lounge2.png",
        ],
      },

      {
        name: "Executive Offices",
        images: [
          "/interiors/commercial/banking/eoffice1.png",
          "/interiors/commercial/banking/eoffice2.png",
          "/interiors/commercial/banking/eoffice3.png",
          "/interiors/commercial/banking/eoffice4.png",
        ],
      },

      {
        name: "Consultation Area",
        images: [
          "/interiors/commercial/banking/consultation1.png",
          "/interiors/commercial/banking/consultation2.png",
        ],
      },
    ],
  },
};
const hospitalityGallery = {
  restaurants: {
    title: "Restaurants & Cafés",
    hero: "/interiors/hospitality/restaurants/restauranthero.png",
    spaces: [
      {
        name: "Fine Dining",
        images: [
          "/interiors/hospitality/restaurants/finedining1.png",
          "/interiors/hospitality/restaurants/finedining2.png",
        ],
      },

      {
        name: "Rooftop Restaurant",
        images: [
          "/interiors/hospitality/restaurants/rooftop1.png",
          "/interiors/hospitality/restaurants/rooftop2.png",
          "/interiors/hospitality/restaurants/rooftop3.png",
          "/interiors/hospitality/restaurants/rooftop4.png",
        ],
      },

      {
        name: "Café Interior",
        images: [
          "/interiors/hospitality/restaurants/cafe1.png",
          "/interiors/hospitality/restaurants/cafe2.png",
          "/interiors/hospitality/restaurants/cafe3.png",
          "/interiors/hospitality/restaurants/cafe4.png",
        ],
      },

      {
        name: "Bar Lounge",
        images: [
          "/interiors/hospitality/restaurants/bar1.png",
          "/interiors/hospitality/restaurants/bar2.png",
          "/interiors/hospitality/restaurants/bar3.png",
          "/interiors/hospitality/restaurants/bar4.png",
        ],
      },
    ],
  },

  wellness: {
    title: "Beauty & Wellness",
    hero: "/interiors/hospitality/beauty/beautyhero.png",
    spaces: [
      {
        name: "Luxury Salon",
        images: [
          "/interiors/hospitality/wellness/salon1.png",
          "/interiors/hospitality/wellness/salon2.png",
          "/interiors/hospitality/wellness/salon3.png",
          "/interiors/hospitality/wellness/salon4.png",
        ],
      },

      {
        name: "Barbershop",
        images: [
          "/interiors/hospitality/wellness/barber1.png",
          "/interiors/hospitality/wellness/barber2.png",
          "/interiors/hospitality/wellness/barber3.png",
          "/interiors/hospitality/wellness/barber4.png",
        ],
      },

      {
        name: "Spa Reception",
        images: [
          "/interiors/hospitality/wellness/spareception1.png",
          "/interiors/hospitality/wellness/spareception2.png",
          "/interiors/hospitality/wellness/spareception3.png",
          "/interiors/hospitality/wellness/spareception4.png",
        ],
      },

      {
        name: "Treatment Rooms",
        images: [
          "/interiors/hospitality/wellness/spa1.png",
          "/interiors/hospitality/wellness/spa2.png",
          "/interiors/hospitality/wellness/spa3.png",
          "/interiors/hospitality/wellness/spa4.png",
        ],
      },
    ],
  },

  fitness: {
    title: "Fitness & Wellness",
    hero: "/interiors/hospitality/fitness/fitnesshero.png",
    spaces: [
      {
        name: "Gym Reception",
        images: [
          "/interiors/hospitality/fitness/gymreception1.png",
          "/interiors/hospitality/fitness/gymreception2.png",
        ],
      },

      {
        name: "Workout Floor",
        images: [
          "/interiors/hospitality/fitness/workout1.png",
          "/interiors/hospitality/fitness/workout2.png",
          "/interiors/hospitality/fitness/workout3.png",
          "/interiors/hospitality/fitness/workout4.png",
        ],
      },

      {
        name: "Yoga Studio",
        images: [
          "/interiors/hospitality/fitness/yoga1.png",
          "/interiors/hospitality/fitness/yoga2.png",
          "/interiors/hospitality/fitness/yoga3.png",
          "/interiors/hospitality/fitness/yoga4.png",
        ],
      },

      {
        name: "Wellness Lounge",
        images: [
          "/interiors/hospitality/fitness/lounge1.png",
          "/interiors/hospitality/fitness/lounge2.png",
        ],
      },
    ],
  },

  hotels: {
    title: "Hotels & Resorts",
    hero: "/interiors/hospitality/hotels/hotelhero.png",
    spaces: [
      {
        name: "Lobby",
        images: [
          "/interiors/hospitality/hotels/lobby1.png",
          "/interiors/hospitality/hotels/lobby2.png",
          "/interiors/hospitality/hotels/lobby3.png",
          "/interiors/hospitality/hotels/lobby4.png",
        ],
      },

      {
        name: "Suite Interior",
        images: [
          "/interiors/hospitality/hotels/suite1.png",
          "/interiors/hospitality/hotels/suite2.png",
          "/interiors/hospitality/hotels/suite3.png",
          "/interiors/hospitality/hotels/suite4.png",
        ],
      },

      {
        name: "Restaurant",
        images: [
          "/interiors/hospitality/hotels/restaurant1.png",
          "/interiors/hospitality/hotels/restaurant2.png",
          "/interiors/hospitality/hotels/restaurant3.png",
          "/interiors/hospitality/hotels/restaurant4.png",
        ],
      },

      {
        name: "Executive Lounge",
        images: [
          "/interiors/hospitality/hotels/elounge1.png",
          "/interiors/hospitality/hotels/elounge2.png",
        ],
      },
    ],
  },
};
const commercialTabs = [
  {
    key: "corporate",
    label: "Corporate",
  },

  {
    key: "retail",
    label: "Retail",
  },

  {
    key: "mall",
    label: "Mall",
  },

  {
    key: "medical",
    label: "Medical",
  },

  {
    key: "banking",
    label: "Banking",
  },
];
const styles = {
  "modern-luxury": {
    title: "Modern Luxury",
    hero: "/modern-luxury/modernluxurylounge1.png",

    spaces: [
      {
        name: "Living Room",
        image: "/modern-luxury/modernluxurylounge3.png",
      },
      {
        name: "Dining",
        image: "/modern-luxury/modernluxurydining1.png",
      },
      {
        name: "Kitchen",
        image: "/modern-luxury/modernluxurykitchen1.png",
      },
      {
        name: "Bedroom",
        image: "/modern-luxury/modernluxurybed1.png",
      },
      {
        name: "Bathroom",
        image: "/modern-luxury/modernluxurybath3.png",
      },
      {
        name: "Office",
        image: "/modern-luxury/modernluxuryoffice1.png",
      },
    ],
  },

  japandi: {
    title: "Japandi",
    hero: "/japandi/japandihero.png",

    spaces: [
      { name: "Living Room", image: "/japandi/japandilounge2.jpeg" },
      { name: "Dining", image: "/japandi/japandidining1.jpeg" },
      { name: "Kitchen", image: "/japandi/japandikitchen2.jpeg" },
      { name: "Bedroom", image: "/japandi/japandibedroom3.jpeg" },
      { name: "Bathroom", image: "/japandi/japandibath3.jpeg" },
      { name: "Office", image: "/japandi/japandioffice1.jpeg" },
    ],
  },

  minimalist: {
    title: "Minimalist",
    hero: "/minimalist/minimalisthero.png",

    spaces: [
      { name: "Living Room", image: "/minimalist/minimalistlounge1.png" },
      { name: "Dining", image: "/minimalist/minimalistdining1.png" },
      { name: "Kitchen", image: "/minimalist/minimalistkitchen1.png" },
      { name: "Bedroom", image: "/minimalist/minimalistbed1.png" },
      { name: "Bathroom", image: "/minimalist/minimalistbath1.png" },
      { name: "Office", image: "/minimalist/minimalistoffice1.png" },
    ],
  },

  scandinavian: {
    title: "Scandinavian",
    hero: "/scandinavian/scandinavianliving3.jpeg",

    spaces: [
      { name: "Living Room", image: "/scandinavian/scandinavianliving2.jpeg" },
      { name: "Dining", image: "/scandinavian/scandinaviandining4.jpeg" },
      { name: "Kitchen", image: "/scandinavian/scandinaviankitchen3.jpeg" },
      { name: "Bedroom", image: "/scandinavian/scandinavianbed2.jpeg" },
      { name: "Bathroom", image: "/scandinavian/scandinavianbath2.png" },
      { name: "Office", image: "/scandinavian/scandinavianoffice1.jpeg" },
    ],
  },

  classical: {
    title: "Classical",
    hero: "/classical/classicalliving2.jpeg",

    spaces: [
      { name: "Living Room", image: "/classical/classicalliving3.png" },
      { name: "Dining", image: "/classical/classicaldining2.jpeg" },
      { name: "Kitchen", image: "/classical/classicalkitchen3.jpeg" },
      { name: "Bedroom", image: "/classical/classicalbed3.jpeg" },
      { name: "Bathroom", image: "/classical/classicalbath2.jpeg" },
      { name: "Office", image: "/classical/classicaloffice1.jpeg" },
    ],
  },

  coastal: {
    title: "Coastal",
    hero: "/coastal/coastaldining2.jpeg",

    spaces: [
      { name: "Living Room", image: "/coastal/coastalliving3.png" },
      { name: "Dining", image: "/coastal/coastaldining1.jpeg" },
      { name: "Kitchen", image: "/coastal/coastalkitchen4.png" },
      { name: "Bedroom", image: "/coastal/coastalbed3.png" },
      { name: "Bathroom", image: "/coastal/coastalbath3.jpeg" },
      { name: "Office", image: "/coastal/coastaloffice1.jpeg" },
    ],
  },
};
export default function Interiors() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
const [commercialCategory, setCommercialCategory] =
  useState("corporate");

const [commercialSpace, setCommercialSpace] =
  useState(0);

const [selectedImage, setSelectedImage] =
  useState<string | null>(null);

const [selectedImages, setSelectedImages] =
  useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] =
  useState(0);

  const [hospitalityCategory, setHospitalityCategory] =
  useState("restaurants");

const [hospitalitySpace, setHospitalitySpace] =
  useState(0);

const hospitalityTabs = [
  {
    key: "restaurants",
    label: "Restaurants & Cafés",
  },
  {
    key: "wellness",
    label: "Beauty & Wellness",
  },
  {
    key: "fitness",
    label: "Fitness",
  },
  {
    key: "hotels",
    label: "Hotels & Resorts",
  },
];

const activeHospitality =
  hospitalityGallery[
    hospitalityCategory as keyof typeof hospitalityGallery
  ];

const [activeStyle, setActiveStyle] =
  useState<keyof typeof styles>("modern-luxury");
const currentStyle = styles[activeStyle];
const activeCommercial =
  commercialGallery[
    commercialCategory as keyof typeof commercialGallery
  ];
  const nextImage = () => {

  const next =
    selectedImageIndex ===
    selectedImages.length - 1
      ? 0
      : selectedImageIndex + 1;

  setSelectedImageIndex(next);

  setSelectedImage(
    selectedImages[next]
  );
};

const prevImage = () => {

  const prev =
    selectedImageIndex === 0
      ? selectedImages.length - 1
      : selectedImageIndex - 1;

  setSelectedImageIndex(prev);

  setSelectedImage(
    selectedImages[prev]
  );
};
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {

    if (!selectedImage) return;

    if (e.key === "Escape") {
      setSelectedImage(null);
    }

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () =>
    window.removeEventListener(
      "keydown",
      handleKeyDown
    );
}, [selectedImage, selectedImageIndex]);

  return (
    <main className="bg-[#071321] text-white min-h-screen">

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center px-16 py-6">

          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={
                scrolled
                  ? "/logo/logo-black.png"
                  : "/logo/logo-white.png"
              }
              alt="Apiyo Design Studio"
              className="h-16 transition-all duration-300"
            />
          </div>

          {/* NAVIGATION */}
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

          {/* CTA BUTTON */}
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

     {/* HERO SECTION */}
<section className="relative h-screen overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">

    <img
      src="/interior-hero/interiorhero.png"
      alt="Luxury Interior Design"
      className="
      w-full
      h-full
      object-cover
      "
    />

  </div>

  {/* BLUE OVERLAY */}
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
  />

  {/* CONTENT */}
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
        Interior Design
      </p>

      <h1
        className="
        text-6xl
        lg:text-8xl
        leading-[0.95]
        mb-10
        font-serif
        "
      >
        Interior Design
        <br />
        That Elevates
        <br />
        Everyday Living
      </h1>

      <div
        className="
        h-[2px]
        w-40
        bg-[#D4A85A]
        mb-10
        "
      />

      <p
        className="
        text-xl
        lg:text-2xl
        text-gray-300
        leading-relaxed
        max-w-2xl
        mb-12
        "
      >
        Thoughtfully designed residential and commercial interiors crafted for comfort, functionality and
        timeless elegance.
      </p>

      <div className="flex flex-wrap gap-5">

        <button
          className="
          px-10
          py-4
          rounded-full
          border
          border-[#D4A85A]
          text-[#D4A85A]
          transition-all
          duration-300
          hover:bg-[#D4A85A]
          hover:text-black
          "
        >
          Start Your Project
        </button>

        

      </div>

    </div>

  </div>

  {/* SCROLL INDICATOR */}
  <div
    className="
    absolute
    bottom-12
    left-1/2
    -translate-x-1/2
    text-[#D4A85A]
    tracking-[12px]
    uppercase
    text-lg
    "
  >
    Scroll to Explore
  </div>
</section>

{/* TRUST STRIP */}

<section
  className="
  bg-[#071321]
  "
>
  <div
    className="
    w-full
    px-12
    xl:px-32
    "
  >
    <div
      className="
      grid
      grid-cols-2
      lg:grid-cols-5
      "
    >

      {/* ITEM 1 */}

      <div
        className="
        flex
        items-center
        justify-center
        gap-4
        py-8
    
        "
      >
        <Trophy
          size={30}
          className="text-[#D4A85A]"
        />

        <div>
          <p className="text-white text-sm font-medium">
            Award Winning
          </p>

          <p className="text-gray-400 text-sm">
            Design Excellence
          </p>
        </div>
      </div>

      {/* ITEM 2 */}

      <div
        className="
        flex
        items-center
        justify-center
        gap-4
        py-8
        lg:px-8
      
        "
      >
        <Users
          size={30}
          className="text-[#D4A85A]"
        />

        <div>
          <p className="text-white text-sm font-medium">
            Tailored
          </p>

          <p className="text-gray-400 text-sm">
            To Your Lifestyle
          </p>
        </div>
      </div>

      {/* ITEM 3 */}

      <div
        className="
        flex
        items-center
        justify-center
        gap-4
        py-8
        lg:px-8
      
        "
      >
        <Gem
          size={30}
          className="text-[#D4A85A]"
        />

        <div>
          <p className="text-white text-sm font-medium">
            Premium Quality
          </p>

          <p className="text-gray-400 text-sm">
            Materials
          </p>
        </div>
      </div>

      {/* ITEM 4 */}

      <div
        className="
        flex
        items-center
        justify-center
        gap-4
        py-8
        lg:px-8
      
        "
      >
        <Clock3
          size={30}
          className="text-[#D4A85A]"
        />

        <div>
          <p className="text-white text-sm font-medium">
            On Time
          </p>

          <p className="text-gray-400 text-sm">
            Project Delivery
          </p>
        </div>
      </div>

      {/* ITEM 5 */}

      <div
        className="
        flex
        items-center
        justify-center
        gap-4
        py-8
        lg:px-8
        "
      >
        <Layers3
          size={30}
          className="text-[#D4A85A]"
        />

        <div>
          <p className="text-white text-sm font-medium">
            End To End
          </p>

          <p className="text-gray-400 text-sm">
            Interior Solutions
          </p>
        </div>
      </div>

    </div>
  </div>
</section>





<section className="py-24 bg-[#071321]">

  <div className="w-full px-16 xl:px-24">

    <div className="grid lg:grid-cols-[340px_1fr] gap-12">

      {/* LEFT INTRO */}

      <div>

        <p className="uppercase tracking-[5px] text-[#D4A85A] mb-4">
          Residential Interiors
        </p>

        <h2
          className="
          text-5xl
          leading-tight
          mb-8
          font-serif
          "
        >
          Explore Interior
          <br />
          Design Styles
        </h2>

        <div
          className="
          w-20
          h-[2px]
          bg-[#D4A85A]
          mb-8
          "
        />

        <p className="text-gray-300 leading-relaxed mb-10">
          Discover the style that reflects your personality
          and inspires your space.
        </p>


      </div>

      {/* STYLE CARDS */}

      <div>

        <div
  className="
  grid
  grid-cols-6
  gap-4
  w-full
  "
>

          {Object.entries(styles).map(([key, style]) => (

            <Link
  href={`/interiors/${key}`}
  key={key}
  onMouseEnter={() =>
    setActiveStyle(key as keyof typeof styles)
  }
  className="
  group
  relative
  cursor-pointer
  w-full
  h-[420px]
  rounded-3xl
  overflow-hidden
  transition-all
  duration-500
  hover:-translate-y-3
  "
>

              <img
                src={style.hero}
                alt={style.title}
                className="
                w-full
                h-full
                object-cover
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
                "
              />

              <div
                className="
                absolute
                bottom-5
                left-5
                "
              >

                <h3
                  className={`
                  text-lg
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activeStyle === key
                      ? "text-[#D4A85A]"
                      : "text-white"
                  }
                  `}
                >
                  {style.title}
                </h3>

              </div>

              <div
  className="
  absolute
  bottom-5
  right-5
  w-14
  h-14
  rounded-full
  bg-[#071321]/90
  backdrop-blur-xl
  flex
  items-center
  justify-center
  transition-all
  duration-300
  group-hover:bg-[#D4A85A]
  group-hover:scale-110
  "
>
  <ArrowRight
    size={24}
    className="
    text-white
    group-hover:text-black
    "
  />
</div>

            </Link>

          ))}

        </div>

      </div>

    </div>

    {/* SECTION 3 */}

    <div className="mt-20">

      <h2
        className="
        text-center
        text-5xl
        font-serif
        mb-12
        "
      >
        {currentStyle.title} Across Every Space
      </h2>

      <div
  className="
  grid
  grid-cols-6
  gap-4
  w-full
  "
>

        {currentStyle.spaces.map((space) => (

          <div
            key={space.name}
            className="
            group
            relative
            w-full
h-[420px]
            overflow-hidden
            rounded-2xl
            cursor-pointer
            "
          >

            <img
              src={space.image}
              alt={space.name}
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
              to-transparent
              "
            />

            <div
              className="
              absolute
              bottom-4
              left-4
              flex
              items-center
              gap-3
              "
            >

              <span
                className="
                text-white
                group-hover:text-[#D4A85A]
                transition-all
                "
              >
                ✦
              </span>

              <span
                className="
                text-white
                group-hover:text-[#D4A85A]
                transition-all
                "
              >
                {space.name}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>
<div className="flex justify-center mt-14">

  <button
    className="
    px-10
    py-4
    border
    border-[#D4A85A]
    rounded-full
    text-[#D4A85A]
    uppercase
    tracking-[3px]
    text-sm
    transition-all
    duration-300
    hover:bg-[#D4A85A]
    hover:text-black
    hover:shadow-[0_0_25px_rgba(212,168,90,0.25)]
    "
  >
    Explore All Spaces In {currentStyle.title} →
  </button>

</div>
</section>

<section className="py-32 bg-[#071321]">

  <div className="w-full px-24 xl:px-24">

    <p
  className="
  uppercase
  tracking-[8px]
  text-[#D4A85A]
  text-lg
  mb-6
  "
>
  Commercial Interiors
</p>

    <h2
  className="
  text-4xl
  lg:text-6xl
  leading-[0.95]
  font-serif
  mb-8
  "
>
      Spaces Designed
      For Business Growth
    </h2>

    <p
  className="
  text-gray-300
  max-w-4xl
  text-xl
  leading-relaxed
  mb-16
  "
>
      Corporate offices, retail environments,
      medical facilities, banks, malls and
      customer-facing spaces designed to elevate
      brand perception and customer experience.
    </p>

{/* COMMERCIAL HERO */}

<div
  className="
  relative
  h-[550px]
  rounded-[40px]
  overflow-hidden
  mb-16
  "
>

  <img
    src={activeCommercial.hero}
    alt={activeCommercial.title}
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
    h-full
    flex
    items-center
    px-20
    "
  >

    <div className="max-w-3xl">

      <p
        className="
        uppercase
        tracking-[4px]
        text-[#D4A85A]
        mb-4
        "
      >
        Commercial Interior Design
      </p>

      <h3
        className="
        text-6xl
        lg:text-7xl
        font-serif
        leading-[0.95]
        mb-6
        "
      >
        {activeCommercial.title}
      </h3>

      <div
        className="
        h-[2px]
        w-24
        bg-[#D4A85A]
        mb-8
        "
      />

      <p
        className="
        text-xl
        text-gray-300
        leading-relaxed
        max-w-2xl
        "
      >
        Explore curated interior environments
        designed to elevate customer experience,
        operational efficiency and brand value.
      </p>

    </div>

  </div>

</div>
    {/* CATEGORY NAV */}

    <div
      className="
      flex
      flex-wrap
      gap-6
      mb-12
      "
    >
      {commercialTabs.map((tab) => (

        <button
          key={tab.key}
          onClick={() => {
            setCommercialCategory(tab.key);
            setCommercialSpace(0);
          }}
          className={`
            px-10
            py-4
            rounded-full
            border
            transition-all
            duration-300

            ${
              commercialCategory === tab.key
                ? "bg-[#D4A85A] text-black border-[#D4A85A] shadow-[0_0_25px_rgba(212,168,90,0.35)]"
                : "border-white/10 text-white hover:border-[#D4A85A]"
            }
          `}
        >
          {tab.label}
        </button>

      ))}
    </div>

  </div>

</section>

  <section className="pb-24 bg-[#071321]">

  <div className="max-w-[1800px] mx-auto px-16">

    {/* SPACE NAV */}

    <div
      className="
      flex
      flex-wrap
      gap-4
      mb-14
      "
    >
      {activeCommercial.spaces.map(
        (space, index) => (

          <button
            key={space.name}
            onClick={() =>
              setCommercialSpace(index)
            }
            className={`
              px-6
              py-3
              rounded-full
              transition-all
              duration-300

              ${
                commercialSpace === index
                  ? "bg-[#1c3a60] text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }
            `}
          >
            {space.name}
          </button>

        )
      )}
    </div>

    {/* IMAGE GRID */}

    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-8
      "
    >
      {activeCommercial.spaces[
        commercialSpace
      ].images.map((image) => (

        <div
          key={image}
          onClick={() => {
  setSelectedImage(image);

  setSelectedImages(
    activeCommercial.spaces[
      commercialSpace
    ].images
  );

  setSelectedImageIndex(
    activeCommercial.spaces[
      commercialSpace
    ].images.indexOf(image)
  );
}}
          className="
          cursor-pointer
          overflow-hidden
          rounded-[30px]
          group
          "
        >
          <img
            src={image}
            alt=""
            className="
            w-full
            h-[420px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
            "
          />
        </div>

      ))}
    </div>

  </div>

</section>
{/* ==========================================
   HOSPITALITY & LIFESTYLE
========================================== */}

<section className="pt-32 pb-20 bg-[#071321]">

  <div className="w-full px-24">

    <p
      className="
      uppercase
      tracking-[5px]
      text-[#D4A85A]
      text-lg
      mb-6
      "
    >
      Hospitality & Lifestyle
    </p>

    <h2
      className="
      text-6xl
      lg:text-8xl
      leading-[0.95]
      font-serif
      mb-8
      "
    >
      Spaces Designed
      For Memorable Experiences
    </h2>

    <p
      className="
      text-gray-300
      max-w-4xl
      text-xl
      leading-relaxed
      mb-16
      "
    >
      Restaurants, wellness facilities,
      fitness centers and hospitality
      environments designed to elevate
      guest experiences and strengthen
      brand identity.
    </p>

    {/* DYNAMIC HERO */}

    <div
      className="
      relative
      h-[550px]
      rounded-[40px]
      overflow-hidden
      mb-16
      "
    >

      <img
        src={activeHospitality.hero}
        alt={activeHospitality.title}
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
        h-full
        flex
        items-center
        px-20
        "
      >

        <div className="max-w-3xl">

          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4A85A]
            mb-4
            "
          >
            Hospitality Interior Design
          </p>

          <h3
            className="
            text-6xl
            lg:text-7xl
            font-serif
            leading-[0.95]
            mb-6
            "
          >
            {activeHospitality.title}
          </h3>

          <div
            className="
            h-[2px]
            w-24
            bg-[#D4A85A]
            mb-8
            "
          />

          <p
            className="
            text-xl
            text-gray-300
            leading-relaxed
            max-w-2xl
            "
          >
            Curated hospitality environments
            designed to enhance comfort,
            customer engagement and memorable
            guest experiences.
          </p>

        </div>

      </div>

    </div>

    {/* CATEGORY TABS */}

    <div
      className="
      flex
      flex-wrap
      gap-6
      "
    >
      {hospitalityTabs.map((tab) => (

        <button
          key={tab.key}
          onClick={() => {
            setHospitalityCategory(tab.key);
            setHospitalitySpace(0);
          }}
          className={`
            px-10
            py-4
            rounded-full
            border
            transition-all
            duration-300

            ${
              hospitalityCategory === tab.key
                ? "bg-[#D4A85A] text-black border-[#D4A85A]"
                : "border-white/10 text-white hover:border-[#D4A85A]"
            }
          `}
        >
          {tab.label}
        </button>

      ))}
    </div>

  </div>

</section>

{/* ==========================================
   HOSPITALITY GALLERY
========================================== */}

<section className="pb-24 bg-[#071321]">

  <div className="w-full px-24">

    {/* SPACE NAVIGATION */}

    <div
      className="
      flex
      flex-wrap
      gap-4
      mb-14
      "
    >
      {activeHospitality.spaces.map(
        (space, index) => (

          <button
            key={space.name}
            onClick={() =>
              setHospitalitySpace(index)
            }
            className={`
              px-6
              py-3
              rounded-full
              transition-all
              duration-300

              ${
                hospitalitySpace === index
                  ? "bg-[#1c3a60] text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }
            `}
          >
            {space.name}
          </button>

        )
      )}
    </div>

    {/* IMAGE GRID */}

    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-8
      "
    >
      {activeHospitality.spaces[
        hospitalitySpace
      ].images.map((image) => (

        <div
          key={image}
          onClick={() => {

            setSelectedImage(image);

            setSelectedImages(
              activeHospitality.spaces[
                hospitalitySpace
              ].images
            );

            setSelectedImageIndex(
              activeHospitality.spaces[
                hospitalitySpace
              ].images.indexOf(image)
            );

          }}
          className="
          cursor-pointer
          overflow-hidden
          rounded-[30px]
          group
          "
        >

          <img
            src={image}
            alt=""
            className="
            w-full
            h-[420px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
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
    z-[999]
    bg-black/95
    backdrop-blur-xl
    flex
    items-center
    justify-center
    px-10
    "
  >

    {/* CLOSE */}

    <button
      onClick={() =>
        setSelectedImage(null)
      }
      className="
      absolute
      top-10
      right-10
      text-white
      text-5xl
      z-20
      hover:text-[#D4A85A]
      transition-all
      "
    >
      ×
    </button>

    {/* COUNTER */}

    <div
      className="
      absolute
      top-12
      left-12
      text-white/70
      tracking-[3px]
      uppercase
      text-sm
      "
    >
      {selectedImageIndex + 1}
      {" / "}
      {selectedImages.length}
    </div>

    {/* PREVIOUS */}

    <button
      onClick={prevImage}
      className="
      absolute
      left-8
      text-white
      text-6xl
      hover:text-[#D4A85A]
      transition-all
      "
    >
      ‹
    </button>

    {/* IMAGE */}

    <img
      src={selectedImage}
      alt=""
      className="
      max-h-[90vh]
      max-w-[90vw]
      object-contain
      rounded-[20px]
      shadow-[0_0_60px_rgba(212,168,90,0.15)]
      "
    />

    {/* NEXT */}

    <button
      onClick={nextImage}
      className="
      absolute
      right-8
      text-white
      text-6xl
      hover:text-[#D4A85A]
      transition-all
      "
    >
      ›
    </button>

  </div>

)}
    </main>
  );
}
