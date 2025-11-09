import { Metadata } from "next";
import BlogPost from "@/components/Blog/BlogPost";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Blog Post | Rice Mill Machinery`,
    description: "Read our latest blog post about rice mill machinery and industry insights.",
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPost postId={params.id} />;
}

