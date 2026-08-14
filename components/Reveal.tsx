"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * The single scroll-entrance wrapper used across every section of the site.
 *
 * Content starts 20px lower at opacity 0 and settles into place over .65s on an
 * ease-out curve. An IntersectionObserver fires once at 14% visibility, then
 * unobserves so the motion never replays, and disconnects on unmount.
 *
 * The motion itself lives in the global `.reveal` / `.reveal.is-visible` rules,
 * which also neutralise it under prefers-reduced-motion — reduced-motion users
 * get the resting state immediately.
 *
 * Pass `delay` (seconds) to stagger siblings, or `as` to render a different
 * element (e.g. "section", "li") instead of a div.
 */
export default function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  as,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  as?: ElementType;
} & Record<string, unknown>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
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
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      className={`reveal${shown ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      ref={ref}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
