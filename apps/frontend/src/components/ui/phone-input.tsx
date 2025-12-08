"use client";

import * as React from "react";
import flags from "react-phone-number-input/flags";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input"; 

type PhoneInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const PhoneInput = React.forwardRef<any, PhoneInputProps>(
    
  ({ value, onChange, className, ...props }, ref) => {
    const EstoniaFlag =
      flags["EE"] as React.FC<React.SVGProps<SVGSVGElement>>;
    
    return (
      <div className="relative w-full">
        <div
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-700 text-sm",
          )}
        >
          <span className="flex h-5 w-7 overflow-hidden rounded bg-gray-200">
            <EstoniaFlag />
          </span>
          <span className="text-[12px] text-gray-500">+372</span>
        </div>

        <Input
          ref={ref}
          {...props}
          value={value || ""}
          className={cn("pl-[88px] text-[#4B5563] text-[14px]", className)} 
          inputMode="tel"
          onChange={(e) => {
            let onlyNumbers = e.target.value.replace(/\D/g, "");
            if(onlyNumbers.length > 10){
                onlyNumbers = onlyNumbers.slice(0,10);
            }
            onChange?.(onlyNumbers);
          }}
          onKeyDown={(e) => {
            const isNumber = /^[0-9]$/.test(e.key);
            const isControl = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key);
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "v") {
                return;
            }
            if (!isNumber && !isControl){
                e.preventDefault();
                return;
            }
            if (
                isNumber && (value?.length || 0) >= 10 ) {
                    e.preventDefault();
            }
        }}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
