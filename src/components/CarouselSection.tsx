import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TiltCard from "./TiltCard";
import EventModal from "./EventModal";
import MagneticButton from "./MagneticButton";

const CarouselSection = ({ id, title, subtitle, items, showRegister = false }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="relative z-10 py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </motion.div>

      {/* Navigation arrows only for desktop to save mobile CPU */}
      {!isMobile && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 z-30 pointer-events-none">
          <button onClick={() => scroll("left")} className="p-2 glass rounded-full pointer-events-auto hover:bg-primary/20 transition-all">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 glass rounded-full pointer-events-auto hover:bg-primary/20 transition-all">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      <div className="relative mt-10" style={{ perspective: isMobile ? "none" : "1200px" }}>
        <motion.div 
          ref={scrollRef} 
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", transform: "translateZ(0)" }}
        >
          {items.map((item, i) => (
            <motion.div 
              key={item.title} 
              className="snap-center shrink-0 w-64 md:w-72"
              initial={isMobile ? { opacity: 0 } : { rotateY: 45, opacity: 0 }}
              whileInView={isMobile ? { opacity: 1 } : { rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <TiltCard className="h-full">
                <div className="glass rounded-xl p-6 flex flex-col items-center gap-4 h-full border border-white/10 bg-black/30 shadow-2xl">
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 rounded-lg object-cover cursor-pointer" 
                    onClick={() => setModal(item)}
                    whileHover={{ scale: 1.1 }}
                  />
                  <h3 className="font-heading text-lg font-bold text-center capitalize text-foreground">{item.title}</h3>
                  <p className="font-body text-xs text-muted-foreground text-center line-clamp-2">{item.description}</p>
                  
                  {showRegister && item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto block w-full">
                      <MagneticButton variant="glass" className="w-full text-xs py-2">
                        Register
                      </MagneticButton>
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <EventModal open={!!modal} onClose={() => setModal(null)} title={modal?.title || ""} description={modal?.description || ""} image={modal?.image || ""} />
    </section>
  );
};

export default CarouselSection;
