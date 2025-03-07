"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 -my-6 mx-auto text-4xl md:text-7xl font-sans font-bold text-emerald-500 dark:text-emerald-500">
        Our Clients
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-12 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Amazon - Smartbiz",
    title: "Launched kgpEats , check it out now !!",
    src: "/companylogosprojects/amazon.png",
    content: <DummyContent />,
    url: "https://www.kgpeats.com",
  },
  {
    category: "Culture OS",
    title: "Company Analysis and Marketing",
    src: "/companylogosprojects/cultureos.png",
    content: <DummyContent />,
    url: "https://drive.google.com/file/d/1HaC9l9GKlEiz0CJDHbv200gNQngesQ1A/view",
  },
  {
    category: "Fluxgen",
    title: "Data Driven Decision Making",
    src: "/companylogosprojects/fluxgen.png",
    content: <DummyContent />,
    url: "https://drive.google.com/file/d/1QcnRwcszhH-fHlPoocA6BTD6nfhSVUZj/view",
  },
  {
    category: "Bosch - SDEX",
    title: "Exploring avenues in the Indian market",
    src: "/companylogosprojects/bosch.png",
    content: <DummyContent />,
    url: "https://sdex.in/",
  },
  {
    category: "Gram Vikas Trust",
    title: "Exploring the realm of CSR",
    src: "/companylogosprojects/gvt.png",
    content: <DummyContent />,
    url: "https://drive.google.com/file/d/11SypfYXde1RJfVFDN7lld_nL3uAjLmkX/view",
  },
  {
    category: "Runway",
    title: "Growth Operations and Customization",
    src: "/companylogosprojects/runway.png",
    content: <DummyContent />,
    url: "https://drive.google.com/file/d/1DhWbeH0NC9sAtVT3PL6ClMIaHAgXmCPT/view",
  },

  {
    category: "Incubate Fund",
    title: "Deep dive into ClimateTech",
    src: "/companylogosprojects/incubatehub.png",
    content: <DummyContent />,
    url: "https://drive.google.com/file/d/1KV3nObUmDIjLRg9eLY7tQyyNqAg06KGK/view",
  },
  {
    category: "Money Club",
    title: "Financial Planning for Co-operatives",
    src: "/companylogosprojects/moneyclub.png",
    content: <DummyContent />,
    url: "",
  },
  {
    category: "Vivaldis",
    title: "Strategy and Growth",
    src: "/companylogosprojects/vivaldis.png",
    content: <DummyContent />,
    url: "https://www.vivaldis.co.in/",
  },
];
