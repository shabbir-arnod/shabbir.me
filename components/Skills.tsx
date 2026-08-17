import { skillGroups } from "@/lib/data";
import { toolIcons } from "@/lib/toolIcons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="The toolkit behind the roadmap" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div>
                <p className="font-display font-bold text-lg text-foreground mb-4">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const Icon = toolIcons[skill];
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted hover:border-accent hover:text-accent transition-colors"
                      >
                        {Icon && <Icon className="h-4 w-4 shrink-0" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
