import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

// Import images
import exterior1 from "@/assets/gallery/DSC03480-HDR.jpg";
import exterior2 from "@/assets/gallery/DSC03471-HDR.jpg";
import exterior3 from "@/assets/gallery/DSC02964-HDR.jpg";
import exterior4 from "@/assets/gallery/DSC03444-HDR.jpg";
import exterior5 from "@/assets/gallery/DSC03423-HDR.jpg";
import exterior6 from "@/assets/gallery/DSC03504-HDR.jpg";
import bedroom1 from "@/assets/gallery/DSC02925-HDR.jpg";
import bedroom2 from "@/assets/gallery/DSC02949-HDR.jpg";
import bedroom3 from "@/assets/gallery/DSC03006-HDR.jpg";
import bedroom4 from "@/assets/gallery/DSC03072-HDR.jpg";
import bedroom5 from "@/assets/gallery/DSC03081-HDR.jpg";
import bedroom6 from "@/assets/gallery/DSC03207-HDR.jpg";
import bedroom7 from "@/assets/gallery/DSC03219-HDR.jpg";
import bathroom1 from "@/assets/gallery/DSC02931-HDR.jpg";
import bathroom2 from "@/assets/gallery/DSC02958-HDR.jpg";
import bathroom3 from "@/assets/gallery/DSC03015-HDR.jpg";
import bathroom4 from "@/assets/gallery/DSC03030-HDR.jpg";
import bathroom5 from "@/assets/gallery/DSC03078-HDR.jpg";
import bathroom6 from "@/assets/gallery/DSC03093-HDR.jpg";
import bathroom7 from "@/assets/gallery/DSC03216-HDR.jpg";
import outdoor1 from "@/assets/gallery/DSC02841-HDR.jpg";
import outdoor2 from "@/assets/gallery/DSC02961-HDR.jpg";
import outdoor3 from "@/assets/gallery/DSC02979-HDR.jpg";
import outdoor4 from "@/assets/gallery/DSC03120-HDR.jpg";
import outdoor5 from "@/assets/gallery/DSC03444-HDR.jpg";
import outdoor6 from "@/assets/gallery/DSC03504-HDR.jpg";
import outdoor7 from "@/assets/gallery/DSC03471-HDR.jpg";
import interior1 from "@/assets/gallery/DSC02880-HDR.jpg";
import interior2 from "@/assets/gallery/DSC02898-HDR.jpg";
import interior3 from "@/assets/gallery/DSC02904-HDR.jpg";
import interior4 from "@/assets/gallery/DSC02919-HDR.jpg";
import interior5 from "@/assets/gallery/DSC03153-HDR.jpg";
import interior6 from "@/assets/gallery/DSC03156-HDR.jpg";
import interior7 from "@/assets/gallery/DSC03180-HDR.jpg";
import interior8 from "@/assets/gallery/DSC03249-HDR.jpg";
import interior9 from "@/assets/gallery/DSC03261-HDR.jpg";
import interior10 from "@/assets/gallery/DSC03240-HDR.jpg";
import aminities1 from "@/assets/gallery/DSC03297-HDR.jpg"; // Reused
import aminities2 from "@/assets/gallery/DSC03318-HDR.jpg";
import aminities3 from "@/assets/gallery/DSC03333-HDR.jpg"; // Reused
import aminities4 from "@/assets/gallery/DSC03372-HDR.jpg"; // Reused

