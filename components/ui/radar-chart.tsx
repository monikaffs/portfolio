"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";

interface RadarAxis {
  label: string;
  emoji: string;
  value: number; // 0–100
}

interface RadarChartProps {
  axes: RadarAxis[];
  size?: number;
}

function polarToCartesian(cx: number, cy: number, r: number, angleRad: number) {
  return {
    x: cx + r * Math.sin(angleRad),
    y: cy - r * Math.cos(angleRad),
  };
}

function buildPolygonPoints(axes: RadarAxis[], cx: number, cy: number, maxR: number, scale = 1) {
  const n = axes.length;
  return axes
    .map((axis, i) => {
      const angle = (2 * Math.PI * i) / n;
      const r = (axis.value / 100) * maxR * scale;
      const pt = polarToCartesian(cx, cy, r, angle);
      return `${pt.x},${pt.y}`;
    })
    .join(" ");
}

export function RadarChart({ axes, size = 320 }: RadarChartProps) {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeInView = mounted && inView;

  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.38;
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];
  const n = axes.length;

  // Build concentric grid rings
  const ringPaths = levels.map((scale) => {
    const pts = Array.from({ length: n }, (_, i) => {
      const angle = (2 * Math.PI * i) / n;
      const r = maxR * scale;
      const pt = polarToCartesian(cx, cy, r, angle);
      return `${pt.x},${pt.y}`;
    }).join(" ");
    return pts;
  });

  // Axis lines from center
  const axisLines = Array.from({ length: n }, (_, i) => {
    const angle = (2 * Math.PI * i) / n;
    const outer = polarToCartesian(cx, cy, maxR, angle);
    return { x2: outer.x, y2: outer.y };
  });

  // Label positions (slightly beyond the outermost ring)
  const labelRadius = maxR + 28;
  const labels = axes.map((axis, i) => {
    const angle = (2 * Math.PI * i) / n;
    const pt = polarToCartesian(cx, cy, labelRadius, angle);
    return { ...pt, label: axis.label, emoji: axis.emoji, index: i };
  });

  // Animated filled polygon
  const animatedPolygon = activeInView
    ? buildPolygonPoints(axes, cx, cy, maxR, 1)
    : buildPolygonPoints(axes, cx, cy, maxR, 0);

  // Hover dot positions
  const dots = axes.map((axis, i) => {
    const angle = (2 * Math.PI * i) / n;
    const r = (axis.value / 100) * maxR;
    return polarToCartesian(cx, cy, r, angle);
  });

  return (
    <div className="flex flex-col items-center">
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
        aria-label="Skills radar chart"
      >
        {/* Grid rings */}
        {ringPaths.map((pts, ri) => (
          <polygon
            key={ri}
            points={pts}
            fill="none"
            stroke="currentColor"
            strokeWidth={ri === levels.length - 1 ? 1 : 0.5}
            className="text-border opacity-60"
          />
        ))}

        {/* Axis lines */}
        {axisLines.map((line, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth={0.5}
            className="text-border opacity-40"
          />
        ))}

        {/* Filled data polygon */}
        <motion.polygon
          points={animatedPolygon}
          fill="url(#radarGradient)"
          stroke="url(#radarStroke)"
          strokeWidth={2}
          fillOpacity={0.35}
          initial={{ opacity: 0, scale: 0 }}
          animate={activeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Gradient defs */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--sage)" />
            <stop offset="100%" stopColor="var(--blue)" />
          </linearGradient>
          <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--sage)" />
            <stop offset="100%" stopColor="var(--blue)" />
          </linearGradient>
        </defs>

        {/* Hover dots on data points */}
        {dots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={hoveredIndex === i ? 7 : 4.5}
            fill={hoveredIndex === i ? "var(--sage)" : "white"}
            stroke="var(--sage)"
            strokeWidth={2}
            className="cursor-pointer drop-shadow-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={activeInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}

        {/* Axis labels */}
        {labels.map((lbl) => {
          const isHovered = hoveredIndex === lbl.index;
          return (
            <g key={lbl.index}>
              <text
                x={lbl.x}
                y={lbl.y - 8}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={isHovered ? 16 : 13}
                className="transition-all duration-200 select-none"
                style={{ transition: "font-size 0.2s" }}
              >
                {lbl.emoji}
              </text>
              <text
                x={lbl.x}
                y={lbl.y + 10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={10}
                fontWeight={isHovered ? "700" : "500"}
                fill={isHovered ? "var(--sage)" : "var(--muted)"}
                className="transition-all duration-200 select-none"
              >
                {lbl.label}
              </text>
              {isHovered && (
                <text
                  x={lbl.x}
                  y={lbl.y + 23}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={9}
                  fontWeight="700"
                  fill="var(--sage)"
                  className="select-none"
                >
                  {axes[lbl.index].value}%
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <p className="text-[11px] text-muted text-center mt-2">
        Hover dots to see proficiency %
      </p>
    </div>
  );
}
