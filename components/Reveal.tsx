"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/**
 * Shared scroll-entrance wrapper used site-wide.
 *
 * Rise-and-fade: the wrapped content starts ~24px lower at opacity 0 and
 * animates to its resting position. Driven by an IntersectionObserver that
 * fires once when the element is ~20% visible, then unobserves (never replays).
 * The motion itself + prefers-reduced-motion handling live in the global
 * `.reveal-rise` / `.reveal-rise.is-visible` CSS, so reduced-motion users get
 * the final state instantly.
 *
 * Pass `delay` (seconds) to stagger siblings into a cascade.
 */
export default function Reveal({
  children,
  className = "",
  style,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`reveal-rise${shown ? " is-visible" : ""} ${className}`.trim()}
      ref={ref}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
    >
      {children}
    </div>
  );
}
