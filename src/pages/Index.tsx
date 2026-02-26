import Header from "@/components/Header";
// Ensure this path matches your actual file structure to fix the build error
import Hero from "@/components/Hero"; 
import CarouselSection from "@/components/CarouselSection";
import PassesSection from "@/components/PassesSection";

const techEvents = [
  { 
    title: "tech guess", 
    description: "Test your technical knowledge in this fast-paced guessing game.", 
    image: "/api/placeholder/400/320",
    link: "https://intecho26.onrender.com/tech-guess" 
  },
  { 
    title: "Code craze", 
    description: "The ultimate competitive programming battle.", 
    image: "/api/placeholder/400/320",
    link: "https://intecho26.onrender.com/code-clash"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <PassesSection />
      
      <CarouselSection 
        id="tech-events"
        title="Technical Events"
        subtitle="Push your limits with our flagship competitions"
        items={techEvents}
        showRegister={true}
      />
    </main>
  );
}
