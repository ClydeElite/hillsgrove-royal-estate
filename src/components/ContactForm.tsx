import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import qr from "@/assets/qr.png";

const AGENT_PHONE_DISPLAY = "+971 58 599 8161";
const AGENT_PHONE_TEL = "tel:+971585998161";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ||
  // default to Next.js dev API when running Vite locally
  (import.meta.env.DEV ? "http://localhost:3000/api/contact" : "/api/contact");

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [website, setWebsite] = useState(""); // honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });
      if (!res.ok) throw new Error(await res.text());

      toast({
        title: "Inquiry Sent Successfully!",
        description: "Thanks for your interest. Our team will get back to you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setWebsite("");
    } catch {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative isolate py-20 bg-primary text-white">
      {/* subtle dot pattern (white) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* KEEPING YOUR ORIGINAL WIDTH */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <Badge className="bg-white text-foreground mb-4">GET IN TOUCH</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Our Expert</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to view this exceptional property? Get in touch with our expert agent for exclusive access
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Elite Property Brokerage LLC</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-white/90">

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email</h4>
                    <p className="text-white/80">info@elitepropertydxb.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Call Us Directly</h4>
                    <p className="text-white/80">
                      <a href={AGENT_PHONE_TEL} className="underline underline-offset-4">
                        {AGENT_PHONE_DISPLAY}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Office Address</h4>
                    <p className="text-white/80">
                      Office 613, The Onyx Tower 1, The Greens (SZR), Dubai-UAE
                    </p>
                  </div>
                </div>

                {/* Logo + QR (same size) */}
                <div className="pt-4 border-t border-white/20 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt="Elite Property Brokerage"
                      className="h-24 w-24 rounded-md bg-white/90 p-1 object-contain"
                    />
                  </div>
                  <div className="text-right">
                    <img
                      src={qr}
                      alt="Scan to WhatsApp"
                      className="h-24 w-24 rounded-md bg-white/90 p-1"
                    />
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Your Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* hidden honeypot anti-spam */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="bg-white/90 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+971 XX XXX XXXX"
                      className="bg-white/90 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="bg-white/90 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your requirements, preferred viewing time, or any questions you have about this property..."
                    className="bg-white/90 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-foreground hover:bg-white/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (<><Send className="w-5 h-5 mr-2" />Send Inquiry</>)}
                </Button>

                
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};



