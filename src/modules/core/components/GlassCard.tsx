import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-lg
        bg-white/5 backdrop-blur-xl
        border border-white/10
        ${hover ? "hover:border-metallic-mid/30 hover:bg-white/10" : ""}
        transition-all duration-500
        ${className}
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-metallic-light/5 via-transparent to-metallic-dark/5 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
