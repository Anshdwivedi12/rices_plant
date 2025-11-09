import { Metadata } from "next";
import ServicesListing from "@/components/Services/ServicesListing";

export const metadata: Metadata = {
  title: "Rice Mill Services | Installation, Commissioning & Support | India",
  description: "Comprehensive rice mill services: Turnkey installation, plant design, machinery supply, automation, parboiling, commissioning, training, and after-sales support.",
};

export default function ServicesPage() {
  return <ServicesListing />;
}

