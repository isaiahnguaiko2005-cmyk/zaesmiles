import type { Metadata } from "next";
import Ask from "@/components/Ask";

export const metadata: Metadata = {
  title: "Ask Mitch — Zae Smiles",
  description: "Ask a question for the UNMONITORED podcast.",
};

export default function AskPage() {
  return <Ask />;
}
