import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PostCard } from "@/components/PostCard";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  const posts = await client.getAllByType("blog_post", {
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });


  return( 
    <>
    <SliceZone slices={page.data.slices} components={components} />

    {/* Map over each of the blog posts created and display a `PostCard` for it */}
    <section className="max-w-5xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-fuchsia-100 to-purple-100">
      <h2 className="font-bold text-3xl mb-12 m-auto">Últimos Posts</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>

  </>
    

);
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
