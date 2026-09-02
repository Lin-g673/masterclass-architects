"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import {
  Trophy,
  Users,
  Gem,
  Clock3,
  Layers3,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp
} from "react-icons/fa6";
import { Phone,
  Mail,
  MapPin,} from "lucide-react";
import { ArrowRight } from "lucide-react";
const commercialGallery = {
  corporate: {
    title: "Corporate Offices",
    hero: "/interiors/commercial/corporate/corporatehero.png",

    spaces: [
      {
        name: "Office Partitions",
        images: [
          "/interiors/commercial/corporate/partition1.png",
          "/interiors/commercial/corporate/partition2.png",
          "/interiors/commercial/corporate/partition3.png",
          "/interiors/commercial/corporate/partition4.png",
        ],
      },

      {
        name: "Private Offices",
        images: [
          "/interiors/commercial/corporate/office1.png",
          "/interiors/commercial/corporate/office2.png",
          "/interiors/commercial/corporate/office3.png",
          "/interiors/commercial/corporate/office4.png",
          "/interiors/commercial/corporate/office5.png",
        ],
      },

      {
        name: "Boardrooms",
        images: [
          "/interiors/commercial/corporate/board1.png",
          "/interiors/commercial/corporate/board2.png",
          "/interiors/commercial/corporate/board3.png",
          "/interiors/commercial/corporate/board4.png",
          "/interiors/commercial/corporate/board5.png",
        ],
      },

      {
        name: "Co-working Spaces",
        images: [
          "/interiors/commercial/corporate/coworking1.png",
          "/interiors/commercial/corporate/coworking2.png",
          "/interiors/commercial/corporate/coworking3.png",
          "/interiors/commercial/corporate/coworking4.png",
          "/interiors/commercial/corporate/coworking5.png",
          "/interiors/commercial/corporate/coworking6.png",
        ],
      },

      {
        name: "Reception",
        images: [
          "/interiors/commercial/corporate/reception1.png",
          "/interiors/commercial/corporate/reception2.png",
        ],
      },
    ],
  },

  retail: {
    title: "Retail Spaces",
    hero: "/interiors/commercial/retail/retailhero.png",

    spaces: [
      {
        name: "Supermarket",
        images: [
          "/interiors/commercial/retail/super1.png",
          "/interiors/commercial/retail/super2.png",
          "/interiors/commercial/retail/super3.png",
          "/interiors/commercial/retail/super4.png",
          "/interiors/commercial/retail/super5.png",
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
        name: "Clothing Store",
        images: [
          "/interiors/commercial/retail/clothes1.png",
          "/interiors/commercial/retail/clothes2.png",
        ],
      },

      {
        name: "Shoe Store",
        images: [
          "/interiors/commercial/retail/shoe1.png",
          "/interiors/commercial/retail/shoe2.png",
        ],
      },

      {
        name: "Beauty Store",
        images: [
          "/interiors/commercial/retail/beauty1.png",
          "/interiors/commercial/retail/beauty2.png",
        ],
      },

      {
        name: "Wine & Liquor",
        images: [
          "/interiors/commercial/retail/wine1.png",
          "/interiors/commercial/retail/wine2.png",
        ],
      },

      {
        name: "Retail Showroom",
        images: [
          "/interiors/commercial/retail/showroom1.png",
          "/interiors/commercial/retail/showroom2.png",
          "/interiors/commercial/retail/showroom3.png",
        ],
      },
    ],
  },

  medical: {
    title: "Medical Facilities",
    hero: "/interiors/commercial/medical/medicalhero.png",

    spaces: [
      {
        name: "Hospital Lobby",
        images: [
          "/interiors/commercial/medical/hosplobby1.png",
          "/interiors/commercial/medical/hosplobby2.png",
        ],
      },

      {
        name: "Waiting Area",
        images: [
          "/interiors/commercial/medical/waiting1.png",
          "/interiors/commercial/medical/waiting2.png",
          "/interiors/commercial/medical/waiting3.png",
          "/interiors/commercial/medical/waiting4.png",
          "/interiors/commercial/medical/waiting5.png",
        ],
      },

      {
        name: "Consultation Rooms",
        images: [
          "/interiors/commercial/medical/consultation1.png",
          "/interiors/commercial/medical/consultation2.png",
        ],
      },

      {
        name: "Treatment Rooms",
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
          "/interiors/commercial/banking/bankinghall1.png",
          "/interiors/commercial/banking/bankinghall2.png",
          "/interiors/commercial/banking/bankinghall3.png",
        ],
      },

      {
        name: "Consultation Area",
        images: [
          "/interiors/commercial/banking/consultation1.png",
          "/interiors/commercial/banking/consultation2.png",
          "/interiors/commercial/banking/consultation3.png",
          "/interiors/commercial/banking/consultation4.png",
          "/interiors/commercial/banking/consultation5.png",
        ],
      },

      {
        name: "Executive Offices",
        images: [
          "/interiors/commercial/banking/eoffice1.png",
          "/interiors/commercial/banking/eoffice2.png",
          "/interiors/commercial/banking/eoffice3.png",
          "/interiors/commercial/banking/eoffice4.png",
          "/interiors/commercial/banking/eoffice5.png",
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
          "/interiors/commercial/mall/mall5.png",
          "/interiors/commercial/mall/mall6.png",
          "/interiors/commercial/mall/mall7.png",
        ],
      },
    ],
  },
};
const hospitalityGallery = {
  restaurants: {
    title: "Restaurants & Cafés",
    hero: "/interiors/hospitality/restaurant/restauranthero.png",

    spaces: [
      {
        name: "Restaurant Dining",
        images: [
          "/interiors/hospitality/restaurant/restaurant1.png",
          "/interiors/hospitality/restaurant/restaurant2.png",
          "/interiors/hospitality/restaurant/restaurant3.png",
          "/interiors/hospitality/restaurant/restaurant4.png",
          "/interiors/hospitality/restaurant/restaurant5.png",
          "/interiors/hospitality/restaurant/restaurant6.png",
          "/interiors/hospitality/restaurant/restaurant7.png",
          "/interiors/hospitality/restaurant/restaurant8.png",
        ],
      },

      {
        name: "Cafe",
        images: [
          "/interiors/hospitality/restaurant/cafe1.png",
          "/interiors/hospitality/restaurant/cafe2.png",
          "/interiors/hospitality/restaurant/cafe3.png",
          "/interiors/hospitality/restaurant/cafe4.png",
          "/interiors/hospitality/restaurant/cafe5.png",
          "/interiors/hospitality/restaurant/cafe6.png",
        ],
      },

      {
        name: "Bar Lounge",
        images: [
          "/interiors/hospitality/restaurant/bar1.png",
          "/interiors/hospitality/restaurant/bar2.png",
          "/interiors/hospitality/restaurant/bar3.png",
          "/interiors/hospitality/restaurant/bar4.png",
          "/interiors/hospitality/restaurant/bar5.png",
          "/interiors/hospitality/restaurant/bar6.png",
        ],
      },

      {
        name: "Rooftop Dining",
        images: [
          "/interiors/hospitality/restaurant/rooftop1.png",
          "/interiors/hospitality/restaurant/rooftop2.png",
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
          "/interiors/hospitality/beauty/salon1.png",
          "/interiors/hospitality/beauty/salon2.png",
          "/interiors/hospitality/beauty/salon3.png",
          "/interiors/hospitality/beauty/salon4.png",
          "/interiors/hospitality/beauty/salon5.png",
          "/interiors/hospitality/beauty/salon6.png",
          "/interiors/hospitality/beauty/salon7.png",
          "/interiors/hospitality/beauty/salon8.png",
          "/interiors/hospitality/beauty/salon9.png",
          "/interiors/hospitality/beauty/salon10.png",
        ],
      },

      {
        name: "Spa",
        images: [
          "/interiors/hospitality/beauty/spa1.png",
          "/interiors/hospitality/beauty/spa2.png",
          "/interiors/hospitality/beauty/spa3.png",
          "/interiors/hospitality/beauty/spa4.png",
          "/interiors/hospitality/beauty/spa5.png",
          "/interiors/hospitality/beauty/spa6.png",
        ],
      },

      {
        name: "Spa Reception",
        images: [
          "/interiors/hospitality/beauty/spareception1.png",
          "/interiors/hospitality/beauty/spareception2.png",
          "/interiors/hospitality/beauty/spareception3.png",
          "/interiors/hospitality/beauty/spareception4.png",
          "/interiors/hospitality/beauty/spareception5.png",
        ],
      },

      {
        name: "Barber Shop",
        images: [
          "/interiors/hospitality/beauty/barber1.png",
          "/interiors/hospitality/beauty/barber2.png",
          "/interiors/hospitality/beauty/barber3.png",
          "/interiors/hospitality/beauty/barber4.png",
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
          "/interiors/hospitality/fitness/workoutfloor1.png",
          "/interiors/hospitality/fitness/workoutfloor2.png",
          "/interiors/hospitality/fitness/workoutfloor3.png",
          "/interiors/hospitality/fitness/workoutfloor4.png",
          "/interiors/hospitality/fitness/workoutfloor5.png",
          "/interiors/hospitality/fitness/workoutfloor6.png",
          "/interiors/hospitality/fitness/workoutfloor7.png",
        ],
      },

      {
        name: "Yoga Studio",
        images: [
          "/interiors/hospitality/fitness/yoga1.png",
          "/interiors/hospitality/fitness/yoga2.png",
          "/interiors/hospitality/fitness/yoga3.png",
        ],
      },
    ],
  },

  hotels: {
    title: "Hotels & Resorts",
    hero: "/interiors/hospitality/hotels/hotelhero.png",

    spaces: [
      {
        name: "Hotel Lobby",
        images: [
          "/interiors/hospitality/hotels/lobby1.png",
          "/interiors/hospitality/hotels/lobby2.png",
        ],
      },

      {
        name: "Executive Lounge",
        images: [
          "/interiors/hospitality/hotels/elounge1.png",
          "/interiors/hospitality/hotels/elounge2.png",
        ],
      },

      {
        name: "Luxury Suites",
        images: [
          "/interiors/hospitality/hotels/suite1.png",
          "/interiors/hospitality/hotels/suite2.png",
          "/interiors/hospitality/hotels/suite3.png",
          "/interiors/hospitality/hotels/suite4.png",
          "/interiors/hospitality/hotels/suite5.png",
        ],
      },

      {
        name: "Hotel Restaurant",
        images: [
          "/interiors/hospitality/hotels/restaurant1.png",
          "/interiors/hospitality/hotels/restaurant2.png",
          "/interiors/hospitality/hotels/restaurant3.png",
          "/interiors/hospitality/hotels/restaurant4.png",
          "/interiors/hospitality/hotels/restaurant5.png",
          "/interiors/hospitality/hotels/restaurant6.png",
        ],
      },
    ],
  },
};

