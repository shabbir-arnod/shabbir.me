"use client";

import { useState } from "react";
import type { ResumeItem } from "@/lib/data";

export default function ResumeCard({ item }: { item: ResumeItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-3xl px-6 py-10 sm:px-12 sm:py-12"
      style={{ background: item.gradient }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="max-w-2xl">
          <p
            className="text-xs font-display font-bold uppercase tracking-widest mb-2"
            style={{ color: item.accent }}
          >
            {item.org}
          </p>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            {item.title}
          </h3>
          <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
            {item.description}
          </p>

          {item.highlights.length > 0 && (
            <>
              <button
                onClick={() => setOpen((o) => !o)}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors px-4 py-2 text-sm font-display font-semibold text-white"
              >
                {open ? "Show less" : "Read more"}
                <svg
                  viewBox="0 0 20 20"
                  className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                  fill="none"
                >
                  <path d="M5 8l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {open && (
                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>

        <p className="text-sm font-display font-semibold text-white/70 shrink-0 md:text-right">
          {item.period}
        </p>
      </div>

      {item.related.length > 0 && (
        <div className="mt-8">
          <p className="text-sm font-display font-bold text-white mb-3">Related</p>
          <div className="flex flex-wrap gap-3">
            {item.related.map((tag) => (
              <span
                key={tag}
                className="rounded-xl bg-white/10 px-4 py-2.5 text-sm font-display font-semibold text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
