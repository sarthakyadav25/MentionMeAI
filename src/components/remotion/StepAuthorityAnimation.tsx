"use client";

import {
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
    Sequence,
    AbsoluteFill,
} from "remotion";
import { Shield, CheckCircle, TrendingUp, Award } from "lucide-react";

// Data for authority signals
const authoritySignals = [
    { text: "Domain Authority Rising", icon: TrendingUp, color: "#3b82f6" }, // Blue
    { text: "Trusted AI Source", icon: Shield, color: "#10b981" }, // Green
    { text: "Verified Expert", icon: CheckCircle, color: "#f59e0b" }, // Amber
    { text: "Industry Leader", icon: Award, color: "#8b5cf6" }, // Purple
];

const SignalCard = ({
    text,
    Icon,
    color,
    index,
}: {
    text: string;
    Icon: any;
    color: string;
    index: number;
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Staggered entrance
    const entrance = spring({
        frame: frame - index * 10,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const translateX = interpolate(entrance, [0, 1], [-50, 0]);
    const opacity = interpolate(entrance, [0, 1], [0, 1], {
        extrapolateRight: "clamp",
    });

    return (
        <div
            style={{
                backgroundColor: "white",
                padding: "8px 12px",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f3f4f6",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                opacity,
                transform: `translateX(${translateX}px)`,
                marginBottom: "6px",
                width: "100%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    borderRadius: "6px",
                    backgroundColor: `${color}15`,
                    color: color,
                }}
            >
                <Icon size={16} />
            </div>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#374151" }}>
                {text}
            </span>
        </div>
    );
};

export const StepAuthorityAnimation = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Background Pattern Opacity
    const patternOpacity = interpolate(frame, [0, 20], [0, 0.5], {
        extrapolateRight: "clamp",
    });

    // Central Badge Animation
    const badgeEntrance = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 80 }
    });

    const badgeScale = interpolate(badgeEntrance, [0, 1], [0.5, 1]);
    const badgeOpacity = interpolate(badgeEntrance, [0, 1], [0, 1]);

    return (
        <AbsoluteFill
            style={{
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #f0f0f0",
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                overflow: "hidden"
            }}
        >
            {/* Background Pattern */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "radial-gradient(#e5e7eb 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    opacity: patternOpacity,
                }}
            />

            {/* Content Container */}
            <div style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                flexDirection: "row",
                height: "100%",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center"
            }}>

                {/* Left side: List of signals */}
                <div style={{ flex: 1, maxWidth: "220px" }}>
                    {authoritySignals.map((signal, i) => (
                        <Sequence key={i} from={10 + i * 8} layout="none">
                            <SignalCard
                                text={signal.text}
                                Icon={signal.icon}
                                color={signal.color}
                                index={i}
                            />
                        </Sequence>
                    ))}
                </div>

                {/* Right side: Central Authority Seal */}
                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: badgeOpacity,
                    transform: `scale(${badgeScale})`
                }}>
                    <div style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        border: "4px solid #F26522",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 30px rgba(242, 101, 34, 0.2)",
                        position: "relative"
                    }}>
                        <Shield size={48} color="#F26522" fill="#F26522" fillOpacity={0.1} />
                        <div style={{
                            position: "absolute",
                            bottom: "-10px",
                            backgroundColor: "#F26522",
                            color: "white",
                            fontSize: "10px",
                            fontWeight: "bold",
                            padding: "4px 8px",
                            borderRadius: "10px",
                            textTransform: "uppercase"
                        }}>
                            Authority
                        </div>
                    </div>
                </div>

            </div>
        </AbsoluteFill>
    );
};

export default StepAuthorityAnimation;
