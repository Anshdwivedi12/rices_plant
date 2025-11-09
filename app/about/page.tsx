import { Metadata } from "next";
import AboutPage from "@/components/About/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Rice Mill Machinery Company | 50+ Years Experience",
  description: "Leading rice mill machinery installation company with 50+ years of experience. 1000+ plants installed across India. Expert team, ISO certified, trusted by industry leaders.",
};

export default function About() {
  return <AboutPage />;
}

