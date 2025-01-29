"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/app/components/ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white 
        w-fit mx-auto leading-relaxed lg:leading-snug text-wrap balance max-w-[90%] md:max-w-3xl lg:max-w-5xl  "
      >
        We are all about {""}
        <Highlight className="text-black dark:text-white">
          Finance, Consulting and Product Management
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
