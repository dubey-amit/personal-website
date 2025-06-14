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
    content: `# API Security Best Practices for Modern Applications

APIs (Application Programming Interfaces) are the backbone of modern applications, enabling seamless communication between different services, applications, and systems. However, with great connectivity comes great responsibility – securing APIs is crucial to prevent data breaches, unauthorized access, and system compromises.

Based on my experience securing APIs at Dream11 and building security solutions at Levo.ai, here's a comprehensive guide to API security best practices.

## Understanding the API Attack Surface

APIs expose your application's functionality to external consumers, making them a prime target for attackers. Common API vulnerabilities include:

- **Broken Authentication & Authorization**: Weak or missing authentication mechanisms
- **Excessive Data Exposure**: APIs returning more data than necessary
- **Rate Limiting Issues**: Lack of proper throttling mechanisms
- **Injection Attacks**: SQL, NoSQL, or command injection through API parameters
- **Security Misconfiguration**: Default settings and exposed debugging endpoints

## Authentication and Authorization

### 1. Implement Strong Authentication

Never rely on API keys alone for authentication. Use robust authentication mechanisms:

- **OAuth 2.0 with PKCE**: For public clients and mobile applications
- **JWT (JSON Web Tokens)**: For stateless authentication with proper signature verification
- **Mutual TLS (mTLS)**: For service-to-service communication

### 2. Follow the Principle of Least Privilege

- Implement role-based access control (RBAC)
- Use scoped permissions for different API endpoints
- Regularly audit and rotate API keys and tokens

\`\`\`javascript
// Example: JWT with proper validation
const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
}
\`\`\`

## Input Validation and Sanitization

### 1. Validate All Inputs

- Use schema validation (JSON Schema, OpenAPI specifications)
- Implement whitelist-based validation
- Sanitize inputs to prevent injection attacks

### 2. Rate Limiting and Throttling

Implement comprehensive rate limiting to prevent abuse:

\`\`\`javascript
// Example: Express rate limiting
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', apiLimiter);
\`\`\`

## Security Headers and HTTPS

### 1. Enforce HTTPS Everywhere

- Use TLS 1.3 or at minimum TLS 1.2
- Implement HTTP Strict Transport Security (HSTS)
- Use certificate pinning for mobile applications

### 2. Set Proper Security Headers

\`\`\`javascript
// Express.js security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});
\`\`\`

## Real-world Implementation at Scale

### Lessons from Dream11

At Dream11, where we handled millions of API requests during peak traffic:

1. **Microservices Security**: Each service had its own authentication and authorization layer
2. **API Gateway**: Centralized security policies, rate limiting, and monitoring
3. **Circuit Breakers**: Prevented cascade failures during high load
4. **Redis-based Rate Limiting**: Distributed rate limiting across multiple instances

### Insights from Levo.ai

Building API security solutions taught us:

1. **API Discovery**: Many organizations don't know all their APIs
2. **Shadow APIs**: Undocumented APIs pose significant security risks
3. **Data Classification**: Understanding what data your APIs expose is crucial
4. **Behavioral Analysis**: Normal vs. abnormal API usage patterns

## Conclusion

API security is not a one-time implementation but an ongoing process. As APIs evolve and new threats emerge, security measures must adapt accordingly. The key is to build security into the development lifecycle from the beginning, not as an afterthought.

Remember: **Security is not just about preventing attacks – it's about building trust with your users and partners.**

Regular security assessments, staying updated with the latest threats, and continuous monitoring are essential for maintaining robust API security in production environments.`,
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