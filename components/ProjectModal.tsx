"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm px-4 py-10 sm:py-16"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl border border-border bg-background-alt overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-28 sm:h-36" style={{ background: project.tileGradient }}>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white hover:bg-black/40 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">{project.name}</h2>
          <p className="text-muted mt-1">{project.tagline}</p>

          <p className="mt-5 text-sm sm:text-base text-foreground/80 leading-relaxed">{project.description}</p>

          {project.highlights.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-muted">Features</h3>
              <ul className="mt-3 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-foreground/80 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-muted">
                Screenshots
              </h3>
              <div className="mt-3 flex gap-4 overflow-x-auto card-scroll pb-2 -mx-6 px-6 sm:-mx-8 sm:px-8">
                {project.screenshots.map((shot) => (
                  <div
                    key={shot.src}
                    className="shrink-0 w-[200px] rounded-xl border border-border overflow-hidden bg-background"
                  >
                    <Image src={shot.src} alt={shot.alt} width={390} height={844} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-border">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-sm text-accent hover:opacity-80 transition-opacity"
          >
            View source on GitHub &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
