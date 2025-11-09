import { Metadata } from "next";
import ProductsListing from "@/components/Products/ProductsListing";

export const metadata: Metadata = {
  title: "Rice Mill Machinery Products | Complete Range | India",
  description: "Browse our complete range of rice mill machinery: Pre-cleaners, Huskers, Separators, Polishers, Graders, Color Sorters, and more. Premium quality equipment for your rice mill.",
};

export default function ProductsPage() {
  return <ProductsListing />;
}

