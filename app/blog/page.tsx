import { Metadata } from "next";
import BlogListing from "@/components/Blog/BlogListing";

export const metadata: Metadata = {
  title: "Blog | Rice Mill Industry News, Tips & Case Studies",
  description: "Read our latest blogs on rice mill technology, maintenance tips, case studies, industry news, and how-to guides.",
};

export default function Blog() {
  return <BlogListing />;
}

