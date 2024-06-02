import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { PostCard } from "@/components/PostCard";
import Bounded from "@/components/Bounded";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  let page;

  try {
    page = await client.getByUID("blog_post", params.uid);
  } catch {
    return notFound();
  }

  const { title, meta_description, meta_title, meta_image } = page.data;

  return {
    title: prismic.asText(title),
    description: meta_description || "",
    openGraph: {
      title: meta_title || prismic.asText(title) || "",
      images: [
        {
          url: meta_image?.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  let page;

  try {
    page = await client.getByUID("blog_post", params.uid);
  } catch {
    return notFound();
  }

  const { slices, title, publication_date, description, featured_image } = page.data;

  /**
   * Fetch all of the blog posts in Prismic (max 2), excluding the current one, and ordered by publication date.
   */
  const posts = await client.getAllByType("blog_post", {
    predicates: [prismic.predicate.not("my.blog_post.uid", params.uid)],
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 2,
  });

  return (
    <div className="flex flex-col gap-12 w-full m-auto">
      {/* Display the "hero" section of the blog post */}
      <Bounded className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-fuchsia-100 to-purple-100">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col gap-6 items-center">
            <p className="opacity-75 border-b-2 w-min pb-1">
              {new Date(publication_date || "").toLocaleDateString()}
            </p>
            <div className="text-center text-2xl font-bold">
              <PrismicRichText field={title} />
            </div>
          </div>
          <div className="m-auto text-center mb-3">
            <PrismicRichText field={description} />
          </div>
        </div>
        <PrismicNextImage
          field={featured_image}
          sizes="100vw"
          className="w-full max-w-3xl max-h-96 rounded-xl object-cover m-auto"
        />
      </Bounded>

      {/* Display the content of the blog post */}
      <SliceZone slices={slices} components={components} />

      {/* Display the Recommended Posts section using the posts we requested earlier */}
      <h2 className="font-bold text-3xl m-auto">Posts Recomendados</h2>
      <section className="grid md:grid-cols-2 gap-8 md:max-w-6xl w-full m-auto grid-cols-1 max-w-3xl">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("blog_post");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => ({
    uid: page.uid,
  }));
}
