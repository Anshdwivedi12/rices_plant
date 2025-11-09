import { Metadata } from "next";
import ContactPage from "@/components/Contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Rice Mill Machinery Company | Get Quote",
  description: "Contact us for rice mill machinery installation, quotes, and support. Call 1800-274-1355 or visit our office in Hyderabad. We reply within 48 hours.",
};

export default function Contact() {
  return <ContactPage />;
}

