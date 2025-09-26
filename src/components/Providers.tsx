'use client';

import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={100}>
      {children}
      <Toaster />
    </TooltipProvider>
  );
}
