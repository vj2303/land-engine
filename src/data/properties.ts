export interface Plot {
  id: string;
  title: string;
  location: string;
  area: string;
  areaSqft: number;
  price: string;
  priceValue: number;
  pricePerSqft: string;
  image: string;
  brochure?: string;
  mapUrl: string;
  highlights: string[];
  status: "available" | "reserved" | "sold";
}

export interface Amenity {
  label: string;
  icon: string;
}

const COORDS = { lat: 18.6505429, lng: 74.0795237 };

export const PROJECT_MAP_URL = "https://maps.app.goo.gl/VWukNA5bV3MsbauR9";

export const project = {
  name: "Koregaon Bhima Plots",
  address: "Vadagaon Phata, Koregaon Bhima, Taluka Shirur, Pune 412216",
  phones: ["7796466969", "8329474141"],
  whatsapp: "917796466969",
  coords: COORDS,
  mapUrl: PROJECT_MAP_URL,
  mapEmbedUrl: `https://maps.google.com/maps?q=${COORDS.lat},${COORDS.lng}&z=15&output=embed`,
  landmarks: [
    "Pune-Ahmednagar Highway - 2 min",
    "CBSE School",
    "Petrol pump",
    "Local shops, Koregaon Bhima",
    "Sanaswadi",
    "Dingrajwadi",
  ],
};

export const amenities: Amenity[] = [
  { label: "Hospital", icon: "hospital" },
  { label: "Gym", icon: "gym" },
  { label: "Grocery Shop", icon: "grocery" },
  { label: "Highway", icon: "highway" },
  { label: "Sewage Line", icon: "sewage" },
  { label: "Water / Electricity", icon: "utilities" },
];

export const plots: Plot[] = [
  {
    id: "plot-001",
    title: "Plot 1 - 2,000 sq ft",
    location: "Vadagaon Phata, Koregaon Bhima, Taluka Shirur, Pune 412216",
    areaSqft: 2000,
    area: "2,000 sq ft",
    price: "₹14,99,999",
    priceValue: 1499999,
    pricePerSqft: "₹750/sq ft",
    image: "/koregaon-bhima-site.jpeg",
    brochure: "/koregaon-bhima-flyer.jpeg",
    mapUrl: PROJECT_MAP_URL,
    highlights: [
      "2 min from highway",
      "School nearby",
      "Hospital nearby",
      "Sewage line",
      "24/7 electricity",
      "24/7 water",
    ],
    status: "available",
  },
  {
    id: "plot-002",
    title: "Plot 2 - 1,500 sq ft",
    location: "Vadagaon Phata, Koregaon Bhima, Taluka Shirur, Pune 412216",
    areaSqft: 1500,
    area: "1,500 sq ft",
    price: "₹11,24,999",
    priceValue: 1124999,
    pricePerSqft: "₹750/sq ft",
    image: "/koregaon-bhima-site.jpeg",
    mapUrl: PROJECT_MAP_URL,
    highlights: [
      "2 min from highway",
      "Corner facing",
      "Sewage line",
      "24/7 electricity",
      "24/7 water",
    ],
    status: "available",
  },
  {
    id: "plot-003",
    title: "Plot 3 - 2,500 sq ft",
    location: "Vadagaon Phata, Koregaon Bhima, Taluka Shirur, Pune 412216",
    areaSqft: 2500,
    area: "2,500 sq ft",
    price: "₹18,74,999",
    priceValue: 1874999,
    pricePerSqft: "₹750/sq ft",
    image: "/koregaon-bhima-site.jpeg",
    mapUrl: PROJECT_MAP_URL,
    highlights: [
      "2 min from highway",
      "Largest plot available",
      "Sewage line",
      "24/7 electricity",
      "24/7 water",
    ],
    status: "available",
  },
];
