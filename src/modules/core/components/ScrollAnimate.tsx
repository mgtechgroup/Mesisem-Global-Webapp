"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollAnimate({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: "translate-y-[30px]",
    down: "-translate-y-[30px]",
    left: "translate-x-[-30px]",
    right: "-translate-x-[30px]",
  };

  return (
    <div
      ref={ref}
      className={`scroll-animate opacity-0 ${directionClasses[direction]} transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
