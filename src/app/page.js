import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import HomeSection from "@/components/HomeSection";
import Projects from "@/components/Projects";



export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0c0d25] via-[#22306b] to-[#121438]">
      <div className="container">
        <HomeSection />
        <AboutSection />
      </div>
    </main>
  );
}
