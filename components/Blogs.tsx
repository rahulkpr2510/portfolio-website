"use client";

import { site } from "@/content/site";
import { fetchHashnodePosts } from "@/lib/hashnode";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHashnodePosts(site.blogs.hashnodeUsername, site.blogs.limit)
      .then((res) => setPosts(res.slice(0, 3)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="blogs" className="max-w-6xl mx-auto px-6 py-20 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <h2 className="text-6xl font-extrabold text-white tracking-tighter">
          Latest Blogs
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-white to-fuchsia-500" />
        <p className="text-zinc-400 max-w-lg mx-auto text-base">
          Sharing insights, learnings, and thoughts from my journey.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Loading Skeletons */}
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-2xl bg-gray-800 animate-pulse"
            />
          ))}

        {/* No Posts */}
        {!loading && posts.length === 0 && (
          <div className="col-span-full text-center py-16 text-gray-500">
            No blog posts available 🚀
          </div>
        )}

        {/* Blog Cards */}
        {posts.map((post) => (
          <motion.a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 16px 32px rgba(216,180,254,0.25)",
            }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="relative flex flex-col rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 via-black to-black p-6 shadow-md overflow-hidden"
          >
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-white to-fuchsia-300" />

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-fuchsia-300 transition-colors">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-6 line-clamp-3">
              {post.brief}
            </p>

            {/* Footer */}
            <div className="mt-auto flex justify-between items-center text-xs text-gray-400">
              <span>⚡ {post.readTimeInMinutes} min read</span>
              <span className="text-fuchsia-400 font-medium hover:underline">
                Read →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
