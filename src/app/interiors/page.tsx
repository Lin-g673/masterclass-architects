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

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center px-4 sm:px-6 lg:px-16 py-3 sm:py-4 lg:py-6">

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
  { label: "Home", href: "/" },
  { label: "House Plans", href: "/house-plans" },
  { label: "Interior Design", href: "/interiors" },
  { label: "3D Visualization", href: "/3d-visualization" },
  { label: "Projects", href: "/projects" },
  { label: "Students", href: "/students" },
  { label: "About Us", href: "/about-us" },
].map((item) => (
  <Link
    key={item.label}
    href={item.href}
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
    {item.label}
  </Link>
))}
          </nav>

          {/* CTA BUTTON */}
<Link
  href="/consultation"
  className={`px-7 py-3 rounded-full transition-all duration-300 border font-medium ${
    scrolled
      ? "bg-[#1c3a60] text-white border-[#1c3a60] hover:bg-[#D4A85A] hover:text-black hover:border-[#D4A85A]"
      : "border-[#D4A85A] text-[#D4A85A] hover:bg-[#D4A85A] hover:text-black hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]"
  }`}
>
  Book Consultation
</Link>

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
    px-6 sm:px-8 lg:px-20
    "
  >

    <div className="max-w-4xl">

      <p
        className="
        uppercase
        tracking-[10px]
        text-[#D4A85A]
        mb-10
        "
      >
        Interior Design
      </p>

      <h1
        className="
        text-4xl sm:text-5xl md:text-7xl lg:text-8xl
        leading-[0.95]
        mb-10
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

        <p className="uppercase tracking-[8px] text-lg text-[#D4A85A] mb-6">
          Residential Interiors
        </p>

        <h2
          className="
          text-5xl
          lg:text-6x1
          leading-[[0.95]
          mb-8
          font-heading
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

        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          Discover the style that reflects your personality
          and inspires your space.
        </p>


      </div>

      {/* STYLE CARDS */}

      <div>

        <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-6
    gap-5
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
        font-heading
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

  <div className="w-full px-16 xl:px-24">

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
  lg:text-5xl
  leading-[0.95]
  font-heading
  mb-8
  "
>
      Spaces Designed
      For Business Growth
    </h2>

    <p
  className="
  text-gray-300
  max-w-3xl
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
        tracking-[6px]
        text-[#D4A85A]
        mb-6
        "
      >
        Commercial Interior Design
      </p>

      <h3
        className="
        text-5xl
        lg:text-5xl
        font-heading
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

  <div className="w-full px-16 xl:px-24">

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
    relative
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

  {/* subtle hover overlay */}

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

      ))}
    </div>

  </div>

</section>
{/* =========================================================
    HOSPITALITY & LIFESTYLE — SECTION
========================================================= */}

