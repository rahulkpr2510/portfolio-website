"use client";

import { Section } from "./Section";
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
    <Section id="blogs" title="Latest Blogs">
      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading && (
          <div className="col-span-full text-center py-16 text-gray-400">
            Loading...
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="col-span-full text-center py-16 text-gray-400">
            No blog posts available
          </div>
        )}

        {posts.map((post) => (
          <motion.a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.01 }}
            className="rounded-xl bg-black border border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden p-4 flex flex-col h-full"
          >
            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-300 text-sm mb-3 line-clamp-3">
              {post.brief}
            </p>
            <div className="mt-auto flex justify-between items-center text-xs text-gray-400">
              <span>⚡ {post.readTimeInMinutes} min read</span>
              <span className="text-cyan-400 font-semibold">Read →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
