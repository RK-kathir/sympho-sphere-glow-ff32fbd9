import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventModal from "./EventModal";
import MagneticButton from "./MagneticButton";

const CarouselSection = ({ id, title, items, showRegister = false }) => {
  const scrollRef = useRef(null);
  const [modal, setModal] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="relative z-10 py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h2 className="section-title text-white">{title}</h2>
      </div>

      {/* Desktop Navigation Arrows (Hidden on Mobile) */}
      <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-between px-4 z-30 pointer-events-none -translate-y-1/2">
        <button onClick={() => scroll("left")} className="p-3 bg-[#111] border border-white/10 rounded-full pointer-events-auto hover:bg-primary transition-colors shadow-lg">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button onClick={() => scroll("right")} className="p-3 bg-[#111] border border-white/10 rounded-full pointer-events-auto hover:bg-primary transition-colors shadow-lg">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* MOBILE SCROLL CONTAINER: 
        overflow-x-auto allows horizontal scrolling.
        scrollbarWidth: none hides the ugly scrollbar.
      */}
      <div className="relative w-full">
        <div 
          ref={scrollRef} 
          className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scroll-smooth"
          style={{ 
            scrollbarWidth: "none", /* Firefox */
            msOverflowStyle: "none", /* IE/Edge */
            WebkitOverflowScrolling: "touch" /* iOS Safari */
          }}
        >
          {items.map((item) => (
            <div 
              key={item.title} 
              // shrink-0 prevents squishing. w-[80vw] makes it look great on phones
              className="snap-center shrink-0 w-[80vw] max-w-[300px] md:w-72"
            >
              <div className="rounded-xl p-6 flex flex-col items-center gap-4 h-full border border-white/10 bg-[#111] shadow-xl hover:border-white/20 transition-colors">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform" 
                  onClick={() => setModal(item)}
                />
                <h3 className="font-heading text-lg font-bold text-center capitalize text-white">{item.title}</h3>
                <p className="font-body text-sm text-gray-400 text-center line-clamp-2">{item.description}</p>
                
                {showRegister && item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto block w-full z-20">
                    <MagneticButton variant="solid" className="w-full text-xs py-3 bg-[#222] hover:bg-[#ff2d2d] text-white transition-colors">
                      Register
                    </MagneticButton>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS to hide webkit scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}} />

      <EventModal 
        open={!!modal} 
        onClose={() => setModal(null)} 
        title={modal?.title || ""} 
        description={modal?.description || ""} 
        image={modal?.image || ""} 
      />
    </section>
  );
};

export default CarouselSection;
