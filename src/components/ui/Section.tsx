import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: "cream" | "parchment" | "charcoal" | "saffron";
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  bg = "cream",
  className,
  containerClassName,
  ...props
}) => {
  const bgStyles = {
    cream: "bg-cream text-ink",
    parchment: "bg-parchment text-ink",
    charcoal: "bg-charcoal text-cream",
    saffron: "bg-saffron text-white",
  };

  return (
    <section className={cn("section-wrapper py-section", bgStyles[bg], className)} {...props}>
      <div className={cn("content-container", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
