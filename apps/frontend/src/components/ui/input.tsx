"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full rounded-full border border-gray-300 pl-[36px] pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2563EB]",
  {
    variants: {
      variant: {
        default: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

function Input({
  className,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return <input className={cn(inputVariants({ variant, className }))} {...props} />;
}

export { Input, inputVariants };
