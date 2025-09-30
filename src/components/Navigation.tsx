'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-white.png";
import Image from "next/image";

const navigationItems = [
  { label: "Home", href: "#hero" },
  { label: "Details", href: "#details" },
  { label: "Features", href: "#features" },
  { label: "Amenities", href: "#amenities" },
  { label: "Video", href: "#video" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const onTop = !scrolled && !isOpen; // hero behind nav

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        className={[
          "border-b transition-colors duration-300",
          onTop
            ? "bg-white/15 backdrop-blur-md border-transparent shadow-none"
            : "bg-white/80 backdrop-blur-xl border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#hero" className="flex-shrink-0 inline-flex items-center gap-2">
              <Image
                src={logo}
                alt="Elite Property Brokerage"
                className="h-14 w-auto md:h-16 transition-transform duration-200 hover:scale-[1.03] drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline gap-7">
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className={[
                        "relative px-1 py-2 text-[15px] font-semibold tracking-wide transition-colors",
                        onTop
                          ? isActive
                            ? "text-white"
                            : "text-white/90 hover:text-white"
                          : isActive
                            ? "text-gray-900"
                            : "text-gray-800 hover:text-gray-900",
                      ].join(" ")}
                    >
                      <span className="relative">
                        {item.label}
                        <span
                          className={[
                            "absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-300",
                            isActive ? "w-full" : "w-0 group-hover:w-full",
                            onTop ? "bg-white" : "bg-primary",
                          ].join(" ")}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className={onTop ? "text-white" : "text-gray-800"}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-7 w-7 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                ) : (
                  <Menu className="h-7 w-7 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (solid for readability) */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
            <div className="px-3 py-2 space-y-1">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 py-2 text-[15px] font-semibold rounded-lg transition ${
                      isActive
                        ? "text-gray-900 bg-primary/10"
                        : "text-gray-800 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </nav>
  );
};
