"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -1000, y: -1000 });
  const targetRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const isTouch = useRef(false);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(hover: none)").matches;
    if (isTouch.current) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };
    
    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.2);
      posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.2);
      if (glowRef.current) {
        // Offset by half of the width/height (16px) to center it
        glowRef.current.style.transform = `translate(${posRef.current.x - 16}px, ${posRef.current.y - 16}px) scale(${isClicked ? 2 : 1})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isClicked]);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{ willChange: "transform" }}
      aria-hidden
    >
      <div className="w-full h-full rounded-full border-2 border-purple-500/50 bg-purple-500/10 shadow-[0_0_10px_rgba(168,85,247,0.3)] backdrop-blur-sm" />
    </div>
  );
}
