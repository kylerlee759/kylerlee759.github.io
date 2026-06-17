"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Reveal-on-scroll wrapper that NEVER hides content if JS doesn't cooperate.
 *
 * The previous version rendered every block at `opacity:0` and relied entirely
 * on a `whileInView` animation to reveal it. If that animation didn't fire
 * (failed hydration, odd scroll container, slow JS), the content stayed
 * permanently invisible — which is what blanked the live site.
 *
 * Now the server/no-JS render is plain, fully-visible markup. The fade-in only
 * engages once JS confirms it's alive, and a failsafe timer guarantees the
 * content reveals even if the in-view observer never fires.
 */
export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [failsafe, setFailsafe] = useState(false);

  useEffect(() => {
    setMounted(true);
    // If the observer never fires for any reason, reveal anyway.
    const t = setTimeout(() => setFailsafe(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // SSR, pre-hydration, or reduced-motion: render visible, animation-free.
  // Content is therefore guaranteed to show regardless of JS.
  if (!mounted || prefersReduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const show = inView || failsafe;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
