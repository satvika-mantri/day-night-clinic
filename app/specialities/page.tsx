"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";

const getImagePath = (name: string) => {
  return `/images/services/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`;
};

const SERVICES = [
  { name: "Metal Braces", desc: "Traditional alignment for complex structural issues." },
  { name: "Clear Aligners", desc: "Invisible, comfortable alignment for a discreet transformation." },
  { name: "Smile Designing", desc: "Comprehensive aesthetics tailored to your facial symmetry." },
  { name: "Root Canal Treatment", desc: "Painless microscopic therapy to save your natural teeth." },
  { name: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth." },
  { name: "Dental Scaling", desc: "Advanced ultrasonic cleaning for optimal gum health." },
  { name: "Extraction", desc: "Safe, comfortable removal of compromised teeth." },
  { name: "FPD", desc: "Fixed partial dentures to restore function and appearance." },
  { name: "Facial Fracture Surgery", desc: "Expert maxillofacial reconstructive procedures." },
  { name: "Flap Surgery", desc: "Advanced periodontal treatment for severe gum disease." },
  { name: "Cosmetic Fillings", desc: "Tooth-colored restorations completely invisible to the eye." },
  { name: "Gum Depigmentation", desc: "Laser treatment for an even, healthy pink gumline." },
  { name: "Tooth Whitening", desc: "Professional grade brightening up to 8 shades lighter." },
  { name: "Laser Treatment", desc: "Minimally invasive, precise soft tissue therapy." },
  { name: "Digital Dentistry", desc: "3D scanning and printing for ultra-precise diagnostics." },
  { name: "Dental Health Scanner", desc: "Comprehensive intraoral imaging for complete oral mappings." },
];

export default function Specialities() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-6"
          >
            Our Specialities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            A comprehensive suite of premium dental services, utilizing state-of-the-art technology for unparalleled results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <AnimatedCard
              key={idx}
              delay={idx * 0.05}
              className="group border border-white/5 hover:border-accent/40 bg-dark-900/60 transition-colors h-full flex flex-col overflow-hidden"
            >


              {/* IMAGE */}
              <img
                src={getImagePath(service.name)}
                alt={service.name}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => (e.currentTarget.src = "/images/services/default.jpg")}
              />

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-white mb-3 hover:text-accent transition-colors">
                  {service.name}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex-grow" />

                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-accent font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                  Learn More
                </div>
              </div>

            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
