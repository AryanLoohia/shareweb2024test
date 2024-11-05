import React from "react";
import AppleCardsCarouselDemo from "./cards";
import Timeline from "./timeline";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="text-gray-800 text-6xl relative -top-9">
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>

      <Timeline></Timeline>
    </div>
  );
};

export default page;
