"use client";

import { useEffect, useState } from "react";

const TEXTS = [
  "See only your moments",
  "Find your memories instantly",
  "Powered by AI face recognition",
];

const TYPING_MS = 70;
const DELETING_MS = 35;
const PAUSE_MS = 2200;

export default function TypewriterHeading() {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, PAUSE_MS);
      return () => clearTimeout(t);
    }

    const full = TEXTS[idx];

    if (!deleting) {
      if (display.length < full.length) {
        const t = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), TYPING_MS);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(display.slice(0, -1)), DELETING_MS);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % TEXTS.length);
      }
    }
  }, [display, idx, deleting, paused]);

  return (
    <span className="inline" aria-label={TEXTS[idx]}>
      {display}
      <span
        className="inline-block w-[3px] h-[0.85em] ml-[2px] bg-violet-400 rounded-sm align-middle"
        style={{ animation: "cursor-blink 1s step-end infinite" }}
        aria-hidden
      />
    </span>
  );
}
