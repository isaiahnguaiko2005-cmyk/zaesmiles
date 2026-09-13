import type { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Products — Zae Smiles",
  description: "UNMONITORED and The Mitch Protocol — paid systems built to fix social anxiety at the root.",
};

export default function ProductsPage() {
  return <Products />;
}
