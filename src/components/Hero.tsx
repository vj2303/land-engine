export default function Hero() {
  return (
    <section className="px-4 py-14 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Find the Right Land.
          <span className="block text-gold">Build Your Future.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 font-medium mb-6">
          Discover Verified Property Opportunities With Land Lead Engine
        </p>

        <div className="space-y-4 text-white/60 leading-relaxed text-left sm:text-center">
          <p>
            Land Lead Engine is a real-estate platform focused on bringing
            attractive land and plot opportunities directly to buyers.
          </p>
          <p>
            We showcase available properties with important information about
            location, plot size, pricing, connectivity, and available amenities,
            helping you explore property opportunities and take the next step
            with confidence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href="#properties"
            className="flex items-center justify-center min-h-[48px] px-7 rounded-xl bg-gold text-forest-dark font-bold hover:bg-gold-light transition-colors"
          >
            Explore Properties →
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center min-h-[48px] px-7 rounded-xl border border-gold/40 text-gold font-bold hover:bg-gold/10 transition-colors"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
}
