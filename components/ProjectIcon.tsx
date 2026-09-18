export function ProjectIcon({ icon, className = "h-9 w-9" }: { icon: "baby" | "chart"; className?: string }) {
  if (icon === "baby") {
    return (
      <svg viewBox="0 0 48 48" className={className} fill="none">
        <circle cx="24" cy="18" r="10" fill="#ffffff" />
        <path
          d="M14 30c0-4 4-6 10-6s10 2 10 6-4 8-10 8-10-4-10-8Z"
          fill="#ffffff"
        />
        <circle cx="20" cy="17" r="1.6" fill="#ff6fa0" />
        <circle cx="28" cy="17" r="1.6" fill="#ff6fa0" />
        <path d="M20 22c1.5 1.5 6.5 1.5 8 0" stroke="#ff6fa0" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <path d="M8 34 L18 22 L26 28 L40 12" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M32 12 H40 V20" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="6" y="36" width="36" height="3" rx="1.5" fill="#ffffff" opacity="0.6" />
    </svg>
  );
}
