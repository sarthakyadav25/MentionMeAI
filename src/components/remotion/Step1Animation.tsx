"use client";

import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  AbsoluteFill,
} from "remotion";
import { Search, Plus } from "lucide-react";

// Question card data
const questions = [
  { text: "How do startups manage cash runway?", hasTag: false },
  { text: "Best business banking for startups?", hasTag: true, tag: "High Vol" },
  { text: "Single platform for startup banking?", hasTag: false },
];

// Individual question card component
const QuestionCard = ({
  text,
  hasTag,
  tag,
  index,
}: {
  text: string;
  hasTag: boolean;
  tag?: string;
  index: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring animation for entrance
  const entrance = spring({
    frame: frame - index * 12,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const translateY = interpolate(entrance, [0, 1], [30, 0]);
  const opacity = interpolate(entrance, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(entrance, [0, 1], [0.9, 1], {
    extrapolateRight: "clamp",
  });

  // Subtle hover pulse effect
  const pulsePhase = Math.sin((frame + index * 10) * 0.05) * 0.5 + 0.5;
  const shadowOpacity = interpolate(pulsePhase, [0, 1], [0.05, 0.15]);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "12px 16px",
        borderRadius: "10px",
        boxShadow: `0 4px 12px rgba(0, 0, 0, ${shadowOpacity})`,
        border: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        marginLeft: index === 1 ? "32px" : "0px",
      }}
    >
      <Plus size={16} color="#9ca3af" />
      <span style={{ fontSize: "13px", color: "#4b5563", flex: 1 }}>{text}</span>
      {hasTag && (
        <span
          style={{
            backgroundColor: "#f3f4f6",
            fontSize: "10px",
            padding: "3px 8px",
            borderRadius: "9999px",
            color: "#6b7280",
          }}
        >
          {tag}
        </span>
      )}
    </div>
  );
};

// Main Step 1 Animation
export const Step1Animation = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Search icon animation
  const iconEntrance = spring({
    frame,
    fps,
    config: { damping: 200 },
    delay: 5,
  });
  const iconOpacity = interpolate(iconEntrance, [0, 1], [0, 0.2]);
  const iconScale = interpolate(iconEntrance, [0, 1], [0.8, 1]);

  // Background pattern fade
  const patternOpacity = interpolate(frame, [0, 20], [0, 0.5], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "12px",
        border: "1px solid #f0f0f0",
        overflow: "hidden",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          opacity: patternOpacity,
        }}
      />

      {/* Search Icon */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          opacity: iconOpacity,
          transform: `scale(${iconScale})`,
          color: "#d1d5db",
        }}
      >
        <Search size={40} strokeWidth={1} />
      </div>

      {/* Question Cards Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "320px",
          margin: "auto",
        }}
      >
        {questions.map((q, i) => (
          <Sequence key={i} from={i * 12} layout="none">
            <QuestionCard
              text={q.text}
              hasTag={q.hasTag}
              tag={q.tag}
              index={i}
            />
          </Sequence>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// Default export for direct use
export default Step1Animation;
