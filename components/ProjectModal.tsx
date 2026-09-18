"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { ProjectIcon } from "@/components/ProjectIcon";

const SCROLL_STEP = 216; // screenshot width (200px) + gap (16px)

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const screenshots = project.screenshots ?? [];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else onClose();
      } else if (lightboxIndex !== null && screenshots.length > 1) {
        if (e.key === "ArrowLeft") {
          setLightboxIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length));
        } else if (e.key === "ArrowRight") {
          setLightboxIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, lightboxIndex, screenshots.length]);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useLayoutEffect(() => {
    updateScrollButtons();
  }, [project]);

  const scrollBy = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: "smooth" });
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm px-4 py-10 sm:py-16"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl border border-border bg-background-alt overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative h-28 sm:h-36 flex items-center justify-center"
          style={{ background: project.tileGradient }}
        >
          <ProjectIcon icon={project.icon} className="h-14 w-14 sm:h-16 sm:w-16" />
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
              <div className="relative">
                {canScrollLeft && (
                  <button
                    onClick={() => scrollBy(-1)}
                    aria-label="Previous screenshot"
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 6 L9 12 L15 18" />
                    </svg>
                  </button>
                )}
                {canScrollRight && (
                  <button
                    onClick={() => scrollBy(1)}
                    aria-label="Next screenshot"
                    className="absolute right-1 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 6 L15 12 L9 18" />
                    </svg>
                  </button>
                )}
                <div
                  ref={scrollRef}
                  onScroll={updateScrollButtons}
                  className="flex gap-4 overflow-x-auto card-scroll pb-2 -mx-6 px-6 sm:-mx-8 sm:px-8"
                >
                  {screenshots.map((shot, i) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      aria-label={`View ${shot.alt} full size`}
                      className="shrink-0 w-[200px] rounded-xl border border-border overflow-hidden bg-background cursor-zoom-in hover:opacity-90 transition-opacity"
                    >
                      <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} className="w-full h-auto" />
                    </button>
                  ))}
                </div>
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

      {lightboxIndex !== null && screenshots[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex(null);
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Close screenshot viewer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>

          {screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length));
              }}
              aria-label="View previous screenshot"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6 L9 12 L15 18" />
              </svg>
            </button>
          )}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
              }}
              aria-label="View next screenshot"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6 L15 12 L9 18" />
              </svg>
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element -- full-viewport lightbox, intrinsic size varies per project */}
          <img
            src={screenshots[lightboxIndex].src}
            alt={screenshots[lightboxIndex].alt}
            className="max-h-full max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {screenshots.length > 1 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/70">
              {lightboxIndex + 1} / {screenshots.length}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
