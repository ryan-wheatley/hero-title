"use client";
import React from "react";
import { motion } from "motion/react";
function getWord(word, delay) {
    if (delay === void 0) { delay = 0; }
    return (React.createElement("span", { className: "relative overflow-hidden" },
        word,
        "\u00A0",
        React.createElement(motion.div, { className: "absolute flex top-0 h-full", initial: { left: "0%" }, animate: { left: "100%" }, transition: { duration: 0.4, delay: delay, ease: "easeOut" } },
            React.createElement(motion.div, { initial: { width: 0 }, animate: { width: 50 }, transition: {
                    duration: 0.1,
                    ease: "easeOut",
                    delay: delay,
                }, className: "mix-blend-difference border-white bg-white w-[100px] h-full" }),
            React.createElement("div", { className: "right-[100px] opacity-80 bg-white w-[1000px] h-full" }))));
}
export default function HeroTitle(_a) {
    var name = _a.name, className = _a.className;
    var words = name.split(" ");
    var delay = 0.4;
    return (React.createElement("div", { className: "".concat(className, " font-bold transition-all flex xl:justify-start tracking-tighter") }, words.map(function (word, index) { return getWord(word, index * delay); })));
}
