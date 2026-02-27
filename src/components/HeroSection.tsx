import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
        
        {/* 1. IEA Logo / Name-1 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <img 
            src="/name-1.png" 
            alt="IEA" 
            className="w-48 md:w-64 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>

        {/* 2. Association Name & "Presents" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center flex flex-col items-center mb-8"
        >
          <p className="font-heading text-[0.65rem] md:text-[0.85rem] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300 text-center">
            Instrumentation Engineers Association
          </p>
          
          <p className="font-syne text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.4em] text-[#ff2d2d] text-center mt-3 font-bold">
            Presents
          </p>
        </motion.div>

        {/* 3. Main INTECHO Logo / Name-2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <img 
            src="/name-2.png" 
            alt="INTECHO'26" 
            className="w-80 md:w-[32rem] lg:w-[40rem] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>

        {/* 4. Subtitle / Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            A national level technical symposium bringing together the brightest minds in engineering.
          </p>
        </motion.div>

        {/* 5. Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4"
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
