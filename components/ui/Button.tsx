import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "outline"
  | "secondary"
  | "ghost"
  | "success"
  | "error"
  | "inverted"
  | "outlineLight";

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
    "border-2 border-transparent bg-oxford-blue text-white hover:bg-oxford-blue/90 hover:shadow-primary-glow focus-visible:ring-oxford-blue/30",
  outline:
    "border-2 border-oxford-blue text-oxford-blue hover:bg-oxford-blue hover:text-white focus-visible:ring-oxford-blue/30",
  secondary:
    "border-2 border-transparent bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus-visible:ring-neutral-400/40",
  ghost:
    "border-2 border-transparent text-oxford-blue hover:bg-neutral-100 focus-visible:ring-oxford-blue/30",
  success:
    "border-2 border-transparent bg-deep-sea-green text-white hover:bg-deep-sea-green/90 hover:shadow-success-glow focus-visible:ring-deep-sea-green/30",
  error:
    "border-2 border-transparent bg-archivum-red text-white hover:bg-archivum-red/90 hover:shadow-error-glow focus-visible:ring-archivum-red/30",
  inverted:
    "border-2 border-snow bg-snow text-oxford-blue hover:bg-neutral-100 focus-visible:ring-snow/40",
  outlineLight:
    "border-2 border-snow text-snow hover:bg-snow/10 focus-visible:ring-snow/40",
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
  const classes = `inline-flex items-center justify-center rounded-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
