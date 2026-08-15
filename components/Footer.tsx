import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-display font-semibold">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built in London.</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
