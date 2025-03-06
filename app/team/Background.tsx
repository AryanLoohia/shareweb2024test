"use client";
import React from "react";
// import { Boxes } from "@/app/components/ui/background-boxes";
import Card from "./card";

export function BackgroundBoxesDemo() {
  const presidents = [
    {
      name: "Kunal Patil",
      // portfolio: "Internal Affairs and Administration",
      pic: "/presidents/kunal.jpeg",
      linkedin: "https://www.linkedin.com/in/kunal-patil-628045268/",
      twitter: "https://x.com/KunalPatil2504",
      email: "kunal.patil.shareiitkgp@gmail.com",
    },
    {
      name: "Sumanth Javvaji",
      // portfolio: "Internal Affairs and Administration",
      pic: "/presidents/sumanth.jpeg",
      linkedin: "https://www.linkedin.com/in/sumanth-javvaji-ab6046258/",
      twitter: "",
      email: "sumanth.javvaji.shareiitkgp@gmail.com",
    },
    {
      name: "Gaurav Sharma",
      // portfolio: "Marketing and Outreach",
      pic: "/presidents/gaurav.jpeg",
      linkedin: "https://www.linkedin.com/in/gaurav-sharma-b07974256/",
      twitter: "https://x.com/GauravShar68702",
      email: "gaurav.sharma.shareiitkgp@gmail.com",
    },
    {
      name: "Saurabh Chavan",
      // portfolio: "Marketing and Outreach",
      pic: "/presidents/saurabh.jpeg",
      linkedin: "https://www.linkedin.com/in/saurabh-chavan-961819251/",
      twitter: "https://x.com/SAURABHC2727",
      email: "saurabh.chavan.shareiitkgp@gmail.com",
    },
  ];
  return (
    <div className="h-auto relative min-h-screen w-full overflow-hidden bg-green-950 flex flex-col items-center justify-center rounded-lg pt-20">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* <Boxes /> */}
      <h1 className="relative -top-12 z-20 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-500 text-5xl font-black animate-slidein opacity-0 [--slidein-delay:30ms]">
        Presidents
      </h1>
      <div className="z-20 relative -top-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 animate-slidein opacity-0 [--slidein-delay:100ms] ">
        {presidents.map((president, index) => (
          <Card
            key={index}
            name={president.name}
            // portfolio={president.portfolio}
            pic={president.pic}
            linkedin={president.linkedin}
            twitter={president.twitter}
            email={president.email}
          />
        ))}
      </div>
    </div>
  );
}
