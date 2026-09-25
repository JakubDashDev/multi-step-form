"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      icons={{
        success: (
          <span className="flex size-4 items-center justify-center rounded-full bg-success text-white">
            <CheckIcon className="size-3" />
          </span>
        ),
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--color-popover)",
          "--normal-text": "var(--color-popover-foreground)",
          "--normal-border": "var(--color-border)",
          "--border-radius": "var(--radius-lg)",
          "--width": "336px",
        } as React.CSSProperties
      }
      offset={{ right: 18, bottom: 17 }}
      toastOptions={{
        classNames: {
          toast: "cn-toast",
          icon: "m-0!",
          title: "leading-[18px]!",
        },
        style: { fontSize: "14px", lineHeight: "18px", gap: "12px" },
      }}
      {...props}
    />
  );
};

export { Toaster };
