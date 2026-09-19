export interface Plot {
  id: string;
  title: string;
  location: string;
  area: string;
  price: string;
  pricePerSqft: string;
  image: string;
  brochure?: string;
  mapUrl: string;
  highlights: string[];
  status: "available" | "reserved" | "sold";
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  plotInterest: string;
  budget: string;
  location: string;
  purpose: "buy" | "invest";
  timeline: string;
  stage: "new" | "qualified" | "site_visit" | "negotiation" | "closed";
  source: "meta" | "google";
  createdAt: string;
  lastContact: string;
  score: number;
  notes: string;
}

export interface ChatMessage {
  id: number;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: "drip" | "alert" | "re-warm";
  status: "active" | "paused" | "completed";
  sent: number;
  opened: number;
  replied: number;
  leads: number;
}

export const plots: Plot[] = [
  {
    id: "plot-001",
    title: "Premium Corner Plot - Devanahalli",
    location: "Devanahalli, Bangalore North",
    area: "2,400 sq ft",
    price: "₹48,00,000",
    pricePerSqft: "₹2,000/sq ft",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
    mapUrl: "https://maps.google.com/?q=13.2473,77.7139",
    highlights: ["Corner plot", "Near airport", "BMRDA approved", "Clear title", "Gated community"],
    status: "available",
  },
  {
    id: "plot-002",
    title: "Farmland Plot - Hosur Road",
    location: "Hosur Road, Bangalore South",
    area: "4,000 sq ft",
    price: "₹52,00,000",
    pricePerSqft: "₹1,300/sq ft",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop",
    mapUrl: "https://maps.google.com/?q=12.7409,77.8253",
    highlights: ["Highway facing", "Farmland conversion done", "Near IT corridor", "Water available"],
    status: "available",
  },
  {
    id: "plot-003",
    title: "Villa Plot - Sarjapur",
    location: "Sarjapur, Bangalore East",
    area: "1,200 sq ft",
    price: "₹30,00,000",
    pricePerSqft: "₹2,500/sq ft",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&h=500&fit=crop",
    mapUrl: "https://maps.google.com/?q=12.8590,77.7870",
    highlights: ["Villa community", "Clubhouse access", "Near ORR", "RERA approved", "EMI available"],
    status: "reserved",
  },
  {
    id: "plot-004",
    title: "Investment Plot - Mysore Road",
    location: "Ramanagara, Mysore Road",
    area: "5,000 sq ft",
    price: "₹25,00,000",
    pricePerSqft: "₹500/sq ft",
    image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&h=500&fit=crop",
    mapUrl: "https://maps.google.com/?q=12.7159,77.2810",
    highlights: ["Best for investment", "Near NICE road", "DC conversion", "Rapid appreciation area"],
    status: "available",
  },
  {
    id: "plot-005",
    title: "Residential Plot - Koregaon Bhima",
    location: "Vadagaon Phata, Koregaon Bhima, Taluka Shirur, Pune 412216",
    area: "2,000 sq ft",
    price: "₹14,99,999",
    pricePerSqft: "₹750/sq ft",
    image: "/koregaon-bhima-site.jpeg",
    brochure: "/koregaon-bhima-flyer.jpeg",
    mapUrl: "https://maps.google.com/?q=Koregaon+Bhima,+Shirur,+Pune,+412216",
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
];

export const leads: Lead[] = [
  {
    id: "L001",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    plotInterest: "Premium Corner Plot - Devanahalli",
    budget: "₹40-50 Lakhs",
    location: "Bangalore North",
    purpose: "buy",
    timeline: "3 months",
    stage: "negotiation",
    source: "meta",
    createdAt: "2026-06-15",
    lastContact: "2026-07-12",
    score: 92,
    notes: "Visited site twice. Negotiating on price.",
  },
  {
    id: "L002",
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    plotInterest: "Villa Plot - Sarjapur",
    budget: "₹25-35 Lakhs",
    location: "Bangalore East",
    purpose: "buy",
    timeline: "6 months",
    stage: "site_visit",
    source: "google",
    createdAt: "2026-06-28",
    lastContact: "2026-07-10",
    score: 78,
    notes: "Site visit scheduled for next week.",
  },
  {
    id: "L003",
    name: "Amit Patel",
    phone: "+91 76543 21098",
    plotInterest: "Investment Plot - Mysore Road",
    budget: "₹20-30 Lakhs",
    location: "Mysore Road",
    purpose: "invest",
    timeline: "1 month",
    stage: "qualified",
    source: "meta",
    createdAt: "2026-07-05",
    lastContact: "2026-07-11",
    score: 85,
    notes: "Investor. Looking for 2-3 plots.",
  },
  {
    id: "L004",
    name: "Sneha Reddy",
    phone: "+91 65432 10987",
    plotInterest: "Farmland Plot - Hosur Road",
    budget: "₹50-60 Lakhs",
    location: "Hosur Road",
    purpose: "buy",
    timeline: "2 months",
    stage: "new",
    source: "google",
    createdAt: "2026-07-12",
    lastContact: "2026-07-12",
    score: 45,
    notes: "Just enquired. Awaiting qualification.",
  },
  {
    id: "L005",
    name: "Vikram Singh",
    phone: "+91 54321 09876",
    plotInterest: "Premium Corner Plot - Devanahalli",
    budget: "₹45-55 Lakhs",
    location: "Bangalore North",
    purpose: "invest",
    timeline: "Immediate",
    stage: "closed",
    source: "meta",
    createdAt: "2026-05-20",
    lastContact: "2026-07-01",
    score: 100,
    notes: "Deal closed. Payment in progress.",
  },
  {
    id: "L006",
    name: "Kavitha Nair",
    phone: "+91 43210 98765",
    plotInterest: "Villa Plot - Sarjapur",
    budget: "₹28-32 Lakhs",
    location: "Sarjapur",
    purpose: "buy",
    timeline: "4 months",
    stage: "qualified",
    source: "meta",
    createdAt: "2026-07-08",
    lastContact: "2026-07-11",
    score: 70,
    notes: "Qualified. Interested in EMI option.",
  },
  {
    id: "L007",
    name: "Deepak Joshi",
    phone: "+91 32109 87654",
    plotInterest: "Farmland Plot - Hosur Road",
    budget: "₹40-55 Lakhs",
    location: "Hosur Road",
    purpose: "invest",
    timeline: "6 months",
    stage: "new",
    source: "google",
    createdAt: "2026-07-13",
    lastContact: "2026-07-13",
    score: 30,
    notes: "New lead from Google search ad.",
  },
  {
    id: "L008",
    name: "Meera Krishnan",
    phone: "+91 21098 76543",
    plotInterest: "Investment Plot - Mysore Road",
    budget: "₹15-25 Lakhs",
    location: "Mysore Road",
    purpose: "invest",
    timeline: "2 months",
    stage: "site_visit",
    source: "meta",
    createdAt: "2026-06-22",
    lastContact: "2026-07-09",
    score: 75,
    notes: "Visited once. Comparing with competitor plots.",
  },
];

export const campaigns: Campaign[] = [
  {
    id: "C001",
    name: "New Plot Alert - Devanahalli Phase 2",
    type: "alert",
    status: "active",
    sent: 145,
    opened: 98,
    replied: 34,
    leads: 12,
  },
  {
    id: "C002",
    name: "Weekly Follow-up - Qualified Leads",
    type: "drip",
    status: "active",
    sent: 86,
    opened: 62,
    replied: 28,
    leads: 8,
  },
  {
    id: "C003",
    name: "Re-engage Cold Leads - Q1",
    type: "re-warm",
    status: "completed",
    sent: 230,
    opened: 112,
    replied: 45,
    leads: 15,
  },
  {
    id: "C004",
    name: "Investment Opportunity - Mysore Road",
    type: "alert",
    status: "active",
    sent: 67,
    opened: 41,
    replied: 18,
    leads: 6,
  },
  {
    id: "C005",
    name: "Site Visit Reminder Sequence",
    type: "drip",
    status: "paused",
    sent: 54,
    opened: 38,
    replied: 15,
    leads: 5,
  },
];

export const qualifierQuestions = [
  { key: "budget", question: "What's your budget range for the plot?" },
  { key: "location", question: "Which area are you looking in?" },
  { key: "purpose", question: "Are you looking to build a home or invest?" },
  { key: "timeline", question: "When are you planning to buy?" },
];

export const stats = {
  totalLeads: 156,
  qualifiedLeads: 89,
  siteVisits: 34,
  closedDeals: 12,
  conversionRate: 7.7,
  avgResponseTime: "1.8 min",
  costPerLead: "₹320",
  adSpend: "₹49,920",
  revenue: "₹5.76 Cr",
  roi: "115x",
};
