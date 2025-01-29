"use client";
import React, { useRef } from "react";
import { LayoutGrid } from "@/app/components/ui/layout-grid";

export default function LayoutGridDemo() {
  // const [visible, setVisible] = useState(false);
  const elementRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );

  //   if (elementRef.current) {
  //     observer.observe(elementRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div className="">
      <div ref={elementRef} className="h-auto py-20 mx-10 w-screen">
        <h1 className="relative w-screen text-center z-20 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-800 text-5xl font-black animate-slidein opacity-0 [--slidein-delay:30ms]">
          Our Events
        </h1>
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Bid2Pitch</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        In Bid2Pitch, teams create business proposals and bid on each other’s
        work; higher bids give teams more time to refine their purchased
        proposal. Teams then present their enhanced plans in the Business Plan
        Presentation, where senior judges evaluate based on feasibility,
        innovation, and impact.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Case Study Intras
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        In the Case Study Competition, our associate batch is divided into
        teams, each given a problem statement to tackle. Teams prepare a
        detailed PowerPoint presentation and present their solutions to a panel
        of senior judges, who assess them based on content quality and
        presentation skills.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Navigating your Path to ISB
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        An exclusive event in partnership with the Indian School of Business ,
        bringing to you the crux of MBA admissions at ISB and why should you go
        for it.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Equity Reasearch
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Teams are assigned a sector to conduct in-depth research and analyze
        companies within it. They prepare an equity research report with
        recommendations to buy, sell, or hold specific stocks, based on
        financial performance, market trends, and risk analysis. Each team
        presents its findings and recommendations to senior judges for
        evaluation.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 sm:rows-span-4",
    thumbnail: "/events/B2P.JPG",
    selectedThumbnail: "/events/B2P.JPG",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/events/CSI.png",
    selectedThumbnail: "/events/CSI.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "events/ISB.JPG",
    selectedThumbnail: "/events/ISB.JPG",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "events/ERR.png",
    selectedThumbnail: "/events/ERR.png",
  },
];
