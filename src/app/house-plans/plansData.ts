export type HousePlan = {
  slug: string;
  code: string;
  title: string;
  category: "Bungalow" | "Maisonette" | "Apartment";

  image: string;
  gallery: string[];

  bedrooms: number;
  bathrooms: number;
  floors: number;

  area: number;
  length: number;
  width: number;

  priceUSD: number;

  // Apartment-specific information
  oneBedroomUnits?: number;
  bedsitters?: number;
  shops?: number;

  description: string;
  shortDescription: string;

  idealFor: string;

  features: string[];

  includedDrawings: string[];
};


export const housePlans: HousePlan[] = [

  /* =====================================================
     BUNGALOW 01
  ===================================================== */

  {
    slug: "Amani-3-bedroom-bungalow",
    code: "ADS-B01",
    title: "Amani 3 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans-optimized/bungalow1a.webp",

    gallery: [
      "/houseplans-optimized/bungalow1a.webp",
      "/houseplans-optimized/bungalow1b.webp",
      "/houseplans-optimized/plan1.webp",
    ],

    bedrooms: 3,
    bathrooms: 2,
    floors: 1,

    area: 130,
    length: 13,
    width: 10,

    priceUSD: 130,

    shortDescription:
      "A refined three-bedroom family bungalow designed for comfortable contemporary living.",

    description:
      "A thoughtfully planned three-bedroom bungalow designed around family comfort, efficient circulation and generous natural light. The layout balances private bedroom spaces with welcoming shared living areas and a strong relationship between the interior and outdoor spaces.",

    idealFor:
      "Growing families and homeowners seeking comfortable single-level living.",

    features: [
      "Three well-proportioned bedrooms",
      "Open living and dining areas",
      "Modern kitchen arrangement",
      "Comfortable family circulation",
      "Strong natural lighting",
      "Indoor-outdoor connection",
    ],

    includedDrawings: [
      "Floor Plan",
      "Roof Plan",
      "Front Elevation",
      "Rear Elevation",
      "Side Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Septic Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 02
  ===================================================== */

  {
    slug: "contemporary-4-bedroom-bungalow",
    code: "ADS-B02",
    title: "Contemporary 4 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans-optimized/bungalow2a.webp",

    gallery: [
      "/houseplans-optimized/bungalow2a.webp",
      "/houseplans-optimized/bungalow2b.webp",
      "/houseplans-optimized/plan2.webp",
    ],

    bedrooms: 4,
    bathrooms: 5,
    floors: 1,

    area: 208,
    length: 16,
    width: 12,

    priceUSD: 208,

    shortDescription:
      "A spacious contemporary bungalow balancing family privacy with generous shared spaces.",

    description:
      "A four-bedroom single-level residence developed for comfortable family living. The design provides clearly organized private and social zones while maintaining good daylight, ventilation and access to outdoor living areas.",

    idealFor:
      "Families seeking a spacious single-storey residence.",

    features: [
      "Four bedrooms",
      "Generous lounge and dining spaces",
      "Modern kitchen with utility support",
      "Defined private bedroom wing",
      "Covered outdoor living",
      "Contemporary external character",
    ],

    includedDrawings: [
      "Floor Plan",
      "Roof Plan",
      "Front Elevation",
      "Rear Elevation",
      "Side Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Septic Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 03
  ===================================================== */

  {
    slug: "Zuri-3-bedroom-bungalow",
    code: "ADS-B03",
    title: "Zuri 3 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans-optimized/bungalow3a.webp",

    gallery: [
      "/houseplans-optimized/bungalow3a.webp",
      "/houseplans-optimized/bungalow3b.webp",
      "/houseplans-optimized/plan3.webp",
    ],

    bedrooms: 3,
    bathrooms: 2,
    floors: 1,

    area: 176.88,
    length: 13.8,
    width: 12.6,

    priceUSD: 176.88,

    shortDescription:
      "An efficient three-bedroom home designed to make excellent use of a compact footprint.",

    description:
      "A practical and efficiently planned bungalow that maximizes usable family space while maintaining comfortable proportions, natural lighting and straightforward construction.",

    idealFor:
      "Homeowners looking for an efficient and economical family home.",

    features: [
      "Efficient footprint",
      "Three bedrooms",
      "Spacious living and dining",
      "Practical kitchen",
      "Clear circulation",
      "Simple construction geometry",
    ],

    includedDrawings: [
      "Floor Plan",
      "Roof Plan",
      "Front Elevation",
      "Rear Elevation",
      "Side Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Septic Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 04
  ===================================================== */

  {
    slug: "Elara-3-bedroom-bungalow",
    code: "ADS-B04",
    title: "Elara 3 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans-optimized/bungalow4a.webp",

    gallery: [
      "/houseplans-optimized/bungalow4a.webp",
      "/houseplans-optimized/bungalow4b.webp",
      "/houseplans-optimized/bungalow4c.webp",
      "/houseplans-optimized/plan4.webp",
    ],

    bedrooms: 3,
    bathrooms: 4,
    floors: 1,

    area: 225,
    length: 15,
    width: 15,

    priceUSD: 225,

    shortDescription:
      "A premium three-bedroom bungalow designed around generous family living and refined proportions.",

    description:
      "A generous contemporary bungalow combining privacy, large shared spaces and a refined architectural expression suitable for a premium family residence.",

    idealFor:
      "Clients seeking spacious single-level luxury living.",

    features: [
      "Three generous bedrooms",
      "Large living and dining areas",
      "Premium master suite",
      "Spacious kitchen",
      "Covered terraces",
      "Strong contemporary façade",
    ],

    includedDrawings: [
      "Floor Plan",
      "Roof Plan",
      "Front Elevation",
      "Rear Elevation",
      "Side Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Septic Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 05
  ===================================================== */

  {
    slug: "Horizon-3-bedroom-bungalow",
    code: "ADS-B05",
    title: "Horizon 3 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans-optimized/bungalow5a.webp",

    gallery: [
      "/houseplans-optimized/bungalow5a.webp",
      "/houseplans-optimized/bungalow5b.webp",
      "/houseplans-optimized/plan5.webp",
    ],

    bedrooms: 3,
    bathrooms: 2,
    floors: 1,

    area: 172.8,
    length: 14.4,
    width: 12,

    priceUSD: 172.8,

    shortDescription:
      "A comfortable three-bedroom home designed around efficient planning and generous everyday living.",

    description:
      "A practical three-bedroom bungalow designed to provide comfortable living spaces, efficient circulation and a contemporary residential character.",

    idealFor:
      "Small families, couples, retirement living and homeowners seeking a spacious three-bedroom residence.",

    features: [
      "Efficient footprint",
      "Two bedrooms",
      "Spacious living and dining",
      "Practical kitchen",
      "Clear circulation",
      "Contemporary façade",
    ],

    includedDrawings: [
      "Floor Plan",
      "Roof Plan",
      "Front Elevation",
      "Rear Elevation",
      "Side Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Septic Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 06
  ===================================================== */

  {
    slug: "Nuru-3-bedroom-bungalow",
    code: "ADS-B06",
    title: "Nuru 3 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans-optimized/bungalow6a.webp",

    gallery: [
      "/houseplans-optimized/bungalow6a.webp",
      "/houseplans-optimized/bungalow6b.webp",
      "/houseplans-optimized/bungalow6c.webp",
      "/houseplans-optimized/plan6.webp",
    ],

    bedrooms: 3,
    bathrooms: 2,
    floors: 1,

    area: 145.2,
    length: 13.2,
    width: 11,

    priceUSD: 145.2,

    shortDescription:
      "A contemporary three-bedroom family bungalow combining efficient planning with comfortable everyday living.",

    description:
      "A thoughtfully planned three-bedroom bungalow that balances family living, practical circulation, natural lighting and a contemporary architectural character.",

    idealFor:
      "Families seeking an efficient contemporary single-level home.",

    features: [
      "Efficient footprint",
      "Three bedrooms",
      "Spacious living and dining",
      "Practical kitchen",
      "Clear circulation",
      "Contemporary façade",
    ],

    includedDrawings: [
      "Floor Plan",
      "Roof Plan",
      "Front Elevation",
      "Rear Elevation",
      "Side Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Septic Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     MAISONETTE 01
  ===================================================== */

  {
    slug: "modern-4-bedroom-maisonette",
    code: "ADS-M01",
    title: "Modern 4 Bedroom Maisonette",
    category: "Maisonette",

    image: "/houseplans-optimized/maisonette3a.webp",

    gallery: [
      "/houseplans-optimized/maisonette3a.webp",
      "/houseplans-optimized/maisonette3b.webp",
      "/houseplans-optimized/maisonette3c.webp",
      "/houseplans-optimized/maisonetteplan1a.webp",
      "/houseplans-optimized/maisonetteplan1b.webp",
    ],

    bedrooms: 4,
    bathrooms: 5,
    floors: 2,

    area: 364,
    length: 13.4,
    width: 10.8,

    priceUSD: 364,

    shortDescription:
      "A contemporary two-storey family residence combining efficiency, privacy and strong architectural character.",

    description:
      "A well-balanced four-bedroom maisonette designed around contemporary family life with clearly separated social and private levels.",

    idealFor:
      "Growing families seeking a modern multi-storey residence.",

    features: [
      "Four bedrooms",
      "Two-storey arrangement",
      "Generous master suite",
      "Open social spaces",
      "Balcony spaces",
      "Contemporary façade",
    ],

    includedDrawings: [
      "Site Plan",
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Septic Tank Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     MAISONETTE 02
  ===================================================== */

  {
    slug: "contemporary-4-bedroom-maisonette",
    code: "ADS-M02",
    title: "Contemporary 4 Bedroom Maisonette",
    category: "Maisonette",

    image: "/houseplans-optimized/maisonette4a.webp",

    gallery: [
      "/houseplans-optimized/maisonette4a.webp",
      "/houseplans-optimized/maisonette4b.webp",
      "/houseplans-optimized/maisonette4c.webp",
      "/houseplans-optimized/maisonetteplan2a.webp",
      "/houseplans-optimized/maisonetteplan2b.webp",
    ],

    bedrooms: 4,
    bathrooms: 5,
    floors: 2,

    area: 430,
    length: 15,
    width: 10.5,

    priceUSD: 430,

    shortDescription:
      "A spacious four-bedroom maisonette created for premium contemporary family living.",

    description:
      "A generous two-storey residence combining large entertaining spaces, private bedroom suites and a modern architectural language.",

    idealFor:
      "Larger families and premium residential developments.",

    features: [
      "Four bedrooms",
      "Premium master suite",
      "Large family lounge",
      "Formal and informal living",
      "Generous kitchen",
      "Strong contemporary form",
    ],

    includedDrawings: [
      "Site Plan",
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Septic Tank Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     MAISONETTE 03
  ===================================================== */

  {
    slug: "signature-4-bedroom-maisonette",
    code: "ADS-M03",
    title: "Signature 4 Bedroom Maisonette",
    category: "Maisonette",

    image: "/houseplans-optimized/maisonette6a.webp",

    gallery: [
      "/houseplans-optimized/maisonette6a.webp",
      "/houseplans-optimized/maisonette6b.webp",
      "/houseplans-optimized/maisonetteplan3a.webp",
      "/houseplans-optimized/maisonetteplan3b.webp",
    ],

    bedrooms: 4,
    bathrooms: 5,
    floors: 2,

    area: 320,
    length: 14,
    width: 12.5,

    priceUSD: 320,

    shortDescription:
      "A spacious four-bedroom maisonette created for contemporary family living.",

    description:
      "A generous two-storey residence combining comfortable family spaces, private bedroom suites and a strong contemporary architectural character.",

    idealFor:
      "Families seeking a spacious contemporary multi-storey residence.",

    features: [
      "Four bedrooms",
      "Premium master suite",
      "Large family lounge",
      "Formal and informal living",
      "Generous kitchen",
      "Strong contemporary form",
    ],

    includedDrawings: [
      "Site Plan",
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Septic Tank Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     MAISONETTE 04
  ===================================================== */

  {
    slug: "compact-4-bedroom-maisonette",
    code: "ADS-M04",
    title: "Compact 4 Bedroom Maisonette",
    category: "Maisonette",

    image: "/houseplans-optimized/maisonette2a.webp",

    gallery: [
      "/houseplans-optimized/maisonette2a.webp",
      "/houseplans-optimized/maisonette2b.webp",
      "/houseplans-optimized/maisonetteplan4a.webp",
      "/houseplans-optimized/maisonetteplan4b.webp",
    ],

    bedrooms: 4,
    bathrooms: 2,
    floors: 2,

    area: 320,
    length: 14.6,
    width: 10.8,

    priceUSD: 320,

    shortDescription:
      "A compact maisonette maximizing family accommodation on a controlled building footprint.",

    description:
      "An efficient four-bedroom maisonette suited to homeowners who want generous accommodation while preserving more of the plot for parking and outdoor space.",

    idealFor:
      "Standard urban and peri-urban residential plots.",

    features: [
      "Compact footprint",
      "Four bedrooms",
      "Two floors",
      "Efficient circulation",
      "Family lounge",
      "Plot-conscious planning",
    ],

    includedDrawings: [
      "Site Plan",
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Septic Tank Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     MAISONETTE 05
  ===================================================== */

  {
    slug: "luxury-5-bedroom-maisonette",
    code: "ADS-M05",
    title: "Luxury 5 Bedroom Maisonette",
    category: "Maisonette",

    image: "/houseplans-optimized/maisonette1a.webp",

    gallery: [
      "/houseplans-optimized/maisonette1a.webp",
      "/houseplans-optimized/maisonette1b.webp",
      "/houseplans-optimized/maisonette1c.webp",
      "/houseplans-optimized/pitched1a.webp",
      "/houseplans-optimized/pitched1b.webp",
    ],

    bedrooms: 5,
    bathrooms: 5,
    floors: 3,

    area: 350,
    length: 15.6,
    width: 10.8,

    priceUSD: 350,

    shortDescription:
      "A refined five-bedroom home designed for generous luxury living and sophisticated entertaining.",

    description:
      "A premium family residence with expansive social spaces, carefully organized bedroom suites and a commanding contemporary architectural presence.",

    idealFor:
      "Premium family homes and high-value residential plots.",

    features: [
      "Five ensuite bedrooms",
      "Double-height spaces",
      "Family lounge",
      "Premium master suite",
      "Large terraces",
      "Luxury architectural expression",
    ],

    includedDrawings: [
      "Site Plan",
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Septic Tank Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     MAISONETTE 06
  ===================================================== */

  {
    slug: "modern-family-4-bedroom-maisonette",
    code: "ADS-M06",
    title: "Modern 4 Bedroom Maisonette",
    category: "Maisonette",

    image: "/houseplans-optimized/maisonette5a.webp",

    gallery: [
      "/houseplans-optimized/maisonette5a.webp",
      "/houseplans-optimized/maisonette5b.webp",
      "/houseplans-optimized/maisonette5c.webp",
    ],

    bedrooms: 4,
    bathrooms: 2,
    floors: 2,

    area: 320,
    length: 14.6,
    width: 10.8,

    priceUSD: 320,

    shortDescription:
      "A contemporary two-storey family residence combining efficiency, privacy and strong architectural character.",

    description:
      "A well-balanced four-bedroom maisonette designed around contemporary family life with clearly separated social and private levels.",

    idealFor:
      "Growing families seeking a modern multi-storey residence.",

    features: [
      "Four bedrooms",
      "Two-storey arrangement",
      "Generous master suite",
      "Open social spaces",
      "Balcony spaces",
      "Contemporary façade",
    ],

    includedDrawings: [
      "Site Plan",
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Septic Tank Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     APARTMENT 01
  ===================================================== */

  {
    slug: "contemporary-apartment-block",
    code: "ADS-A01",
    title: "Contemporary Apartment Block",
    category: "Apartment",

    image: "/houseplans-optimized/apartment1a.webp",

    gallery: [
      "/houseplans-optimized/apartment1a.webp",
      "/houseplans-optimized/apartment1b.webp",
      "/houseplans-optimized/apartment1c.webp",
    ],

    // These are used by the existing house-plan interface.
    // We will customise the apartment display separately.
    bedrooms: 1,
    bathrooms: 1,
    floors: 4,

    oneBedroomUnits: 9,
    bedsitters: 39,
    shops: 4,

    area: 850,
    length: 25,
    width: 15,

    priceUSD: 850,

    shortDescription:
      "A contemporary mixed residential apartment development designed around efficient land use, rental value and practical circulation.",

    description:
      "A modern apartment development combining one-bedroom units, bedsitters and commercial shops within an efficient multi-storey residential scheme designed for rental-property investment.",

    idealFor:
      "Residential developers, rental-property investors and mixed-use property developments.",

    features: [
      "9 one-bedroom units",
      "39 bedsitters",
      "4 commercial shops",
      "Four-storey development",
      "Efficient circulation",
      "Rental-focused planning",
      "Contemporary façade",
    ],

    includedDrawings: [
      "Site Plan",
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Septic Tank Details",
      "3D Exterior Views",
    ],
  },
];


export const planCategories = [
  "All",
  "Bungalow",
  "Maisonette",
  "Apartment",
];