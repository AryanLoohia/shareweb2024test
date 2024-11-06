"use client";
import React from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";
import Companies from "./companies";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import StickyScrollRevealDemo from "./about";
import LayoutGridDemo from "./events";
import Clients from "./clients";
import { motion } from "framer-motion";
import Number from "./numbers";
import Numbers from "./numbers";
export default function SparklesPreview() {
  return (
    <div className="h-auto w-full bg-black flex flex-col items-center justify-center mt-60 overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h1 className="mb-4 leading-normal text-center font-extrabold  tracking-tight text-gray-900 sm:text-2xl md:text-5xl lg:text-6xl dark:text-white">
          Strategic Hub for{" "}
          <mark className="px-2 text-white mx-1 bg-emerald-600 rounded dark:bg-green-500">
            Analysis
          </mark>{" "}
          and
          <mark className="px-2 text-white mx-1 bg-emerlad-600 rounded dark:bg-green-500">
            Research
          </mark>
          Expertise
        </h1>
      </motion.div>
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

      <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
      <div className="relative -top-64">
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
    </div>
  );
}
