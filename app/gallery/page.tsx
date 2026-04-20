"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

const GALLERY_IMAGES = [
  "/images/gallery_images/image1.png",
  "/images/gallery_images/image2.png",
  "/images/gallery_images/image3.png",
  "/images/gallery_images/image4.png",
  "/images/gallery_images/image5.png",
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-6"
          >
            The Art of the Smile
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            A curated collection of our finest transformations. Notice the natural translucency, perfect alignment, and brilliant harmony.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Search className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center z-20 pointer-events-none">
                <span className="bg-dark-900/80 text-white text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Smile Transformation
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
