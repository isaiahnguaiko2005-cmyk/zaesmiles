import type { Metadata } from "next";
import FreeGuides from "@/components/FreeGuides";

export const metadata: Metadata = {
  title: "Free Guides — Zae Smiles",
  description: "Free guides on social anxiety, dating psychology, and conversation. No email required.",
};

export default function GuidesPage() {
  return <FreeGuides />;
}
