import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Side Projects" title="Things I build outside the day job" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 120}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-background-alt p-8 transition-colors hover:border-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-foreground">{project.name}</h3>
                    <p className="text-sm text-accent mt-1">{project.tagline}</p>
                  </div>
                  <span className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent">
                    &#8599;
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-border">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
