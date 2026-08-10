export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-sm font-display font-bold uppercase tracking-widest text-accent mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground max-w-2xl">
        {title}
      </h2>
    </div>
  );
}
