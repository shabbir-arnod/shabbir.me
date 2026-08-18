import { workItems } from "@/lib/data";
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
            Products I run
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {workItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <div
                className="flex h-full flex-col rounded-3xl px-6 py-8 sm:px-8 sm:py-9"
                style={{ background: item.gradient }}
              >
                <p
                  className="text-xs font-display font-bold uppercase tracking-widest"
                  style={{ color: item.accent }}
                >
                  {item.org}
                </p>
                <h3 className="mt-2 font-display font-extrabold text-2xl text-white">
                  {item.product}
                </h3>
                <p className="mt-1 text-sm text-white/70">{item.role}</p>

                <p className="mt-5 text-sm text-white/80 leading-relaxed flex-1">
                  {item.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display font-extrabold text-lg text-white">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-xs text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {item.links.map((link) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
