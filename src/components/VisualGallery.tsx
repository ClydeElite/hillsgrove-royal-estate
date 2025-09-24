import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import exterior1 from "@/assets/gallery/exterior-1.jpg";
import exterior2 from "@/assets/gallery/exterior-2.jpg";
import bedroom1 from "@/assets/gallery/bedroom-1.jpg";
import bedroom2 from "@/assets/gallery/bedroom-2.jpg";
import bathroom1 from "@/assets/gallery/bathroom-1.jpg";
import bathroom2 from "@/assets/gallery/bathroom-2.jpg";
import outdoor1 from "@/assets/gallery/outdoor-1.jpg";
import outdoor2 from "@/assets/gallery/outdoor-2.jpg";
import interior1 from "@/assets/gallery/interior-1.jpg";
import interior2 from "@/assets/gallery/interior-2.jpg";

const galleryData = {
  exterior: [
    { src: exterior1, alt: "Villa exterior view 1" },
    { src: exterior2, alt: "Villa front entrance" },
  ],
  interior: [
    { src: interior1, alt: "Living room interior" },
    { src: interior2, alt: "Modern kitchen" },
  ],
  bedrooms: [
    { src: bedroom1, alt: "Master bedroom" },
    { src: bedroom2, alt: "Guest bedroom suite" },
  ],
  bathrooms: [
    { src: bathroom1, alt: "Master bathroom" },
    { src: bathroom2, alt: "Guest bathroom" },
  ],
  outdoor: [
    { src: outdoor1, alt: "Poolside seating area" },
    { src: outdoor2, alt: "Outdoor entertainment area" },
  ],
};

const categories = [
  { key: "exterior", label: "Exterior" },
  { key: "interior", label: "Interior" },
  { key: "bedrooms", label: "Bedrooms" },
  { key: "bathrooms", label: "Bathrooms" },
  { key: "outdoor", label: "Outdoor Sitting" },
];

export const VisualGallery = () => {
  const [activeCategory, setActiveCategory] = useState("exterior");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = galleryData[activeCategory as keyof typeof galleryData];
  const mainImage = currentImages[0];
  const sideImages = currentImages.slice(1);

  return (
    <section className="py-20 bg-gray-50">
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

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              onClick={() => {
                setActiveCategory(category.key);
                setCurrentImageIndex(0);
              }}
              className={
                activeCategory === category.key
                  ? "bg-primary text-white"
                  : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Image Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Large Image */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-black/70 text-white">
                    {categories.find(c => c.key === activeCategory)?.label}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Images */}
          <div className="space-y-6">
            {sideImages.map((image, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 lg:h-60 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
            
            {/* Placeholder for additional images */}
            {Array.from({ length: Math.max(0, 2 - sideImages.length) }).map((_, index) => (
              <Card key={`placeholder-${index}`} className="overflow-hidden shadow-lg bg-gray-200">
                <div className="w-full h-48 lg:h-60 flex items-center justify-center text-gray-400">
                  <span>More {categories.find(c => c.key === activeCategory)?.label} Photos</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {currentImages.length > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
              disabled={currentImageIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentImageIndex(Math.min(currentImages.length - 1, currentImageIndex + 1))}
              disabled={currentImageIndex === currentImages.length - 1}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};