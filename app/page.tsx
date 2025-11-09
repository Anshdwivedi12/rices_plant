import Hero from "@/components/Home/Hero";
import VideoSection from "@/components/Home/VideoSection";
import ProcessOverview from "@/components/Home/ProcessOverview";
import Solutions from "@/components/Home/Solutions";
import Testimonials from "@/components/Home/Testimonials";
import ContactSection from "@/components/Home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <ProcessOverview />
      <Solutions />
      <Testimonials />
      <ContactSection />
    </>
  );
}

