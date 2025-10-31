import React from "react";
import { IHeadingProps } from "@/types/heading.interface";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Heading = ({ variant = "xl", children, className }: IHeadingProps) => {
  const setVariant = () => {
    switch (variant) {
      case "2xl":
        return "text-5xl md:text-6xl lg:text-[64px]";
      case "xl":
        return "text-xl md:text-2xl lg:text-4xl";
      case "lg":
        return "text-lg md:text-xl lg:text-3xl";
      case "md":
        return "text-md md:text-lg lg:text-2xl";
      case "sm":
        return "text-sm md:text-md lg:text-xl";
      case "xs":
        return "text-xs md:text-sm lg:text-lg";
    }
  };
  return (
    <div className={cn(className, setVariant(), "font-semibold")}>
      {children}
    </div>
  );
};

export default Heading;