const galleryData = {
  exterior: [
    { src: exterior2, alt: "Resort-Style Pool & Sun Deck" },
    { src: exterior1, alt: "Rear Façade Panorama" },
    { src: exterior5, alt: "Grand Arrival Arcade" },
    { src: exterior3, alt: "Private Courtyard Entrance" },
    { src: exterior6, alt: "Arched Terrace Lounge" },
    { src: exterior4, alt: "Expansive Garden Lawn" },
  ],
  interior: [
    { src: interior1, alt: "Reception Interior" },
    { src: interior2, alt: "Family Dinning Area" },
    { src: interior3, alt: "Modern kitchen & Dinning Area" },
    { src: interior4, alt: "Tea & Conversation Nook" },
    { src: interior5, alt: "Family Sitting Area" },
    { src: interior6, alt: "Formal Reception Lounge" },
    { src: interior7, alt: "Modern Dinning Area" },
    { src: interior8, alt: "Majlis Lounge" },
    { src: interior9, alt: "TV Area" },
    { src: interior10, alt: "Sunroom Corner" },
  ],
  bedrooms: [
    { src: bedroom3, alt: "Primary Suite – Panoramic Pool & Park Views" },
    { src: bedroom6, alt: "Designer’s Suite – Feature Wall & Balcony" },
    { src: bedroom2, alt: "Canopy Suite – Dressing Room & Terrace Access" },
    { src: bedroom5, alt: "Garden-View Junior Suite – Walk-In Wardrobe" },    
    { src: bedroom1, alt: "Serenity Suite – Sky-Blue Corner Lounge" },
    { src: bedroom4, alt: "Botanical Suite – Calm Neutrals & Study Nook" },
    { src: bedroom7, alt: "Guest Suite – Cozy & Quiet Retreat" },
  ],
  bathrooms: [
    { src: bathroom1, alt: "Master bathroom" },
    { src: bathroom2, alt: "Guest bathroom" },
    { src: bathroom3, alt: "Child bathroom" },
    { src: bathroom4, alt: "Guest bathroom 2" },
    { src: bathroom5, alt: "Master bathroom 2" },
    { src: bathroom6, alt: "Guest bathroom 3" },
    { src: bathroom7, alt: "Master bathroom 3" },
  ],
  outdoor: [
    { src: outdoor1, alt: "Big Tarrace seating area" },
    { src: outdoor2, alt: "Tarrace seating area" },
    { src: outdoor3, alt: "Sunset Roof Terrace" },
    { src: outdoor4, alt: "Outdoor roof Dining area" },
    { src: outdoor5, alt: "Poolside seating area" },
    { src: outdoor6, alt: "Garden seating area" },
    { src: outdoor7, alt: "Family BBQ Pergola" },
  ],
  // NEW: Entertainment & Amenities – reusing your most relevant images
  amenities: [
    { src: aminities1, alt: "Entertainment" },
    { src: aminities2, alt: "Sports Room" },
    { src: aminities3, alt: "Fitness Room" },
    { src: aminities4, alt: "Full Parking" },
  ],
};

const categories = [
  { key: "exterior", label: "Outside Views" },
  { key: "interior", label: " Kitchen & Living Area" },
  { key: "bedrooms", label: "Bedrooms" },
  { key: "bathrooms", label: "Bathrooms" },
  { key: "outdoor", label: "Outdoor Sitting" },
  { key: "amenities", label: "Entertainment & Amenities" }, // NEW TAB
];

export const VisualGallery = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof galleryData>("exterior");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const images = galleryData[activeCategory];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const showPrev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setLightboxIndex((i) => (i + 1) % images.length);

  // Reset on category change
  useEffect(() => {
    setLightboxOpen(false);
    setLightboxIndex(0);
    document.body.style.overflow = "";
  }, [activeCategory]);

  // Keyboard support when lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, images.length]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx > 0) {
        showPrev();
      } else {
        showNext();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-orange-500 text-white mb-4">VISUAL GALLERY</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Visual <span className="text-orange-500">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of this magnificent property and experience luxury living at its finest
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === (category.key as keyof typeof galleryData) ? "default" : "outline"}
              onClick={() => setActiveCategory(category.key as keyof typeof galleryData)}
              className={
                activeCategory === (category.key as keyof typeof galleryData)
                  ? "bg-primary text-white"
                  : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Grid: 3 per row (bigger tiles) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {images.map((image, idx) => (
            <button
              key={`${activeCategory}-${idx}`}
              onClick={() => openLightbox(idx)}
              className="group block text-left focus:outline-none"
              aria-label={`Open ${image.alt}`}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-xl">
                <div className="relative">
                  {/* Bigger, consistent tiles */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-[4/3] md:aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {/* Hover hint */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="pointer-events-none absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-2 text-white text-xs font-medium bg-black/50 backdrop-blur px-2.5 py-1.5 rounded-full">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Click to view
                    </span>
                  </div>
                </div>
                {/* Caption */}
                <figcaption className="px-3 py-3 text-sm text-gray-700">
                  {image.alt}
                </figcaption>
              </Card>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-[92vw] max-h-[82vh]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-[92vw] max-h-[82vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-sm text-center">
              {lightboxIndex + 1} / {images.length} — {images[lightboxIndex].alt}
            </div>
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};
