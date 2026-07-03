import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

type ButtonVariant =
  | "primary"
  | "outline"
  | "secondary"
  | "ghost"
  | "success"
  | "error"
  | "neon-cyan"
  | "neon-magenta"
  | "neon-green";

type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-electric-blue text-electric-blue hover:text-white bg-transparent hover:bg-electric-blue/20 hover:shadow-primary-glow focus-visible:ring-electric-blue/30",
  outline:
    "border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] focus-visible:ring-neon-cyan/30",
  secondary:
    "border border-neutral-400 bg-[#1a0933]/40 text-neutral-200 hover:bg-[#1a0933]/60 hover:border-neutral-300 focus-visible:ring-neutral-400/40",
  ghost:
    "border-transparent text-neon-cyan hover:text-neon-magenta hover:bg-neon-cyan/5 focus-visible:ring-neon-cyan/30",
  success:
    "border border-neon-green text-neon-green hover:bg-neon-green/20 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] focus-visible:ring-neon-green/30",
  error:
    "border border-neon-magenta text-neon-magenta hover:bg-neon-magenta/20 hover:shadow-[0_0_20px_rgba(255,0,110,0.4)] focus-visible:ring-neon-magenta/30",
  "neon-cyan":
    "border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] focus-visible:ring-neon-cyan/30",
  "neon-magenta":
    "border border-neon-magenta text-neon-magenta hover:bg-neon-magenta/20 hover:shadow-[0_0_20px_rgba(255,16,240,0.4)] focus-visible:ring-neon-magenta/30",
  "neon-green":
    "border border-neon-green text-neon-green hover:bg-neon-green/20 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] focus-visible:ring-neon-green/30",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-60 uppercase tracking-wider ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, onClick } = props;
    return (
      <motion.a
        href={href}
        onClick={onClick as never}
        className={baseClasses}
        whileHover={{ scale: 1.00 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  const { onClick } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.00 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
