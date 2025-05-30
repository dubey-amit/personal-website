import React from "react";
import Image from "next/image";
import PageLayout from "@/components/page-layout";
import BlogCard from "@/components/blog-card";
import { blogs } from "@/data/blogs";
import { socialFeeds } from "@/data/social-feeds";

export default function BlogPage() {
  return (
    <PageLayout currentPage="Blog">
      {/* Page Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-8">
        {/* Blog Listing */}
        <section className="flex-1">
          <h1 className="text-[#55b291] text-4xl md:text-5xl font-bold mb-12">Blogs</h1>
          <div className="space-y-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </section>

        {/* Social Media Feeds */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <h2 className="text-2xl font-bold mb-6 text-white/90">Social Feeds</h2>
          <div className="space-y-4">
            {socialFeeds.map((feed, idx) => (
              <a
                key={idx}
                href={feed.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block backdrop-blur-xl bg-white/[0.02] border border-white/[0.1] rounded-xl p-4 hover:bg-white/[0.05] transition-all duration-300 hover:scale-101 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-semibold text-white/90">{feed.user}</span>
                  <span className="ml-auto text-xs text-white/50 flex items-center gap-1">
                    {feed.icon}
                    {feed.platform}
                  </span>
                </div>
                <div className="text-white/70 text-sm mb-3 leading-relaxed">{feed.content}</div>
                {feed.image && (
                  <Image 
                    src={feed.image} 
                    alt="Social media post" 
                    width={320}
                    height={128}
                    className="w-full h-32 object-cover rounded-lg mb-3 border border-white/[0.1]" 
                  />
                )}
                <div className="flex gap-4">
                  {feed.actions.map((action, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-white/40 hover:text-[#55b291] transition-colors duration-200 text-sm"
                      title={action.label}
                    >
                      {action.icon}
                      <span className="text-xs hidden sm:inline">{action.label}</span>
                      <span className="ml-1 text-xs font-semibold text-white/60">{action.count}</span>
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </PageLayout>
  );
} 