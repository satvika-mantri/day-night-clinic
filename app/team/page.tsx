"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const DOCTORS = [
  { name: "Dr. Killamsetty Sai Sandeep", role: "MDS Orthodontist", desc: "Aligners & Braces Specialist. Dedicated to perfecting structural alignments.", image: "/images/dr-sai-sandeep.jpg" },
  { name: "Dr. Priya Sharma", role: "Implantologist", desc: "Pioneer in full-mouth restorations and digital implants.", image: "https://images.unsplash.com/photo-1594824436998-058b231b14ea?auto=format&fit=crop&w=600&q=80" },
  { name: "Dr. Ramesh Kumar", role: "Cosmetic Dentist", desc: "Specializes in ultra-thin veneers and smile symmetry.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" },
  { name: "Dr. Ananya Reddy", role: "Endodontist", desc: "Microscopic root canals and pain-free treatments.", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" },
  { name: "Dr. Vikram Singh", role: "Pediatric Dentist", desc: "Gentle approach to building early dental foundations.", image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80" },
];

export default function Team() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-6"
          >
            The Signature Designers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Meet the masterful clinicians dedicated to perfecting your smile Day & Night.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc, idx) => (
            <AnimatedCard key={idx} delay={idx * 0.1} className="group overflow-hidden rounded-2xl glass p-0 border border-white/10 hover:border-accent/50 transition-colors">
              <div className="aspect-[3/4] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{doc.name}</h3>
                  <p className="text-accent font-medium mb-4">{doc.role}</p>
                  <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{doc.desc}</p>
                  <Link href="/appointment" className="inline-flex items-center text-sm font-bold text-white hover:text-accent transition-colors">
                    Consult with {doc.name.split(' ')[1]} <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
