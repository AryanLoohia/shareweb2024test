"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../components/ui/applecardsfornews";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card) => (
    <Card key={card.src} card={card} layout={false} />
  ));

  return (
    <div className="w-full h-full ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Newsletter
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div suppressHydrationWarning>
      {[...new Array(3).fill(1)].map(() => (
        <div
          key={"dummy-content"}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    category: "Sixth Edition",
    // title: "You can do more with AI.",
    link: "https://drive.google.com/file/d/1eR33Dyvjepzmrw_HR1c3eOrXpMEpY1yQ/view",
    content: <DummyContent />,
    src: "/newsletter/news6.png",
  },
  {
    category: "Fifth Edition",
    // title: "Enhance your productivity.",
    link: "https://drive.google.com/file/d/1NaQ_FggdZ_i0lvLnMeS1TN8dM0BPwgXh/view",
    content: <DummyContent />,
    src: "/newsletter/news5.png",
  },
  {
    category: "Fourth Edition",
    // title: "Launching the new Apple Vision Pro.",
    link: "https://drive.google.com/file/d/14SoNomdoBFqh4n-I8D1htsrhHvYg5vL1/view",
    content: <DummyContent />,
    src: "/newsletter/news4.png",
  },
  {
    category: "Third Edition",
    // title: "Maps for your iPhone 15 Pro Max.",
    link: "https://drive.google.com/file/d/1hPprelTdIoZGxqPkdVA6zlUGHjIKRxGD/view",
    content: <DummyContent />,
    src: "/newsletter/news3.png",
  },
  {
    category: "Second Edition",
    // title: "August 2023",
    link: "https://drive.google.com/file/d/1sijbPX5lnjMCwennw7Fwht-yt4SdhWny/view",
    content: <DummyContent />,
    src: "/newsletter/news2.png",
  },
  {
    category: "First Edition",
    // title: "July 2023",
    link: "https://drive.google.com/file/d/1MbzhIAEEzpn-ygjHY0BQoGkAwUf7H465/view",
    content: <DummyContent />,
    src: "/newsletter/news1.png",
  },
];
