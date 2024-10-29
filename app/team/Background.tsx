"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Card from "./card";

export function BackgroundBoxesDemo() {
  const presidents = [
    {
      name: "Garvit Garg",
      portfolio: "Projects and Partnerships",
      pic: "/presidents/garvit.jpeg",
      linkedin: "",
      facebook: "",
      instagram: "",
    },
    {
      name: "Garvit Garg",
      portfolio: "Projects and Partnerships",
      pic: "/presidents/garvit.jpeg",
      linkedin: "",
      facebook: "",
      instagram: "",
    },
    {
      name: "Garvit Garg",
      portfolio: "Projects and Partnerships",
      pic: "/presidents/garvit.jpeg",
      linkedin: "",
      facebook: "",
      instagram: "",
    },
    {
      name: "Garvit Garg",
      portfolio: "Projects and Partnerships",
      pic: "/presidents/garvit.jpeg",
      linkedin: "",
      facebook: "",
      instagram: "",
    },
    {
      name: "Garvit Garg",
      portfolio: "Projects and Partnerships",
      pic: "/presidents/garvit.jpeg",
      linkedin: "",
      facebook: "",
      instagram: "",
    },
    {
      name: "Garvit Garg",
      portfolio: "Projects and Partnerships",
      pic: "/presidents/garvit.jpeg",
      linkedin: "",
      facebook: "",
      instagram: "",
    },
  ];
  return (
    <div className="h-auto relative min-h-screen w-full overflow-hidden bg-zinc-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="relative -top-12 z-20 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-500 text-5xl font-black animate-slidein opacity-0 [--slidein-delay:30ms]">
        Presidents
      </h1>
      <div className="z-20 relative -top-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slidein opacity-0 [--slidein-delay:100ms] ">
        {presidents.map((president, index) => (
          <Card
            key={index}
            name={president.name}
            portfolio={president.portfolio}
            pic={president.pic}
            linkedin={president.linkedin}
            facebook={president.facebook}
            instagram={president.instagram}
          />
        ))}
      </div>
    </div>
  );
}
