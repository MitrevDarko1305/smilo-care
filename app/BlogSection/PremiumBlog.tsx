import React from "react";
import RevealOnScroll from "../Animations/RevealOnScroll";

type Post = {
  typeLabel: string; // Article / Video / Case Study
  typeHref?: string;

  title: string;
  excerpt: string;
  href?: string;

  coverImageUrl: string;
  coverImageAlt?: string;

  authorName: string;
  authorHref?: string;
  authorAvatarUrl: string;

  dateLabel: string; // "Mar 16, 2020"
  dateTime: string; // "2020-03-16"
  readTime: string; // "6 min read"
};

const DEFAULT_POSTS: Post[] = [
  {
    typeLabel: "Treatment options",
    typeHref: "#!",
    title: " Treatment options",
    excerpt:
      "Clear explanations of available treatments, who they’re suited for, and how to choose the option that best fits your needs.",
    href: "#!",
    coverImageUrl:
      "/Smilo-Blog1.jpg",
    coverImageAlt: "",
    authorName: "Darko Mitrev",
    authorHref: "https://mitrevdarko.dev/",
    authorAvatarUrl:
      "/Darko-team.webp",
    dateLabel: "Jan 16, 2026",
    dateTime: "2026-01-16",
    readTime: "6 min read",
  },
  {
    typeLabel: "The process",
    typeHref: "#!",
    title: " The treatment journey",
    excerpt:
      "A step-by-step overview of your visit, including preparation, the procedure itself, and how we focus  comfort throughout.",
    href: "#!",
    coverImageUrl:
      "/Smilo-Blog2.jpg",
    coverImageAlt: "",
    authorName: "Mike Tretyak",
    authorHref: "#!",
    authorAvatarUrl:
      "/Mike-team.jpg",
    dateLabel: "Dec 10, 2025",
    dateTime: "2025-12-10",
    readTime: "4 min read",
  },
  {
    typeLabel: "Aftercare",
    typeHref: "#!",
    title: "Recovery, results, and care",
    excerpt:
      "What happens after treatment, expected recovery timelines, and how we support long-term results with proper aftercare.",
    href: "#!",
    coverImageUrl:
      "/Smilo-Blog3.png",
    coverImageAlt: "",
    authorName: "Darko Mitrev",
    authorHref: "https://mitrevdarko.dev/",
    authorAvatarUrl:
      "/Darko-team.webp",
    dateLabel: "Feb 1, 2026",
    dateTime: "2026-02-01",
    readTime: "11 min read",
  },
];

function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-[#f8f6f2]  transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl">
      <RevealOnScroll>
      <div className="flex-shrink-0 ">
        <img
          className="h-48 w-full object-cover"
          src={post.coverImageUrl}
          alt={post.coverImageAlt ?? post.title}
          loading="lazy"
        />
      </div>
      </RevealOnScroll>

      <div className="flex flex-1 flex-col justify-between bg-transparent p-4">
        <RevealOnScroll>
        <div className="flex-1 ">
          <RevealOnScroll>
          <p className="text-sm font-medium text-primary">
            <a href={post.typeHref ?? "#"} className="hover:underline">
              {post.typeLabel}
            </a>
          </p>
          </RevealOnScroll>
          <a href={post.href ?? "#"} className="mt-2 block">
            <p className="text-xl font-semibold text-foreground">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
          </a>
        </div>
        </RevealOnScroll>

        <div className="mt-6 flex items-center">
          <RevealOnScroll>
          <div className="flex-shrink-0">
            <RevealOnScroll>
            <a href={post.authorHref ?? "#"}>
              <RevealOnScroll>
              <span className="sr-only">{post.authorName}</span> </RevealOnScroll>
              <RevealOnScroll>
              <img
                className="h-10 w-10 rounded-full"
                src={post.authorAvatarUrl}
                alt={post.authorName}
                loading="lazy"
              />
              </RevealOnScroll>
            </a>
            </RevealOnScroll>
          </div>
          </RevealOnScroll>

          <div className="ml-3">
            <RevealOnScroll>
            <p className="text-sm font-medium text-gray-900">
              <RevealOnScroll>
              <a href={post.authorHref ?? "#"} className="hover:underline">
                {post.authorName}
              </a>
              </RevealOnScroll>
            </p>
            </RevealOnScroll>

            <div className="flex space-x-1 text-sm text-gray-500">
              <RevealOnScroll>
              <time dateTime={post.dateTime}>{post.dateLabel}</time> </RevealOnScroll>
              <span aria-hidden="true">·</span>
              <RevealOnScroll>
              <span>{post.readTime}</span> </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export type ColumnPostsProps = {
  title?: string;
  subtitle?: string;
  posts?: Post[];
  className?: string;
};

export default function ColumnPosts({
  title = "Everything you need to know",
  subtitle = "Practical explanations  covering treatment options,  the process itself, and what to expect after your visit",
  posts = DEFAULT_POSTS,
  className = "",
}: ColumnPostsProps) {
  return (
    <section className={`relative bg-[#fff] px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28 ${className}`}>
      <div className="absolute inset-0" aria-hidden="true">
        <div className="h-1/3 bg-transparent sm:h-2/3" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <RevealOnScroll>
        <div className="text-center">
          <RevealOnScroll>
          <h2 className="text-[45px] font-medium mb-2 tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          </RevealOnScroll>
          <RevealOnScroll>
          <p className="mx-auto mt-3 max-w-xl text-md text-foreground/50 sm:mt-4">
            {subtitle}
          </p>
          </RevealOnScroll>
        </div>
        </RevealOnScroll>

       
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={`${post.title}-${post.dateTime}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
