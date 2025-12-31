
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Contactos from "@/components/Contactos";
import Promotions from "@/components/Promotions";
import AboutUs from "@/components/AboutUs";
export default function Home() {
  return (
    <main>
      <Hero/>
      <Promotions/> 
      <AboutUs/>
      <Services/>
      <Contactos/>
      <Footer/>
    </main>
  );
}