import { motion } from "framer-motion";
import name1 from "@/assets/name-1.png";
import name2 from "@/assets/name-2.png";
import MagneticButton from "./MagneticButton";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Lightweight Ambient Glow Animation (Replaces heavy GLB 3D Model) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: ["-2rem", "2rem", "-2rem"], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[15rem] h-[15rem] rounded-full bg-[#ff2d2d] blur-[8rem] opacity-20"
        />
        <motion.div
          animate={{ y: ["2rem", "-2rem", "2rem"], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-[20rem] h-[20rem] rounded-full bg-[#6a5acd] blur-[10rem] opacity-20"
        />
      </div>

      {/* Foreground Glass Box using rem for perfect mobile scaling */}
      <motion.div
        initial={{ opacity: 0, y: "3rem", scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 glass-strong rounded-[1.5rem] p-[2rem] md:p-[3rem] flex flex-col items-center gap-[1rem] w-[90%] max-w-[40rem] mx-auto shadow-2xl"
      >
        <motion.img
          src={name1}
          alt="INTECHO'26"
          className="w-[18rem] md:w-[25rem] h-auto"
          animate={{ y: [0, "-0.5rem", 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <p className="font-heading text-[0.65rem] md:text-[0.85rem] uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground text-center">
          Instrumentation Engineers Association
        </p>
        
        <p className="font-body italic text-[#ff2d2d] text-[0.85rem] md:text-[1rem] lowercase">
          presents
        </p>
        
        <motion.img
          src={name2}
          alt="IEA"
          className="w-[12rem] md:w-[18rem] h-auto"
          animate={{ y: [0, "-0.3rem", 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: "1rem" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-[1rem] flex flex-col sm:flex-row gap-[1rem] w-full sm:w-auto"
        >
          <div className="w-full sm:w-auto">
            <MagneticButton variant="primary" onClick={() => scrollTo("passes")}>
              Get Your Pass
            </MagneticButton>
          </div>
          <div className="w-full sm:w-auto">
            <MagneticButton variant="glass" onClick={() => scrollTo("tech-events")}>
              Explore Events
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-[2rem] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-[0.5rem]"
        animate={{ y: [0, "0.5rem", 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-muted-foreground text-[0.6rem] md:text-[0.7rem] font-body tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-[2rem] bg-gradient-to-b from-[#ff2d2d] to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
