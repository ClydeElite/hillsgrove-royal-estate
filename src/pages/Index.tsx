import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home, Car, Bath, Bed, MapPin, Phone, Mail, Shield,
  Star, Building, Wifi, Camera, Dumbbell, Check } from "lucide-react";
import { VisualGallery } from "@/components/VisualGallery";
import { Navigation } from "@/components/Navigation";
import { VideoSection } from "@/components/VideoSection";
import { ContactForm } from "@/components/ContactForm";
import { FloatingButtons } from "@/components/FloatingButtons";
import heroImage from "@/assets/herro2.jpg";
import interiorImage from "@/assets/villa-interior.jpg";
import qr from "@/assets/qr.png";
import { motion } from "framer-motion";

// Simple animated counter component
import { useEffect, useState } from "react";

const Counter = ({ to, duration = 0.45 }: { to: number; duration?: number }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | undefined;

    const tick = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      // easeOutExpo: super quick at the start, settles at the end
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(to);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <>{n.toLocaleString()}</>;
};



const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FloatingButtons />

      {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* BG */}
  <div
    className="absolute inset-0 bg-cover bg-top md:bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div className="absolute inset-0 bg-black/55" />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
    {/* BIGGER badge */}
    <Badge
      className="
        mb-6 bg-primary text-primary-foreground font-semibold
        border border-white/15 rounded-full
        text-base md:text-lg px-4 py-2 tracking-wide
      "
    >
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

    {/* BIGGER buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        asChild
        size="lg"
        className="h-14 px-10 text-lg bg-primary hover:bg-black text-primary-foreground font-semibold"
      >
        <a href="tel:+971585952205" aria-label="Call Now">
          <Phone className="w-6 h-6 mr-2" />
          Call Now
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        className="h-14 px-10 text-lg bg-white text-foreground hover:bg-white/90 font-semibold border border-white/20"
      >
        <a href="#details" aria-label="View Details">View Details</a>
      </Button>
    </div>

    {/* QR centered under buttons (all breakpoints) */}
    <div className="mt-6 flex justify-center">
      <div className="flex items-center gap-3 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-lg">
        <img
          src={qr}
          alt="Scan to WhatsApp"
          className="h-24 w-24 rounded-md"
        />
        {/*<div className="text-foreground text-left">
          <p className="text-sm font-semibold">Scan to WhatsApp</p>
          <p className="text-xs text-muted-foreground">Instant confirmation</p>
        </div>*/}
      </div>
    </div>
  </div>
</section>




      {/* Exceptional Details Section */}
      <section id="details" className="relative py-20 px-6 bg-white">
        {/* subtle top shine */}
        <div className="pointer-events-none absolute inset-x-0 -top-8 h-24 bg-gradient-to-b from-black/[0.06] to-transparent" />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <Badge className="bg-primary text-primary-foreground mb-4 rounded-full px-4 py-1.5 tracking-wide">
              PROPERTY HIGHLIGHTS
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Exceptional{" "}
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                Details
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the unique features that make this property stand out in Dubai's prestigious Hills Grove community
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Bed, label: "Bedrooms", value: "7" },
              { icon: Bath, label: "Bathrooms", value: "9" },
              { icon: Home, label: "BUA", value: <><Counter to={29000} />&nbsp;sqft</> },
              { icon: MapPin, label: "Plot Size", value: <><Counter to={42517} />&nbsp;sqft</> },
              { icon: Car, label: "Parking", value: "7" },
              { icon: Check, label: "Move-in Ready", value: "Fully Furnished" },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
              >
                <div
                  className="
                    group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white
                    shadow-sm hover:shadow-lg transition
                  "
                >
                  {/* top border glow on hover */}
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div className="p-8 text-center">
                    {/* icon disc */}
                    <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* value */}
                    <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                    {/* label */}
                    <h3 className="text-lg font-semibold">{label}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Move in Ready Luxury Section */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          {/* subtle pattern + soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(#0000000f 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-black/5 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/5 blur-2xl" />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Badge className="bg-primary text-primary-foreground mb-4 rounded-full px-4 py-1.5 tracking-wide">
                  READY TO MOVE
                </Badge>

                <h2 className="text-4xl font-bold mb-6">
                  Move in Ready{" "}
                  <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                    Luxury
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  This exceptional property comes fully furnished with premium Bosch appliances and luxury finishes throughout.
                  Every detail has been carefully selected to provide the ultimate living experience.
                </p>

                {/* Fancy checklist */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Bosch appliances in both kitchens",
                    "Marble tiling in all bathrooms",
                    "Private elevator access",
                    "Premium furnishing throughout",
                  ].map((item) => (
                    <li
                      key={item}
                      className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 shadow-sm
                                hover:shadow-md transition"
                    >
                      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
                        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition" />
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Button with phone number */}
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-lg bg-primary hover:bg-black text-primary-foreground shadow-lg hover:shadow-xl"
                >
                  <a href="tel:+971585952205" aria-label="Schedule Viewing +971 58 595 2205">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>Schedule Viewing</span>
                    <span className="ml-2 hidden sm:inline">• +971 58 595 2205</span>
                  </a>
                </Button>
              </motion.div>

              {/* Right (image) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              >
                <Card className="relative overflow-hidden shadow-xl border-0 rounded-2xl">
                  {/* subtle border glow */}
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-black/10 rounded-2xl" />
                  {/* image */}
                  <img
                    src={interiorImage}
                    alt="Luxury villa interior"
                    className="w-full h-96 object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                  {/* floating label */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 text-foreground px-3 py-1 text-xs font-medium shadow">
                      Fully Furnished
                    </span>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>


      {/* Unparalleled Luxury Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">LUXURY FEATURES</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Unparalleled{" "}
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                Luxury
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience world-class amenities designed for the most discerning residents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building, title: "Largest Plot in Hills", desc: "42,517 sqft exclusive plot" },
              { icon: MapPin, title: "Prime Location", desc: "Dubai Hills Estate" },
              { icon: Shield, title: "Premium Security", desc: "24/7 CCTV monitoring" },
              { icon: Star, title: "Complete Amenities", desc: "Every luxury included" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Card key={i} className="p-8 text-center hover:shadow-lg transition-shadow bg-neutral-50 border-neutral-200">
                <CardContent className="pt-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Luxury Amenities Section */}
      <section id="amenities" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-white text-foreground mb-4 border border-white/20">AMENITIES</Badge>
            <h2 className="text-4xl font-bold mb-4">Complete Luxury Amenities</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Every convenience and luxury has been thoughtfully included in this exceptional property
            </p>
          </div>

          {/* Fancy bullet list */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
              "Family TV Room & Study",
            ].map((amenity) => (
              <li
                key={amenity}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition
                          hover:bg-white/10 hover:border-white/20"
              >
                <span
                  className="relative grid h-8 w-8 place-items-center rounded-full
                            bg-gradient-to-br from-white/90 to-white/70 text-foreground shadow
                            ring-1 ring-black/10"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-white/60 blur-[6px] opacity-25" />
                  <Check className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                </span>
                <span className="text-white/95">{amenity}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 h-14 text-lg"
            >
              <a href="tel:+971585952205" aria-label="Call Now for More Details">
                <Phone className="w-6 h-6 mr-2" />
                Call Now for More Details
              </a>
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
    </div>
  );
};

export default Index;
