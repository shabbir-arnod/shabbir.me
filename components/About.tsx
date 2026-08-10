import type { ReactNode } from "react";
import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";

function LinkText({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:opacity-80 transition-opacity"
    >
      {children}
    </a>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 text-center">
        <Reveal>
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-accent-soft to-accent">
            <span className="font-display font-extrabold text-3xl text-background">
              {profile.initials}
            </span>
          </div>

          <p className="mt-6 text-sm font-display font-bold uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            {profile.name}
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5 text-left">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-base text-muted leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={profile.bio.length * 80}>
            <p className="text-base text-muted leading-relaxed">
              Take a look at the <LinkText href="#projects">projects</LinkText> to see the work,
              or find me on <LinkText href={profile.linkedin}>LinkedIn</LinkText> and{" "}
              <LinkText href={profile.github}>GitHub</LinkText>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
