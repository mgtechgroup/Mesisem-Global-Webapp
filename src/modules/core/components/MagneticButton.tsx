import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
}: MagneticButtonProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
