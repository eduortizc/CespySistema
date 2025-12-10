
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services/>
      <Stats/>
      <Footer/>
      {/* Aquí pondremos los demás componentes después */}
    </main>
  );
}