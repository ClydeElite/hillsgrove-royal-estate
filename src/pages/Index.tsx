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
  Dumbbell,
  Waves,
  Camera,
  Shield,
  TreePine,
  Star,
  Building
} from "lucide-react";
import heroImage from "@/assets/villa-hero.jpg";
import interiorImage from "@/assets/villa-interior.jpg";
import poolImage from "@/assets/villa-pool.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-4 bg-luxury-gold text-primary font-semibold">
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
            <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-primary font-semibold px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Ola Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Details
            </Button>
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Exceptional Features</h2>
            <p className="text-xl text-muted-foreground">Experience luxury living at its finest</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                <h3 className="text-xl font-semibold mb-2">Largest Plot</h3>
                <p className="text-muted-foreground">42,517 sqft plot - the biggest in Hills Grove</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                <h3 className="text-xl font-semibold mb-2">Premium Amenities</h3>
                <p className="text-muted-foreground">Private elevator, gym, sauna, cinema & more</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                <h3 className="text-xl font-semibold mb-2">Fully Furnished</h3>
                <p className="text-muted-foreground">Move-in ready with Bosch appliances</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Property Specifications</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Bed className="w-6 h-6 text-luxury-gold" />
                    <span className="font-semibold">Bedrooms</span>
                  </div>
                  <p className="text-2xl font-bold">7</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Bath className="w-6 h-6 text-luxury-gold" />
                    <span className="font-semibold">Bathrooms</span>
                  </div>
                  <p className="text-2xl font-bold">9</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="w-6 h-6 text-luxury-gold" />
                    <span className="font-semibold">BUA</span>
                  </div>
                  <p className="text-lg font-bold">29,000 sqft</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Car className="w-6 h-6 text-luxury-gold" />
                    <span className="font-semibold">Parking</span>
                  </div>
                  <p className="text-2xl font-bold">7</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Reference Details</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Reference:</span> EPS-S-7574</p>
                  <p><span className="font-semibold">Permit:</span> 6511674842</p>
                  <p><span className="font-semibold">Location:</span> Hills Grove, Dubai Hills Estate</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <img 
                src={interiorImage} 
                alt="Luxury villa interior" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={poolImage} 
                alt="Villa swimming pool area" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Amenities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Luxury Amenities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Dumbbell, title: "Private Gym & Sauna", desc: "Professional equipment" },
              { icon: Camera, title: "5-Seater Cinema", desc: "Ultimate entertainment" },
              { icon: Waves, title: "Pool & Jacuzzi", desc: "Resort-style relaxation" },
              { icon: TreePine, title: "Lake Views", desc: "From bar/lounge area" },
              { icon: Shield, title: "CCTV Security", desc: "Complete surveillance" },
              { icon: Building, title: "Private Elevator", desc: "Exclusive access" },
            ].map((amenity, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <amenity.icon className="w-8 h-8 text-luxury-gold mb-3" />
                  <h3 className="font-semibold mb-2">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-primary to-luxury-gold-dark p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Additional Premium Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm max-w-4xl mx-auto">
              <p>• Bosch appliances in both kitchens</p>
              <p>• Marble tiling in all toilets</p>
              <p>• Office and pantry spaces</p>
              <p>• Family TV room and study</p>
              <p>• Staff room in basement</p>
              <p>• 3 closets in master bedroom</p>
              <p>• Outdoor seating areas</p>
              <p>• 2 storage rooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Our Expert</h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to view this exceptional property? Contact Ola for exclusive access.
          </p>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-luxury-gold">Elite Property Brokerage</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-luxury-gold" />
                      <p className="text-sm">Office 613, The Onyx Tower 1, The Greens (SZR), Dubai-UAE</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-luxury-gold" />
                      <p>info@elitepropertydxb.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-luxury-gold" />
                      <p className="text-sm">RERA ORN: 25831</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <Button 
                    size="lg" 
                    className="bg-luxury-gold hover:bg-luxury-gold-dark text-primary font-semibold mb-4"
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