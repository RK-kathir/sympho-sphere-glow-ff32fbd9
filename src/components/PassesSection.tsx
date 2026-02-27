import MagneticButton from "./MagneticButton";

const passes = [
  // Tiers MUST be lowercase to match tierStyles
  { name: "diamond Pass", price: "₹649", desc: "Unlock access to 4 events with premium perks!", tier: "diamond", link: "#" },
  { name: "gold Pass", price: "₹499", desc: "Join 3 events with exclusive benefits!", tier: "gold", link: "#" },
  { name: "silver Pass", price: "₹349", desc: "Experience 2 events with essential access!", tier: "silver", link: "#" },
];

const tierStyles = {
  diamond: { gradient: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", icon: "👑" },
  gold: { gradient: "from-gray-300/20 to-transparent", border: "border-gray-400/30", icon: "⚡" },
  silver: { gradient: "from-orange-600/20 to-transparent", border: "border-orange-500/30", icon: "🔥" },
};

const PassesSection = () => {
  return (
    <section id="passes" className="relative z-10 py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div>
        <h2 className="section-title">Event Passes</h2>
        <p className="section-subtitle">Choose your pass and join the symposium</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {passes.map((pass) => (
          // NO TiltCard, just a fast standard div
          <div key={pass.name} className="h-full">
            <div className={`rounded-2xl p-8 flex flex-col items-center gap-4 h-full bg-gradient-to-b bg-[#111] backdrop-blur-none ${tierStyles[pass.tier].gradient} ${tierStyles[pass.tier].border} border`}>
              <span className="text-4xl">{tierStyles[pass.tier].icon}</span>
              <h3 className="font-heading text-xl font-bold text-white">{pass.name}</h3>
              <span className="font-heading text-4xl font-extrabold text-[#ff2d2d]">{pass.price}</span>
              <p className="font-body text-gray-400 text-center text-xs">{pass.desc}</p>
              <a href={pass.link} className="mt-auto block w-full">
                <MagneticButton variant="glass" className="w-full bg-black/50">Get Pass</MagneticButton>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PassesSection;
