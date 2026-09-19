"use client";

import Image from "next/image";
import Link from "next/link";
import { plots, project } from "@/data/dummy";
import { use } from "react";

export default function PlotDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const plot = plots.find((p) => p.id === id);
  const enquiryUrl = plot
    ? `https://wa.me/${project.whatsapp}?text=${encodeURIComponent(
        `Hi, I'm interested in ${plot.title} (${plot.area}, ${plot.price}) at ${project.name}. Please share more details.`
      )}`
    : "";

  if (!plot) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Plot not found</h1>
        <Link href="/" className="text-gold hover:underline">Back to plots</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="text-gold text-sm hover:underline mb-6 inline-block">
        ← Back to all plots
      </Link>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-6 relative h-64 md:h-80">
        <Image
          src={plot.image}
          alt={plot.title}
          fill
          preload
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`text-sm font-bold px-4 py-1.5 rounded-full ${
              plot.status === "available"
                ? "bg-green-500/90 text-white"
                : plot.status === "reserved"
                ? "bg-yellow-500/90 text-black"
                : "bg-red-500/90 text-white"
            }`}
          >
            {plot.status.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Details */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold mb-2">{plot.title}</h1>
            <p className="text-white/50">{plot.location}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-forest-light rounded-xl p-4 text-center">
              <p className="text-white/40 text-xs mb-1">Price</p>
              <p className="text-gold text-xl font-bold">{plot.price}</p>
            </div>
            <div className="bg-forest-light rounded-xl p-4 text-center">
              <p className="text-white/40 text-xs mb-1">Area</p>
              <p className="text-white text-xl font-bold">{plot.area}</p>
            </div>
            <div className="bg-forest-light rounded-xl p-4 text-center">
              <p className="text-white/40 text-xs mb-1">Rate</p>
              <p className="text-white text-xl font-bold">{plot.pricePerSqft}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {plot.highlights.map((h) => (
                <span
                  key={h}
                  className="bg-gold/10 text-gold border border-gold/20 px-3 py-1.5 rounded-lg text-sm"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {plot.brochure && (
            <div>
              <h3 className="font-semibold mb-3">Brochure</h3>
              <a href={plot.brochure} target="_blank" rel="noopener noreferrer">
                <Image
                  src={plot.brochure}
                  alt={`${plot.title} brochure`}
                  width={843}
                  height={1264}
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="rounded-xl w-full max-w-sm h-auto border border-white/5"
                />
              </a>
            </div>
          )}

          {/* Dummy Map */}
          <div>
            <h3 className="font-semibold mb-3">Location</h3>
            <div className="bg-forest-light rounded-xl h-48 flex items-center justify-center border border-white/5">
              <div className="text-center">
                <span className="text-gold text-4xl">&#9906;</span>
                <p className="text-white/40 text-sm mt-2">{plot.location}</p>
                <a
                  href={plot.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs hover:underline mt-1 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Sidebar */}
        <div className="space-y-4">
          <div className="bg-forest-light rounded-2xl p-6 border border-white/5 sticky top-20">
            <h3 className="font-bold text-lg mb-2">Interested?</h3>
            <p className="text-white/50 text-sm mb-6">
              Message us on WhatsApp or call directly to book a site visit.
            </p>
            <a
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-h-[48px] w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-colors"
            >
              💬 Enquire on WhatsApp
            </a>
            <a
              href={`tel:${project.phones[0]}`}
              className="flex items-center justify-center min-h-[48px] w-full mt-3 border border-gold/40 text-gold font-bold rounded-xl hover:bg-gold/10 transition-colors"
            >
              📞 {project.phones[0]}
            </a>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs mb-2">Also interested in</p>
              {plots
                .filter((p) => p.id !== plot.id)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/plot/${p.id}`}
                    className="block bg-white/5 rounded-lg p-3 mb-2 hover:bg-white/10 transition-colors"
                  >
                    <p className="text-sm font-semibold">{p.title}</p>
                    <p className="text-gold text-xs">{p.price} · {p.area}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
