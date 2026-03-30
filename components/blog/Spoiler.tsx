"use client";

import { useState } from "react";

export function Spoiler({
  children,
  label = "Show solution",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 border border-black/10 rounded-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-4 py-2 text-sm font-mono text-black/50 hover:text-black/70 hover:bg-black/5 transition-colors text-left"
      >
        <span className="text-xs">{open ? "▼" : "▶"}</span>
        {open ? label.replace(/^Show/, "Hide") : label}
      </button>
      {open && (
        <div className="px-4 py-3 border-t border-black/10 prose prose-sm max-w-full">
          {children}
        </div>
      )}
    </div>
  );
}
