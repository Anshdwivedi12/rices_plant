import { Metadata } from "next";
import GalleryPage from "@/components/Gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Rice Mill Projects & Machinery Photos | India",
  description: "Browse our gallery of completed rice mill projects, machinery installations, and plant photos from across India.",
};

export default function Gallery() {
  return <GalleryPage />;
}

