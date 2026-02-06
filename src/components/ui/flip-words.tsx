"use client";
import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type FlipWordItem = {
    text: string;
    icon?: string;
    color?: string;
};

export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: (string | FlipWordItem)[];
    duration?: number;
    className?: string;
}) => {
    const wordObjects = useMemo(() =>
        words.map((w) => (typeof w === "string" ? { text: w } : w)),
        [words]);

    const [currentWord, setCurrentWord] = useState<FlipWordItem>(wordObjects[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        const nextIndex = (wordObjects.indexOf(currentWord) + 1) % wordObjects.length;
        const word = wordObjects[nextIndex];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, wordObjects]);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-flex items-center gap-2 relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                    className
                )}
                key={currentWord.text}
            >
                {currentWord.icon && (
                    <motion.div
                        className="w-10 h-10 md:w-16 md:h-16 bg-current"
                        style={{
                            maskImage: `url(${currentWord.icon})`,
                            maskSize: "contain",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskImage: `url(${currentWord.icon})`,
                            WebkitMaskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                        }}
                        initial={{ opacity: 0, scale: 0.5, filter: "blur(8px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.5, filter: "blur(8px)" }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    />
                )}

                <div className="inline-block whitespace-nowrap">
                    {currentWord.text.split(" ").map((word, wordIndex) => (
                        <motion.span
                            key={word + wordIndex}
                            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                delay: wordIndex * 0.3,
                                duration: 0.3,
                            }}
                            className="inline-block whitespace-nowrap"
                        >
                            {word.split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={word + letterIndex}
                                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{
                                        delay: wordIndex * 0.3 + letterIndex * 0.05,
                                        duration: 0.2,
                                    }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
