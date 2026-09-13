import Hero from "@/components/Hero";
import TrackerSection from "@/components/TrackerSection";
import FreeResourcesTeaser from "@/components/FreeResourcesTeaser";
import AboutTeaser from "@/components/AboutTeaser";
import ProductsTeaser from "@/components/ProductsTeaser";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Hero />
      <TrackerSection />
      <FreeResourcesTeaser />
      <AboutTeaser />
      <ProductsTeaser />
      <Socials />
    </>
  );
}
