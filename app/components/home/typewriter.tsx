"use client";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "FINANCE,",
      className: "text-emerald-500 dark:text-emerald-500",
    },
    {
      text: "CONSULTING",
      className: "text-emerald-500 dark:text-emerald-500",
    },
    {
      text: "and",
    },

    {
      text: "PRODUCT MANAGEMENT.",
      className: "text-emerald-500 dark:text-emerald-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-base font-bold">
        We are all about
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
