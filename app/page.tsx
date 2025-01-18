"use client";
import React from "react";
import SparklesPreview from "./home/page";
import dynamic from "next/dynamic";

export function Home() {
  return (
    <div>
      <SparklesPreview></SparklesPreview>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
