"use client";

import {
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
    AbsoluteFill,
} from "remotion";
import { Sparkles } from "lucide-react";

// Typewriter text component
const TypewriterText = ({
    text,
    startFrame,
    speed = 2,
}: {
    text: string;
    startFrame: number;
    speed?: number;
}) => {
    const frame = useCurrentFrame();
    const adjustedFrame = frame - startFrame;

    if (adjustedFrame < 0) return null;

    const charIndex = Math.floor(adjustedFrame / speed);
    const displayedText = text.slice(0, charIndex + 1);

    // Cursor blink effect
    const cursorOpacity = Math.floor(frame / 15) % 2 === 0 ? 1 : 0;
    const showCursor = charIndex < text.length;

    return (
        <span>
            {displayedText}
            {showCursor && (
                <span
                    style={{
                        opacity: cursorOpacity,
                        color: "#000",
                        fontWeight: "bold",
                    }}
                >
                    |
                </span>
            )}
        </span>
    );
};

// Main Step 2 Animation
export const Step2Animation = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Window entrance animation
    const windowEntrance = spring({
        frame,
        fps,
        config: { damping: 20, stiffness: 100 },
    });

    const windowScale = interpolate(windowEntrance, [0, 1], [0.95, 1]);
    const windowOpacity = interpolate(windowEntrance, [0, 1], [0, 1]);

    // Traffic lights animation
    const trafficLightEntrance = spring({
        frame: frame - 10,
        fps,
        config: { damping: 15, stiffness: 200 },
    });

    // Generating pill animation
    const pillEntrance = spring({
        frame: frame - 60,
        fps,
        config: { damping: 12, stiffness: 150 },
    });

    const pillScale = interpolate(pillEntrance, [0, 1], [0.8, 1], {
        extrapolateRight: "clamp",
    });
    const pillOpacity = interpolate(pillEntrance, [0, 1], [0, 1], {
        extrapolateRight: "clamp",
    });

    // Sparkle rotation
    const sparkleRotation = interpolate(frame, [0, 120], [0, 360], {
        extrapolateRight: "extend",
    });

    // Content fade in
    const contentFade = interpolate(frame, [15, 35], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Divider animation
    const dividerWidth = interpolate(frame, [20, 40], [0, 48], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
        >
            {/* Browser Window */}
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                    border: "1px solid #e5e7eb",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transform: `scale(${windowScale})`,
                    opacity: windowOpacity,
                }}
            >
                {/* Browser Header */}
                <div
                    style={{
                        backgroundColor: "#f9fafb",
                        borderBottom: "1px solid #e5e7eb",
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <span
                        style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Draft Editor
                    </span>
                    <div
                        style={{
                            display: "flex",
                            gap: "6px",
                            transform: `scale(${trafficLightEntrance})`,
                        }}
                    >
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: "#f87171",
                            }}
                        />
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: "#fbbf24",
                            }}
                        />
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: "#4ade80",
                            }}
                        />
                    </div>
                </div>

                {/* Content Area */}
                <div style={{ padding: "24px", flex: 1, position: "relative" }}>
                    {/* Title with typewriter */}
                    <h4
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "18px",
                            marginBottom: "8px",
                            color: "#111827",
                        }}
                    >
                        <TypewriterText
                            text="Top 5 AI-Powered CRM Tools in 2025"
                            startFrame={10}
                            speed={2}
                        />
                    </h4>

                    {/* Divider */}
                    <div
                        style={{
                            height: "4px",
                            width: `${dividerWidth}px`,
                            backgroundColor: "#000",
                            marginBottom: "16px",
                        }}
                    />

                    {/* Intro section */}
                    <div style={{ opacity: contentFade }}>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#4b5563",
                                lineHeight: 1.6,
                                marginBottom: "16px",
                            }}
                        >
                            <span style={{ fontWeight: 700, color: "#000" }}>Intro</span>
                            <br />
                            <TypewriterText
                                text='When businesses ask AI tools like ChatGPT, Claude, or Gemini "What is the best AI CRM for small businesses?" — the answers come from a specific set of sources.'
                                startFrame={35}
                                speed={1}
                            />
                        </p>
                    </div>

                    {/* Generating pill */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "#000",
                            color: "#fff",
                            fontSize: "12px",
                            padding: "8px 14px",
                            borderRadius: "9999px",
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                            opacity: pillOpacity,
                            transform: `scale(${pillScale})`,
                        }}
                    >
                        <div style={{ transform: `rotate(${sparkleRotation}deg)` }}>
                            <Sparkles size={12} />
                        </div>
                        Generating content...
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};

export default Step2Animation;
