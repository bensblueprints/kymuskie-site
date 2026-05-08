"use client";
import { Toaster as SonnerToaster } from "sonner";
export default function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: "bg-bone-50 border-forest-200 text-forest-900",
          title: "font-display",
        },
      }}
    />
  );
}
