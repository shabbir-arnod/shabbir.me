import Image from "next/image";
import { certifications, skillGroups } from "@/lib/data";
import { toolIcons } from "@/lib/toolIcons";
import { certIcons } from "@/lib/certIcons";
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
                    const tool = toolIcons[skill];
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted hover:border-accent hover:text-accent transition-colors"
                      >
                        {tool?.kind === "glyph" && (
                          <tool.Icon className="h-4 w-4 shrink-0" style={{ color: tool.color }} />
                        )}
                        {tool?.kind === "image" && (
                          <Image
                            src={tool.src}
                            alt=""
                            width={16}
                            height={16}
                            className="h-4 w-4 shrink-0 object-contain"
                          />
                        )}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={skillGroups.length * 100}>
          <div className="mt-10">
            <p className="font-display font-bold text-lg text-foreground mb-4">
              Certifications
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => {
                const icon = certIcons[cert.name];
                return (
                  <a
                    key={cert.name}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    {icon?.kind === "image" && (
                      <Image
                        src={icon.src}
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0 object-contain"
                      />
                    )}
                    {icon?.kind === "glyph" && <icon.Icon className="h-4 w-4 shrink-0" />}
                    {cert.name} &middot; {cert.issuer}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
