"use client";

import {
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
    AbsoluteFill,
} from "remotion";

// Generate chart data
const generateChartData = () => {
    return Array.from({ length: 20 }, (_, i) => ({
        val1: Math.floor(Math.sin(i * 0.5) * 15 + 25),
        val2: Math.floor(Math.cos(i * 0.3) * 15 + 25),
        val3: Math.floor(Math.sin(i * 0.4 + 1) * 10 + 15),
    }));
};

const chartData = generateChartData();

// Animated bar component
const AnimatedBar = ({
    values,
    index,
    maxHeight,
    barWidth,
}: {
    values: { val1: number; val2: number; val3: number };
    index: number;
    maxHeight: number;
    barWidth: number;
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Staggered entrance for each bar
    const barEntrance = spring({
        frame: frame - index * 2,
        fps,
        config: { damping: 15, stiffness: 80 },
    });

    const total = values.val1 + values.val2 + values.val3;
    const scale = (maxHeight / 100) * barEntrance;

    const height1 = values.val1 * scale;
    const height2 = values.val2 * scale;
    const height3 = values.val3 * scale;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column-reverse",
                width: `${barWidth}px`,
                height: `${maxHeight}px`,
                alignItems: "center",
            }}
        >
            {/* Val1 - Blue (Perplexity) */}
            <div
                style={{
                    width: "100%",
                    height: `${height1}px`,
                    backgroundColor: "#3b82f6",
                }}
            />
            {/* Val2 - Purple (Claude) */}
            <div
                style={{
                    width: "100%",
                    height: `${height2}px`,
                    backgroundColor: "#a855f7",
                }}
            />
            {/* Val3 - Pink (ChatGPT) */}
            <div
                style={{
                    width: "100%",
                    height: `${height3}px`,
                    backgroundColor: "#ec4899",
                    borderRadius: "4px 4px 0 0",
                }}
            />
        </div>
    );
};

// Legend item with animation
const LegendItem = ({
    color,
    label,
    delay,
}: {
    color: string;
    label: string;
    delay: number;
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = spring({
        frame: frame - delay,
        fps,
        config: { damping: 20, stiffness: 150 },
    });

    const opacity = interpolate(entrance, [0, 1], [0, 1], {
        extrapolateRight: "clamp",
    });
    const translateY = interpolate(entrance, [0, 1], [10, 0]);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                opacity,
                transform: `translateY(${translateY}px)`,
            }}
        >
            <div
                style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: color,
                }}
            />
            <span style={{ fontSize: "10px", color: "#6b7280" }}>{label}</span>
        </div>
    );
};

// Counter animation
const AnimatedCounter = ({
    endValue,
    suffix,
    startFrame,
}: {
    endValue: number;
    suffix: string;
    startFrame: number;
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const progress = spring({
        frame: frame - startFrame,
        fps,
        config: { damping: 30, stiffness: 50 },
    });

    const currentValue = Math.floor(interpolate(progress, [0, 1], [0, endValue]));

    return (
        <span>
            {currentValue}
            {suffix}
        </span>
    );
};

// Main Step 3 Animation
export const Step3Animation = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Container entrance
    const containerEntrance = spring({
        frame,
        fps,
        config: { damping: 200 },
    });

    const containerOpacity = interpolate(containerEntrance, [0, 1], [0, 1]);
    const containerScale = interpolate(containerEntrance, [0, 1], [0.97, 1]);

    // Header entrance
    const headerEntrance = spring({
        frame: frame - 5,
        fps,
        config: { damping: 20, stiffness: 150 },
    });

    const headerOpacity = interpolate(headerEntrance, [0, 1], [0, 1], {
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
                    padding: "24px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                    border: "1px solid #f0f0f0",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    opacity: containerOpacity,
                    transform: `scale(${containerScale})`,
                }}
            >
                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "24px",
                        opacity: headerOpacity,
                    }}
                >
                    <div>
                        <h4
                            style={{
                                fontWeight: 500,
                                color: "#111827",
                                fontSize: "16px",
                                margin: 0,
                            }}
                        >
                            AI Traffic
                        </h4>
                        <p
                            style={{
                                fontSize: "12px",
                                color: "#6b7280",
                                margin: "4px 0 0 0",
                            }}
                        >
                            Incoming traffic on your domain
                        </p>
                    </div>
                    <span
                        style={{
                            fontSize: "13px",
                            color: "#2563eb",
                            fontWeight: 500,
                            backgroundColor: "#eff6ff",
                            padding: "6px 12px",
                            borderRadius: "6px",
                        }}
                    >
                        Total visits: <AnimatedCounter endValue={123} suffix="K" startFrame={20} />
                    </span>
                </div>

                {/* Chart */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        gap: "4px",
                        padding: "0 8px",
                    }}
                >
                    {chartData.map((values, i) => (
                        <AnimatedBar
                            key={i}
                            values={values}
                            index={i}
                            maxHeight={140}
                            barWidth={12}
                        />
                    ))}
                </div>

                {/* Legend */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "16px",
                        marginTop: "16px",
                    }}
                >
                    <LegendItem color="#3b82f6" label="Perplexity" delay={50} />
                    <LegendItem color="#a855f7" label="Claude" delay={55} />
                    <LegendItem color="#ec4899" label="ChatGPT" delay={60} />
                </div>
            </div>
        </AbsoluteFill>
    );
};

export default Step3Animation;
