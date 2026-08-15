import { projects, profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

function ProjectIcon({ icon }: { icon: "baby" | "chart" }) {
  if (icon === "baby") {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <circle cx="24" cy="18" r="10" fill="#ffffff" />
        <path
          d="M14 30c0-4 4-6 10-6s10 2 10 6-4 8-10 8-10-4-10-8Z"
          fill="#ffffff"
        />
        <circle cx="20" cy="17" r="1.6" fill="#ff6fa0" />
        <circle cx="28" cy="17" r="1.6" fill="#ff6fa0" />
        <path d="M20 22c1.5 1.5 6.5 1.5 8 0" stroke="#ff6fa0" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
      <path d="M8 34 L18 22 L26 28 L40 12" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M32 12 H40 V20" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="6" y="36" width="36" height="3" rx="1.5" fill="#ffffff" opacity="0.6" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading eyebrow="Side Projects" title="Recent Work" />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-display font-semibold text-accent hover:opacity-80 transition-opacity"
            >
              View GitHub &rarr;
            </a>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-6 overflow-x-auto card-scroll pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 120} className="shrink-0 w-[320px] sm:w-[360px]">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-background-alt overflow-hidden hover:border-accent transition-colors"
              >
                <div
                  className="relative h-44 flex items-center justify-center"
                  style={{ background: project.tileGradient }}
                >
                  <ProjectIcon icon={project.icon} />
                  <span
                    className="absolute left-4 bottom-[-16px] flex h-10 w-10 items-center justify-center rounded-xl text-xs font-display font-extrabold text-white shadow-lg"
                    style={{ backgroundColor: project.badgeColor }}
                  >
                    {project.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                <div className="p-6 pt-7 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted mt-1">{project.tagline}</p>

                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 pt-5 border-t border-border">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
