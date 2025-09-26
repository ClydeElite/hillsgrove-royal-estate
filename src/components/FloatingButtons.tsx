'use client';

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingButtons = () => {
  // Display/format once, reuse safely
  const phoneForTel = "+971585952205";              // keep the +
  const phoneForWA = phoneForTel.replace(/\D/g, ""); // digits only for wa.me

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in the 7-bedroom villa at Hills Grove (Ref: EPS-S-7574). Can you provide more details?"
    );
    window.open(`https://wa.me/${phoneForWA}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneForTel}`;
  };

  return (
    <div
      className="
        fixed right-4 md:right-6 z-40 flex flex-col gap-3
        bottom-6 md:bottom-auto md:top-1/2 md:translate-y-10
      "
      aria-label="Quick contact"
    >
      {/* WhatsApp */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        className="relative group"
      >
        {/* soft ping */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-green-500/30 animate-ping group-hover:opacity-0" />
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="relative rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0 hover:scale-105 focus-visible:ring-2 focus-visible:ring-green-400"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Call (new background color) */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
      >
        <Button
          onClick={handleCall}
          size="lg"
          className="rounded-full w-14 h-14 bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0 hover:scale-105 focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Call agent"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Helper label (shows on hover/focus, desktop only) */}
      <div className="hidden md:block absolute -left-2 top-1/2 -translate-y-full translate-x-[-0.5rem]">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/80 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
          Tap to contact Ola
        </div>
      </div>
    </div>
  );
};

