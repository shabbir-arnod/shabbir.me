import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-border relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(215,255,78,0.08),_transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 relative">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Contact</p>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tight text-foreground max-w-2xl">
            Let&apos;s talk about your <span className="italic text-muted">next platform.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            Open to conversations about technical product roles, platform strategy or the projects
            above. The fastest way to reach me is email.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
