"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Companies from "./companies";
import { TypewriterEffectSmoothDemo } from "./typewriter";

export default function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center mt-60 overflow-hidden ">
      <h1 className="mb-4 leading-normal text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
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
    </div>
  );
}
