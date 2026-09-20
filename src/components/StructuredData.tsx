import { plots, project } from "@/data/properties";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Schema.org structured data so search engines can read the listings as
 * real-estate offers rather than plain text. Rendered as a JSON-LD script
 * tag, which is Next.js's recommended approach.
 */
export default function StructuredData() {
  const graph = [
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#organization`,
      name: "Land Leads",
      description:
        "Verified land and plot opportunities, brought directly to buyers.",
      url: SITE_URL,
      telephone: project.phones.map((phone) => `+91${phone}`),
      areaServed: "Pune, Maharashtra",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Vadagaon Phata, Koregaon Bhima",
        addressLocality: "Taluka Shirur",
        addressRegion: "Maharashtra",
        postalCode: "412216",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: project.coords.lat,
        longitude: project.coords.lng,
      },
    },
    ...plots.map((plot) => ({
      "@type": "RealEstateListing",
      "@id": `${SITE_URL}/plot/${plot.id}`,
      url: `${SITE_URL}/plot/${plot.id}`,
      name: `${plot.title} — ${project.name}`,
      description: plot.highlights.join(". "),
      image: `${SITE_URL}${plot.image}`,
      datePosted: "2026-09-19",
      provider: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Vadagaon Phata, Koregaon Bhima",
        addressLocality: "Taluka Shirur",
        addressRegion: "Maharashtra",
        postalCode: "412216",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: project.coords.lat,
        longitude: project.coords.lng,
      },
      floorSize: {
        "@type": "QuantitativeValue",
        value: plot.areaSqft,
        unitCode: "FTK", // square foot
      },
      offers: {
        "@type": "Offer",
        price: plot.priceValue,
        priceCurrency: "INR",
        availability:
          plot.status === "available"
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
      },
    })),
  ];

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Scrub "<" per the Next.js JSON-LD guidance to avoid XSS via injected markup
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
