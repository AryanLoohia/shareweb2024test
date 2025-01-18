"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <div className="inline-block">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "flex justify-center items-center space-x-1 my-6",
        className
      )}
    >
      <motion.div
        className="overflow-hidden pb-2 w-full"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "100%",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center break-words sm:whitespace-nowrap"
          style={{
            whiteSpace: "normal", // Allow text to wrap on small screens
            textAlign: "center", // Ensure the text is centered
          }}
        >
          {renderWords()}{" "}
        </div>
      </motion.div>

      {/* Cursor */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-10 bg-emerald-500",
          cursorClassName,
          "ml-1" // Added margin to ensure cursor is always after the last word
        )}
      ></motion.span>
    </div>
  );
};
