import type { Metadata } from "next";
import About from "@/components/About";
import StoryTimeline from "@/components/StoryTimeline";
import Project300K from "@/components/Project300K";
import JaguarFType from "@/components/JaguarFType";

export const metadata: Metadata = {
  title: "About Mitch — Zae Smiles",
  description: "The story behind UNMONITORED, Project 300K, and why social anxiety is a calibration problem, not a personality trait.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <StoryTimeline />
      <Project300K />
      <JaguarFType />
    </>
  );
}
