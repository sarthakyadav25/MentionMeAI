"use client";

import {
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
    AbsoluteFill,
} from "remotion";
import { TrendingUp } from "lucide-react";

// Animated percentage counter
const PercentageCounter = ({
    endValue,
    startFrame,
    decimals = 1,
}: {
    endValue: number;
    startFrame: number;
    decimals?: number;
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const progress = spring({
        frame: frame - startFrame,
        fps,
        config: { damping: 25, stiffness: 40 },
    });

    const currentValue = interpolate(progress, [0, 1], [0, endValue]);

    return <span>{currentValue.toFixed(decimals)}%</span>;
};

// Growth indicator with bounce
const GrowthIndicator = ({ value, delay }: { value: string; delay: number }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = spring({
        frame: frame - delay,
        fps,
        config: { damping: 8, stiffness: 150 }, // Bouncy
    });

    const scale = interpolate(entrance, [0, 1], [0.5, 1], {
        extrapolateRight: "clamp",
    });
    const opacity = interpolate(entrance, [0, 1], [0, 1], {
        extrapolateRight: "clamp",
    });

    return (
        <div
            style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#16a34a",
                opacity,
                transform: `scale(${scale})`,
            }}
        >
            {value}
        </div>
    );
};

// Pulsing background effect
const PulsingBackground = () => {
    const frame = useCurrentFrame();

    const pulse = Math.sin(frame * 0.03) * 0.5 + 0.5;
    const opacity = interpolate(pulse, [0, 1], [0.03, 0.08]);

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 50% 50%, rgba(34, 197, 94, ${opacity}) 0%, transparent 70%)`,
            }}
        />
    );
};

// Main Step 4 Animation
export const Step4Animation = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Container entrance
    const containerEntrance = spring({
        frame,
        fps,
        config: { damping: 200 },
    });

    const containerOpacity = interpolate(containerEntrance, [0, 1], [0, 1]);
    const containerScale = interpolate(containerEntrance, [0, 1], [0.95, 1]);

    // Card entrance
    const cardEntrance = spring({
        frame: frame - 20,
        fps,
        config: { damping: 15, stiffness: 100 },
    });

    const cardTranslateY = interpolate(cardEntrance, [0, 1], [30, 0]);
    const cardOpacity = interpolate(cardEntrance, [0, 1], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Icon entrance with bounce
    const iconEntrance = spring({
        frame: frame - 30,
        fps,
        config: { damping: 10, stiffness: 200 },
    });

    const iconScale = interpolate(iconEntrance, [0, 1], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Gradient overlay animation
    const gradientOpacity = interpolate(frame, [0, 30], [0, 0.9], {
        extrapolateRight: "clamp",
    });

    // Background image scale
    const bgScale = interpolate(frame, [0, 120], [1, 1.05], {
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                    border: "1px solid #e5e7eb",
                    overflow: "hidden",
                    height: "100%",
                    position: "relative",
                    opacity: containerOpacity,
                    transform: `scale(${containerScale})`,
                }}
            >
                {/* Background with pulsing effect */}
                <PulsingBackground />

                {/* Abstract background visualization */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.15,
                        transform: `scale(${bgScale})`,
                        background: `
              linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)
            `,
                    }}
                >
                    {/* Grid pattern */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            opacity: 0.3,
                        }}
                    />
                </div>

                {/* Gradient overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, white 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                        opacity: gradientOpacity,
                    }}
                />

                {/* Bottom card */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "24px",
                        left: "24px",
                        right: "24px",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "12px",
                        padding: "16px 20px",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                        border: "1px solid #f0f0f0",
                        opacity: cardOpacity,
                        transform: `translateY(${cardTranslateY}px)`,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            {/* Icon */}
                            <div
                                style={{
                                    padding: "10px",
                                    backgroundColor: "#dcfce7",
                                    color: "#16a34a",
                                    borderRadius: "8px",
                                    transform: `scale(${iconScale})`,
                                }}
                            >
                                <TrendingUp size={22} />
                            </div>

                            {/* Stats */}
                            <div>
                                <div
                                    style={{
                                        fontSize: "11px",
                                        color: "#6b7280",
                                        textTransform: "uppercase",
                                        fontWeight: 600,
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    Share of Voice
                                </div>
                                <div
                                    style={{
                                        fontSize: "28px",
                                        fontWeight: 700,
                                        color: "#111827",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    <PercentageCounter endValue={59.8} startFrame={35} />
                                </div>
                            </div>
                        </div>

                        {/* Growth */}
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "11px", color: "#9ca3af" }}>
                                vs last month
                            </div>
                            <GrowthIndicator value="+12.4%" delay={50} />
                        </div>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};

export default Step4Animation;
