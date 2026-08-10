import { certifications, education } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Education and certifications" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.degree} className="border-l-2 border-border pl-5">
                  <p className="text-xs uppercase tracking-widest text-accent mb-2">
                    {item.period}
                  </p>
                  <p className="font-display text-xl text-foreground">{item.degree}</p>
                  <p className="text-sm text-muted mt-1">{item.school}</p>
                  <p className="text-sm text-muted mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="font-display text-xl text-foreground mb-5">Certifications</p>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background-alt px-5 py-4 text-sm sm:text-base text-foreground/90"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
