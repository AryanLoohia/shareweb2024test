"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  start: number;
  end: number;
  label: string;
  description: string;
  unit?: string;
  image: React.ReactNode;
}

const AnimatedCounter: React.FC<CounterProps> = ({
  start,
  end,
  label,
  description,
  unit = "",
  image,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  const displayNumber = isVisible ? end : start;

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
        {image}
      </div>
      <h2 className="text-slate-50 text-5xl font-extrabold mb-2">
        <span className="flex tabular-nums">
          {displayNumber}
          {unit}
        </span>
      </h2>
      <span className="inline-flex font-semibold bg-clip-text text-transparent text-2xl bg-gradient-to-r from-emerald-500 to-green-300 mb-2">
        {label}
      </span>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
};

export default AnimatedCounter;
