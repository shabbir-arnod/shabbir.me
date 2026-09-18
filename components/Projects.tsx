"use client";

import { useState } from "react";
import { projects, profile } from "@/lib/data";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectModal from "@/components/ProjectModal";
import { ProjectIcon } from "@/components/ProjectIcon";

export default function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

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
          {projects.map((project, i) => {
            const hasDetail = Boolean(project.screenshots?.length);
            const cardClassName =
              "group flex h-full w-full flex-col rounded-2xl border border-border bg-background-alt overflow-hidden hover:border-accent transition-colors text-left";
            const cardBody = (
              <>
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
                  {hasDetail && (
                    <p className="mt-4 text-xs font-display font-semibold text-accent">
                      Click to see features &amp; screenshots &rarr;
                    </p>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={project.name} delay={i * 120} className="shrink-0 w-[320px] sm:w-[360px]">
                {hasDetail ? (
                  <button type="button" onClick={() => setOpenProject(project)} className={cardClassName}>
                    {cardBody}
                  </button>
                ) : (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    {cardBody}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>

      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
}
