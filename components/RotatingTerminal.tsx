"use client";

import { useEffect, useState } from "react";

type Props = {
  statuses: string[];
  intervalMs: number;
  className?: string;
};

export function RotatingTerminal({
  statuses,
  intervalMs,
  className = "",
}: Props) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (statuses.length <= 1) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % statuses.length);
        setVisible(true);
      }, 250);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, statuses.length]);

  return (
    <div
      className={`font-mono text-[11px] leading-relaxed text-paper/85 ${className}`}
    >
      <span
        className="transition-opacity duration-200"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {statuses[idx]}
      </span>
      <span className="terminal-cursor" aria-hidden />
    </div>
  );
}
