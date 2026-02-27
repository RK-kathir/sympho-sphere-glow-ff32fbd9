import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
        
        {/* 1. Bigger, Smoothly Rotating IEA Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* The rotate: 360 with linear ease makes it spin endlessly and smoothly like a gear */}
          <motion.img 
            src="/name-1.png" 
            alt="IEA Logo" 
            className="w-56 md:w-80 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>

        {/* 2. Big Retro/Modern IEA Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-center"
        >
          <h1 
            className="text-7xl md:text-[8rem] font-syne font-black text-[#ff2d2d] tracking-widest uppercase"
            style={{
              /* Mixes a classic retro hard-shadow with a modern neon glow */
              textShadow: "4px 4px 0px rgba(255,255,255,0.1), 0 0 50px rgba(255,45,45,0.6)"
            }}
          >
            IEA
          </h1>
        </motion.div>

        {/* 3. Full Association Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 text-center"
        >
          <p className="font-heading text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.4em] text-gray-300">
            Instrumentation Engineers Association
          </p>
        </motion.div>

        {/* 4. "Presents" */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 text-center relative"
        >
          <p className="font-syne text-xs md:text-sm uppercase tracking-[0.6em] text-[#ff2d2d] font-bold">
            Presents
          </p>
          {/* A small decorative glowing line to separate the sections */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-[#ff2d2d] to-transparent opacity-50"></div>
        </motion.div>

        {/* 5. Main INTECHO Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10 mt-4"
        >
          <img 
            src="/name-2.png" 
            alt="INTECHO'26" 
            className="w-80 md:w-[36rem] lg:w-[45rem] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>

        {/* 6. Subtitle / Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <p className="font-body text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            A national level technical symposium bringing together the brightest minds in engineering.
          </p>
        </motion.div>

        {/* 7. Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 md:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4"
        >
          <a href="#passes" className="w-full sm:w-auto">
            <MagneticButton variant="solid" className="w-full sm:w-auto px-8 py-4 text-sm bg-[#ff2d2d] hover:bg-[#ff102a] text-white">
              Get Passes
            </MagneticButton>
          </a>
          <a href="#tech-events" className="w-full sm:w-auto">
            <MagneticButton variant="glass" className="w-full sm:w-auto px-8 py-4 text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white">
              Explore Events
            </MagneticButton>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;
