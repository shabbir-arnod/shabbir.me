import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built in London.</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
