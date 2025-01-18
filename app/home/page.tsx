"use client";
import React from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";
import Companies from "./companies";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import StickyScrollRevealDemo from "./about";
import LayoutGridDemo from "./events";
import Clients from "./clients";
import { motion } from "framer-motion";
import Numbers from "./numbers";
import AppleCardsCarouselDemo from "./news";
import dynamic from "next/dynamic";

export function SparklesPreview() {
  return (
    <div className="h-auto max-w-screen w-full bg-black flex flex-col items-center justify-center pt-20 overflow-hidden">
      <h1 className="text-center text-3xl md:text-5xl lg:text-6xl mb-4 max-w-[80vw] leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white ">
        Strategic Hub for{" "}
        <mark className="px-2 text-white mx-1 bg-emerald-600 rounded dark:bg-green-500">
          Analysis
        </mark>{" "}
        and
        <mark className="px-2 text-white mx-1 bg-emerald-600 rounded dark:bg-green-500">
          Research
        </mark>
        Expertise
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={2200}
          className="w-full h-full"
          particleColor="#15bc75"
        />

        <div className="relative -top-36 z-30">
          <Companies></Companies>
        </div>
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <section className="w-full px-4">
        <div className="max-w-screen-md mx-auto">
          <TypewriterEffectSmoothDemo />
        </div>
      </section>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <StickyScrollRevealDemo></StickyScrollRevealDemo>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Numbers></Numbers>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <LayoutGridDemo></LayoutGridDemo>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {" "}
          <Clients></Clients>
        </motion.div>
      </div>
      <div className="w-full">
        {/* Reduce the margin between Clients and Apple Cards Carousel */}
        <div className="mt-0 pt-4">
          <AppleCardsCarouselDemo />
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(SparklesPreview), { ssr: false });
