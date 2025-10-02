'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Navigation } from "@/components/Navigation";
import { VideoSection } from "@/components/VideoSection";
import { VisualGallery } from "@/components/VisualGallery";
import {
  Bath,
  Bed,
  Building,
  Camera,
  Car,
  Check,
  Dumbbell,
  Home,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Wifi,
} from "lucide-react";
import Image from "next/image";

import heroImage from "@/assets/herro2.jpg";
import interiorImage from "@/assets/villa-interior.webp";
import qr from "@/assets/qr.png";

const heroImageUrl = typeof heroImage === "string" ? heroImage : heroImage.src;
const AMENITIES_IMAGE_URL = typeof interiorImage === "string" ? interiorImage : interiorImage.src;

const Counter = ({ to, duration = 0.45 }: { to: number; duration?: number }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | undefined;

    const tick = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FloatingButtons />

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-primary text-primary-foreground font-semibold border border-white/15 rounded-full text-base md:text-lg px-4 py-2 tracking-wide">
            EXCLUSIVE LISTING
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Dubai’s Most Prestigious Address
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

          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-lg">
              <Image src={qr} alt="Scan to WhatsApp" className="h-24 w-24 rounded-md" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="py-20 bg-white" aria-label="Property details">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">THE PROPERTY</Badge>
              <h2 className="text-4xl font-bold mb-6">A Landmark Residence in Dubai Hills Estate</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                This exceptional 7-bedroom villa spans 29,000 sq.ft. of built-up area on the largest plot in Hills Grove. Crafted for elite living, every detail combines architectural sophistication with modern comfort.
              </p>

              <div className="grid gap-6">
                {[{
                    icon: Car,
                    title: "Parking",
                    desc: "7-car basement parking with dedicated valet entry",
                  },
                  {
                    icon: Wifi,
                    title: "Smart Home",
                    desc: "Fully automated systems with integrated security",
                  },
                  {
                    icon: Camera,
                    title: "Security",
                    desc: "24/7 CCTV and community secure access",
                  },
                  {
                    icon: Dumbbell,
                    title: "Recreation",
                    desc: "Private gym, cinema room, sauna and game room",
                  }].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                      <p className="text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-2xl">
                <Image src={interiorImage} alt="Villa interior" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">29,000 sq.ft. of Refined Living Space</h3>
                  <p className="text-white/80 text-sm">
                    Spread across three floors, the villa includes multiple lounges, formal and informal dining areas, private suites, staff quarters, and entertainment zones.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[{ label: "Plot Size", value: "42,517 sq.ft" }, { label: "Built-up Area", value: "29,000 sq.ft" }, { label: "Bedrooms", value: "7 ensuite" }, { label: "Garages", value: "7 parking" }].map((item) => (
              <Card key={item.label} className="bg-neutral-50 border-neutral-200">
                <CardContent className="py-8 text-center">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-2xl font-semibold text-neutral-900">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {[{
              title: "Elite Community",
              description: "Hills Grove is the pinnacle of Dubai Hills Estate living with only 26 exclusive plots overlooking the golf course.",
            },
            {
              title: "Architectural Masterpiece",
              description: "Meticulously crafted with Italian marble, bespoke joinery, and designer lighting throughout.",
            },
            {
              title: "Purposeful Living",
              description: "Every space is designed for comfort and function, from family gatherings to hosting international guests.",
            }].map((item) => (
              <div key={item.title} className="space-y-3">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-neutral-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ label: "Years of Experience", value: 16 }, { label: "Dubai Hills Estate Deals", value: 180 }, { label: "Private Viewings", value: 320 }].map((item) => (
              <Card key={item.label} className="bg-white border border-neutral-200">
                <CardContent className="py-10 text-center">
                  <p className="text-lg text-neutral-500 uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-4xl font-extrabold text-neutral-900">
                    <Counter to={item.value} />+
                  </p>
                  <p className="text-sm text-neutral-400 mt-1">Trusted luxury transactions</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="px-8 py-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div>
                <Badge className="bg-white text-foreground mb-4">Luxury Highlights</Badge>
                <h3 className="text-3xl font-semibold mb-4">Every Amenity Curated for Prestigious Living</h3>
                <p className="text-white/80 mb-6">
                  From the private cinema to the spa-grade wellness suite, this residence is designed for refined living and entertaining at the highest level.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-white/95">
                  {["Private elevator access", "7-car basement parking", "Dedicated home cinema", "Spa with sauna & steam", "Full smart-home automation", "Outdoor lounge with BBQ"].map((amenity) => (
                    <li key={amenity} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:ring-white/25 transition">
                      <Check className="w-5 h-5 mt-1 text-white/90" />
                      <span className="font-semibold tracking-wide">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-center lg:justify-end h-full"
              >
                <div className="relative aspect-[3/4] w-full max-w-[380px] lg:max-w-[420px] rounded-3xl shadow-2xl overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[360px]">
                  <Image
                    src={AMENITIES_IMAGE_URL}
                    alt="Luxury amenities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/20" />
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">LUXURY FEATURES</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Unparalleled{' '}
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                Luxury
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience world-class amenities designed for the most discerning residents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: Building, title: "Largest Plot in Hills", desc: "42,517 sqft exclusive plot" }, { icon: MapPin, title: "Prime Location", desc: "Dubai Hills Estate" }, { icon: Shield, title: "Premium Security", desc: "24/7 CCTV monitoring" }, { icon: Star, title: "Complete Amenities", desc: "Every luxury included" }].map(({ icon: Icon, title, desc }, i) => (
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

      <section id="amenities" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-white text-foreground mb-4 border border-white/20">AMENITIES</Badge>
            <h2 className="text-4xl font-bold mb-4">Complete Luxury Amenities</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Every convenience and luxury has been thoughtfully included in this exceptional property
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {["Private Gym & Sauna", "5-Seater Cinema Room", "Swimming Pool & Jacuzzi", "Private Elevator Access", "Staff Room in Basement", "7 Parking Spaces", "CCTV Security System", "3 Walk-in Closets", "Outdoor Seating Areas", "2 Storage Rooms", "Office & Pantry Spaces", "Family TV Room & Study"].map((amenity) => (
              <li
                key={amenity}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:border-white/20"
              >
                <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-white/90 to-white/70 text-foreground shadow ring-1 ring-black/10" aria-hidden="true">
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

      <VideoSection />

      <VisualGallery />

      <ContactForm />
    </div>
  );
}



