import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Loaded with your actual department images
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
        className="mb-12"
      >
        <h2 className="section-title text-white">About MIT</h2>
        <p className="section-subtitle">Madras Institute of Technology — A Legacy of Excellence</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* ---------------- IMAGE SLIDER WITH MEMORY EFFECT ---------------- */}
        <div className="md:w-1/2 rounded-xl overflow-hidden relative aspect-[3/2] border border-white/10 shadow-2xl bg-black">
          
          {/* 1. The Noise/Grain Overlay */}
          <div 
            className="absolute inset-0 z-20 opacity-30 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* 2. The Vignette (Dark Edges) */}
          <div className="absolute inset-0 z-10 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none" />

          {/* Images with Vintage Filters */}
          {slides.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`MIT Department ${i + 1}`}
              // CSS Filters: Grayscale + Sepia + High Contrast = Memory effect
              className="absolute inset-0 w-full h-full object-cover rounded-xl filter grayscale-[30%] sepia-[40%] contrast-[115%] brightness-[85%]"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: i === current ? 1 : 0,
                scale: i === current ? 1 : 1.05
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}

          {/* Slider Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#ff2d2d] scale-125" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}

        {/* Text Section */}
        <div className="md:w-1/2 bg-[#111] border border-white/10 shadow-lg rounded-xl p-6 md:p-10 flex items-center">
          <p className="font-body text-gray-300 leading-relaxed text-sm md:text-base">
            {aboutText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMIT;
