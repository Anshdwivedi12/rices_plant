import { Metadata } from "next";
import ProductDetail from "@/components/Products/ProductDetail";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Product Details | Rice Mill Machinery`,
    description: "Detailed specifications and information about our rice mill machinery products.",
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetail productId={params.id} />;
}

