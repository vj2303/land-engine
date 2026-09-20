import { project } from "@/data/properties";

export default function LocationMap() {
  return (
    <section id="location" className="px-4 py-14 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
          Location
        </h2>
        <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
          On the Pune&ndash;Ahmednagar highway, between Koregaon Bhima and
          Sanaswadi.
        </p>

        <div id="contact" className="grid md:grid-cols-3 gap-6 scroll-mt-20">
          {/* Contact + landmarks */}
          <div className="space-y-6">
            <div className="bg-forest-light rounded-2xl border border-white/5 p-6">
              <h3 className="text-white/40 text-xs uppercase tracking-wider mb-3">
                Contact No.
              </h3>
              <div className="space-y-2">
                {project.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center min-h-[44px] text-gold text-lg font-bold hover:text-gold-light transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-forest-light rounded-2xl border border-white/5 p-6">
              <h3 className="text-white/40 text-xs uppercase tracking-wider mb-3">
                Address
              </h3>
              <p className="text-white/80 leading-relaxed">{project.address}</p>
            </div>

            <div className="bg-forest-light rounded-2xl border border-white/5 p-6">
              <h3 className="text-white/40 text-xs uppercase tracking-wider mb-3">
                Nearby
              </h3>
              <ul className="space-y-2">
                {project.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="text-white/70 text-sm flex items-start gap-2"
                  >
                    <span className="text-gold mt-0.5 shrink-0">&#9679;</span>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-forest-light">
              <iframe
                src={project.mapEmbedUrl}
                title={`Map of ${project.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="w-full aspect-[4/3] md:aspect-[16/10] border-0"
              />
            </div>

            <a
              href={project.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-gold text-forest-dark font-bold hover:bg-gold-light transition-colors"
            >
              <span className="text-lg leading-none">&#9906;</span>
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
