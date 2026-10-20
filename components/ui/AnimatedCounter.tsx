"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", className, duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 60,
    duration: shouldReduceMotion ? 0 : duration,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      0{suffix}
    </motion.span>
  );
}
