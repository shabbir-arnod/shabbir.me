import { skillGroups } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="The toolkit behind the roadmap" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div>
                <p className="font-display text-xl text-foreground mb-4">{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted hover:border-accent hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
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
