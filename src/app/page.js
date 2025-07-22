import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import HomeSection from "@/components/HomeSection";
import Projects from "@/components/Projects";



export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0a0b1f] via-[#111c48]  to-[#0a0b1f]">
      <div className="container">
        <HomeSection />
        <AboutSection />
      </div>
    </main>
  );
}
