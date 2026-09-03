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

  price: number;

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
    slug: "modern-3-bedroom-bungalow",
    code: "ADS-B01",
    title: "Modern 3 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans/bungalow1a.png",

    gallery: [
      "/houseplans/bungalow1a.png",
      "/houseplans/bungalow1b.png",
      "/houseplans/bungalow1c.png",
    ],

    bedrooms: 3,
    bathrooms: 3,
    floors: 1,

    area: 165,
    length: 14.5,
    width: 12.8,

    price: 35000,

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
      "Selected Construction Details",
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

    image: "/houseplans/bungalow2a.png",

    gallery: [
      "/houseplans/bungalow2a.png",
      "/houseplans/bungalow2b.png",
      "/houseplans/bungalow2c.png",
    ],

    bedrooms: 4,
    bathrooms: 3,
    floors: 1,

    area: 210,
    length: 16.2,
    width: 14.1,

    price: 45000,

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
      "Selected Construction Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 03
  ===================================================== */

  {
    slug: "compact-3-bedroom-bungalow",
    code: "ADS-B03",
    title: "Compact 3 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans/bungalow3a.jpeg",

    gallery: [
      "/houseplans/bungalow3a.jpeg",
      "/houseplans/bungalow3b.jpeg",
      "/houseplans/bungalow3c.jpeg",
    ],

    bedrooms: 3,
    bathrooms: 2,
    floors: 1,

    area: 135,
    length: 13.2,
    width: 11.4,

    price: 30000,

    shortDescription:
      "An efficient three-bedroom home designed to make excellent use of a compact footprint.",

    description:
      "A practical and efficiently planned bungalow that maximizes usable family space while maintaining comfortable proportions, natural lighting and straightforward construction.",

    idealFor:
      "Homeowners looking for an efficient and economical family home.",

    features: [
      "Efficient footprint",
      "Three bedrooms",
      "Open living and dining",
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
      "Selected Construction Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 04
  ===================================================== */

  {
    slug: "luxury-4-bedroom-bungalow",
    code: "ADS-B04",
    title: "Luxury 4 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans/bungalow4a.png",

    gallery: [
      "/houseplans/bungalow4a.png",
      "/houseplans/bungalow4b.png",
      "/houseplans/bungalow4c.png",
    ],

    bedrooms: 4,
    bathrooms: 4,
    floors: 1,

    area: 260,
    length: 18,
    width: 15.2,

    price: 55000,

    shortDescription:
      "A premium four-bedroom bungalow designed around generous family living and refined proportions.",

    description:
      "A generous contemporary bungalow combining privacy, large shared spaces and a refined architectural expression suitable for a premium family residence.",

    idealFor:
      "Clients seeking spacious single-level luxury living.",

    features: [
      "Four generous bedrooms",
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
      "Selected Construction Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 05
  ===================================================== */

  {
    slug: "modern-2-bedroom-bungalow",
    code: "ADS-B05",
    title: "Modern 2 Bedroom Bungalow",
    category: "Bungalow",

    image: "/houseplans/bungalow5a.jpeg",

    gallery: [
      "/houseplans/bungalow5a.jpeg",
      "/houseplans/bungalow5b.jpeg",
      "/houseplans/bungalow5c.jpeg",
    ],

    bedrooms: 2,
    bathrooms: 2,
    floors: 1,

    area: 105,
    length: 11.5,
    width: 10.2,

    price: 25000,

    shortDescription:
      "A compact two-bedroom home suited to young families, retirement living or rental investment.",

    description:
      "A compact and efficient two-bedroom bungalow designed for comfortable everyday living without unnecessary floor area.",

    idealFor:
      "Small families, retirement homes and rental development.",

    features: [
      "Two bedrooms",
      "Compact footprint",
      "Open living spaces",
      "Efficient kitchen",
      "Natural lighting",
      "Straightforward construction",
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
      "Selected Construction Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     BUNGALOW 06
  ===================================================== */

  {
    slug: "courtyard-family-bungalow",
    code: "ADS-B06",
    title: "Courtyard Family Bungalow",
    category: "Bungalow",

    image: "/houseplans/bungalow6a.jpeg",

    gallery: [
      "/houseplans/bungalow6a.jpeg",
      "/houseplans/bungalow6b.jpeg",
      "/houseplans/bungalow6c.jpeg",
    ],

    bedrooms: 4,
    bathrooms: 4,
    floors: 1,

    area: 245,
    length: 17.5,
    width: 15,

    price: 55000,

    shortDescription:
      "A four-bedroom residence arranged around light, privacy and an intimate courtyard experience.",

    description:
      "A contemporary bungalow where landscape and architecture work together to create a private and naturally lit family environment.",

    idealFor:
      "Families seeking a private, landscape-focused residence.",

    features: [
      "Central courtyard",
      "Four bedrooms",
      "Strong natural ventilation",
      "Private family spaces",
      "Landscape integration",
      "Generous indoor-outdoor living",
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
      "Selected Construction Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     MAISONETTES
  ===================================================== */

  {
    slug: "modern-4-bedroom-maisonette",
    code: "ADS-M01",
    title: "Modern 4 Bedroom Maisonette",
    category: "Maisonette",

    image:
      "/house-plans/maisonettes/maisonette-01/hero.png",

    gallery: [
      "/house-plans/maisonettes/maisonette-01/hero.png",
    ],

    bedrooms: 4,
    bathrooms: 4,
    floors: 2,

    area: 250,
    length: 13.4,
    width: 11.8,

    price: 60000,

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
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Selected Construction Details",
      "Stair Details",
      "3D Exterior Views",
    ],
  },


  {
    slug: "contemporary-5-bedroom-maisonette",
    code: "ADS-M02",
    title: "Contemporary 5 Bedroom Maisonette",
    category: "Maisonette",

    image:
      "/house-plans/maisonettes/maisonette-02/hero.png",

    gallery: [
      "/house-plans/maisonettes/maisonette-02/hero.png",
    ],

    bedrooms: 5,
    bathrooms: 5,
    floors: 2,

    area: 330,
    length: 15,
    width: 13.5,

    price: 75000,

    shortDescription:
      "A spacious five-bedroom maisonette created for premium contemporary family living.",

    description:
      "A generous two-storey residence combining large entertaining spaces, private bedroom suites and a modern architectural language.",

    idealFor:
      "Larger families and premium residential developments.",

    features: [
      "Five bedrooms",
      "Premium master suite",
      "Large family lounge",
      "Formal and informal living",
      "Generous kitchen",
      "Strong contemporary form",
    ],

    includedDrawings: [
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Selected Construction Details",
      "Stair Details",
      "3D Exterior Views",
    ],
  },


  {
    slug: "compact-4-bedroom-maisonette",
    code: "ADS-M03",
    title: "Compact 4 Bedroom Maisonette",
    category: "Maisonette",

    image:
      "/house-plans/maisonettes/maisonette-03/hero.png",

    gallery: [
      "/house-plans/maisonettes/maisonette-03/hero.png",
    ],

    bedrooms: 4,
    bathrooms: 3,
    floors: 2,

    area: 215,
    length: 12.6,
    width: 10.8,

    price: 50000,

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
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Selected Construction Details",
      "Stair Details",
      "3D Exterior Views",
    ],
  },


  {
    slug: "luxury-5-bedroom-maisonette",
    code: "ADS-M04",
    title: "Luxury 5 Bedroom Maisonette",
    category: "Maisonette",

    image:
      "/house-plans/maisonettes/maisonette-04/hero.png",

    gallery: [
      "/house-plans/maisonettes/maisonette-04/hero.png",
    ],

    bedrooms: 5,
    bathrooms: 6,
    floors: 2,

    area: 390,
    length: 16.5,
    width: 14.8,

    price: 90000,

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
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Selected Construction Details",
      "Stair Details",
      "3D Exterior Views",
    ],
  },


  {
    slug: "tropical-4-bedroom-maisonette",
    code: "ADS-M05",
    title: "Tropical 4 Bedroom Maisonette",
    category: "Maisonette",

    image:
      "/house-plans/maisonettes/maisonette-05/hero.png",

    gallery: [
      "/house-plans/maisonettes/maisonette-05/hero.png",
    ],

    bedrooms: 4,
    bathrooms: 4,
    floors: 2,

    area: 275,
    length: 14,
    width: 12.5,

    price: 65000,

    shortDescription:
      "A climate-conscious maisonette emphasizing shade, ventilation and comfortable indoor-outdoor living.",

    description:
      "A contemporary four-bedroom maisonette developed around climate-responsive ideas including deep shade, controlled openings and generous outdoor transition spaces.",

    idealFor:
      "Warm-climate residential locations and families who value indoor-outdoor living.",

    features: [
      "Four bedrooms",
      "Climate-conscious façade",
      "Generous shading",
      "Cross ventilation",
      "Covered terraces",
      "Landscape connection",
    ],

    includedDrawings: [
      "Ground Floor Plan",
      "First Floor Plan",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Floor Finishes",
      "Furniture Layout",
      "Selected Construction Details",
      "Stair Details",
      "3D Exterior Views",
    ],
  },


  /* =====================================================
     APARTMENT
  ===================================================== */

  {
    slug: "contemporary-apartment-block",
    code: "ADS-A01",
    title: "Contemporary Apartment Block",
    category: "Apartment",

    image:
      "/house-plans/apartments/apartment-01/hero.png",

    gallery: [
      "/house-plans/apartments/apartment-01/hero.png",
    ],

    bedrooms: 2,
    bathrooms: 2,
    floors: 4,

    area: 720,
    length: 20,
    width: 14,

    price: 120000,

    shortDescription:
      "A contemporary multi-unit residential concept designed around efficient circulation and rental value.",

    description:
      "A modern apartment development concept balancing efficient land use, functional residential units, shared circulation and contemporary architectural character.",

    idealFor:
      "Residential developers and rental-property investors.",

    features: [
      "Multi-unit residential planning",
      "Efficient circulation",
      "Rental-focused layouts",
      "Contemporary façade",
      "Shared services strategy",
      "Developer-oriented planning",
    ],

    includedDrawings: [
      "Site Planning Concept",
      "Typical Floor Plans",
      "Roof Plan",
      "Exterior Elevations",
      "Building Sections",
      "Door Schedule",
      "Window Schedule",
      "Selected Construction Details",
      "Circulation Layout",
      "Parking Layout",
      "Furniture Layout",
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