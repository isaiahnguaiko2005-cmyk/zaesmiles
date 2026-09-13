import type { Metadata } from "next";
import MediaKit from "@/components/MediaKit";

export const metadata: Metadata = {
  title: "Media Kit — Zae Smiles",
  description: "Partner with Mitch — audience stats, engagement rates, and brand partnership options.",
};

export default function PartnershipsPage() {
  return <MediaKit />;
}
