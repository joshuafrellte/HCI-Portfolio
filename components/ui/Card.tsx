import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({
  children,
  className = "",
  interactive = false,
}: CardProps) {
  return (
    <div
      className={`border border-solid border-neutral-400 bg-white shadow-archivum-sm ${
        interactive
          ? "transition-all duration-200 hover:shadow-archivum-lg"
          : ""
      } rounded-sm ${className}`}
    >
      {children}
    </div>
  );
}
