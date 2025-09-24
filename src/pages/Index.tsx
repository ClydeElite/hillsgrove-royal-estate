import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Car, 
  Bath, 
  Bed, 
  MapPin, 
  Phone, 
  Mail, 
  Shield,
  Star,
  Building,
  Wifi,
  Camera,
  Dumbbell,
  Check
} from "lucide-react";
import { VisualGallery } from "@/components/VisualGallery";
import { Navigation } from "@/components/Navigation";
import { VideoSection } from "@/components/VideoSection";
import { ContactForm } from "@/components/ContactForm";
import { FloatingButtons } from "@/components/FloatingButtons";
import heroImage from "@/assets/villa-hero.jpg";
import interiorImage from "@/assets/villa-interior.jpg";
import logo from "@/assets/elite-property-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingButtons />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Logo */}
        <div className="absolute top-6 left-6 z-20">
          <img src={logo} alt="Elite Property Brokerage" className="h-12 w-auto" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-4 bg-orange-500 text-white font-semibold">
            EXCLUSIVE LISTING
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Dubai's Most Prestigious Address
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Largest Plot in Hills Grove | Dubai Hills Estate
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span>7 Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span>9 Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span>29,000 sqft BUA</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Ola Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Details
            </Button>
          </div>
        </div>
      </section>

      {/* Exceptional Details Section */}
      <section id="details" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500 text-white mb-4">PROPERTY HIGHLIGHTS</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Exceptional <span className="text-orange-500">Details</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the unique features that make this property stand out in Dubai's prestigious Hills Grove community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-white border">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">7</div>
                <h3 className="text-lg font-semibold mb-1">Bedrooms</h3>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-white border">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">9</div>
                <h3 className="text-lg font-semibold mb-1">Bathrooms</h3>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-white border">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">29,000 sqft</div>
                <h3 className="text-lg font-semibold mb-1">BUA</h3>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-white border">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">42,517 sqft</div>
                <h3 className="text-lg font-semibold mb-1">Plot Size</h3>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-white border">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">7</div>
                <h3 className="text-lg font-semibold mb-1">Parking</h3>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-white border">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">Fully Furnished</div>
                <h3 className="text-lg font-semibold mb-1">Move-in Ready</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Move in Ready Luxury Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-500 text-white mb-4">READY TO MOVE</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Move in Ready <span className="text-orange-500">Luxury</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                This exceptional property comes fully furnished with premium Bosch appliances and luxury finishes throughout. 
                Every detail has been carefully selected to provide the ultimate living experience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Bosch appliances in both kitchens</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Marble tiling in all bathrooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Private elevator access</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Premium furnishing throughout</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Viewing
              </Button>
            </div>
            
            <div>
              <Card className="overflow-hidden shadow-lg border-0">
                <img 
                  src={interiorImage} 
                  alt="Luxury villa interior" 
                  className="w-full h-96 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Unparalleled Luxury Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500 text-white mb-4">LUXURY FEATURES</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Unparalleled <span className="text-orange-500">Luxury</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience world-class amenities designed for the most discerning residents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-orange-50 border-orange-200">
              <CardContent className="pt-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Largest Plot in Hills</h3>
                <p className="text-sm text-muted-foreground">42,517 sqft exclusive plot</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-orange-50 border-orange-200">
              <CardContent className="pt-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Prime Location</h3>
                <p className="text-sm text-muted-foreground">Dubai Hills Estate</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-orange-50 border-orange-200">
              <CardContent className="pt-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Security</h3>
                <p className="text-sm text-muted-foreground">24/7 CCTV monitoring</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-orange-50 border-orange-200">
              <CardContent className="pt-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Complete Amenities</h3>
                <p className="text-sm text-muted-foreground">Every luxury included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete Luxury Amenities Section */}
      <section id="amenities" className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500 text-white mb-4">AMENITIES</Badge>
            <h2 className="text-4xl font-bold mb-4">Complete Luxury Amenities</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Every convenience and luxury has been thoughtfully included in this exceptional property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Private Gym & Sauna",
              "5-Seater Cinema Room", 
              "Swimming Pool & Jacuzzi",
              "Private Elevator Access",
              "Staff Room in Basement",
              "7 Parking Spaces",
              "CCTV Security System",
              "3 Walk-in Closets",
              "Outdoor Seating Areas",
              "2 Storage Rooms",
              "Office & Pantry Spaces",
              "Family TV Room & Study"
            ].map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-white">{amenity}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Now for More Details
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Visual Gallery Section */}
      <div id="gallery">
        <VisualGallery />
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img src={logo} alt="Elite Property Brokerage" className="h-16 w-auto mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Contact Our Expert</h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to view this exceptional property? Contact Ola for exclusive access.
          </p>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-500">Elite Property Brokerage</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <p className="text-sm">Office 613, The Onyx Tower 1, The Greens (SZR), Dubai-UAE</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <p>info@elitepropertydxb.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-orange-500" />
                      <p className="text-sm">RERA ORN: 25831</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-orange-500" />
                      <p className="text-sm">Reference: EPS-S-7574</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-orange-500" />
                      <p className="text-sm">Permit: 6511674842</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold mb-4"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Ola for Details
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;