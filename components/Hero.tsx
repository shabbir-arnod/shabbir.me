import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(215,255,78,0.08),_transparent_60%)]" />

      <div className="mx-auto max-w-6xl w-full px-6 sm:px-8 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-6">
          {profile.role} &middot; {profile.location}
        </p>

        <h1 className="font-display text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl tracking-tight text-foreground max-w-5xl">
          Shabbir Arnod{" "}
          <span className="italic text-muted">Wala</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl border-t border-border pt-8">
          {profile.quickFacts.map((fact) => (
            <div key={fact.label}>
              <p className="text-xs uppercase tracking-widest text-muted mb-1">
                {fact.label}
              </p>
              <p className="text-sm text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
