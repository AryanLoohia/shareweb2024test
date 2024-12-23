"use client";
import React from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import Card from "./card";

export function BackgroundBoxesDemo() {
  const presidents = [
    {
      name: "Garvit Garg",
      portfolio: "Projects and Partnerships",
      pic: "/presidents/garvit.jpeg",
      linkedin: "https://www.linkedin.com/in/garvitgarg8903/",
      facebook: "",
      email: "garvit.garg.shareiitkgp@gmail.com",
    },
    {
      name: "Akshat Lathi",
      portfolio: "Projects and Partnerships",
      pic: "/presidents/akshat.jpeg",
      linkedin: "https://www.linkedin.com/in/akshat-lathi/",
      facebook: "",
      email: "akshat.lathi.shareiitkgp@gmail.com",
    },
    {
      name: "Kunal Patil",
      portfolio: "Internal Affairs and Administration",
      pic: "/presidents/kunal.jpeg",
      linkedin: "https://www.linkedin.com/in/kunal-patil-628045268/",
      facebook: "",
      email: "kunal.patil.shareiitkgp@gmail.com",
    },
    {
      name: "Sumanth Javvaji",
      portfolio: "Internal Affairs and Administration",
      pic: "/presidents/sumanth.jpeg",
      linkedin: "https://www.linkedin.com/in/sumanth-javvaji-ab6046258/",
      facebook: "",
      email: "sumanth.javvaji.shareiitkgp@gmail.com",
    },
    {
      name: "Gaurav Sharma",
      portfolio: "Marketing and Outreach",
      pic: "/presidents/gaurav.jpeg",
      linkedin: "https://www.linkedin.com/in/gaurav-sharma-b07974256/",
      facebook: "",
      email: "gaurav.sharma.shareiitkgp@gmail.com",
    },
    {
      name: "Saurabh Chavan",
      portfolio: "Marketing and Outreach",
      pic: "/presidents/saurabh.jpeg",
      linkedin: "https://www.linkedin.com/in/saurabh-chavan-961819251/",
      facebook: "",
      email: "saurabh.chavan.shareiitkgp@gmail.com",
    },
  ];
  return (
    <div className="h-auto relative min-h-screen w-full overflow-hidden bg-zinc-900 flex flex-col items-center justify-center rounded-lg pt-20">
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
            email={president.email}
          />
        ))}
      </div>
    </div>
  );
}