const fitoutCategories = [
  {
    key: "ceiling",
    label: "Ceiling",
    hero: "/fitout/ceiling/ceilinghero.png",

    spaces: [
      {
        name: "Gypsum",
        images: [
          "/fitout/ceiling/gypsum1.png",
          "/fitout/ceiling/gypsum2.png",
        ],
      },
      {
        name: "Coffered",
        images: [
          "/fitout/ceiling/coffered.png",
        ],
      },
      {
        name: "PVC",
        images: [
          "/fitout/ceiling/pvc.png",
        ],
      },
      {
        name: "Acoustic",
        images: [
          "/fitout/ceiling/acoustic.png",
        ],
      },
      {
        name: "Exposed",
        images: [
          "/fitout/ceiling/exposed.png",
        ],
      },
      {
        name: "Wood",
        images: [
          "/fitout/ceiling/wood.png",
        ],
      },
    ],
  },

  {
    key: "lighting",
    label: "Lighting",
    hero: "/fitout/lighting/lightinghero.png",

    spaces: [
      {
        name: "Linear Lighting",
        images: [
          "/fitout/lighting/linear1.png",
          "/fitout/lighting/linear2.png",
        ],
      },
      {
        name: "Linear Pendant",
        images: [
          "/fitout/lighting/linearpendant1.png",
          "/fitout/lighting/linearpendant2.png",
        ],
      },
      {
        name: "Magnetic",
        images: [
          "/fitout/lighting/magnetic.png",
        ],
      },
      {
        name: "LED",
        images: [
          "/fitout/lighting/led1.png",
          "/fitout/lighting/led2.png",
        ],
      },
      {
        name: "Pendant",
        images: [
          "/fitout/lighting/pendant1.png",
          "/fitout/lighting/pendant2.png",
        ],
      },
      {
        name: "Downlight",
        images: [
          "/fitout/lighting/downlight.png",
        ],
      },
      {
        name: "Track",
        images: [
          "/fitout/lighting/track.png",
        ],
      },
      {
        name: "Spotlight",
        images: [
          "/fitout/lighting/spotlight.png",
        ],
      },
      {
        name: "Wall Light",
        images: [
          "/fitout/lighting/walllight1.png",
          "/fitout/lighting/walllight2.png",
        ],
      },
    ],
  },

  {
    key: "feature-walls",
    label: "Feature Walls",
    hero: "/fitout/featurewalls/featurehero.png",

    spaces: [
      {
        name: "TV Walls",
        images: [
          "/fitout/featurewalls/tvwall1.png",
          "/fitout/featurewalls/tvwall2.png",
          "/fitout/featurewalls/tvwall3.png",
          "/fitout/featurewalls/tvwall4.png",
          "/fitout/featurewalls/tvwall5.png",
          "/fitout/featurewalls/tvwall6.png",
        ],
      },
      {
        name: "Fluted",
        images: [
          "/fitout/featurewalls/fluted.png",
        ],
      },
      {
        name: "Marble",
        images: [
          "/fitout/featurewalls/marble.png",
        ],
      },
      {
        name: "Wainscoting",
        images: [
          "/fitout/featurewalls/wainscoting1.png",
          "/fitout/featurewalls/wainscoting2.png",
        ],
      },
      {
        name: "Headboards",
        images: [
          "/fitout/featurewalls/headboard1.png",
          "/fitout/featurewalls/headboard2.png",
          "/fitout/featurewalls/headboard3.png",
          "/fitout/featurewalls/headboard4.png",
          "/fitout/featurewalls/headboard5.png",
        ],
      },
      {
        name: "Reception",
        images: [
          "/fitout/featurewalls/reception1.png",
          "/fitout/featurewalls/reception2.png",
          "/fitout/featurewalls/reception3.png",
          "/fitout/featurewalls/reception4.png",
          "/fitout/featurewalls/reception5.png",
          "/fitout/featurewalls/reception6.png",
          "/fitout/featurewalls/reception7.png",
        ],
      },
    ],
  },

  {
    key: "paints",
    label: "Paints",
    hero: "/fitout/paint/painthero.png",

    spaces: [
      {
        name: "Luxury Paint",
        images: [
          "/fitout/paint/luxurypaint.png",
        ],
      },
      {
        name: "Decorative Paint",
        images: [
          "/fitout/paint/decorativepaint.png",
        ],
      },
      {
        name: "Textured Paint",
        images: [
          "/fitout/paint/texturedpaint.png",
        ],
      },
      {
        name: "Wallpaper",
        images: [
          "/fitout/paint/wallpaper.png",
        ],
      },
      {
        name: "Special Coating",
        images: [
          "/fitout/paint/specialcoating.png",
        ],
      },
      {
        name: "Accent Wall",
        images: [
          "/fitout/paint/accentwall.png",
        ],
      },
    ],
  },

  {
    key: "flooring",
    label: "Flooring",
    hero: "/fitout/flooring/flooringhero.png",

    spaces: [
      {
        name: "Porcelain",
        images: [
          "/fitout/flooring/porcelain1.png",
          "/fitout/flooring/porcelain2.png",
        ],
      },
      {
        name: "SPC",
        images: [
          "/fitout/flooring/spc.png",
        ],
      },
      {
        name: "Vinyl",
        images: [
          "/fitout/flooring/vinyl.png",
        ],
      },
      {
        name: "Herringbone",
        images: [
          "/fitout/flooring/herringbone.png",
        ],
      },
      {
        name: "Ceramic",
        images: [
          "/fitout/flooring/ceramic.png",
        ],
      },
      {
        name: "Epoxy",
        images: [
          "/fitout/flooring/epoxy.png",
        ],
      },
    ],
  },

  {
    key: "joinery",
    label: "Joinery",
    hero: "/fitout/joinery/joineryhero.png",

    spaces: [
      {
        name: "Kitchen Cabinets",
        images: [
          "/fitout/joinery/kitchencabinet1.png",
          "/fitout/joinery/kitchencabinet2.png",
          "/fitout/joinery/kitchencabinet3.png",
          "/fitout/joinery/kitchencabinet4.png",
          "/fitout/joinery/kitchencabinet5.png",
          "/fitout/joinery/kitchencabinet6.png",
        ],
      },
      {
        name: "Wardrobes",
        images: [
          "/fitout/joinery/wardrobe1.png",
          "/fitout/joinery/wardrobe2.png",
          "/fitout/joinery/wardrobe3.png",
          "/fitout/joinery/wardrobe4.png",
          "/fitout/joinery/wardrobe5.png",
        ],
      },
      {
        name: "Kitchen Islands",
        images: [
          "/fitout/joinery/island1.png",
          "/fitout/joinery/island2.png",
          "/fitout/joinery/island3.png",
          "/fitout/joinery/island4.png",
        ],
      },
      {
        name: "Office Joinery",
        images: [
          "/fitout/joinery/officejoinery1.png",
          "/fitout/joinery/officejoinery2.png",
        ],
      },
      {
        name: "Reception Desks",
        images: [
          "/fitout/joinery/receptiondesk1.png",
          "/fitout/joinery/receptiondesk2.png",
        ],
      },
      {
        name: "Custom Joinery",
        images: [
          "/fitout/joinery/custom1.png",
          "/fitout/joinery/custom2.png",
          "/fitout/joinery/custom3.png",
        ],
      },
    ],
  },

  {
    key: "plumbing",
    label: "Plumbing",
    hero: "/fitout/plumbing/plumbinghero.png",

    spaces: [
      {
        name: "Vanities",
        images: [
          "/fitout/plumbing/vanity1.png",
          "/fitout/plumbing/vanity2.png",
          "/fitout/plumbing/vanity3.png",
          "/fitout/plumbing/vanity4.png",
        ],
      },
      {
        name: "Mirrors",
        images: [
          "/fitout/plumbing/mirror1.png",
          "/fitout/plumbing/mirror2.png",
          "/fitout/plumbing/mirror3.png",
        ],
      },
    ],
  },
];

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
    hero: "/modern-luxury/modernluxurydining2.png",

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
    hero: "/japandi/japandidining3.png",

    spaces: [
      { name: "Living Room", image: "/japandi/japandiliving2.png" },
      { name: "Dining", image: "/japandi/japandidining3.png" },
      { name: "Kitchen", image: "/japandi/japandikitchen2.png" },
      { name: "Bedroom", image: "/japandi/japandibed2.png" },
      { name: "Bathroom", image: "/japandi/japandibath2.png" },
      { name: "Office", image: "/japandi/japandioffice1.png" },
    ],
  },

  minimalist: {
    title: "Minimalist",
    hero: "/minimalist/minimalistdining3.png",

    spaces: [
      { name: "Living Room", image: "/minimalist/minimalistliving2.png" },
      { name: "Dining", image: "/minimalist/minimalistdining3.png" },
      { name: "Kitchen", image: "/minimalist/minimalistkitchen3.png" },
      { name: "Bedroom", image: "/minimalist/minimalistbed3.png" },
      { name: "Bathroom", image: "/minimalist/minimalistbath2.png" },
      { name: "Office", image: "/minimalist/minimalistoffice1.png" },
    ],
  },

  scandinavian: {
    title: "Scandinavian",
    hero: "/scandinavian/scandinaviandining1.png",

    spaces: [
      { name: "Living Room", image: "/scandinavian/scandinavianliving2.png" },
      { name: "Dining", image: "/scandinavian/scandinaviandining1.png" },
      { name: "Kitchen", image: "/scandinavian/scandinaviankitchen2.png" },
      { name: "Bedroom", image: "/scandinavian/scandinavianbed1.png" },
      { name: "Bathroom", image: "/scandinavian/scandinavianbath3.png" },
      { name: "Office", image: "/scandinavian/scandinavianoffice1.png" },
    ],
  },

  classical: {
    title: "Classical",
    hero: "/classical/classicaldining2.png",

    spaces: [
      { name: "Living Room", image: "/classical/classicalliving1.png" },
      { name: "Dining", image: "/classical/classicaldining2.png" },
      { name: "Kitchen", image: "/classical/classicalkitchen2.png" },
      { name: "Bedroom", image: "/classical/classicalbed1.png" },
      { name: "Bathroom", image: "/classical/classicalbath3.png" },
      { name: "Office", image: "/classical/classicaloffice1.png" },
    ],
  },

  coastal: {
    title: "Coastal",
    hero: "/coastal/coastaldining2.png",

    spaces: [
      { name: "Living Room", image: "/coastal/coastalliving1.png" },
      { name: "Dining", image: "/coastal/coastaldining2.png" },
      { name: "Kitchen", image: "/coastal/coastalkitchen2.png" },
      { name: "Bedroom", image: "/coastal/coastalbed2.png" },
      { name: "Bathroom", image: "/coastal/coastalbath2.png" },
      { name: "Office", image: "/coastal/coastaloffice2.png" },
    ],
  },
};
export default function Interiors() {
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
const [fitoutCategory, setFitoutCategory] = useState("ceiling");
const [fitoutSpace, setFitoutSpace] = useState(0);

const activeFitout =
  fitoutCategories.find(
    (category) => category.key === fitoutCategory
  ) || fitoutCategories[0];

const activeHospitality =
  hospitalityGallery[
    hospitalityCategory as keyof typeof hospitalityGallery
  ];

const [activeStyle, setActiveStyle] =
  useState<keyof typeof styles>("modern-luxury");
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
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

      <Navbar />

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
    px-6 sm:px-8 lg:px-20
    "
  >

    <div className="max-w-4xl">

      <div className="flex items-center gap-4 mb-6">
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

      <h1
        className="
        text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
leading-[1.05]
mb-7
        font-heading
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
        text-sm
sm:text-base
md:text-lg
        text-gray-300
        leading-relaxed
        max-w-2xl
        mb-8
        "
      >
        Thoughtfully designed residential and commercial interiors crafted for comfort, functionality and
        timeless elegance.
      </p>

      <div className="flex flex-wrap gap-5">

        <Link
  href="/consultation"
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
</Link>

        

      </div>

    </div>

  </div>

  {/* SCROLL INDICATOR */}
  <div
  className="
    absolute
    bottom-6
    md:bottom-10
    left-1/2
    -translate-x-1/2
    text-[#D4A85A]
    tracking-[4px]
    md:tracking-[6px]
    uppercase
    text-[9px]
    md:text-[10px]
    whitespace-nowrap
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



<section
  className="
    py-10
    md:py-12
    lg:py-14
    bg-[#071321]
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
        INTRO + STYLE SELECTOR
    ===================================================== */}

    <div
      className="
        grid
        lg:grid-cols-[320px_1fr]
        gap-8
        md:gap-10
        lg:gap-12
        items-start
      "
    >

      {/* LEFT INTRO */}

      <div className="max-w-md">

        {/* GOLD DASH EYEBROW */}

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
            Residential Interiors
          </p>

          <div className="w-8 sm:w-10 h-px bg-[#D4A85A] flex-shrink-0" />
        </div>


        {/* TITLE */}

        <h2
          className="
            font-heading
            text-4xl
            sm:text-5xl
            md:text-5xl
            lg:text-6xl
            font-light
            leading-[1.08]
            sm:leading-[1.05]
            mb-6
          "
        >
          Explore Interior
          <br />
          Design Styles
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            md:text-base
            text-gray-400
            leading-relaxed
            max-w-sm
          "
        >
          Discover the style that reflects your personality
          and inspires your space.
        </p>

      </div>


      {/* =====================================================
          STYLE CARDS
      ===================================================== */}

      <div className="min-w-0">

        <div
          className="
            flex
            xl:grid
            xl:grid-cols-6
            gap-4
            overflow-x-auto
            xl:overflow-visible
            snap-x
            snap-mandatory
            pb-3
          "
        >
          {Object.entries(styles).map(([key, style]) => {
            const isActive = activeStyle === key;

            return (
              <button
                type="button"
                key={key}
                onClick={() =>
                  setActiveStyle(key as keyof typeof styles)
                }
                onMouseEnter={() =>
                  setActiveStyle(key as keyof typeof styles)
                }
                className={`
                  group
                  relative
                  flex-none
                  w-[44vw]
                  sm:w-[30vw]
                  md:w-[24vw]
                  xl:w-full
                  h-[220px]
                  sm:h-[240px]
                  xl:h-[260px]
                  rounded-2xl
                  overflow-hidden
                  snap-start
                  cursor-pointer
                  border
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "border-[#D4A85A]"
                      : "border-white/10 hover:border-[#D4A85A]/50"
                  }
                  xl:hover:-translate-y-2
                `}
              >
                <img
                  src={style.hero}
                  alt={style.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
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
                    bottom-4
                    left-4
                    right-4
                    text-left
                  "
                >
                  <h3
                    className={`
                      font-[var(--font-avenir)]
                      text-sm
                      md:text-base
                      font-medium
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-[#D4A85A]"
                          : "text-white"
                      }
                    `}
                  >
                    {style.title}
                  </h3>
                </div>

                {isActive && (
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      w-2
                      h-2
                      rounded-full
                      bg-[#D4A85A]
                      shadow-[0_0_12px_rgba(212,168,90,0.8)]
                    "
                  />
                )}
              </button>
            );
          })}
        </div>


        {/* MOBILE SWIPE CUE */}

        <div
          className="
            xl:hidden
            flex
            items-center
            justify-end
            gap-3
            mt-1
          "
        >
          <span
            className="
              font-[var(--font-avenir)]
              text-[9px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
            "
          >
            Swipe Styles
          </span>

          <span className="text-[#D4A85A] text-sm">
            →
          </span>
        </div>

      </div>

    </div>


    {/* =====================================================
        DYNAMIC SPACES
    ===================================================== */}

    <div
      id="residential-spaces"
      className="
        mt-10
        md:mt-12
        scroll-mt-24
      "
    >

      <div
        className="
          flex
          items-center
          justify-center
          gap-3
          sm:gap-4
          mb-4
        "
      >
        <div className="w-8 sm:w-10 h-px bg-[#D4A85A]" />

        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[4px]
            md:tracking-[6px]
            text-[#D4A85A]
            text-[9px]
            md:text-[10px]
            whitespace-nowrap
          "
        >
          Selected Style
        </p>

        <div className="w-8 sm:w-10 h-px bg-[#D4A85A]" />
      </div>


      <h2
        className="
          font-heading
          text-center
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-light
          leading-[1.1]
          mb-7
          md:mb-8
        "
      >
        {currentStyle.title} Across Every Space
      </h2>


      {/* ROOM CAROUSEL ON MOBILE / GRID ON DESKTOP */}

      <div
        className="
          flex
          lg:grid
          lg:grid-cols-6
          gap-4
          w-full
          overflow-x-auto
          lg:overflow-visible
          snap-x
          snap-mandatory
          pb-3
        "
      >
        {currentStyle.spaces.map((space) => (
          <div
            key={`${activeStyle}-${space.name}`}
            className="
              group
              relative
              flex-none
              w-[78vw]
              sm:w-[44vw]
              lg:w-full
              h-[230px]
              sm:h-[250px]
              lg:h-[260px]
              overflow-hidden
              rounded-2xl
              snap-start
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
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/10
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
              <span className="text-[#D4A85A]">
                ✦
              </span>

              <span
                className="
                  font-[var(--font-avenir)]
                  text-sm
                  text-white
                  group-hover:text-[#D4A85A]
                  transition-colors
                  duration-300
                "
              >
                {space.name}
              </span>
            </div>
          </div>
        ))}
      </div>


      {/* MOBILE ROOM SWIPE CUE */}

      <div
        className="
          lg:hidden
          flex
          items-center
          justify-end
          gap-3
          mt-1
        "
      >
        <span
          className="
            font-[var(--font-avenir)]
            text-[9px]
            uppercase
            tracking-[3px]
            text-[#D4A85A]
          "
        >
          Swipe To Explore
        </span>

        <span className="text-[#D4A85A] text-sm">
          →
        </span>
      </div>

    </div>


    {/* =====================================================
        EXPLORE SELECTED STYLE
    ===================================================== */}

    <div className="flex justify-center mt-8 md:mt-10">
      <Link
        href={`/interiors/${activeStyle}`}
        className="
          inline-flex
          items-center
          justify-center

          px-6
          sm:px-8
          py-3
          md:py-4

          border
          border-[#D4A85A]
          rounded-full

          text-[#D4A85A]

          font-[var(--font-avenir)]
          uppercase
          tracking-[2px]
          md:tracking-[3px]
          text-[9px]
          sm:text-[10px]
          md:text-xs
          text-center

          transition-all
          duration-300

          hover:bg-[#D4A85A]
          hover:text-black
          hover:shadow-[0_0_25px_rgba(212,168,90,0.25)]
        "
      >
        Explore All Spaces In {currentStyle.title} →
      </Link>
    </div>

  </div>
</section>
{/* =====================================================
    COMMERCIAL INTERIORS SECTION START
===================================================== */}

<section
  className="
    pt-10
    md:pt-12
    lg:pt-14
    pb-4
    md:pb-6
    lg:pb-8
    bg-[#071321]
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
        COMMERCIAL INTERIORS INTRO
    ===================================================== */}

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
        Commercial Interiors
      </p>

      <div className="w-8 sm:w-10 h-px bg-[#D4A85A] flex-shrink-0" />
    </div>


    {/* MAIN COMMERCIAL TITLE */}

    <h2
      className="
        font-heading
        text-4xl
        sm:text-5xl
        md:text-5xl
        lg:text-6xl
        font-light
        leading-[1.08]
        md:leading-[1.05]
        mb-6
      "
    >
      Spaces Designed
      <br className="sm:hidden" />
      {" "}For Business Growth
    </h2>


    {/* INTRO DESCRIPTION */}

    <p
      className="
        font-[var(--font-avenir)]
        text-gray-400
        max-w-3xl
        text-sm
        md:text-base
        font-light
        leading-relaxed
        mb-8
        md:mb-10
      "
    >
      Corporate offices, retail environments,
      medical facilities, banks, malls and
      customer-facing spaces designed to elevate
      brand perception and customer experience.
    </p>


    {/* =====================================================
        COMMERCIAL HERO
    ===================================================== */}

    <div
      className="
        relative
        h-[360px]
        sm:h-[400px]
        md:h-[440px]
        lg:h-[500px]
        rounded-2xl
        md:rounded-[30px]
        overflow-hidden
        mb-8
        md:mb-10
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
          px-5
          sm:px-6
          md:px-8
          lg:px-12
        "
      >
        <div className="max-w-3xl">

          {/* HERO EYEBROW */}

          <div
            className="
              flex
              items-center
              gap-3
              mb-4
            "
          >
            <div className="w-7 md:w-9 h-px bg-[#D4A85A] flex-shrink-0" />

            <p
              className="
                font-[var(--font-avenir)]
                uppercase
                tracking-[3px]
                md:tracking-[5px]
                text-[#D4A85A]
                text-[8px]
                md:text-[9px]
                whitespace-nowrap
              "
            >
              Commercial Interior Design
            </p>

            <div className="w-7 md:w-9 h-px bg-[#D4A85A] flex-shrink-0" />
          </div>


          {/* DYNAMIC COMMERCIAL TITLE */}

          <h3
            className="
              font-heading
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[54px]
              font-light
              leading-[1.08]
              mb-5
            "
          >
            {activeCommercial.title}
          </h3>


          <p
            className="
              font-[var(--font-avenir)]
              text-sm
              md:text-base
              font-light
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


    {/* =====================================================
        COMMERCIAL CATEGORY NAVIGATION
    ===================================================== */}

    <div
      className="
        flex
        flex-wrap
        gap-3
        md:gap-4
        mb-5
        md:mb-6
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
            px-4
            sm:px-5
            md:px-6
            py-2.5
            md:py-3

            rounded-full
            border

            font-[var(--font-avenir)]
            text-[11px]
            md:text-xs
            font-medium

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


{/* =====================================================
    COMMERCIAL INTERIORS GALLERY
===================================================== */}

<section
  className="
    pb-10
    md:pb-12
    lg:pb-14
    bg-[#071321]
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
        COMMERCIAL SPACE NAVIGATION
    ===================================================== */}

    <div
      className="
        flex
        flex-wrap
        gap-3
        md:gap-4
        mb-6
        md:mb-8
      "
    >
      {activeCommercial.spaces.map((space, index) => (
        <button
          key={space.name}
          onClick={() =>
            setCommercialSpace(index)
          }
          className={`
            px-4
            sm:px-5
            md:px-6
            py-2.5
            md:py-3

            rounded-full

            font-[var(--font-avenir)]
            text-[11px]
            md:text-xs
            font-medium

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
      ))}
    </div>


    {/* =====================================================
        COMMERCIAL IMAGE GRID
    ===================================================== */}

    <div
      className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-4
        md:gap-6
        lg:gap-8
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
            relative
            cursor-pointer
            overflow-hidden
            rounded-2xl
            md:rounded-[30px]
            group
          "
        >
          <img
            src={image}
            alt=""
            className="
              w-full
              h-[300px]
              sm:h-[360px]
              md:h-[380px]
              lg:h-[420px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />

          {/* SUBTLE HOVER OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-black/0
              group-hover:bg-black/15
              transition-all
              duration-500
            "
          />

          {/* VIEW LABEL */}

          <span
            className="
              absolute
              right-5
              bottom-5

              font-[var(--font-avenir)]
              text-[9px]
              uppercase
              tracking-[2px]

              text-white/0
              translate-y-2

              group-hover:text-[#D4A85A]
              group-hover:translate-y-0

              transition-all
              duration-500
            "
          >
            View
          </span>
        </div>
      ))}
    </div>

  </div>
</section>

{/* =====================================================
    COMMERCIAL INTERIORS SECTION END
===================================================== */}

{/* =========================================================
    HOSPITALITY & LIFESTYLE — SECTION
========================================================= */}

<section
  id="hospitality"
  className="
  relative
  bg-[#071321]
  text-white
  py-10
  md:py-12
  lg:py-14

  "
>

  {/* =======================================================
      SECTION INTRODUCTION
  ======================================================= */}

  <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">

    <div className="max-w-3xl">

      {/* SECTION LABEL */}

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
    Hospitality & Lifestyle
  </p>

  <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />
</div>

      {/* MAIN HEADING */}

      <h2
        className="
          text-4xl
md:text-5xl
lg:text-6xl
font-heading
leading-[1.08]
md:leading-[1.02]
mb-6
        "
      >
        Spaces Designed For Memorable Experiences
      </h2>


      {/* GOLD DIVIDER */}

      <div
        className="
          w-16
          h-px
          bg-[#D4A85A]
          mb-6
        "
      />


      {/* DESCRIPTION */}

      <p
  className="
    font-[var(--font-avenir)]
    text-sm
    md:text-base
    font-light
    leading-relaxed
    text-gray-300
    max-w-3xl
    mb-8
    md:mb-10
  "
>
  Restaurants, wellness facilities, fitness centers and
  hospitality environments designed to elevate guest
  experience, atmosphere and brand identity.
</p>

    </div>



    {/* =====================================================
        CATEGORY SELECTOR
    ===================================================== */}

    <div
      className="
        mt-4
md:mt-6
        flex
        flex-wrap
        items-center
        gap-x-5
md:gap-x-8
gap-y-2
        border-b
        border-white/10
        pb-4
      "
    >

      {hospitalityTabs.map((tab) => {

        const isActive =
          hospitalityCategory === tab.key;

        return (

          <button
            key={tab.key}
            onClick={() => {

              setHospitalityCategory(tab.key);
              setHospitalitySpace(0);

            }}
            className={`
              relative
              font-[var(--font-avenir)]
              text-[10px]
sm:text-[11px]
md:text-[12px]
uppercase
tracking-[2px]
md:tracking-[3px]
font-light
py-2.5
              transition-all
              duration-500

              ${
                isActive
                  ? "text-[#D4A85A]"
                  : "text-white/45 hover:text-white"
              }

              after:absolute
              after:left-0
              after:-bottom-[17px]
              after:h-px
              after:bg-[#D4A85A]
              after:transition-all
              after:duration-500

              ${
                isActive
                  ? "after:w-full"
                  : "after:w-0"
              }
            `}
          >
            {tab.label}
          </button>

        );

      })}

    </div>


    {/* =====================================================
        DYNAMIC CATEGORY HERO
    ===================================================== */}

    <div
  className="
    mt-7
    md:mt-9
    relative
    grid
    lg:grid-cols-[1.35fr_0.65fr]
    lg:min-h-[440px]
    overflow-hidden
    rounded-2xl
    md:rounded-[28px]
    border
    border-white/10
    bg-[#0a1828]
  "
>

      {/* HERO IMAGE */}

      <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[440px]">

        <img
          key={activeHospitality.hero}
          src={activeHospitality.hero}
          alt={activeHospitality.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            animate-fadeVisual
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/10
            via-black/10
            to-[#071321]/70
            lg:to-[#071321]
          "
        />

      </div>


      {/* HERO INFORMATION */}

      <div
        className="
          relative
          flex
          items-center
          px-5
sm:px-6
md:px-8
py-7
md:py-9
lg:px-10
lg:py-10
          bg-[#071321]
        "
      >

        <div className="max-w-3xl">

          <p
            className="
              font-[var(--font-avenir)]
             text-[9px]
md:text-[10px]
uppercase
tracking-[4px]
md:tracking-[6px]
text-[#D4A85A]
mb-4
            "
          >
            Hospitality Interior Design
          </p>

          <h3
  className="
    font-heading
    text-3xl
    sm:text-4xl
    md:text-5xl
    font-light
    leading-[1.05]
    tracking-[-0.015em]
    text-white
    mb-4
  "
>
            {activeHospitality.title}
          </h3>

          <div
            className="
              w-12
              h-px
              bg-[#D4A85A]
              mb-4
            "
          />

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
md:text-base
              font-light
              leading-relaxed
              text-gray-300
            "
          >
            Curated hospitality environments designed
            to enhance comfort, customer engagement
            and memorable guest experiences.
          </p>

        </div>

      </div>

    </div>


    {/* =====================================================
        SPACE NAVIGATION
    ===================================================== */}

    <div className="mt-8 md:mt-10">

      <div
        className="
          flex
          items-end
          justify-between
          gap-6
          mb-7
        "
      >

        <div>

          <p
            className="
              font-[var(--font-avenir)]
              text-[9px]
md:text-[10px]
uppercase
tracking-[4px]
md:tracking-[6px]
text-[#D4A85A]
mb-1
            "
          >
            Explore Spaces
          </p>

          
        </div>

        <div
          className="
            hidden
            md:block
            font-[var(--font-avenir)]
            text-[15px]
            tracking-[2px]
            text-gray-300
          "
        >
          {String(hospitalitySpace + 1).padStart(2, "0")}
          {" / "}
          {String(activeHospitality.spaces.length).padStart(2, "0")}
        </div>

      </div>


      <div
        className="
          flex
          flex-wrap
          gap-x-5
          md:gap-x-7
          gap-y-2
          border-b
          border-white/10
          pb-4
        "
      >

        {activeHospitality.spaces.map(
          (space, index) => {

            const isActive =
              hospitalitySpace === index;

            return (

              <button
                key={space.name}
                onClick={() =>
                  setHospitalitySpace(index)
                }
                className={`
                  font-[var(--font-avenir)]
                  text-[10px]
sm:text-[11px]
md:text-[12px]
uppercase
tracking-[2px]
md:tracking-[3px]
font-light
py-2
                  transition-all
                  duration-400

                  ${
                    isActive
                      ? "text-[#D4A85A]"
                      : "text-white/45 hover:text-white"
                  }
                `}
              >
                {space.name}
              </button>

            );

          }
        )}

      </div>

    </div>


  {/* =====================================================
    HOSPITALITY IMAGE GALLERY
===================================================== */}

<div
  className="
    mt-6
    md:mt-8
    grid
    grid-cols-2
    xl:grid-cols-4
    gap-3
    sm:gap-4
    md:gap-6
    lg:gap-8
  "
>

  {activeHospitality.spaces[
    hospitalitySpace
  ].images.map((image, index) => (

    <button
      key={image}
      type="button"
      onClick={() => {

        setSelectedImage(image);

        setSelectedImages(
          activeHospitality.spaces[
            hospitalitySpace
          ].images
        );

        setSelectedImageIndex(index);

      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
md:rounded-[24px]
        cursor-pointer
        bg-[#0a1828]
        text-left
        focus:outline-none
      "
    >

      <img
        src={image}
        alt={`${activeHospitality.spaces[hospitalitySpace].name} ${index + 1}`}
        className="
  w-full
  h-[220px]
  sm:h-[260px]
  md:h-[320px]
  lg:h-[380px]
  xl:h-[400px]
  object-cover
  transition-all
  duration-700
  group-hover:scale-105
"
      />

      {/* subtle image overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/0
          group-hover:bg-black/15
          transition-all
          duration-500
        "
      />

      {/* image number */}

      <span
        className="
          absolute
          left-5
          bottom-5
          font-[var(--font-avenir)]
          text-[9px]
          tracking-[2px]
          text-white/0
          group-hover:text-white/80
          transition-all
          duration-500
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* VIEW */}

      <span
        className="
          absolute
          right-5
          bottom-5
          font-[var(--font-avenir)]
          text-[9px]
          uppercase
          tracking-[2px]
          text-white/0
          translate-y-2
          group-hover:text-[#D4A85A]
          group-hover:translate-y-0
          transition-all
          duration-500
        "
      >
        View
      </span>

    </button>

  ))}

</div>

  </div>

</section>

{/* =========================================================
    PREMIUM IMAGE LIGHTBOX
========================================================= */}

{selectedImage && (

  <div
    className="
      fixed
      inset-0
      z-[100]
      bg-[#03070c]/[0.97]
      flex
      items-center
      justify-center
      animate-fadeVisual
    "
    onClick={(e) => {

      if (e.target === e.currentTarget) {
        setSelectedImage(null);
      }

    }}
  >

    {/* =====================================================
        TOP INFORMATION
    ===================================================== */}

    <div
      className="
        absolute
        top-6
        left-6
        right-6
        flex
        items-center
        justify-between
        pointer-events-none
      "
    >

      <div
        className="
          font-[var(--font-avenir)]
          text-[9px]
          uppercase
          tracking-[3px]
          text-white/40
        "
      >
        {activeHospitality.spaces[hospitalitySpace].name}
      </div>

      <div
        className="
          font-[var(--font-avenir)]
          text-[10px]
          tracking-[3px]
          text-white/50
        "
      >
        {String(selectedImageIndex + 1).padStart(2, "0")}
        {" / "}
        {String(selectedImages.length).padStart(2, "0")}
      </div>

    </div>


    {/* =====================================================
        CLOSE BUTTON
    ===================================================== */}

    <button
      type="button"
      onClick={() => setSelectedImage(null)}
      className="
        absolute
        top-5
        right-6
        w-11
        h-11
        rounded-full
        border
        border-white/15
        text-white/60
        flex
        items-center
        justify-center
        text-xl
        font-light
        transition-all
        duration-300
        hover:border-[#D4A85A]
        hover:text-[#D4A85A]
        hover:bg-[#D4A85A]/10
        z-20
      "
      aria-label="Close image"
    >
      ×
    </button>


    {/* =====================================================
        PREVIOUS BUTTON
    ===================================================== */}

    <button
      type="button"
      onClick={(e) => {

        e.stopPropagation();
        prevImage();

      }}
      className="
        absolute
        left-4
        lg:left-10
        top-1/2
        -translate-y-1/2
        w-12
        h-12
        lg:w-14
        lg:h-14
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-md
        text-white/60
        flex
        items-center
        justify-center
        text-xl
        font-light
        transition-all
        duration-300
        hover:border-[#D4A85A]/60
        hover:bg-[#D4A85A]/10
        hover:text-[#D4A85A]
        hover:-translate-x-1
        z-20
      "
      aria-label="Previous image"
    >
      ←
    </button>


    {/* =====================================================
        IMAGE
    ===================================================== */}

    <div
      className="
        relative
        max-w-[88vw]
        max-h-[82vh]
        flex
        items-center
        justify-center
      "
    >

      <img
        key={selectedImage}
        src={selectedImage}
        alt=""
        className="
          max-w-full
          max-h-[82vh]
          object-contain
          shadow-[0_20px_80px_rgba(0,0,0,0.55)]
          animate-fadeVisual
        "
      />

    </div>


    {/* =====================================================
        NEXT BUTTON
    ===================================================== */}

    <button
      type="button"
      onClick={(e) => {

        e.stopPropagation();
        nextImage();

      }}
      className="
        absolute
        right-4
        lg:right-10
        top-1/2
        -translate-y-1/2
        w-12
        h-12
        lg:w-14
        lg:h-14
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-md
        text-white/60
        flex
        items-center
        justify-center
        text-xl
        font-light
        transition-all
        duration-300
        hover:border-[#D4A85A]/60
        hover:bg-[#D4A85A]/10
        hover:text-[#D4A85A]
        hover:translate-x-1
        z-20
      "
      aria-label="Next image"
    >
      →
    </button>


    {/* =====================================================
        BOTTOM NAVIGATION HINT
    ===================================================== */}

    <div
      className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        flex
        items-center
        gap-5
        font-[var(--font-avenir)]
        text-[9px]
        uppercase
        tracking-[2px]
        text-white/25
      "
    >

      <span>← Previous</span>

      <span className="w-px h-3 bg-white/10" />

      <span>Next →</span>

      <span className="w-px h-3 bg-white/10" />

      <span>Esc Close</span>

    </div>

  </div>



)}
{/* =========================================================
    FIT-OUT & INTERIOR FINISHES
========================================================= */}

<section
  id="fitout"
  className="
    relative
    bg-[#071321]
    text-white
    py-10
    md:py-12
    lg:py-14
  "
>

  <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">

    {/* =====================================================
        SECTION INTRO
    ===================================================== */}

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
    Fit-Out & Interior Finishes
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
leading-[1.08]
md:leading-[1.02]
          tracking-[-0.015em]
          mb-6
        "
      >
        The Details That
        <br />
        Complete A Space
      </h2>

      <div
        className="
          w-16
          h-px
          bg-[#D4A85A]
          mb-6
        "
      />

      <p
        className="
          font-[var(--font-avenir)]
          text-sm
md:text-base
          font-light
          leading-relaxed
          text-gray-300
          max-w-2xl
        "
      >
        From ceilings and lighting to flooring, feature walls,
        joinery and plumbing finishes, we bring together the
        elements that transform an interior from a concept
        into a finished space.
      </p>

    </div>


    {/* =====================================================
        CATEGORY NAVIGATION
    ===================================================== */}

    <div
      className="
        mt-8
md:mt-10
        flex
        flex-wrap
        items-center
        gap-x-5
md:gap-x-8
gap-y-2
        border-b
        border-white/10
        pb-4
      "
    >

      {fitoutCategories.map((category) => {

        const isActive =
          fitoutCategory === category.key;

        return (
          <button
            key={category.key}
            onClick={() => {
              setFitoutCategory(category.key);
              setFitoutSpace(0);
            }}
            className={`
              relative
              font-[var(--font-avenir)]
              text-[10px]
sm:text-[11px]
md:text-[12px]
uppercase
tracking-[2px]
md:tracking-[3px]
font-light
py-2.5
              transition-all
              duration-500

              ${
                isActive
                  ? "text-[#D4A85A]"
                  : "text-white/45 hover:text-white"
              }

              after:absolute
              after:left-0
              after:-bottom-[17px]
              after:h-px
              after:bg-[#D4A85A]
              after:transition-all
              after:duration-500

              ${
                isActive
                  ? "after:w-full"
                  : "after:w-0"
              }
            `}
          >
            {category.label}
          </button>
        );

      })}

    </div>


    {/* =====================================================
        DYNAMIC FIT-OUT HERO
    ===================================================== */}

    <div
  className="
    mt-7
    md:mt-9
    relative
    grid
    lg:grid-cols-[1.35fr_0.65fr]
    lg:min-h-[440px]
    overflow-hidden
    rounded-2xl
    md:rounded-[28px]
    border
    border-white/10
    bg-[#0a1828]
  "
>

      {/* HERO IMAGE */}

      <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[440px]">

        <img
          key={activeFitout.hero}
          src={activeFitout.hero}
          alt={activeFitout.label}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            animate-fadeVisual
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/10
            via-black/10
            to-[#071321]/70
            lg:to-[#071321]
          "
        />

      </div>


      {/* HERO TEXT */}

      <div
        className="
          relative
          flex
          items-center
          px-5
sm:px-6
md:px-8
py-7
md:py-9
lg:px-10
lg:py-10
          bg-[#071321]
        "
      >

        <div className="max-w-xl">

          <p
            className="
              font-[var(--font-avenir)]
              text-[9px]
md:text-[10px]
uppercase
tracking-[4px]
md:tracking-[5px]
text-[#D4A85A]
mb-4
            "
          >
            Interior Fit-Out
          </p>

          <h3
            className="
              font-heading
              text-3xl
sm:text-4xl
md:text-5xl
font-light
leading-[1.05]
text-white
mb-4
            "
          >
            {activeFitout.label}
          </h3>

          <div
            className="
              w-12
              h-px
              bg-[#D4A85A]
              mb-4
            "
          />

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
md:text-base
              font-light
              leading-relaxed
              text-gray-300
            "
          >
            Carefully selected finishes and detailing designed
            to bring quality, functionality and character to
            every interior.
          </p>

        </div>

      </div>

    </div>


    {/* =====================================================
        SPACE / FINISH NAVIGATION
    ===================================================== */}

    <div className="mt-8 md:mt-10">

      <div
        className="
          flex
          items-end
          justify-between
          gap-6
          mb-7
        "
      >

        <div>

          <p
            className="
              font-[var(--font-avenir)]
              text-[9px]
md:text-[10px]
uppercase
tracking-[4px]
md:tracking-[5px]
              text-[#D4A85A]
              mb-1
            "
          >
            Explore Finishes
          </p>

        </div>

        <div
          className="
            hidden
            md:block
            font-[var(--font-avenir)]
            text-[11px]
            tracking-[2px]
            text-gray-300
          "
        >
          {String(fitoutSpace + 1).padStart(2, "0")}
          {" / "}
          {String(activeFitout.spaces.length).padStart(2, "0")}
        </div>

      </div>


      <div
        className="
          flex
          flex-wrap
          gap-x-7
          gap-y-3
          border-b
          border-white/10
          pb-5
        "
      >

        {activeFitout.spaces.map(
          (space, index) => {

            const isActive =
              fitoutSpace === index;

            return (

              <button
                key={space.name}
                onClick={() =>
                  setFitoutSpace(index)
                }
                className={`
                  font-[var(--font-avenir)]
                  text-[11px]
                  uppercase
                  tracking-[2.5px]
                  font-light
                  py-2
                  transition-all
                  duration-400

                  ${
                    isActive
                      ? "text-[#D4A85A]"
                      : "text-white/45 hover:text-white"
                  }
                `}
              >
                {space.name}
              </button>

            );

          }
        )}

      </div>

    </div>


    {/* =====================================================
        FIT-OUT IMAGE GALLERY
    ===================================================== */}

    <div
      className="
       mt-6
md:mt-8
grid
grid-cols-2
lg:grid-cols-4
gap-3
sm:gap-4
md:gap-5
lg:gap-6
      "
    >

      {activeFitout.spaces[
        fitoutSpace
      ].images.map((image, index) => (

        <button
          key={image}
          type="button"
          onClick={() => {

            setSelectedImage(image);

            setSelectedImages(
              activeFitout.spaces[
                fitoutSpace
              ].images
            );

            setSelectedImageIndex(index);

          }}
          className="
            group
            relative
            overflow-hidden
            rounded-xl
md:rounded-2xl
            bg-[#0a1828]
            text-left
            focus:outline-none
          "
        >

          <div
            className="
              relative
              aspect-[4/3]
              overflow-hidden
              rounded-[24px]
            "
          >

            <img
              src={image}
              alt={`${activeFitout.spaces[fitoutSpace].name} ${index + 1}`}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover:scale-[1.035]
              "
            />

            {/* HOVER OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-black/0
                group-hover:bg-black/15
                transition-all
                duration-500
              "
            />

            {/* IMAGE NUMBER */}

            <span
              className="
                absolute
                left-5
                bottom-5
                font-[var(--font-avenir)]
                text-[9px]
                tracking-[2px]
                text-white/0
                group-hover:text-white/80
                transition-all
                duration-500
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* VIEW */}

            <span
              className="
                absolute
                right-5
                bottom-5
                font-[var(--font-avenir)]
                text-[9px]
                uppercase
                tracking-[2px]
                text-white/0
                translate-y-2
                group-hover:text-[#D4A85A]
                group-hover:translate-y-0
                transition-all
                duration-500
              "
            >
              View
            </span>

          </div>

        </button>

      ))}

    </div>


{/* =========================================================
    INTERIOR DESIGN SERVICES & FEES
========================================================= */}

<section
  id="packages"
  className="
    relative
    bg-[#071321]
    text-white
    py-10
    md:py-12
    lg:py-14
  "
>
  <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">

    {/* =====================================================
        SECTION INTRODUCTION
    ===================================================== */}

    <div className="max-w-4xl mb-10 md:mb-12">

      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <div className="w-10 h-px bg-[#D4A85A] flex-shrink-0" />

        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[4px]
            md:tracking-[7px]
            text-[#D4A85A]
            text-[9px]
            md:text-[11px]
          "
        >
          Interior Design Services & Fees
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
          leading-[1.12]
          md:leading-[1.05]
          tracking-[-0.015em]
          mb-6
        "
      >
        Choose The Level Of
        <br />
        Support Your Project Needs.
      </h2>

      <div className="w-16 h-px bg-[#D4A85A] mb-6" />

      <p
        className="
          font-[var(--font-avenir)]
          text-sm
          md:text-base
          font-light
          leading-relaxed
          text-gray-300
          max-w-3xl
        "
      >
        From early design direction to complete project delivery,
        our interior services are structured around the level of
        design, documentation and implementation support your
        project requires.
      </p>

    </div>


    {/* =====================================================
        PACKAGE CARDS
    ===================================================== */}

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >

      {/* ===================================================
          PACKAGE 01 — CONCEPT DESIGN
      =================================================== */}

      <div
        className="
          group
          relative
          flex
          flex-col
          min-h-0
          md:min-h-[650px]
          xl:min-h-[700px]
          rounded-2xl
          md:rounded-[26px]
          border
          border-white/10
          bg-[#0a1828]
          p-5
          sm:p-6
          md:p-7
          xl:p-8
          overflow-hidden
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#D4A85A]/50
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D4A85A]
            to-transparent
            opacity-40
          "
        />

        <p
          className="
            font-[var(--font-avenir)]
            text-[10px]
            md:text-[11px]
            uppercase
            tracking-[3px]
            md:tracking-[4px]
            text-[#D4A85A]
            mb-4
          "
        >
          Package 01
        </p>

        <h3
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            leading-[1.05]
            mb-4
          "
        >
          Concept Design
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            mb-7
          "
        >
          For clients who need a clear professional vision,
          spatial direction and visual identity before moving
          into detailed documentation or execution.
        </p>

        <div className="border-t border-white/10 pt-5 mb-6">
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[3px]
              text-gray-500
              mb-2
            "
          >
            Professional Fee From
          </p>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p
              className="
                font-heading
                text-3xl
                font-light
                text-white
                whitespace-nowrap
              "
            >
              KES 1,500
            </p>

            <span
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-500
              "
            >
              / m²
            </span>
          </div>

          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              text-gray-500
              mt-2
            "
          >
            Minimum professional fee applies.
          </p>
        </div>

        <div className="flex-1">
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-5
            "
          >
            Key Deliverables
          </p>

          <ul
            className="
              space-y-3
              font-[var(--font-avenir)]
              text-[13px]
              font-light
              leading-relaxed
              text-gray-300
            "
          >
            <li>Design brief & space assessment</li>
            <li>Space planning & furniture layout</li>
            <li>Mood boards & design direction</li>
            <li>Colour, material & finish palette</li>
            <li>Furniture & lighting concept</li>
            <li>1–2 3D views per key space</li>
            <li>Up to 2 design revision rounds</li>
          </ul>
        </div>

        <button
          onClick={() => setSelectedPackage("concept")}
          className="
            w-full
            mt-7
            px-6
            py-3
            rounded-full
            border
            border-[#D4A85A]
            text-[#D4A85A]
            font-[var(--font-avenir)]
            uppercase
            tracking-[2px]
            text-xs
            transition-all
            duration-300
            hover:bg-[#D4A85A]
            hover:text-black
          "
        >
          Explore Package
        </button>
      </div>


      {/* ===================================================
          PACKAGE 02 — COMPLETE INTERIOR DESIGN
      =================================================== */}

      <div
        className="
          group
          relative
          flex
          flex-col
          min-h-0
          md:min-h-[650px]
          xl:min-h-[700px]
          rounded-2xl
          md:rounded-[26px]
          border
          border-[#D4A85A]/40
          bg-[#0a1828]
          p-5
          sm:p-6
          md:p-7
          xl:p-8
          overflow-hidden
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#D4A85A]
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
        "
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4A85A]" />

        <div
          className="
            absolute
            top-5
            right-5
            md:top-7
            md:right-7
            px-3
            py-1
            rounded-full
            bg-[#D4A85A]
            text-black
            font-[var(--font-avenir)]
            text-[8px]
            uppercase
            tracking-[1.5px]
          "
        >
          Most Popular
        </div>

        <p
          className="
            font-[var(--font-avenir)]
            text-[10px]
            md:text-[11px]
            uppercase
            tracking-[3px]
            md:tracking-[4px]
            text-[#D4A85A]
            mb-4
          "
        >
          Package 02
        </p>

        <h3
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            leading-[1.05]
            mb-4
            pr-16
          "
        >
          Complete Interior Design
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            mb-7
          "
        >
          A complete design solution for clients who require
          developed layouts, finishes, interior elements and
          coordinated design information for implementation.
        </p>

        <div className="border-t border-white/10 pt-5 mb-6">
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[3px]
              text-gray-500
              mb-2
            "
          >
            Professional Fee From
          </p>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p
              className="
                font-heading
                text-3xl
                font-light
                text-white
                whitespace-nowrap
              "
            >
              KES 2,500
            </p>

            <span
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-500
              "
            >
              / m²
            </span>
          </div>

          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              text-gray-500
              mt-2
            "
          >
            Minimum professional fee applies.
          </p>
        </div>

        <div className="flex-1">
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-5
            "
          >
            Key Deliverables
          </p>

          <ul
            className="
              space-y-3
              font-[var(--font-avenir)]
              text-[13px]
              font-light
              leading-relaxed
              text-gray-300
            "
          >
            <li>Everything in Concept Design</li>
            <li>Dimensioned interior layouts</li>
            <li>Floor & ceiling design layouts</li>
            <li>Lighting, switches & power layouts</li>
            <li>Plumbing fixture coordination</li>
            <li>Selected joinery concepts</li>
            <li>Interior elevations & finish specifications</li>
            <li>Photorealistic 3D visualisations</li>
            <li>Up to 3 design revision rounds</li>
          </ul>
        </div>

        <button
          onClick={() => setSelectedPackage("complete")}
          className="
            w-full
            mt-7
            px-6
            py-3
            rounded-full
            border
            border-[#D4A85A]
            text-[#D4A85A]
            font-[var(--font-avenir)]
            uppercase
            tracking-[2px]
            text-xs
            transition-all
            duration-300
            hover:bg-[#D4A85A]
            hover:text-black
          "
        >
          Explore Package
        </button>
      </div>


      {/* ===================================================
          PACKAGE 03 — PREMIUM DESIGN + DOCUMENTATION
      =================================================== */}

      <div
        className="
          group
          relative
          flex
          flex-col
          min-h-0
          md:min-h-[650px]
          xl:min-h-[700px]
          rounded-2xl
          md:rounded-[26px]
          border
          border-white/10
          bg-[#0a1828]
          p-5
          sm:p-6
          md:p-7
          xl:p-8
          overflow-hidden
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#D4A85A]/50
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D4A85A]
            to-transparent
            opacity-40
          "
        />

        <p
          className="
            font-[var(--font-avenir)]
            text-[10px]
            md:text-[11px]
            uppercase
            tracking-[3px]
            md:tracking-[4px]
            text-[#D4A85A]
            mb-4
          "
        >
          Package 03
        </p>

        <h3
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            leading-[1.05]
            mb-4
          "
        >
          Premium Design + Documentation
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            mb-7
          "
        >
          An execution-ready design package with comprehensive
          technical information, specialist coordination and
          detailed documentation for accurate implementation.
        </p>

        <div className="border-t border-white/10 pt-5 mb-6">
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[3px]
              text-gray-500
              mb-2
            "
          >
            Professional Fee From
          </p>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p
              className="
                font-heading
                text-3xl
                font-light
                text-white
                whitespace-nowrap
              "
            >
              KES 4,500
            </p>

            <span
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-500
              "
            >
              / m²
            </span>
          </div>

          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              text-gray-500
              mt-2
            "
          >
            Minimum professional fee applies.
          </p>
        </div>

        <div className="flex-1">
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-5
            "
          >
            Key Deliverables
          </p>

          <ul
            className="
              space-y-3
              font-[var(--font-avenir)]
              text-[13px]
              font-light
              leading-relaxed
              text-gray-300
            "
          >
            <li>Everything in Complete Interior Design</li>
            <li>Detailed joinery & fabrication drawings</li>
            <li>Interior elevations, sections & details</li>
            <li>Detailed finishes & material schedules</li>
            <li>MEP design & specialist coordination</li>
            <li>BOQ / detailed cost schedule</li>
            <li>Contractor pricing & tender support</li>
            <li>One pre-construction/site coordination review</li>
          </ul>
        </div>

        <button
          onClick={() => setSelectedPackage("premium")}
          className="
            w-full
            mt-7
            px-6
            py-3
            rounded-full
            border
            border-[#D4A85A]
            text-[#D4A85A]
            font-[var(--font-avenir)]
            uppercase
            tracking-[2px]
            text-xs
            transition-all
            duration-300
            hover:bg-[#D4A85A]
            hover:text-black
          "
        >
          Explore Package
        </button>
      </div>


      {/* ===================================================
          PACKAGE 04 — FULL-SERVICE / TURNKEY
      =================================================== */}

      <div
        className="
          group
          relative
          flex
          flex-col
          min-h-0
          md:min-h-[650px]
          xl:min-h-[700px]
          rounded-2xl
          md:rounded-[26px]
          border
          border-white/10
          bg-[#0a1828]
          p-5
          sm:p-6
          md:p-7
          xl:p-8
          overflow-hidden
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#D4A85A]/50
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D4A85A]
            to-transparent
            opacity-40
          "
        />

        <p
          className="
            font-[var(--font-avenir)]
            text-[10px]
            md:text-[11px]
            uppercase
            tracking-[3px]
            md:tracking-[4px]
            text-[#D4A85A]
            mb-4
          "
        >
          Package 04
        </p>

        <h3
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            leading-[1.05]
            mb-4
          "
        >
          Full-Service / Turnkey
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            mb-7
          "
        >
          Our complete interior service for clients who want
          one coordinated team guiding the project from design
          and procurement through implementation and handover.
        </p>

        <div className="border-t border-white/10 pt-5 mb-6">
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[3px]
              text-gray-500
              mb-2
            "
          >
            Professional Fee From
          </p>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p
              className="
                font-heading
                text-3xl
                font-light
                text-white
                whitespace-nowrap
              "
            >
              10%
            </p>

            <span
              className="
                font-[var(--font-avenir)]
                text-xs
                md:text-sm
                text-gray-500
              "
            >
              of project cost
            </span>
          </div>

          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              text-gray-500
              mt-2
            "
          >
            Final fee depends on project scope and complexity.
          </p>
        </div>

        <div className="flex-1">
          <p
            className="
              font-[var(--font-avenir)]
              text-[10px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-5
            "
          >
            Key Deliverables
          </p>

          <ul
            className="
              space-y-3
              font-[var(--font-avenir)]
              text-[13px]
              font-light
              leading-relaxed
              text-gray-300
            "
          >
            <li>Complete design & documentation</li>
            <li>BOQ, budgeting & procurement planning</li>
            <li>MEP & specialist consultant coordination</li>
            <li>Material, furniture & fixture sourcing</li>
            <li>Contractor & supplier coordination</li>
            <li>Site implementation & quality control</li>
            <li>Installation, snagging & styling</li>
            <li>Final project handover</li>
          </ul>
        </div>

        <button
          onClick={() => setSelectedPackage("turnkey")}
          className="
            w-full
            mt-7
            px-6
            py-3
            rounded-full
            border
            border-[#D4A85A]
            text-[#D4A85A]
            font-[var(--font-avenir)]
            uppercase
            tracking-[2px]
            text-xs
            transition-all
            duration-300
            hover:bg-[#D4A85A]
            hover:text-black
          "
        >
          Explore Package
        </button>
      </div>

    </div>


    {/* =====================================================
        IMPORTANT PRICING NOTE
    ===================================================== */}

    <div
      className="
        mt-7
        border-l
        border-[#D4A85A]
        pl-5
        md:pl-6
        max-w-5xl
      "
    >
      <p
        className="
          font-[var(--font-avenir)]
          text-xs
          md:text-sm
          font-light
          leading-relaxed
          text-gray-400
        "
      >
        Professional fees cover the design and professional services
        described within each package. Construction materials, labour,
        furniture, equipment and physical fit-out costs are separate
        unless specifically included within an approved turnkey project
        quotation and BOQ.
      </p>
    </div>


    {/* =====================================================
        OTHER WAYS TO WORK WITH US
    ===================================================== */}

    <div className="mt-14 md:mt-16">

      <div className="flex items-center gap-4 mb-6">
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
          Flexible Engagements
        </p>

        <div className="w-10 h-px bg-[#D4A85A]" />
      </div>

      <h3
        className="
          font-heading
          text-3xl
          md:text-4xl
          lg:text-5xl
          font-light
          leading-[1.08]
          mb-8
        "
      >
        Other Ways To Work With Us.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* CONSULTATION */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            p-6
            md:p-7
          "
        >
          <p
            className="
              font-[var(--font-avenir)]
              text-[9px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-4
            "
          >
            Consultation
          </p>

          <h4 className="font-heading text-2xl md:text-3xl font-light mb-3">
            From KES 5,000 / Hour
          </h4>

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
              font-light
              leading-relaxed
              text-gray-400
            "
          >
            Professional design advice, layout reviews, material and
            finish guidance, renovation advice and targeted design
            consultation. On-site consultations are quoted separately
            based on location and scope.
          </p>
        </div>


        {/* SINGLE SPACE */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            p-6
            md:p-7
          "
        >
          <p
            className="
              font-[var(--font-avenir)]
              text-[9px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-4
            "
          >
            Defined Scope
          </p>

          <h4 className="font-heading text-2xl md:text-3xl font-light mb-3">
            Fixed Project Fee
          </h4>

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
              font-light
              leading-relaxed
              text-gray-400
            "
          >
            Ideal for individual rooms, selected commercial spaces
            or clearly defined specialist assignments. Fees are
            determined by space size, complexity and required
            deliverables.
          </p>
        </div>


        {/* SITE VISITS */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            p-6
            md:p-7
          "
        >
          <p
            className="
              font-[var(--font-avenir)]
              text-[9px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-4
            "
          >
            Site Services
          </p>

          <h4 className="font-heading text-2xl md:text-3xl font-light mb-3">
            Quoted Per Visit
          </h4>

          <p
            className="
              font-[var(--font-avenir)]
              text-sm
              font-light
              leading-relaxed
              text-gray-400
            "
          >
            Site assessments, project reviews, design compliance
            inspections and professional representation. Travel,
            accommodation and logistics are additional where required.
          </p>
        </div>

      </div>

    </div>


    {/* =====================================================
        INDICATIVE FIT-OUT BUDGETS
    ===================================================== */}

    <div
      className="
        mt-14
        md:mt-16
        rounded-2xl
        md:rounded-[28px]
        border
        border-white/10
        bg-[#0a1828]
        p-5
        sm:p-6
        md:p-8
        lg:p-10
      "
    >
      <div className="max-w-3xl mb-8">

        <p
          className="
            font-[var(--font-avenir)]
            text-[9px]
            uppercase
            tracking-[4px]
            text-[#D4A85A]
            mb-4
          "
        >
          Project Planning Guide
        </p>

        <h3
          className="
            font-heading
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-light
            leading-[1.08]
            mb-4
          "
        >
          Indicative Fit-Out Budgets
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
          "
        >
          These figures provide an early planning guide for physical
          interior implementation. The final project cost is established
          through the approved design, specifications and BOQ.
        </p>
      </div>


      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-px
          bg-white/10
          border
          border-white/10
          rounded-2xl
          overflow-hidden
        "
      >

        <div className="bg-[#071321] p-6">
          <p className="font-[var(--font-avenir)] text-[9px] uppercase tracking-[3px] text-gray-500 mb-3">
            Essential
          </p>
          <p className="font-heading text-2xl md:text-3xl font-light">
            From KES 15,000
          </p>
          <p className="font-[var(--font-avenir)] text-xs text-gray-500 mt-1">
            per m²
          </p>
        </div>

        <div className="bg-[#071321] p-6">
          <p className="font-[var(--font-avenir)] text-[9px] uppercase tracking-[3px] text-gray-500 mb-3">
            Contemporary
          </p>
          <p className="font-heading text-2xl md:text-3xl font-light">
            From KES 25,000
          </p>
          <p className="font-[var(--font-avenir)] text-xs text-gray-500 mt-1">
            per m²
          </p>
        </div>

        <div className="bg-[#071321] p-6">
          <p className="font-[var(--font-avenir)] text-[9px] uppercase tracking-[3px] text-gray-500 mb-3">
            Premium
          </p>
          <p className="font-heading text-2xl md:text-3xl font-light">
            From KES 40,000
          </p>
          <p className="font-[var(--font-avenir)] text-xs text-gray-500 mt-1">
            per m²
          </p>
        </div>

        <div className="bg-[#071321] p-6">
          <p className="font-[var(--font-avenir)] text-[9px] uppercase tracking-[3px] text-[#D4A85A] mb-3">
            Luxury / Bespoke
          </p>
          <p className="font-heading text-2xl md:text-3xl font-light">
            From KES 65,000
          </p>
          <p className="font-[var(--font-avenir)] text-xs text-gray-500 mt-1">
            per m²
          </p>
        </div>

      </div>

      <p
        className="
          font-[var(--font-avenir)]
          text-[10px]
          md:text-[11px]
          font-light
          leading-relaxed
          text-gray-500
          mt-5
          max-w-5xl
        "
      >
        Indicative planning allowances only and not quotations. Actual
        costs vary according to project scope, existing conditions,
        material specifications, custom joinery, furniture, equipment,
        specialist services, project location and selected level of finish.
      </p>

    </div>


    {/* =====================================================
        BOTTOM CTA
    ===================================================== */}

    <div
      className="
        mt-10
        md:mt-12
        rounded-2xl
        md:rounded-[28px]
        border
        border-white/10
        bg-[#0a1828]
        px-5
        sm:px-6
        md:px-8
        py-7
        md:py-9
        lg:px-10
        lg:py-10
        flex
        flex-col
        lg:flex-row
        items-start
        lg:items-center
        justify-between
        gap-8
      "
    >
      <div>
        <p
          className="
            font-[var(--font-avenir)]
            text-[10px]
            uppercase
            tracking-[4px]
            text-[#D4A85A]
            mb-3
          "
        >
          Not Sure Where To Start?
        </p>

        <h3
          className="
            font-heading
            text-2xl
            md:text-3xl
            lg:text-4xl
            leading-[1.1]
            font-light
            mb-3
          "
        >
          Let's define the right scope for your project.
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            max-w-2xl
          "
        >
          Tell us about your space, project stage and expectations.
          We will recommend the appropriate service and prepare a
          project-specific proposal.
        </p>
      </div>

      <Link
        href="/consultation"
        className="
          inline-flex
          items-center
          justify-center
          w-full
          sm:w-auto
          px-6
          md:px-7
          py-3
          rounded-full
          border
          border-[#D4A85A]
          text-[#D4A85A]
          font-[var(--font-avenir)]
          text-xs
          font-medium
          uppercase
          tracking-[2px]
          transition-all
          duration-300
          hover:bg-[#D4A85A]
          hover:text-black
          hover:shadow-[0_0_25px_rgba(212,168,90,0.30)]
        "
      >
        Book Consultation
      </Link>
    </div>

  </div>
</section>


{/* =========================================================
    PACKAGE DETAILS MODAL
========================================================= */}

{selectedPackage && (
  <div
    className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-md
      px-4
      sm:px-6
      py-6
      md:py-10
    "
    onClick={() => setSelectedPackage(null)}
  >
    <div
      className="
        relative
        w-full
        max-w-4xl
        max-h-[92vh]
        overflow-y-auto
        rounded-2xl
        md:rounded-[28px]
        border
        border-white/10
        bg-[#071321]
        p-5
        sm:p-6
        md:p-8
        lg:p-10
        shadow-[0_0_80px_rgba(0,0,0,0.5)]
      "
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE */}

      <button
        onClick={() => setSelectedPackage(null)}
        className="
          absolute
          top-4
          right-5
          md:top-6
          md:right-7
          text-2xl
          md:text-3xl
          text-white/60
          transition-all
          hover:text-[#D4A85A]
        "
        aria-label="Close package details"
      >
        ×
      </button>


      {/* PACKAGE LABEL */}

      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-px bg-[#D4A85A]" />

        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[3px]
            md:tracking-[5px]
            text-[9px]
            md:text-[10px]
            text-[#D4A85A]
          "
        >
          Interior Design Package
        </p>

        <div className="w-8 h-px bg-[#D4A85A]" />
      </div>


      {/* PACKAGE TITLE */}

      <h2
        className="
          font-heading
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-light
          leading-[1.08]
          text-white
          mb-5
          pr-8
        "
      >
        {selectedPackage === "concept" && "Concept Design"}

        {selectedPackage === "complete" && "Complete Interior Design"}

        {selectedPackage === "premium" &&
          "Premium Design + Documentation"}

        {selectedPackage === "turnkey" &&
          "Full-Service / Turnkey"}
      </h2>


      <div className="w-16 h-px bg-[#D4A85A] mb-7" />


      {/* DESCRIPTION */}

      <p
        className="
          font-[var(--font-avenir)]
          text-sm
          md:text-base
          font-light
          leading-relaxed
          text-gray-300
          mb-7
          max-w-3xl
        "
      >
        {selectedPackage === "concept" &&
          "A focused concept service for clients who need professional spatial planning, a clear design direction and realistic visualisation before proceeding to detailed design or implementation."}

        {selectedPackage === "complete" &&
          "Our core interior design service, developed for clients who require a complete design solution with coordinated layouts, finishes, interior elements and visualisation for implementation."}

        {selectedPackage === "premium" &&
          "A comprehensive execution-ready design service combining detailed technical documentation, bespoke joinery, specialist MEP coordination, cost information and contractor support."}

        {selectedPackage === "turnkey" &&
          "Our complete end-to-end interior service, coordinating design, documentation, specialist consultants, procurement, contractors, implementation, quality control, styling and final handover."}
      </p>


      {/* PRICE */}

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-5
          md:p-6
          mb-8
        "
      >
        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[3px]
            text-[10px]
            text-gray-400
            mb-2
          "
        >
          Professional Fee From
        </p>

        <p
          className="
            font-heading
            text-3xl
            md:text-4xl
            font-light
            text-[#D4A85A]
          "
        >
          {selectedPackage === "concept" && "KES 1,500 / m²"}

          {selectedPackage === "complete" && "KES 2,500 / m²"}

          {selectedPackage === "premium" && "KES 4,500 / m²"}

          {selectedPackage === "turnkey" && "10% of Project Cost"}
        </p>

        <p
          className="
            font-[var(--font-avenir)]
            text-[10px]
            md:text-xs
            font-light
            leading-relaxed
            text-gray-500
            mt-2
          "
        >
          {selectedPackage !== "turnkey"
            ? "Minimum professional fee applies."
            : "Final professional fee is determined by project scope, complexity, procurement requirements and level of project management."}
        </p>
      </div>


      {/* =====================================================
          CONCEPT DETAILS
      ===================================================== */}

      {selectedPackage === "concept" && (
        <div className="grid md:grid-cols-2 gap-8 mb-9">

          <div>
            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-[#D4A85A] mb-5">
              What's Included
            </p>

            <ul className="space-y-3 font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-300">
              <li>✓ Initial design brief / consultation</li>
              <li>✓ Review of available drawings</li>
              <li>✓ Space planning & furniture layout</li>
              <li>✓ Mood boards & style direction</li>
              <li>✓ Colour & material palette</li>
              <li>✓ Furniture & styling direction</li>
              <li>✓ Preliminary lighting concept</li>
              <li>✓ 1–2 3D views per key space</li>
              <li>✓ Up to 2 design revision rounds</li>
              <li>✓ Final concept presentation</li>
            </ul>
          </div>

          <div>
            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-gray-500 mb-5">
              Not Included
            </p>

            <ul className="space-y-3 font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-400">
              <li>Technical construction drawings</li>
              <li>Detailed joinery drawings</li>
              <li>MEP engineering documentation</li>
              <li>BOQ / detailed cost plan</li>
              <li>Procurement</li>
              <li>Contractor coordination</li>
              <li>Site supervision</li>
              <li>Construction & installation</li>
            </ul>
          </div>

        </div>
      )}


      {/* =====================================================
          COMPLETE DESIGN DETAILS
      ===================================================== */}

      {selectedPackage === "complete" && (
        <div className="grid md:grid-cols-2 gap-8 mb-9">

          <div>
            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-[#D4A85A] mb-5">
              What's Included
            </p>

            <ul className="space-y-3 font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-300">
              <li>✓ Everything in Concept Design</li>
              <li>✓ Developed furniture layouts</li>
              <li>✓ Dimensioned interior floor plans</li>
              <li>✓ Floor finish layouts</li>
              <li>✓ Reflected ceiling design</li>
              <li>✓ Lighting layouts</li>
              <li>✓ Switch, socket & power layouts</li>
              <li>✓ Plumbing fixture coordination</li>
              <li>✓ Key interior elevations</li>
              <li>✓ Material & finish specifications</li>
              <li>✓ Selected joinery concepts</li>
              <li>✓ Photorealistic 3D visualisations</li>
              <li>✓ Up to 3 design revision rounds</li>
            </ul>
          </div>

          <div>
            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-gray-500 mb-5">
              Not Included
            </p>

            <ul className="space-y-3 font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-400">
              <li>Detailed fabrication/shop drawings</li>
              <li>Comprehensive BOQ unless separately commissioned</li>
              <li>Specialist engineering design</li>
              <li>Procurement & purchasing</li>
              <li>Construction labour & materials</li>
              <li>Contractor management</li>
              <li>Regular site supervision</li>
            </ul>
          </div>

        </div>
      )}


      {/* =====================================================
          PREMIUM DETAILS
      ===================================================== */}

      {selectedPackage === "premium" && (
        <div className="grid md:grid-cols-2 gap-8 mb-9">

          <div>
            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-[#D4A85A] mb-5">
              What's Included
            </p>

            <ul className="space-y-3 font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-300">
              <li>✓ Everything in Complete Interior Design</li>
              <li>✓ Detailed interior layouts</li>
              <li>✓ Interior elevations & sections</li>
              <li>✓ Detailed ceiling & lighting plans</li>
              <li>✓ Detailed joinery/fabrication drawings</li>
              <li>✓ Feature wall & bespoke detailing</li>
              <li>✓ Finishes & material schedules</li>
              <li>✓ MEP design & specialist coordination</li>
              <li>✓ BOQ / detailed cost schedule</li>
              <li>✓ Contractor pricing/tender support</li>
              <li>✓ Design clarification during pricing</li>
              <li>✓ One pre-construction/site coordination review</li>
            </ul>
          </div>

          <div>
            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-gray-500 mb-5">
              Specialist Coordination
            </p>

            <p className="font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-400 mb-5">
              Electrical, lighting, plumbing and other building
              services are coordinated with the interior design.
              Where specialist engineering design is required,
              appropriate consultants may be incorporated into
              the project team.
            </p>

            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-gray-500 mb-4">
              Not Included
            </p>

            <ul className="space-y-3 font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-400">
              <li>Construction materials & labour</li>
              <li>Furniture/material procurement</li>
              <li>Continuous site supervision</li>
              <li>Full contractor/project management</li>
              <li>Additional site visits beyond agreed scope</li>
            </ul>
          </div>

        </div>
      )}


      {/* =====================================================
          TURNKEY DETAILS
      ===================================================== */}

      {selectedPackage === "turnkey" && (
        <div className="grid md:grid-cols-2 gap-8 mb-9">

          <div>
            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-[#D4A85A] mb-5">
              Full-Service Scope
            </p>

            <ul className="space-y-3 font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-300">
              <li>✓ Complete design & technical documentation</li>
              <li>✓ Photorealistic 3D visualisation</li>
              <li>✓ BOQ & project budgeting</li>
              <li>✓ MEP & specialist consultant coordination</li>
              <li>✓ Procurement planning & sourcing</li>
              <li>✓ Furniture, fixture & material sourcing</li>
              <li>✓ Contractor & supplier coordination</li>
              <li>✓ Site implementation management</li>
              <li>✓ Design compliance & quality control</li>
              <li>✓ Installation coordination</li>
              <li>✓ Styling & furniture placement</li>
              <li>✓ Snagging & final handover</li>
            </ul>
          </div>

          <div>
            <p className="font-[var(--font-avenir)] uppercase tracking-[3px] text-[10px] text-[#D4A85A] mb-5">
              How Turnkey Pricing Works
            </p>

            <p className="font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-300 mb-5">
              The professional fee starts from 10% of the agreed
              project cost and covers the professional services,
              coordination and project management scope defined
              in the appointment.
            </p>

            <p className="font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-400 mb-5">
              Physical execution costs — including materials,
              labour, joinery, furniture, fixtures and equipment —
              are established separately through the approved
              project budget and BOQ.
            </p>

            <p className="font-[var(--font-avenir)] text-sm font-light leading-relaxed text-gray-400">
              Specialist consultants and trades are coordinated
              through the project team as required by the scope,
              complexity and technical requirements of the project.
            </p>
          </div>

        </div>
      )}


      {/* REVISION / SCOPE NOTE */}

      <div
        className="
          border-t
          border-white/10
          pt-6
          mb-8
        "
      >
        <p
          className="
            font-[var(--font-avenir)]
            text-[10px]
            md:text-xs
            font-light
            leading-relaxed
            text-gray-500
          "
        >
          Revisions are subject to the allowance stated within the
          selected package. Major changes to an approved design,
          changes to the original brief or additional services are
          treated as variations and may be quoted separately.
        </p>
      </div>


      {/* CTA */}

      <Link
        href="/consultation"
        onClick={() => setSelectedPackage(null)}
        className="
          inline-flex
          w-full
          sm:w-auto
          items-center
          justify-center
          px-6
          md:px-8
          py-3
          md:py-4
          rounded-full
          bg-[#D4A85A]
          text-black
          font-[var(--font-avenir)]
          uppercase
          tracking-[2px]
          text-xs
          md:text-sm
          transition-all
          duration-300
          hover:bg-white
        "
      >
        Discuss Your Project
      </Link>

    </div>
  </div>
)}

  </div>

</section>

<Footer />

    </main>
  );
}
