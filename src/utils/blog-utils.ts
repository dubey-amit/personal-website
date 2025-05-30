import { BlogPost } from "@/types";

/**
 * Utility functions for blog management
 * These functions help with adding, filtering, and managing blog posts
 */

// Sort blogs by published date (newest first)
export const sortBlogsByDate = (blogs: BlogPost[]): BlogPost[] => {
  return blogs.sort((a, b) => {
    if (!a.publishedAt || !b.publishedAt) return 0;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
};

// Filter blogs by tag
export const filterBlogsByTag = (blogs: BlogPost[], tag: string): BlogPost[] => {
  return blogs.filter(blog => 
    blog.tags?.some(blogTag => 
      blogTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};

// Get all unique tags from blogs
export const getAllTags = (blogs: BlogPost[]): string[] => {
  const tags = new Set<string>();
  blogs.forEach(blog => {
    blog.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Search blogs by title or summary
export const searchBlogs = (blogs: BlogPost[], query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogs.filter(blog => 
    blog.title.toLowerCase().includes(lowercaseQuery) ||
    blog.summary.toLowerCase().includes(lowercaseQuery)
  );
};

// Generate blog slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Validate blog post data
export const validateBlogPost = (blog: Partial<BlogPost>): string[] => {
  const errors: string[] = [];
  
  if (!blog.title?.trim()) {
    errors.push('Title is required');
  }
  
  if (!blog.summary?.trim()) {
    errors.push('Summary is required');
  }
  
  if (!blog.slug?.trim()) {
    errors.push('Slug is required');
  }
  
  if (blog.publishedAt && isNaN(Date.parse(blog.publishedAt))) {
    errors.push('Published date must be a valid date');
  }
  
  return errors;
}; 