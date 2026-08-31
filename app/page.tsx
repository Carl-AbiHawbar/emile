import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Stats from "@/components/sections/Stats";
import Profile from "@/components/sections/Profile";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Stats />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
