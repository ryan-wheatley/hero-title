"use client";

import React from "react";
import { motion } from "motion/react"
type THeroName = { name: string; className?: string };

function getWord(word: string, delay = 0) {
  return (
    <span className={`relative overflow-hidden`}>
      {word}&nbsp;
      <motion.div
        className={"absolute flex top-0 h-full"}
        initial={{ left: "0%" }}
        animate={{ left: "100%" }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{
            duration: 0.1,
            ease: "easeOut",
            delay,
          }}
          className={
            "mix-blend-difference border-white bg-white w-[100px] h-full"
          }
        ></motion.div>
        <div
          className={"right-[100px] opacity-80 bg-white w-[1000px] h-full"}
        ></div>
      </motion.div>
    </span>
  );
}

export default function HeroTitle({ name, className }: THeroName) {
  const words = name.split(" ");
  const delay = 0.4;

  return (
    <div
      className={`${className} font-bold transition-all flex xl:justify-start tracking-tighter`}
    >
      {words.map((word, index) => getWord(word, index * delay))}
    </div>
  );
}
