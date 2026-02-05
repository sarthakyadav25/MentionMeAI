"use client";

import { Player, PlayerRef } from "@remotion/player";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";

import { Step1Animation } from "./remotion/Step1Animation";
import { Step2Animation } from "./remotion/Step2Animation";
import { Step3Animation } from "./remotion/Step3Animation";
import { Step4Animation } from "./remotion/Step4Animation";
import { StepAuthorityAnimation } from "./remotion/StepAuthorityAnimation";

/* ----------------------------------
   Animation Config
----------------------------------- */
const ANIMATION_CONFIG = {
    fps: 30,
    durationInFrames: 120,
    width: 400,
    height: 300,
};

/* ----------------------------------
   Scroll Aware Player
----------------------------------- */
const ScrollAwarePlayer = ({
    component,
    durationInFrames,
    compositionWidth,
    compositionHeight,
    fps,
    style,
    loop = true,
}: {
    component: React.ComponentType<any>;
    durationInFrames: number;
    compositionWidth: number;
    compositionHeight: number;
    fps: number;
    style?: React.CSSProperties;
    loop?: boolean;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<PlayerRef>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });
    const hasPlayed = useRef(false);
    const isEndingRef = useRef(false);

    useEffect(() => {
        if (isInView && playerRef.current && !hasPlayed.current) {
            playerRef.current.play();
            hasPlayed.current = true;
        }
    }, [isInView]);

    useEffect(() => {
        const { current } = playerRef;
        if (!current) return;

        const handleEnded = () => {
            if (isEndingRef.current) return;
            isEndingRef.current = true;
            current.pause();
            current.seekTo(durationInFrames - 1);
        };

        current.addEventListener("ended", handleEnded);
        return () => {
            current.removeEventListener("ended", handleEnded);
        };
    }, [durationInFrames]);

    return (
        <div ref={containerRef} className="w-full h-full">
            <Player
                ref={playerRef}
                component={component}
                durationInFrames={durationInFrames}
                compositionWidth={compositionWidth}
                compositionHeight={compositionHeight}
                fps={fps}
                loop={loop}
                autoPlay={false}
                style={style}
            />
        </div>
    );
};

