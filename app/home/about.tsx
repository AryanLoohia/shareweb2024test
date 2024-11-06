"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "What is SHARE?",
    description:
      "SHARE is an innovative student-led organization that bridges the gap between academia and professional consulting. We empower talented university students to become socially responsible, results-driven leaders, equipping them with practical skills to positively impact both corporate stakeholders and society at large.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-700),var(--emerald-900))] flex items-center justify-center text-white">
        <img src="./logo2.png" />
      </div>
    ),
  },
  {
    title: "Why SHARE?    ",
    description:
      "Our team at SHARE has a track record of success in international case competitions and hands-on experience across various industries, from technology and consulting to sustainable development. We go beyond conventional solutions, challenging ourselves to think creatively and deliver effective, actionable strategies.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/events/CSI.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "What do we Offer ?",
    description:
      "We offer variety of services including strategies for market entry, geographic expansion, and unlocking market potential ; analyzing market trends and customer insights to set prices that align with product value propositions ; building business plans, identifying investors, and preparing compelling pitch presentations, as well as data analytics , insight generation and recommendation plans ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--emerald-800),var(--green-500))] flex items-center justify-center text-white">
        <Image
          src="/events/ERR.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10  relative left-10 w-screen">
      <StickyScroll content={content} />
    </div>
  );
}
