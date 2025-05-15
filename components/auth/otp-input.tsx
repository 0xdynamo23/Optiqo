"use client";

import * as React from "react";
import { OTPInput, SlotProps } from "input-otp";
import { cn } from "@/lib/utils";

interface OtpInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

export function OtpInput({ length = 6, onComplete }: OtpInputProps) {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  return (
    <OTPInput
      value={value}
      onChange={setValue}
      maxLength={length}
      containerClassName="group flex items-center justify-between gap-2"
      render={({ slots }) => (
        <>
          {slots.map((slot, index) => (
            <Slot key={index} {...slot} />
          ))}
        </>
      )}
    />
  );
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative flex h-12 w-full items-center justify-center rounded-md border border-input text-base transition-all",
        "group-hover:border-primary/20 group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-offset-2",
        props.isActive && "z-10 border-primary ring-2 ring-primary ring-offset-2",
        !props.isActive && props.char && "border-primary/40",
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

function FakeCaret() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="h-6 w-px animate-caret-blink bg-primary duration-1000" />
    </div>
  );
}