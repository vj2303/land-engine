import Hero from "@/components/Hero";
import PlotCard from "@/components/PlotCard";
import Amenities from "@/components/Amenities";
import LocationMap from "@/components/LocationMap";
import StructuredData from "@/components/StructuredData";
import { plots, project } from "@/data/properties";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />

      <section id="properties" className="px-4 py-14 md:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
            Available Plots
          </h2>
          <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
            {project.name} &middot; {project.address}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plots.map((plot, i) => (
              <PlotCard key={plot.id} plot={plot} preload={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <Amenities />
      <LocationMap />
    </>
  );
}
