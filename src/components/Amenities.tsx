import { amenities } from "@/data/dummy";

const ICON_PATHS: Record<string, React.ReactNode> = {
  hospital: (
    <>
      <path d="M4 21V8l8-5 8 5v13" />
      <path d="M12 10v6M9 13h6" />
    </>
  ),
  gym: (
    <>
      <path d="M4 9v6M8 7v10M16 7v10M20 9v6" />
      <path d="M8 12h8" />
    </>
  ),
  grocery: (
    <>
      <path d="M3 6h18l-2 12H5L3 6z" />
      <path d="M8 10v4M16 10v4M12 10v4" />
    </>
  ),
  highway: (
    <>
      <path d="M5 21 9 3M19 21 15 3" />
      <path d="M12 5v3M12 11v3M12 17v3" />
    </>
  ),
  sewage: (
    <>
      <path d="M4 8h10a4 4 0 0 1 4 4v3" />
      <path d="M4 5v6" />
      <path d="M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </>
  ),
  utilities: (
    <>
      <path d="M13 2 6 13h5l-1 9 7-11h-5l1-9z" />
    </>
  ),
};

export default function Amenities() {
  return (
    <section id="amenities" className="px-4 py-14 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
          Amenities & Facilities
        </h2>
        <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
          Everything you need within easy reach of the plot.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="bg-forest-light rounded-2xl border border-white/5 p-5 md:p-6 flex flex-col items-center text-center gap-3"
            >
              <span className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-gold"
                  aria-hidden="true"
                >
                  {ICON_PATHS[amenity.icon]}
                </svg>
              </span>
              <span className="font-semibold text-sm md:text-base">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
