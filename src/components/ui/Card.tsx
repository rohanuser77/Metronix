import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "cream" | "parchment";
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ variant = "cream", className, children, ...props }) => {
  return (
    <div
      className={cn(
        variant === "cream" ? "card" : "card-parchment",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