/* ----------------------------------
   Scenic Feature Frame
----------------------------------- */
const ScenicFeatureFrame = ({
    backgroundImage,
    children,
    align,
}: {
    backgroundImage: string;
    children: React.ReactNode;
    align: "left" | "right";
}) => {
    return (
        <div className="relative w-full h-full min-h-[510px] overflow-hidden ">

            {/* FULL BACKGROUND */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            />

            {/* SOFT FADE OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-r from-white/50 via-white/20 to-transparent" />

            {/* FLOATING WINDOW */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1, y: -4 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`
          absolute top-1/2 -translate-y-1/2
          w-[92%] sm:w-[80%] md:w-[65%] lg:w-[520px]
          ${align === "left" ? "left-0 rounded-r-xl" : "right-0 rounded-l-xl"}
          aspect-4/3
          bg-white
          shadow-2xl
          border border-gray-200
          z-10
          overflow-hidden
        `}
            >
                {/* WINDOW HEADER */}
                <div className="h-10 bg-gray-50 border-b flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* PLAYER */}
                <div className="w-full h-full">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

/* ----------------------------------
   Feature Step Layout
----------------------------------- */
interface FeatureStepProps {
    step: string;
    title: string;
    description: string;
    children: React.ReactNode;
    align: "left" | "right";
    isLast: boolean;
}

const FeatureStep = ({
    step,
    title,
    description,
    children,
    align,
    isLast,
}: FeatureStepProps) => {
    return (
        <div className="relative">

            {/* STEP DOT */}
            <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#F26522] border-4 border-white shadow-md" />
            </div>

            {/* HORIZONTAL CONNECTOR */}
            <div
                className={`hidden md:block absolute top-8 h-px bg-gray-200 ${align === "left"
                    ? "left-[calc(50%+8px)] w-[calc(50%-8px-3rem)]"
                    : "right-[calc(50%+8px)] w-[calc(50%-8px-3rem)]"
                    }`}
            />

            <div
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${align === "right" ? "md:flex-row-reverse" : ""
                    }`}
            >
                {/* TEXT */}
                <div className="flex-1 space-y-4">
                    <div className={`flex ${align === "left" ? "justify-end" : "justify-start"} gap-3 mb-2`}>
                        <div className="w-8 h-8 bg-[#F26522] rounded-sm flex items-center justify-center shadow-sm">
                            <span className="text-white text-sm font-bold">{step}</span>
                        </div>
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                            Step {step}
                        </span>
                    </div>

                    <h3 className={` ${align === "left" ? "text-right" : "text-left"} font-serif text-3xl md:text-4xl text-gray-900 leading-tight`}>
                        {title}
                    </h3>

                    <p className={`text-lg text-gray-600 leading-relaxed max-w-md ${align === "left" ? "text-right ml-auto" : "text-left mr-auto"}`}>
                        {description}
                    </p>
                </div>

                {/* VISUAL */}
                <div className="flex-1 w-full aspect-4/3 md:aspect-3/2 relative">
                    <div className="w-full h-full rounded-xl">
                        {children}
                    </div>
                </div>
            </div>

            {/* VERTICAL CONNECTOR */}
            {!isLast && (
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 h-32 w-px">
                    <div className="w-full h-full bg-linear-to-b from-gray-200 via-gray-100 to-transparent" />
                </div>
            )}
        </div>
    );
};

/* ----------------------------------
   Features Section
----------------------------------- */
const Features = () => {
    return (
        <section className="py-24 relative bg-white">
            <div className="max-w-7xl mx-auto px-6 space-y-32 relative">

                {/* SECTION HEADER */}
                <div className="text-center mb-20 relative">
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -translate-y-1/2" />
                    <h2 className="font-serif text-4xl md:text-5xl bg-white px-8 relative inline-block">
                        How it <span className="italic">Works</span>
                    </h2>
                </div>

                {/* STEP 1 */}
                <FeatureStep
                    step="01"
                    title="Find User Questions"
                    description="We find the exact questions your users ask across the AI ecosystem."
                    align="left"
                    isLast={false}
                >
                    <ScenicFeatureFrame
                        backgroundImage="/Background_Images/dk_style.png"
                        align="left"
                    >
                        <ScrollAwarePlayer
                            component={Step1Animation}
                            durationInFrames={ANIMATION_CONFIG.durationInFrames}
                            compositionWidth={ANIMATION_CONFIG.width}
                            compositionHeight={ANIMATION_CONFIG.height}
                            fps={ANIMATION_CONFIG.fps}
                            loop={false}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </ScenicFeatureFrame>
                </FeatureStep>

                {/* STEP 2 */}
                <FeatureStep
                    step="02"
                    title="Create the Content"
                    description="We develop content optimized for AI to establish you as the leading source referenced by AI."
                    align="right"
                    isLast={false}
                >
                    <ScenicFeatureFrame
                        backgroundImage="/Background_Images/hampi_styled.png"
                        align="right"
                    >
                        <ScrollAwarePlayer
                            component={Step2Animation}
                            durationInFrames={150}
                            compositionWidth={ANIMATION_CONFIG.width}
                            compositionHeight={ANIMATION_CONFIG.height}
                            fps={ANIMATION_CONFIG.fps}
                            loop={false}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </ScenicFeatureFrame>
                </FeatureStep>

                {/* STEP 3 */}
                <FeatureStep
                    step="03"
                    title="Building Brand Authority"
                    description="We position your brand as a verified authority, ensuring AI models trust and prioritize your content."
                    align="left"
                    isLast={false}
                >
                    <ScenicFeatureFrame
                        backgroundImage="/Background_Images/minar_styled.jpeg"
                        align="left"
                    >
                        <ScrollAwarePlayer
                            component={StepAuthorityAnimation}
                            durationInFrames={ANIMATION_CONFIG.durationInFrames}
                            compositionWidth={ANIMATION_CONFIG.width}
                            compositionHeight={ANIMATION_CONFIG.height}
                            fps={ANIMATION_CONFIG.fps}
                            loop={false}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </ScenicFeatureFrame>
                </FeatureStep>

                {/* STEP 4 */}
                <FeatureStep
                    step="04"
                    title="Increase AI Traffic"
                    description="We measure incoming traffic from AI bots and optimize continuously to drive sustained growth."
                    align="right"
                    isLast={false}
                >
                    <ScenicFeatureFrame
                        backgroundImage="/Background_Images/India_gate_styled.png"
                        align="right"
                    >
                        <ScrollAwarePlayer
                            component={Step3Animation}
                            durationInFrames={ANIMATION_CONFIG.durationInFrames}
                            compositionWidth={ANIMATION_CONFIG.width}
                            compositionHeight={ANIMATION_CONFIG.height}
                            fps={ANIMATION_CONFIG.fps}
                            loop={false}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </ScenicFeatureFrame>
                </FeatureStep>

                {/* STEP 5 */}
                <FeatureStep
                    step="05"
                    title="Increase AI Mentions"
                    description="We show how your product is increasingly mentioned by AI over time."
                    align="left"
                    isLast={true}
                >
                    <ScenicFeatureFrame
                        backgroundImage="/Background_Images/minakshi_temple_styled.png"
                        align="left"
                    >
                        <ScrollAwarePlayer
                            component={Step4Animation}
                            durationInFrames={ANIMATION_CONFIG.durationInFrames}
                            compositionWidth={ANIMATION_CONFIG.width}
                            compositionHeight={ANIMATION_CONFIG.height}
                            fps={ANIMATION_CONFIG.fps}
                            loop={false}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </ScenicFeatureFrame>
                </FeatureStep>

            </div>
        </section>
    );
};

export default Features;
