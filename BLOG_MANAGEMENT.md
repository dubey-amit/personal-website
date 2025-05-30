# Blog Management Guide

This guide explains how to add new blog posts to your portfolio without modifying any code files.

## How to Add a New Blog Post

### Step 1: Add Blog Metadata

Open the file `src/data/blogs.ts` and add a new blog entry to the `blogs` array:

```typescript
{
  slug: "your-blog-slug",
  title: "Your Blog Title",
  summary: "A brief summary of your blog post content.",
  image: "https://images.unsplash.com/photo-example.jpg",
  publishedAt: "2024-01-01",
  readTime: "8 min read",
  tags: ["Security", "Your", "Tags"],
}
```

**Field Descriptions:**
- `slug`: URL-friendly identifier (no spaces, lowercase, hyphens for separation)
- `title`: The blog post title that appears on the blog listing
- `summary`: Brief description shown on blog cards
- `image`: Unsplash image URL for the blog card (optional but recommended)
- `publishedAt`: Publication date in YYYY-MM-DD format
- `readTime`: Estimated reading time
- `tags`: Array of relevant tags for categorization

### Step 2: Add Blog Content

Open `src/app/blog/[slug]/page.tsx` and:

1. Add a condition for your new blog slug in the blog content section:
```typescript
{blog.slug === "your-blog-slug" && <YourBlogContent />}
```

2. Create a new content component at the bottom of the file:
```typescript
function YourBlogContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Your blog content goes here...
      </p>
      
      <h2 className="text-2xl font-bold text-white mb-6">Main Section</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-4">
        More content...
      </p>
      
      <h2 className="text-2xl font-bold text-white mb-6">Conclusion</h2>
      <p className="text-white/70 text-lg leading-relaxed">
        Wrap up your thoughts...
      </p>
    </div>
  );
}
```

## Example: Adding a New Security Blog

Let's say you want to add a blog about "Web Application Firewall Configuration":

### Step 1: Update blogs.ts
```typescript
{
  slug: "waf-configuration-guide",
  title: "Web Application Firewall Configuration Best Practices",
  summary: "Comprehensive guide to configuring WAF rules for optimal security coverage while minimizing false positives.",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  publishedAt: "2024-02-01",
  readTime: "12 min read",
  tags: ["WAF", "Cloud Security", "AWS", "GCP"],
}
```

### Step 2: Add Content Component
```typescript
// Add this line in the blog content section:
{blog.slug === "waf-configuration-guide" && <WAFConfigContent />}

// Add this function at the bottom:
function WAFConfigContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Web Application Firewalls (WAF) are essential for protecting web applications 
        from common attacks. Based on experience managing AWS WAF and GCP Cloud Armor 
        at scale, here are the best practices for effective WAF configuration.
      </p>
      
      <h2 className="text-2xl font-bold text-white mb-6">Rule Configuration</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-4">
        Start with OWASP Core Rule Set and customize based on your application's 
        specific needs. Monitor false positives and adjust rules accordingly.
      </p>
      
      <h2 className="text-2xl font-bold text-white mb-6">Monitoring & Tuning</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Implement comprehensive logging and set up alerts for blocked requests. 
        Regular tuning is essential for maintaining effectiveness.
      </p>
      
      <h2 className="text-2xl font-bold text-white mb-6">Conclusion</h2>
      <p className="text-white/70 text-lg leading-relaxed">
        Effective WAF configuration requires ongoing monitoring and tuning. 
        Start with baseline rules and gradually customize based on your traffic patterns.
      </p>
    </div>
  );
}
```

## Blog Organization Tips

- **Keep slugs descriptive**: Use clear, SEO-friendly slugs
- **Use relevant tags**: Help readers find related content
- **Optimize images**: Use high-quality images from Unsplash
- **Write engaging summaries**: These appear on the blog listing page
- **Update regularly**: Keep content fresh and relevant

## Current Blog Topics

Your portfolio currently includes blogs on:
- API Security Best Practices
- Mobile Application Security
- Bug Bounty Hunting Strategies  
- Cloud Security (AWS/GCP)
- SAST Integration in CI/CD
- Burp Suite Extensions

## Need Help?

If you need assistance with:
- Adding complex formatting
- Including code examples
- Adding images or diagrams
- SEO optimization

Please refer to the Next.js documentation or contact the development team.

---

*This guide enables you to manage blog content without any code changes. Simply edit the data files and add your content components.* 