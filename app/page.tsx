"use client";
import React from "react";
import SparklesPreview from "./home/page";
import dynamic from "next/dynamic";

const Page = () => {
  return (
    <div>
      <SparklesPreview></SparklesPreview>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
