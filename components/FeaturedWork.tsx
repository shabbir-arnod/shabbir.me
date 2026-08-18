import { flagshipWork } from "@/lib/data";
import Reveal from "@/components/Reveal";

function LayersIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
      <path d="M10 2 L18 6 L10 10 L2 6 Z" fill="currentColor" opacity="0.9" />
      <path d="M2 10 L10 14 L18 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 14 L10 18 L18 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-display font-bold uppercase tracking-widest text-accent">
            <LayersIcon />
            Product
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-foreground max-w-2xl">
            What I run at {flagshipWork.org}
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            {flagshipWork.summary}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="mt-10 rounded-3xl px-6 py-10 sm:px-12 sm:py-12"
            style={{ background: "linear-gradient(135deg, #241454 0%, #4b2fb0 100%)" }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-widest text-[#b9a6ff]">
              {flagshipWork.org}
            </p>
            <h3 className="mt-2 font-display font-extrabold text-2xl sm:text-3xl text-white">
              {flagshipWork.product}
            </h3>
            <p className="mt-1 text-sm text-white/70">{flagshipWork.role}</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {flagshipWork.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-extrabold text-xl text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {flagshipWork.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors px-4 py-2.5 text-sm font-display font-semibold text-white"
                >
                  {link.label}
                  <span aria-hidden>&#8599;</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
