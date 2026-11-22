import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label className="text-body-sm font-semibold text-charcoal font-hindi">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-btn border-2 border-charcoal bg-cream text-charcoal placeholder:text-stone text-body-md focus:outline-none focus:border-saffron shadow-hard-sm transition-shadow",
            error && "border-rose",
            className
          )}
          {...props}
        />
        {error && <span className="text-caption text-rose font-hindi">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
