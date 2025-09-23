import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PropertyGallery } from "@/components/PropertyGallery";
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
  Building,
  Crown,
  Sparkles
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
          <Badge className="mb-6 bg-gradient-to-r from-luxury-gold to-accent text-primary font-bold px-6 py-2 text-sm animate-pulse">
            <Crown className="w-4 h-4 mr-2" />
            EXCLUSIVE DUBAI HILLS ESTATE
          </Badge>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-white via-luxury-gold to-white bg-clip-text text-transparent drop-shadow-2xl">
            Dubai's Crown Jewel
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-luxury-gold animate-pulse" />
            <p className="text-2xl md:text-3xl font-semibold text-luxury-gold">
              Largest Plot in Hills Grove
            </p>
            <Sparkles className="w-6 h-6 text-luxury-gold animate-pulse" />
          </div>
          <p className="text-lg md:text-xl mb-2 text-white/80">
            42,517 sqft of Pure Luxury | 29,000 sqft Built-up Area
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-luxury-gold to-accent hover:from-luxury-gold-dark hover:to-accent/80 text-primary font-bold px-10 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Phone className="w-6 h-6 mr-3" />
              Call Ola Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-4 text-lg backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300">
              <Camera className="w-6 h-6 mr-3" />
              Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-accent to-luxury-gold text-white font-bold px-6 py-2">
              <Star className="w-4 h-4 mr-2" />
              WORLD-CLASS FEATURES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Unmatched Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Where extraordinary luxury meets unparalleled comfort in Dubai's most coveted address</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-luxury-gold/5 border-2 border-luxury-gold/20 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-luxury-gold to-accent rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">Record Breaking Plot</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">42,517 sqft - the most prestigious and largest residential plot in Hills Grove</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent to-luxury-gold rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">Ultra-Premium Amenities</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Private elevator, professional gym, sauna, 5-seater cinema & resort-style facilities</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-secondary/5 border-2 border-primary/20 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-luxury-gold rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">Turn-Key Luxury</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Fully furnished with premium Bosch appliances - move in immediately</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Gallery */}
      <PropertyGallery />

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
      <section className="py-24 bg-gradient-to-br from-secondary/30 via-accent/5 to-primary/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-white font-bold px-6 py-2">
              <Dumbbell className="w-4 h-4 mr-2" />
              RESORT-STYLE AMENITIES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">World-Class Luxury</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Indulge in amenities that rival the world's finest resorts, all within your private estate</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Dumbbell, title: "Private Gym & Sauna", desc: "Professional equipment & spa facilities", gradient: "from-red-500 to-orange-500" },
              { icon: Camera, title: "5-Seater Cinema", desc: "Immersive entertainment experience", gradient: "from-purple-500 to-pink-500" },
              { icon: Waves, title: "Pool & Jacuzzi", desc: "Resort-style aquatic paradise", gradient: "from-blue-500 to-cyan-500" },
              { icon: TreePine, title: "Lake Views", desc: "Panoramic vistas from bar/lounge", gradient: "from-green-500 to-emerald-500" },
              { icon: Shield, title: "CCTV Security", desc: "Complete surveillance system", gradient: "from-gray-500 to-slate-500" },
              { icon: Building, title: "Private Elevator", desc: "Exclusive vertical transportation", gradient: "from-amber-500 to-yellow-500" },
            ].map((amenity, index) => (
              <Card key={index} className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
                <CardContent className="pt-4 relative z-10">
                  <div className={`w-14 h-14 mx-auto mb-6 bg-gradient-to-br ${amenity.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <amenity.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-3 text-xl text-primary group-hover:text-accent transition-colors duration-300">{amenity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{amenity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-primary via-accent to-luxury-gold-dark p-10 rounded-2xl text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 animate-pulse" />
              <h3 className="text-3xl font-bold">Exclusive Premium Features</h3>
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="space-y-3">
                <p className="flex items-center gap-2"><Crown className="w-4 h-4 text-luxury-gold" /> Bosch appliances in both kitchens</p>
                <p className="flex items-center gap-2"><Crown className="w-4 h-4 text-luxury-gold" /> Marble tiling in all bathrooms</p>
                <p className="flex items-center gap-2"><Crown className="w-4 h-4 text-luxury-gold" /> Executive office and pantry spaces</p>
                <p className="flex items-center gap-2"><Crown className="w-4 h-4 text-luxury-gold" /> Family TV room and private study</p>
              </div>
              <div className="space-y-3">
                <p className="flex items-center gap-2"><Crown className="w-4 h-4 text-luxury-gold" /> Staff quarters in basement level</p>
                <p className="flex items-center gap-2"><Crown className="w-4 h-4 text-luxury-gold" /> 3 walk-in closets in master suite</p>
                <p className="flex items-center gap-2"><Crown className="w-4 h-4 text-luxury-gold" /> Multiple outdoor entertainment areas</p>
                <p className="flex items-center gap-2"><Crown className="w-4 h-4 text-luxury-gold" /> 2 additional storage facilities</p>
              </div>
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