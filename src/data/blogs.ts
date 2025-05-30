import { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    slug: "api-security-best-practices",
    title: "API Security Best Practices for Modern Applications",
    summary: "Comprehensive guide to securing APIs and GraphQL endpoints based on real-world experience at Dream11 and Levo.ai.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    publishedAt: "2024-01-15",
    readTime: "12 min read",
    tags: ["API Security", "GraphQL", "Security Testing"],
  },
  {
    slug: "mobile-app-security-guide",
    title: "Mobile Application Security: iOS & Android Testing",
    summary: "Essential techniques for securing mobile applications, from static analysis to runtime testing with tools like Frida and mobSF.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    tags: ["Mobile Security", "iOS", "Android", "Frida"],
  },
  {
    slug: "bug-bounty-hunting-strategies",
    title: "Bug Bounty Hunting: Strategies That Actually Work",
    summary: "Proven methodologies and techniques from finding 30+ vulnerabilities in companies like Dell, Ford, LinkedIn, and Zerodha.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    publishedAt: "2024-01-05",
    readTime: "15 min read",
    tags: ["Bug Bounty", "Vulnerability Research", "Penetration Testing"],
  },
  {
    slug: "cloud-security-aws-gcp",
    title: "Cloud Security: Securing AWS and GCP Infrastructure",
    summary: "Practical approaches to cloud security, including WAF configuration, Cloud Armor, and Infrastructure as Code security.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    publishedAt: "2024-01-01",
    readTime: "14 min read",
    tags: ["Cloud Security", "AWS", "GCP", "Infrastructure Security"],
  },
  {
    slug: "sast-cicd-integration",
    title: "Integrating SAST Tools into CI/CD Pipelines",
    summary: "How to effectively integrate static application security testing into your development workflow for continuous security.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-12-20",
    readTime: "11 min read",
    tags: ["SAST", "CI/CD", "DevSecOps", "Automation"],
  },
  {
    slug: "burp-suite-extensions",
    title: "Building Effective Burp Suite Extensions",
    summary: "Guide to creating custom Burp Suite extensions for enhanced security testing, including lessons from building Re-inspector.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-12-15",
    readTime: "9 min read",
    tags: ["Burp Suite", "Security Tools", "Extension Development"],
  },
];

// Helper function to get a blog by slug
export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogs.find(blog => blog.slug === slug);
};

// Helper function to get featured blogs (first 4)
export const getFeaturedBlogs = (): BlogPost[] => {
  return blogs.slice(0, 4);
}; 