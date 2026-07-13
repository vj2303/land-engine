"use client";

import { plots } from "@/data/dummy";

export default function PlotsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">
          Lead-Generation System
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Premium Land Plots
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          One plot, one page. Browse available plots and enquire instantly on WhatsApp.
        </p>
      </div>

      {/* Flow indicator */}
      <div className="flex items-center justify-center gap-3 mb-12 text-sm text-white/50">
        <span className="bg-gold text-forest-dark px-3 py-1 rounded-full font-semibold">1. Traffic</span>
        <span>→</span>
        <span className="bg-gold/20 text-gold px-3 py-1 rounded-full font-semibold">2. Landing Page</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">3. Capture</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">4. CRM</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">5. Nurture</span>
      </div>

      {/* Plot Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plots.map((plot) => (
          <a
            key={plot.id}
            href={`/plot/${plot.id}`}
            className="bg-forest-light rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all hover:scale-[1.01] group"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={plot.image}
                alt={plot.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
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
            <div className="p-5">
              <h2 className="text-xl font-bold mb-1">{plot.title}</h2>
              <p className="text-white/50 text-sm mb-3">{plot.location}</p>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gold text-2xl font-bold">{plot.price}</p>
                  <p className="text-white/40 text-xs">{plot.pricePerSqft}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 font-semibold">{plot.area}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {plot.highlights.slice(0, 3).map((h) => (
                  <span
                    key={h}
                    className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
