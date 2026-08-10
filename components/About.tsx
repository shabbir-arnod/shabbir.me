import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="About" title="Product, translated from engineering" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {profile.summary.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-base sm:text-lg text-muted leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-border bg-background-alt p-6 space-y-5">
              <p className="text-xs uppercase tracking-widest text-accent">
                At a glance
              </p>
              {profile.quickFacts.map((fact) => (
                <div key={fact.label} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <p className="text-xs text-muted mb-1">{fact.label}</p>
                  <p className="text-sm text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
