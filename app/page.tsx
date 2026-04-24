"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const getImagePath = (name: string) => {
  return `/images/services/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`;
};

const SERVICES = [
  "Metal Braces", "Clear Aligners", "Smile Designing", "Root Canal Treatment",
  "Dental Implants", "Dental Scaling", "Extraction", "Laser Treatment"
];

const DOCTORS = [
  { name: "Dr. Killamsetty Sai Sandeep", role: "Braces & Clips Specialist | Aligners Expert", image: "/images/dr-sai-sandeep.jpg" }
];

const GALLERY = [
  "/images/gallery_images/image1.png",
  "/images/gallery_images/image2.png",
  "/images/gallery_images/image3.png",
  "/images/gallery_images/image4.png",
  "/images/gallery_images/image5.png"
];

const HERO_SLIDES = [
  {
    image: "*/images/services/dental-implants.jpg",
    title: "Advanced Dental Implants",
    description: "Permanent, natural-looking tooth replacement solutions.",
  },
  {
    image: "*/images/services/clear-aligners.jpg",
    title: "Invisible Aligners & Clips",
    description: "Straighten your teeth comfortably without visible braces.",
  },
  {
    image: "*/images/services/root-canal-treatment.jpg",
    title: "Painless Root Canal Treatment",
    description: "Save your natural teeth with advanced pain-free procedures.",
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="flex flex-col w-full pb-20 bg-white">

      {/* 1. HERO SLIDESHOW SECTION */}
      <section
        className="relative min-h-[90vh] w-full bg-white overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 6, ease: "linear" }}
              className="relative w-full h-full"
            >
              <Image
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].title}
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center z-10 pt-16">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-2xl text-white">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  >
                    {HERO_SLIDES[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl md:text-2xl mb-8 font-light text-gray-100"
                  >
                    {HERO_SLIDES[currentSlide].description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link href="/appointment" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-sm text-lg gap-2 hover:scale-105 active:scale-95 duration-200">
                      Book Appointment <ChevronRight size={20} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-primary w-10 shadow-lg" : "bg-white/50 hover:bg-white/80 w-3"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. FEATURE GRID SECTION */}
      <section className="py-20 relative z-20 mt-12 md:mt-24 bg-neutral-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8">
            <AnimatedCard delay={0.1} className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl h-full flex flex-col justify-between">
              <div>
                <Search className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Search Smile Designer</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Explore our directory to find your ideal expert. Filter by expertise and find the perfect match for your tailored smile goals.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="relative p-1 bg-white h-full flex flex-col justify-between transform md:-translate-y-6 shadow-md rounded-2xl border border-gray-200 hover:-translate-y-8 transition-transform z-10">
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between">
                <div>
                  <Calendar className="w-12 h-12 text-primary mb-6" />
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Book Appointment</h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-8">
                    Select your preferred time to schedule an appointment. Our premium booking platform makes it seamless and convenient.
                  </p>
                </div>
                <Link href="/appointment" className="w-full py-3 bg-primary text-white font-bold text-center rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm">
                  Schedule Now <ChevronRight size={16} />
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl h-full flex flex-col justify-between">
              <div>
                <Sparkles className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Experience Transformation</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Attend your appointment to start the journey towards your dream smile using advanced digital and aesthetic techniques.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* 2.5. REAL PATIENT TRANSFORMATIONS */}
      <section className="py-24 relative z-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Real Patient Transformations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the outstanding results our experienced team achieves with advanced dental and cosmetic treatments.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl p-2 bg-neutral-50 shadow-lg border border-gray-100 flex items-center justify-center">
            <div className="w-full relative z-10 rounded-2xl bg-white shadow-sm overflow-hidden">
              <BeforeAfterSlider
                beforeImage="/images/before-image.jpg"
                afterImage="/images/after-image.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">The Ultimate Sense of Beauty</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
              Elevating Digital Dentistry to an Art Form
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
              Day & Night Dental Clinic stands as one of the most trusted and advanced dental care centers in Srikakulam, offering world-class treatments with a patient-first approach.
            </p>
            <Link href="/about" className="inline-flex flex-col group items-center">
              <span className="text-sm uppercase tracking-widest font-medium text-gray-900 group-hover:text-primary transition-colors">Our Story</span>
              <div className="w-12 h-[1px] bg-gray-300 mt-2 group-hover:bg-primary group-hover:w-16 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. TREATMENTS SECTION */}
      <section className="py-24 bg-neutral-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Comprehensive Care</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Treatments</h3>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                We offer a comprehensive range of advanced dental treatments designed to improve both oral health and aesthetics. From orthodontics to cosmetic dentistry, our services are tailored to meet the highest standards of modern dental care.
              </p>
            </div>
            <Link href="/treatments" className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
              View All Treatments <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.map((service, idx) => (
              <AnimatedCard key={service} delay={idx * 0.05} className="group cursor-pointer border border-gray-200 hover:border-primary bg-white shadow-sm hover:shadow-md rounded-2xl flex flex-col p-0 overflow-hidden">
                <div className="w-full h-40 overflow-hidden relative border-b border-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getImagePath(service)}
                    alt={service}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.src = "/images/services/default.jpg")}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h4 className="font-heading text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{service}</h4>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all ml-auto mt-4 text-gray-400">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-12 text-center w-full flex justify-center">
            <Link href="/treatments" className="inline-flex items-center justify-center px-8 py-3 bg-white border border-primary text-primary hover:bg-neutral-50 shadow-sm font-bold rounded-full transition-all duration-300">
              Show More
            </Link>
          </div>
        </div>
      </section>

      {/* 5. MEET OUR SPECIALIST SECTION */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Lead Clinician</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-gray-900">Meet Our Specialist</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing the best clips treatment in Srikakulam with a focus on preserving natural teeth.
          </p>
        </div>

        <div className="flex justify-center px-6">
          <div className="w-full max-w-sm group relative overflow-hidden rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-500 bg-white">
            <div className="aspect-[4/5] relative">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DOCTORS[0].image}
                alt={DOCTORS[0].name}
                className="w-full h-full object-cover grayscale-[0.2] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-heading text-2xl font-bold text-white mb-2">{DOCTORS[0].name}</h4>
                <p className="text-primary text-sm font-medium mb-3">{DOCTORS[0].role}</p>
                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  With over 13 years of experience in advanced dental and braces treatments. Specialized in non-extraction treatment methods, preserving natural teeth while achieving perfect alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="py-24 bg-neutral-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-gray-900">Real Smiles, Real Transformations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore real patient transformations achieved through our advanced clips and braces treatments. With 13+ years of experience and a focus on non-extraction methods, we have helped hundreds of patients achieve confident, healthy smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {GALLERY.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl border border-gray-200 shadow-sm overflow-hidden aspect-[4/3] group cursor-pointer ${idx === 0 || idx === 3 ? "md:aspect-square lg:aspect-video" : ""
                  } ${idx === 4 ? "md:col-span-1 md:col-start-1 md:col-end-3 lg:aspect-[21/9]" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt="Smile Transformation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <Search className="text-primary w-6 h-6" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center z-20 pointer-events-none">
                  <span className="bg-white/90 text-gray-900 text-sm font-medium px-6 py-2 rounded-full backdrop-blur-md border border-gray-200 shadow-sm inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Smile Transformation
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center flex flex-col items-center">
            <p className="text-gray-500 text-sm italic mb-6">
              "Trusted by patients across Srikakulam for safe, effective, and personalized dental care."
            </p>
            <Link href="/gallery" className="inline-block border-b border-primary text-primary hover:text-gray-900 hover:border-gray-900 pb-1 transition-all">
              View Complete Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 px-6 relative bg-white">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="bg-primary/5 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden border border-primary/20 shadow-sm">
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-gray-900">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Start your journey towards a healthier, more confident smile today. Book your consultation with our expert team and experience advanced dental care in Srikakulam.
              </p>
              <Link href="/appointment" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors duration-300 text-lg shadow-sm group">
                Book Your Appointment <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
