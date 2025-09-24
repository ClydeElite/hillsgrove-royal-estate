import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export const FloatingButtons = () => {
  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "+971501234567"; // Agent's WhatsApp number
    const message = encodeURIComponent("Hi, I'm interested in the 7-bedroom villa at Hills Grove (Ref: EPS-S-7574). Can you provide more details?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    // Replace with actual phone number
    window.location.href = "tel:+971501234567";
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0 animate-pulse"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Call Button */}
      <Button
        onClick={handleCall}
        size="lg" 
        className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        aria-label="Call agent"
      >
        <Phone className="w-6 h-6" />
      </Button>

      {/* Tooltip for mobile users */}
      <div className="absolute right-16 bottom-8 bg-black/80 text-white text-xs px-3 py-2 rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 hover:opacity-100 whitespace-nowrap">
        Tap to contact Ola directly
      </div>
    </div>
  );
};