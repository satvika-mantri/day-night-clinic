"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, Sparkles, ChevronRight } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import InfiniteCarousel from "@/components/InfiniteCarousel";

const getImagePath = (name: string) => {
  return `/images/services/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`;
};

const SERVICES = [
  "Metal Braces", "Clear Aligners", "Smile Designing", "Root Canal Treatment",
  "Dental Implants", "Dental Scaling", "Extraction", "Laser Treatment"
];

const DOCTORS = [
  { name: "Dr. Killamsetty Sai Sandeep", role: "MDS Orthodontist", image: "/images/dr-sai-sandeep.jpg" },
  { name: "Dr. Priya Sharma", role: "Implantologist", image: "https://images.unsplash.com/photo-1594824436998-058b231b14ea?auto=format&fit=crop&w=400&q=80" },
  { name: "Dr. Ramesh Kumar", role: "Cosmetic Dentist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" },
  { name: "Dr. Ananya Reddy", role: "Endodontist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" },
  { name: "Dr. Vikram Singh", role: "Pediatric Dentist", image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&q=80" }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1598256989800-fea5fb20b610?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80"
];

export default function Home() {
  return (
    <div className="flex flex-col w-full pb-20">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Precision Dentistry.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">Beautiful Smiles.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Day & Night Care.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-lg leading-relaxed font-light">
                Experience one of the best dental clinics in Srikakulam, delivering advanced orthodontic and cosmetic treatments with precision and care. Led by Dr. Killamsetty Sai Sandeep, a renowned MDS Orthodontist, we specialize in aligners, braces, and smile designing to create confident, healthy, and lasting smiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/appointment" className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium text-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(44,188,228,0.4)]">
                  Start Your Transformation
                </Link>
                <Link href="/specialities" className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-full font-medium text-center transition-all backdrop-blur-sm">
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/30 blur-2xl z-0" />
              <div className="relative z-10 w-full rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent">
                <BeforeAfterSlider
                  beforeImage="/images/before-image.jpg"
                  afterImage="/images/after-image.jpg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FEATURE GRID SECTION */}
      <section className="py-20 relative z-20 mt-12 md:mt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8">
            <AnimatedCard delay={0.1} className="p-8 bg-dark-800/80 backdrop-blur-xl border border-white/5 h-full flex flex-col justify-between">
              <div>
                <Search className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-heading text-2xl font-bold mb-4">Search Smile Designer</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  Explore our directory to find your ideal expert. Filter by expertise and find the perfect match for your tailored smile goals.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="relative p-1 bg-gradient-to-b from-primary via-accent/50 to-dark-800 h-full flex flex-col justify-between transform md:-translate-y-6 shadow-[0_30px_60px_-15px_rgba(44,188,228,0.3)] hover:-translate-y-8 transition-transform z-10">
              <div className="bg-dark-900 rounded-[15px] p-8 h-full flex flex-col justify-between border-t border-accent/30 inset-0">
                <div>
                  <Calendar className="w-12 h-12 text-accent mb-6" />
                  <h3 className="font-heading text-2xl font-bold mb-4 text-glow text-white">Book Appointment</h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-8">
                    Select your preferred time to schedule an appointment. Our premium booking platform makes it seamless and convenient.
                  </p>
                </div>
                <Link href="/appointment" className="w-full py-3 bg-white text-dark-900 font-bold text-center rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                  Schedule Now <ChevronRight size={16} />
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="p-8 bg-dark-800/80 backdrop-blur-xl border border-white/5 h-full flex flex-col justify-between">
              <div>
                <Sparkles className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-heading text-2xl font-bold mb-4">Experience Transformation</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  Attend your appointment to start the journey towards your dream smile using advanced digital and aesthetic techniques.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-4">The Ultimate Sense of Beauty</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Elevating Digital Dentistry to an Art Form
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
              Day & Night Dental Clinic stands as one of the most trusted and advanced dental care centers in Srikakulam, offering world-class treatments with a patient-first approach.
            </p>
            <Link href="/about" className="inline-flex flex-col group items-center">
              <span className="text-sm uppercase tracking-widest font-medium text-white group-hover:text-accent transition-colors">Our Story</span>
              <div className="w-12 h-[1px] bg-white/30 mt-2 group-hover:bg-accent group-hover:w-16 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. SPECIALITIES SECTION */}
      <section className="py-24 bg-dark-800/30 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Comprehensive Care</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Services</h3>
              <p className="text-white/70 max-w-2xl leading-relaxed">
                We offer a comprehensive range of advanced dental treatments designed to improve both oral health and aesthetics. From orthodontics to cosmetic dentistry, our services are tailored to meet the highest standards of modern dental care.
              </p>
            </div>
            <Link href="/specialities" className="hidden md:flex items-center text-accent hover:text-white transition-colors">
              View All Services <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.map((service, idx) => (
              <AnimatedCard key={service} delay={idx * 0.05} className="group cursor-pointer border border-white/5 hover:border-accent/40 bg-dark-900/50 flex flex-col p-0 overflow-hidden">
                <div className="w-full h-40 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getImagePath(service)}
                    alt={service}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = "/images/services/default.jpg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h4 className="font-heading text-lg font-bold group-hover:text-accent transition-colors">{service}</h4>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-dark-900 transition-all ml-auto mt-4">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-12 text-center w-full flex justify-center">
            <Link href="/specialities" className="inline-flex items-center justify-center px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-dark-900 font-bold rounded-full transition-all duration-300">
              Show More
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="py-24 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
          <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Master Clinicians</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold">Meet The Designers</h3>
        </div>

        <InfiniteCarousel speed="normal">
          {DOCTORS.map((doc, idx) => (
            <div key={idx} className="w-[300px] flex-shrink-0 group relative overflow-hidden rounded-2xl glass">
              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent z-20">
                  <h4 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{doc.name}</h4>
                  <p className="text-accent text-sm font-medium">{doc.role}</p>
                </div>
              </div>
            </div>
          ))}
        </InfiniteCarousel>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="py-24 bg-dark-800/30 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4">Smile Gallery</h3>
            <p className="text-white/60 max-w-2xl mx-auto">Witness the art of transformation. Real patients, real advanced results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {GALLERY.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer ${idx === 0 || idx === 3 ? "md:aspect-square lg:aspect-video" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt="Smile Transformation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                    <Search className="text-white w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/gallery" className="inline-block border-b border-accent text-accent hover:text-white hover:border-white pb-1 transition-all">
              View Complete Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="glass rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark-900 to-accent/10" />
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Start your journey towards a healthier, more confident smile today. Book your consultation with our expert team and experience advanced dental care in Srikakulam.
              </p>
              <Link href="/appointment" className="inline-flex items-center justify-center px-10 py-5 bg-white text-dark-900 rounded-full font-bold hover:bg-primary hover:text-white transition-colors duration-300 text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] group">
                Book Your Appointment <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
