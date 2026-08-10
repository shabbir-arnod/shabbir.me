import { resumeItems } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ResumeCard from "@/components/ResumeCard";
import SectionHeading from "@/components/SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Experience & Education" title="Resume" />
        </Reveal>

        <div className="mt-12 space-y-6">
          {resumeItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <ResumeCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
