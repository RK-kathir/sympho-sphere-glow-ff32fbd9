import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  "https://i.ibb.co/tTkP9K8Z/dept-photo1.jpg",
  "https://i.ibb.co/YF3BhY2n/dept-photo-2.jpg",
  "https://i.ibb.co/fYZ1BXGS/dept-photo-3.jpg",
  "https://i.ibb.co/yctbJ2cQ/dept-photo-4.jpg",
];

const aboutText = `Founded in 1949, Madras Institute of Technology (MIT) is a pioneering engineering institute in India, located in Chromepet, Chennai. It is renowned for its state-of-the-art facilities, housing over 3,000 students across various disciplines. The Department of Instrumentation Engineering at MIT has a rich legacy of producing world-class engineers and innovators. This symposium aims to showcase and continue that legacy, providing a platform for technical brilliance amidst historical academic excellence.`;

const AboutMIT = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about-mit" className="relative z-10 py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center md:text-left"
      >
        <h2 className="section-title text-white">About MIT</h2>
        <p className="section-subtitle">Madras Institute of Technology — A Legacy of Excellence</p>
      </motion.div>

      {/* ---------------- MERGED CONTAINER ---------------- */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl min-h-[450px] md:min-h-[500px] flex items-center justify-center p-4 md:p-12">
        
        {/* --- BACKGROUND LAYER: SLIDER WITH MEMORY EFFECT --- */}
        <div className="absolute inset-0 z-0 bg-black">
          
          {/* 1. Noise/Grain Overlay */}
          <div 
            className="absolute inset-0 z-30 opacity-30 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* 2. Dark Overlay & Vignette (Protects Text Readability) */}
          <div className="absolute inset-0 z-20 bg-black/50 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] pointer-events-none" />

          {/* Images with Vintage Filters */}
          {slides.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`MIT Department ${i + 1}`}
              // Darkened the brightness slightly so the white text pops more
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[40%] sepia-[40%] contrast-[110%] brightness-[65%]"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: i === current ? 1 : 0,
                scale: i === current ? 1 : 1.05
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* --- FOREGROUND LAYER: TEXT INSIDE GLASS BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 max-w-4xl bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-12 rounded-xl text-center shadow-xl"
        >
          <p className="font-body text-gray-200 leading-relaxed text-sm md:text-lg">
            {aboutText}
          </p>
        </motion.div>

        {/* --- NAVIGATION DOTS --- */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#ff2d2d] scale-125 shadow-[0_0_10px_#ff2d2d]" : "bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
      {/* -------------------------------------------------- */}
    </section>
  );
};

export default AboutMIT;
