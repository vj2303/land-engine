import { project } from "@/data/properties";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-forest-dark mt-8">
      <div className="max-w-5xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gold text-2xl leading-none">&#9906;</span>
            <span className="font-bold text-lg tracking-tight">Land Leads</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            Verified land and plot opportunities, brought directly to buyers.
          </p>
        </div>

        <div>
          <h3 className="text-white/40 text-xs uppercase tracking-wider mb-3">
            Contact
          </h3>
          {project.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="flex items-center min-h-[40px] text-gold font-semibold hover:text-gold-light transition-colors"
            >
              {phone}
            </a>
          ))}
        </div>

        <div>
          <h3 className="text-white/40 text-xs uppercase tracking-wider mb-3">
            Address
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            {project.address}
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-5">
        <p className="text-white/30 text-xs text-center">
          © {new Date().getFullYear()} Land Lead Engine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
