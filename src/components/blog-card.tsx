
import { BlogPost } from "@/types";
import Image from "next/image";

interface BlogCardProps {
  blog: BlogPost;
  showImage?: boolean;
  className?: string;
}

export default function BlogCard({ blog, showImage = false, className = "" }: BlogCardProps) {
  return (
    <a
      href={`/blog/${blog.slug}`}
      className={`group block backdrop-blur-xl bg-white/[0.02] border border-white/[0.1] rounded-xl p-6 hover:bg-white/[0.05] transition-all duration-300 hover:scale-101 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-pointer ${className}`}
    >
      <div className="flex items-start gap-4">
        {showImage && blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={150}
            height={100}
            className="rounded-lg flex-shrink-0 object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-white/90 group-hover:text-[#55b291] transition-colors duration-200">
            {blog.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-2">
            {blog.summary}
          </p>
          {(blog.publishedAt || blog.readTime) && (
            <div className="flex gap-4 text-xs text-white/50">
              {blog.publishedAt && <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>}
              {blog.readTime && <span>{blog.readTime}</span>}
            </div>
          )}
        </div>
      </div>
    </a>
  );
} 