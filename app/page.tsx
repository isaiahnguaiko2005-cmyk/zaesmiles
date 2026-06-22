import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Resources from "@/components/Resources";
import Coaching from "@/components/Coaching";
import BrandWork from "@/components/BrandWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:text-sm font-outfit"
        style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Socials />
        <Resources />
        <Coaching />
        <BrandWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
