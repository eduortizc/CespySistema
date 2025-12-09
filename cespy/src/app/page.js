
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services/>
      <Stats/>
      {/* Aquí pondremos los demás componentes después */}
    </main>
  );
}