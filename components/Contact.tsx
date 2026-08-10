import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(77,141,255,0.12),_transparent_55%)]" />

      <div className="mx-auto max-w-3xl px-6 sm:px-8 relative text-center">
        <Reveal>
          <p className="text-sm font-display font-bold uppercase tracking-widest text-accent mb-3">
            Contact
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground">
            Let&apos;s talk about your next platform.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-muted leading-relaxed">
            Open to conversations about technical product roles, platform strategy or the
            projects above. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-display font-semibold text-background hover:opacity-90 transition-opacity"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-display font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-display font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
