export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground max-w-2xl">
        {title}
      </h2>
    </div>
  );
}
