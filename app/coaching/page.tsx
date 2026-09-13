import type { Metadata } from "next";
import Coaching from "@/components/Coaching";

export const metadata: Metadata = {
  title: "Coaching — Zae Smiles",
  description: "1:1 coaching for social anxiety. Foundation and Elite tiers, opening soon.",
};

export default function CoachingPage() {
  return <Coaching />;
}
