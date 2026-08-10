import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Six years across SportTech, banking and cloud" />
        </Reveal>

        <div className="mt-16 space-y-16">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 100}>
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-12">
                <div>
                  <p className="font-display text-2xl text-foreground">{item.company}</p>
                  <p className="text-sm text-accent mt-1">{item.role}</p>
                  <p className="text-xs text-muted mt-2 uppercase tracking-widest">
                    {item.period}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted leading-relaxed mb-5 border-l-2 border-border pl-4">
                    {item.context}
                  </p>
                  <ul className="space-y-3">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
