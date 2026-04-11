import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo-secondary.png" 
                alt="Day & Night Dental Clinic" 
                width={200} 
                height={60} 
                className="object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Experience the pinnacle of advanced dental care. Precision dentistry for beautiful smiles, day and night.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span> About Clinic
                </Link>
              </li>
              <li>
                <Link href="/specialities" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span> Specialities
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span> Our Experts
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span> Smile Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Day & Night Medical Complex, Beside Reliance Digital,<br />Opp Forest Office, Srikakulam – 532001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent mr-3 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  +91 8977383622<br />+91 6305074696
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent mr-3 flex-shrink-0" />
                <span className="text-white/60 text-sm">daynightdental@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Working Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-white/80">Monday – Friday</span>
                <span className="text-accent">9:00 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-white/80">Saturday</span>
                <span className="text-accent">9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-white/80">Sunday</span>
                <span className="text-accent">Emergency Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Day & Night Dental Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
