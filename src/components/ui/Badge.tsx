import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "saffron" | "leaf" | "sky" | "amber" | "charcoal" | "eng" | "med";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = "saffron", className, children, ...props }) => {
  const variantStyles = {
    saffron: "badge-saffron",
    leaf: "badge-leaf",
    sky: "badge bg-sky/10 text-sky border-sky/30",
    amber: "badge bg-amber/15 text-charcoal border-amber/40",
    charcoal: "badge bg-charcoal text-cream border-charcoal",
    eng: "badge bg-career-eng/10 text-career-eng border-career-eng/30",
    med: "badge bg-career-med/10 text-career-med border-career-med/30",
  };

  return (
    <span className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </span>
  );
};