<section
  id="hospitality"
  className="
    relative
    bg-[#071321]
    text-white
    py-32
  "
>

  {/* =======================================================
      SECTION INTRODUCTION
  ======================================================= */}

  <div className="w-full px-16 xl:px-24">

    <div className="max-w-3xl">

      {/* SECTION LABEL */}

      <p
        className="
          font-[var(--font-avenir)]
          text-lg
          uppercase
          tracking-[8px]
          text-[#D4A85A]
          mb-6
        "
      >
        Hospitality & Lifestyle
      </p>


      {/* MAIN HEADING */}

      <h2
        className="
          text-4xl
          lg:text-5xl
          font-heading
          leading-[0.95]
          mb-8
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
          text-xl
          font-light
          leading-relaxed
          tracking-[0]
          text-gray-300
          max-w-3x1
          mb-16
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
        mt-16
        flex
        flex-wrap
        items-center
        gap-x-8
        gap-y-4
        border-b
        border-white/10
        pb-5
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
              text-[14px]
              uppercase
              tracking-[3px]
              font-light
              py-3
              transition-all
              duration-500

              ${
                isActive
                  ? "text-[#D4A85A]"
                  : "text-white/45 hover:text-white"
              }

              after:absolute
              after:left-0
              after:-bottom-[21px]
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
        mt-14
        relative
        grid
        lg:grid-cols-[1.35fr_0.65fr]
        min-h-[460px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#0a1828]
      "
    >

      {/* HERO IMAGE */}

      <div className="relative min-h-[360px] lg:min-h-[460px]">

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
          px-8
          py-12
          lg:px-12
          lg:py-16
          bg-[#071321]
        "
      >

        <div className="max-w-3x1">

          <p
            className="
              font-[var(--font-avenir)]
              text-[15px]
              uppercase
              tracking-[6px]
              text-[#D4A85A]
              mb-6
            "
          >
            Hospitality Interior Design
          </p>

          <h3
            className="
              font-heading
              text-5xl
              lg:text-5xl
              font-light
              leading-[0.95]
              tracking-[-0.015em]
              text-white
              mb-6
            "
          >
            {activeHospitality.title}
          </h3>

          <div
            className="
              w-12
              h-px
              bg-[#D4A85A]
              mb-6
            "
          />

          <p
            className="
              font-[var(--font-avenir)]
              text-xl
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

    <div className="mt-16">

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
              text-[17px]
              uppercase
              tracking-[6px]
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
          gap-x-7
          gap-y-3
          border-b
          border-white/10
          pb-5
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
                  text-[14px]
                  uppercase
                  tracking-[3px]
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
    mt-10
    grid
    md:grid-cols-2
    xl:grid-cols-4
    gap-8
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
        rounded-[30px]
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
          h-[420px]
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
    py-32
  "
>

  <div className="w-full px-16 xl:px-24">

    {/* =====================================================
        SECTION INTRO
    ===================================================== */}

    <div className="max-w-4xl">

      <p
        className="
          font-[var(--font-avenir)]
          text-[13px]
          uppercase
          tracking-[5px]
          text-[#D4A85A]
          mb-6
        "
      >
        Fit-Out & Interior Finishes
      </p>

      <h2
        className="
          font-heading
          text-5xl
          lg:text-6xl
          font-light
          leading-[0.95]
          tracking-[-0.015em]
          mb-8
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
          text-lg
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
        mt-16
        flex
        flex-wrap
        items-center
        gap-x-8
        gap-y-4
        border-b
        border-white/10
        pb-5
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
              text-[12px]
              uppercase
              tracking-[3px]
              font-light
              py-3
              transition-all
              duration-500

              ${
                isActive
                  ? "text-[#D4A85A]"
                  : "text-white/45 hover:text-white"
              }

              after:absolute
              after:left-0
              after:-bottom-[21px]
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
        mt-14
        relative
        grid
        lg:grid-cols-[1.35fr_0.65fr]
        min-h-[460px]
        overflow-hidden
        rounded-[2px]
        border
        border-white/10
        bg-[#0a1828]
      "
    >

      {/* HERO IMAGE */}

      <div className="relative min-h-[360px] lg:min-h-[460px]">

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
          px-8
          py-12
          lg:px-12
          lg:py-16
          bg-[#071321]
        "
      >

        <div className="max-w-xl">

          <p
            className="
              font-[var(--font-avenir)]
              text-[12px]
              uppercase
              tracking-[5px]
              text-[#D4A85A]
              mb-6
            "
          >
            Interior Fit-Out
          </p>

          <h3
            className="
              font-heading
              text-4xl
              lg:text-5xl
              font-light
              leading-[0.95]
              text-white
              mb-6
            "
          >
            {activeFitout.label}
          </h3>

          <div
            className="
              w-12
              h-px
              bg-[#D4A85A]
              mb-6
            "
          />

          <p
            className="
              font-[var(--font-avenir)]
              text-base
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

    <div className="mt-16">

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
              text-[12px]
              uppercase
              tracking-[5px]
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
        mt-10
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-5
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
            rounded-[24px]
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
    TURNKEY INTERIOR PACKAGES
========================================================= */}

<section
  id="packages"
  className="
    relative
    bg-[#071321]
    text-white
    py-32
  "
>

  <div className="w-full px-16 xl:px-24">

    {/* =====================================================
        SECTION INTRODUCTION
    ===================================================== */}

    <div className="max-w-4xl mb-20">

      <p
        className="
          font-[var(--font-avenir)]
          text-lg
          uppercase
          tracking-[8px]
          text-[#D4A85A]
          mb-6
        "
      >
        Turnkey Interior Solutions
      </p>

      <h2
        className="
          font-heading
          text-5xl
          lg:text-7xl
          font-light
          leading-[0.95]
          tracking-[-0.015em]
          mb-8
        "
      >
        Complete Interiors.
        <br />
        One Seamless Solution.
      </h2>

      <div
        className="
          w-16
          h-px
          bg-[#D4A85A]
          mb-8
        "
      />

      <p
        className="
          font-[var(--font-avenir)]
          text-xl
          font-light
          leading-relaxed
          text-gray-300
          max-w-3xl
        "
      >
        From concept and material selection to fabrication,
        installation and final finishing, our turnkey interior
        packages bring every element of your space together
        under one coordinated solution.
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
          ESSENTIAL
      =================================================== */}

      <div
        className="
          group
          relative
          flex
          flex-col
          min-h-[620px]
          rounded-[30px]
          border
          border-white/10
          bg-[#0a1828]
          p-8
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
            text-[12px]
            uppercase
            tracking-[4px]
            text-[#D4A85A]
            mb-5
          "
        >
          Package 01
        </p>

        <h3
          className="
            font-heading
            text-4xl
            font-light
            mb-4
          "
        >
          Essential
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            mb-8
          "
        >
          A refined foundation for creating a beautiful,
          functional interior with carefully selected
          finishes and essential detailing.
        </p>

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
              text-[11px]
              uppercase
              tracking-[3px]
              text-gray-500
              mb-2
            "
          >
            Starting from
          </p>

          <p
            className="
              font-heading
              text-3xl
              font-light
              text-white
            "
          >
            KES XXX,XXX
            <span
              className="
                font-[var(--font-avenir)]
                text-sm
                text-gray-500
                ml-2
              "
            >
              / m²
            </span>
          </p>

        </div>


        <div className="flex-1">

          <p
            className="
              font-[var(--font-avenir)]
              text-[11px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-5
            "
          >
            Includes
          </p>

          <ul
            className="
              space-y-4
              font-[var(--font-avenir)]
              text-sm
              font-light
              text-gray-300
            "
          >
            <li>Interior design concept</li>
            <li>Selected wall finishes</li>
            <li>Ceiling finishes</li>
            <li>Basic lighting</li>
            <li>Floor finishes</li>
            <li>Essential joinery</li>
            <li>Installation coordination</li>
          </ul>

        </div>


        <button
  onClick={() => setSelectedPackage("essential")}
  className="
    px-7
    py-3
    rounded-full
    border
    border-[#D4A85A]
    text-[#D4A85A]
    uppercase
    tracking-[2px]
    text-sm
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
          PREMIUM
      =================================================== */}

      <div
        className="
          group
          relative
          flex
          flex-col
          min-h-[620px]
          rounded-[30px]
          border
          border-white/10
          bg-[#0a1828]
          p-8
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
            text-[12px]
            uppercase
            tracking-[4px]
            text-[#D4A85A]
            mb-5
          "
        >
          Package 02
        </p>

        <h3
          className="
            font-heading
            text-4xl
            font-light
            mb-4
          "
        >
          Premium
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            mb-8
          "
        >
          A more elevated interior package combining
          enhanced finishes, customized detailing and
          carefully coordinated design elements.
        </p>

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
              text-[11px]
              uppercase
              tracking-[3px]
              text-gray-500
              mb-2
            "
          >
            Starting from
          </p>

          <p
            className="
              font-heading
              text-3xl
              font-light
            "
          >
            KES XXX,XXX
            <span
              className="
                font-[var(--font-avenir)]
                text-sm
                text-gray-500
                ml-2
              "
            >
              / m²
            </span>
          </p>

        </div>


        <div className="flex-1">

          <p
            className="
              font-[var(--font-avenir)]
              text-[11px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-5
            "
          >
            Includes
          </p>

          <ul
            className="
              space-y-4
              font-[var(--font-avenir)]
              text-sm
              font-light
              text-gray-300
            "
          >
            <li>Complete interior design</li>
            <li>Premium wall finishes</li>
            <li>Feature ceilings</li>
            <li>Decorative & architectural lighting</li>
            <li>Premium flooring</li>
            <li>Customized joinery</li>
            <li>Installation & coordination</li>
          </ul>

        </div>


        <button
  onClick={() => setSelectedPackage("premium")}
  className="
    px-7
    py-3
    rounded-full
    border
    border-[#D4A85A]
    text-[#D4A85A]
    uppercase
    tracking-[2px]
    text-sm
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
          LUXURY
      =================================================== */}

      <div
        className="
          group
          relative
          flex
          flex-col
          min-h-[620px]
          rounded-[30px]
          border
          border-[#D4A85A]/40
          bg-[#0a1828]
          p-8
          overflow-hidden
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#D4A85A]
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
        "
      >

        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-[2px]
            bg-[#D4A85A]
          "
        />

        <div
          className="
            absolute
            top-7
            right-7
            px-3
            py-1
            rounded-full
            bg-[#D4A85A]
            text-black
            font-[var(--font-avenir)]
            text-[9px]
            uppercase
            tracking-[2px]
          "
        >
          Popular
        </div>

        <p
          className="
            font-[var(--font-avenir)]
            text-[12px]
            uppercase
            tracking-[4px]
            text-[#D4A85A]
            mb-5
          "
        >
          Package 03
        </p>

        <h3
          className="
            font-heading
            text-4xl
            font-light
            mb-4
          "
        >
          Luxury
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            mb-8
          "
        >
          A sophisticated turnkey solution featuring
          bespoke design, premium materials and
          detailed architectural finishes.
        </p>

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
              text-[11px]
              uppercase
              tracking-[3px]
              text-gray-500
              mb-2
            "
          >
            Starting from
          </p>

          <p
            className="
              font-heading
              text-3xl
              font-light
            "
          >
            KES XXX,XXX
            <span
              className="
                font-[var(--font-avenir)]
                text-sm
                text-gray-500
                ml-2
              "
            >
              / m²
            </span>
          </p>

        </div>


        <div className="flex-1">

          <p
            className="
              font-[var(--font-avenir)]
              text-[11px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-5
            "
          >
            Includes
          </p>

          <ul
            className="
              space-y-4
              font-[var(--font-avenir)]
              text-sm
              font-light
              text-gray-300
            "
          >
            <li>Bespoke interior design</li>
            <li>Premium architectural finishes</li>
            <li>Custom feature walls & ceilings</li>
            <li>Designer lighting scheme</li>
            <li>Premium flooring</li>
            <li>Full custom joinery</li>
            <li>Complete installation management</li>
          </ul>

        </div>


        <button
  onClick={() => setSelectedPackage("luxury")}
  className="
    px-7
    py-3
    rounded-full
    border
    border-[#D4A85A]
    text-[#D4A85A]
    uppercase
    tracking-[2px]
    text-sm
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
          SIGNATURE
      =================================================== */}

      <div
        className="
          group
          relative
          flex
          flex-col
          min-h-[620px]
          rounded-[30px]
          border
          border-white/10
          bg-[#0a1828]
          p-8
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
            text-[12px]
            uppercase
            tracking-[4px]
            text-[#D4A85A]
            mb-5
          "
        >
          Package 04
        </p>

        <h3
          className="
            font-heading
            text-4xl
            font-light
            mb-4
          "
        >
          Signature
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            leading-relaxed
            text-gray-400
            mb-8
          "
        >
          Our most comprehensive bespoke experience,
          created for clients seeking a completely
          personalized interior from concept to completion.
        </p>

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
              text-[11px]
              uppercase
              tracking-[3px]
              text-gray-500
              mb-2
            "
          >
            Starting from
          </p>

          <p
            className="
              font-heading
              text-3xl
              font-light
            "
          >
            KES XXX,XXX
            <span
              className="
                font-[var(--font-avenir)]
                text-sm
                text-gray-500
                ml-2
              "
            >
              / m²
            </span>
          </p>

        </div>


        <div className="flex-1">

          <p
            className="
              font-[var(--font-avenir)]
              text-[11px]
              uppercase
              tracking-[3px]
              text-[#D4A85A]
              mb-5
            "
          >
            Includes
          </p>

          <ul
            className="
              space-y-4
              font-[var(--font-avenir)]
              text-sm
              font-light
              text-gray-300
            "
          >
            <li>Fully bespoke interior design</li>
            <li>Premium & imported finishes</li>
            <li>Architectural lighting design</li>
            <li>Custom ceilings & feature walls</li>
            <li>Luxury flooring solutions</li>
            <li>Complete bespoke joinery</li>
            <li>Procurement & project management</li>
            <li>Full turnkey installation</li>
          </ul>

        </div>


        <button
  onClick={() => setSelectedPackage("signature")}
  className="
    px-7
    py-3
    rounded-full
    border
    border-[#D4A85A]
    text-[#D4A85A]
    uppercase
    tracking-[2px]
    text-sm
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
        BOTTOM CTA
    ===================================================== */}

    <div
      className="
        mt-20
        rounded-[32px]
        border
        border-white/10
        bg-[#0a1828]
        px-8
        py-10
        lg:px-14
        lg:py-12
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
            text-[11px]
            uppercase
            tracking-[4px]
            text-[#D4A85A]
            mb-3
          "
        >
          Need Help Choosing?
        </p>

        <h3
          className="
            font-heading
            text-3xl
            lg:text-4xl
            font-light
            mb-3
          "
        >
          Let's find the right package for your space.
        </h3>

        <p
          className="
            font-[var(--font-avenir)]
            text-sm
            font-light
            text-gray-400
          "
        >
          Every project is different. We can tailor the
          scope, finishes and specifications around your
          requirements.
        </p>

      </div>


      <Link
  href="/consultation"
  className={`px-7 py-3 rounded-full transition-all duration-300 border font-medium ${
    scrolled
      ? "bg-[#1c3a60] text-white border-[#1c3a60] hover:bg-[#D4A85A] hover:text-black hover:border-[#D4A85A]"
      : "border-[#D4A85A] text-[#D4A85A] hover:bg-[#D4A85A] hover:text-black hover:shadow-[0_0_25px_rgba(212,168,90,0.45)]"
  }`}
>
  Book Consultation
</Link>

    </div>

  </div>

</section>

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
      px-6
      py-10
    "
    onClick={() => setSelectedPackage(null)}
  >

    <div
      className="
        relative
        w-full
        max-w-3xl
        max-h-[90vh]
        overflow-y-auto
        rounded-[32px]
        border
        border-white/10
        bg-[#071321]
        p-8
        lg:p-12
        shadow-[0_0_80px_rgba(0,0,0,0.5)]
      "
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE */}

      <button
        onClick={() => setSelectedPackage(null)}
        className="
          absolute
          top-6
          right-7
          text-3xl
          text-white/60
          transition-all
          hover:text-[#D4A85A]
        "
      >
        ×
      </button>


      {/* PACKAGE LABEL */}

      <p
        className="
          font-[var(--font-avenir)]
          uppercase
          tracking-[5px]
          text-sm
          text-[#D4A85A]
          mb-5
        "
      >
        Interior Design Package
      </p>


      {/* PACKAGE TITLE */}

      <h2
        className="
          font-heading
          text-5xl
          lg:text-6xl
          font-light
          leading-[0.95]
          text-white
          mb-6
        "
      >
        {selectedPackage === "essential" && "Essential Package"}

        {selectedPackage === "signature" && "Signature Package"}

        {selectedPackage === "premium" && "Premium Package"}
      </h2>


      {/* DIVIDER */}

      <div
        className="
          w-16
          h-px
          bg-[#D4A85A]
          mb-8
        "
      />


      {/* DESCRIPTION */}

      <p
        className="
          font-[var(--font-avenir)]
          text-lg
          font-light
          leading-relaxed
          text-gray-300
          mb-10
        "
      >
        {selectedPackage === "essential" &&
          "A refined interior design solution for clients looking for a beautifully planned and thoughtfully designed space."}

        {selectedPackage === "signature" &&
          "A comprehensive interior design experience combining design development, material selection and detailed interior planning."}

        {selectedPackage === "premium" &&
          "A complete luxury interior design experience with detailed design development, premium finishes and end-to-end coordination."}
      </p>


      {/* STARTING PRICE */}

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-6
          mb-8
        "
      >

        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[3px]
            text-xs
            text-gray-400
            mb-2
          "
        >
          Starting From
        </p>

        <p
          className="
            font-heading
            text-3xl
            text-[#D4A85A]
          "
        >
          {selectedPackage === "essential" && "KES XXXK / SQM"}

          {selectedPackage === "signature" && "KES XXXK / SQM"}

          {selectedPackage === "premium" && "KES XXXK / SQM"}
        </p>

      </div>


      {/* WHAT'S INCLUDED */}

      <div className="mb-10">

        <p
          className="
            font-[var(--font-avenir)]
            uppercase
            tracking-[3px]
            text-sm
            text-[#D4A85A]
            mb-5
          "
        >
          What's Included
        </p>

        <ul
          className="
            space-y-4
            font-[var(--font-avenir)]
            text-gray-300
            font-light
          "
        >

          <li>✓ Interior design consultation</li>

          <li>✓ Space planning and layout development</li>

          <li>✓ Material and finish selection</li>

          <li>✓ Furniture and lighting recommendations</li>

          <li>✓ Detailed interior design direction</li>

          <li>✓ Project coordination</li>

        </ul>

      </div>


      {/* CTA */}

      <Link
        href="/consultation"
        onClick={() => setSelectedPackage(null)}
        className="
          inline-flex
          items-center
          justify-center
          px-8
          py-4
          rounded-full
          bg-[#D4A85A]
          text-black
          uppercase
          tracking-[2px]
          text-sm
          transition-all
          duration-300
          hover:bg-white
        "
      >
        Book A Consultation
      </Link>

    </div>

  </div>
)}

  </div>

</section>

{/* =========================================================
    FOOTER
========================================================= */}

<footer
  className="
    border-t
    border-white/10
    py-24
    overflow-hidden
  "
>

  <div className="w-full px-6 sm:px-8 lg:px-32">

    <div
      className="
        grid
        lg:grid-cols-[1.8fr_1fr_1fr_1fr_0.8fr]
        gap-20
      "
    >

      {/* =====================================================
          BRAND
      ===================================================== */}

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


      {/* =====================================================
          QUICK LINKS
      ===================================================== */}

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

          <Link
            href="/"
            className="
              text-gray-300
              hover:text-[#D4A85A]
              transition-all
              duration-300
            "
          >
            Home
          </Link>

          <Link
            href="/house-plans"
            className="
              text-gray-300
              hover:text-[#D4A85A]
              transition-all
              duration-300
            "
          >
            House Plans
          </Link>

          <Link
            href="/interiors"
            className="
              text-gray-300
              hover:text-[#D4A85A]
              transition-all
              duration-300
            "
          >
            Interior Design
          </Link>

          <Link
            href="/3d-visualization"
            className="
              text-gray-300
              hover:text-[#D4A85A]
              transition-all
              duration-300
            "
          >
            3D Visualization
          </Link>

          <Link
            href="/students"
            className="
              text-gray-300
              hover:text-[#D4A85A]
              transition-all
              duration-300
            "
          >
            Student Services
          </Link>

          <Link
            href="/consultation"
            className="
              text-gray-300
              hover:text-[#D4A85A]
              transition-all
              duration-300
            "
          >
            Contact
          </Link>

        </div>

      </div>


      {/* =====================================================
          SERVICES
      ===================================================== */}

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

        <div
          className="
            flex
            flex-col
            gap-4
            text-gray-300
          "
        >

          <p>Architectural Design</p>

          <p>Interior Design</p>

          <p>3D Visualization</p>

          <p>Custom Home Design</p>

          <p>House Plans</p>

          <p>Student Services</p>

        </div>

      </div>


      {/* =====================================================
          CONTACT
      ===================================================== */}

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
              0754 525407
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


      {/* =====================================================
          FOLLOW US
      ===================================================== */}

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


    {/* =====================================================
        DIVIDER
    ===================================================== */}

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


    {/* =====================================================
        COPYRIGHT
    ===================================================== */}

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


{/* =========================================================
    FLOATING WHATSAPP
========================================================= */}

<a
  href="https://wa.me/254754525407"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-4
right-4
sm:bottom-6
sm:right-6
lg:bottom-8
lg:right-8
w-14
h-14
sm:w-16
sm:h-16
lg:w-20
lg:h-20
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
