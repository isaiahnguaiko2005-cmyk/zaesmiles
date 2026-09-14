import Hero from "@/components/Hero";
import TrackerSection from "@/components/TrackerSection";
import FreeResourcesTeaser from "@/components/FreeResourcesTeaser";
import GuideFinderQuiz from "@/components/GuideFinderQuiz";
import AboutTeaser from "@/components/AboutTeaser";
import ProductsTeaser from "@/components/ProductsTeaser";
import WorkWithMeTeaser from "@/components/WorkWithMeTeaser";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Hero />
      <TrackerSection />
      <GuideFinderQuiz />
      <FreeResourcesTeaser />
      <WorkWithMeTeaser />
      <AboutTeaser />
      <ProductsTeaser />
      <Socials />
    </>
  );
}
