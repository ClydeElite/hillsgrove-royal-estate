import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Home, 
  Building2, 
  Bed, 
  Bath, 
  TreePine, 
  Dumbbell,
  Camera,
  ChefHat,
  Maximize2
} from "lucide-react";

// Import all images
import villaHero from "@/assets/villa-hero.jpg";
import villaExterior1 from "@/assets/villa-exterior-1.jpg";
import villaExterior2 from "@/assets/villa-exterior-2.jpg";
import villaInterior from "@/assets/villa-interior.jpg";
import kitchenInterior from "@/assets/kitchen-interior.jpg";
import bedroom1 from "@/assets/bedroom-1.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import bathroom1 from "@/assets/bathroom-1.jpg";
import bathroom2 from "@/assets/bathroom-2.jpg";
import villaPool from "@/assets/villa-pool.jpg";
import outdoorSeating from "@/assets/outdoor-seating.jpg";
import cinemaRoom from "@/assets/cinema-room.jpg";
import gymRoom from "@/assets/gym-room.jpg";

const imageCategories = {
  exterior: {
    title: "Exterior Views",
    icon: Building2,
    images: [
      { src: villaHero, alt: "Villa Main Facade" },
      { src: villaExterior1, alt: "Villa Exterior Evening View" },
      { src: villaExterior2, alt: "Villa Garden & Landscape" }
    ]
  },
  interior: {
    title: "Interior Spaces",
    icon: Home,
    images: [
      { src: villaInterior, alt: "Main Living Area" },
      { src: kitchenInterior, alt: "Luxury Kitchen with Bosch Appliances" }
    ]
  },
  bedrooms: {
    title: "Bedrooms",
    icon: Bed,
    images: [
      { src: bedroom1, alt: "Master Bedroom Suite" },
      { src: bedroom2, alt: "Guest Bedroom" }
    ]
  },
  bathrooms: {
    title: "Bathrooms",
    icon: Bath,
    images: [
      { src: bathroom1, alt: "Master Bathroom with Jacuzzi" },
      { src: bathroom2, alt: "Guest Bathroom" }
    ]
  },
  outdoor: {
    title: "Outdoor Living",
    icon: TreePine,
    images: [
      { src: villaPool, alt: "Swimming Pool & Jacuzzi Area" },
      { src: outdoorSeating, alt: "Outdoor Seating & Fire Pit" }
    ]
  },
  entertainment: {
    title: "Entertainment",
    icon: Camera,
    images: [
      { src: cinemaRoom, alt: "Private 5-Seater Cinema" },
      { src: gymRoom, alt: "Private Gym & Sauna" }
    ]
  }
};

export const PropertyGallery = () => {
  const [activeCategory, setActiveCategory] = useState("exterior");

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-luxury-gold to-accent text-primary font-semibold px-6 py-2">
            PROPERTY GALLERY
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Explore Every Corner
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour through Dubai's most prestigious villa with our comprehensive image gallery
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(imageCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={key}
                onClick={() => setActiveCategory(key)}
                variant={activeCategory === key ? "default" : "outline"}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                    : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:scale-105"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.title}
              </Button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageCategories[activeCategory as keyof typeof imageCategories].images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-secondary/20 border-luxury-gold/20">
                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-semibold text-sm mb-2">{image.alt}</p>
                          <div className="flex items-center text-luxury-gold">
                            <Maximize2 className="w-4 h-4 mr-2" />
                            <span className="text-xs font-medium">Click to view full size</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black/95 border-luxury-gold/30">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Category Description */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-luxury-gold/10 to-accent/10 border-luxury-gold/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                {(() => {
                  const IconComponent = imageCategories[activeCategory as keyof typeof imageCategories].icon;
                  return <IconComponent className="w-6 h-6 text-luxury-gold" />;
                })()}
                <h3 className="text-2xl font-bold text-foreground">
                  {imageCategories[activeCategory as keyof typeof imageCategories].title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {activeCategory === 'exterior' && "Marvel at the stunning architecture and landscaped grounds of Dubai's largest residential plot in Hills Grove."}
                {activeCategory === 'interior' && "Experience the epitome of luxury living with premium finishes and Bosch appliances throughout."}
                {activeCategory === 'bedrooms' && "Rest in comfort with 7 spacious bedrooms featuring premium furnishings and stunning views."}
                {activeCategory === 'bathrooms' && "Indulge in spa-like luxury with marble-tiled bathrooms and premium fixtures."}
                {activeCategory === 'outdoor' && "Enjoy resort-style outdoor living with swimming pool, jacuzzi, and elegant seating areas."}
                {activeCategory === 'entertainment' && "Entertain in style with a private cinema, professional gym, and state-of-the-art amenities."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};