import { profile } from "@/lib/data";
import DeskIllustration from "@/components/DeskIllustration";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(77,141,255,0.12),_transparent_55%)]" />

      <div className="mx-auto max-w-6xl w-full px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-foreground">
            Hi, I&apos;m <span className="text-accent">{profile.firstName}</span>.
            <br />
            {profile.heroHeadline}
          </h1>

          <p className="mt-6 max-w-md text-base sm:text-lg text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#resume"
              className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-display font-semibold text-background hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-display font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              About
            </a>
          </div>
        </div>

        <DeskIllustration />
      </div>
    </section>
  );
}
