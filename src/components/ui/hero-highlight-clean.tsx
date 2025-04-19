"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[30rem] w-full items-center justify-center bg-white dark:bg-black",
        containerClassName,
      )}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}; 