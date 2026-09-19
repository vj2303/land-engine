import Image from "next/image";
import Link from "next/link";
import { project, type Plot } from "@/data/dummy";

const STATUS_STYLES: Record<Plot["status"], string> = {
  available: "bg-green-500/90 text-white",
  reserved: "bg-yellow-500/90 text-black",
  sold: "bg-red-500/90 text-white",
};

export default function PlotCard({
  plot,
  preload = false,
}: {
  plot: Plot;
  preload?: boolean;
}) {
  const enquiryUrl = `https://wa.me/${project.whatsapp}?text=${encodeURIComponent(
    `Hi, I'm interested in ${plot.title} (${plot.area}, ${plot.price}) at ${project.name}. Please share more details.`
  )}`;

  return (
    <article className="bg-forest-light rounded-2xl overflow-hidden border border-white/5 flex flex-col">
      <Link href={`/plot/${plot.id}`} className="group block">
        <div className="relative aspect-[16/10]">
          <Image
            src={plot.image}
            alt={plot.title}
            fill
            preload={preload}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span
            className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${
              STATUS_STYLES[plot.status]
            }`}
          >
            {plot.status.toUpperCase()}
          </span>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link
          href={`/plot/${plot.id}`}
          className="hover:text-gold transition-colors"
        >
          <h3 className="text-xl font-bold mb-3">{plot.title}</h3>
        </Link>

        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-white/40 text-xs mb-0.5">Price</p>
            <p className="text-gold text-2xl font-bold leading-none">
              {plot.price}
            </p>
            <p className="text-white/40 text-xs mt-1">{plot.pricePerSqft}</p>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-xs mb-0.5">Area</p>
            <p className="text-white font-semibold text-lg leading-none">
              {plot.area}
            </p>
          </div>
        </div>

        <p className="text-white/50 text-sm mb-5 flex-1">{plot.location}</p>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${project.phones[0]}`}
            className="flex items-center justify-center min-h-[44px] rounded-xl border border-gold/40 text-gold font-semibold text-sm hover:bg-gold/10 transition-colors"
          >
            Contact
          </a>
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-h-[44px] rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-colors"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
