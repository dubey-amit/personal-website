import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { notFound } from "next/navigation";
import PageLayout from "@/components/page-layout";
import { getBlogBySlug, blogs } from "@/data/blogs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <PageLayout>
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto mt-8 mb-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-white/70 hover:text-[#55b291] transition-colors duration-200"
        >
          <FaArrowLeft className="text-sm" />
          Back to Blog
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto backdrop-blur-xl bg-white/[0.02] border border-white/[0.1] rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        {/* Title and Meta */}
        <header className="mb-8">
          <h1 className="text-[#55b291] text-4xl md:text-5xl font-bold mb-4">
            {blog.title}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-4">
            {blog.summary}
          </p>
          
          {/* Meta information */}
          <div className="flex gap-6 text-sm text-white/50 mb-4">
            {blog.publishedAt && (
              <span>Published: {new Date(blog.publishedAt).toLocaleDateString()}</span>
            )}
            {blog.readTime && <span>{blog.readTime}</span>}
          </div>

          {/* Tags */}
          {blog.tags && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-white/[0.05] border border-white/[0.1] rounded text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Hero Image */}
        {blog.image && (
          <div className="mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={320}
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        )}

        {/* Blog content - this will be expanded based on the specific blog */}
        <div className="prose-custom">
          {blog.slug === "api-security-best-practices" && <APISecurityContent />}
          {blog.slug === "mobile-app-security-guide" && <MobileSecurityContent />}
          {blog.slug === "bug-bounty-hunting-strategies" && <BugBountyContent />}
          {blog.slug === "cloud-security-aws-gcp" && <CloudSecurityContent />}
          {blog.slug === "sast-cicd-integration" && <SASTIntegrationContent />}
          {blog.slug === "burp-suite-extensions" && <BurpExtensionContent />}
        </div>
      </article>

      {/* Navigation to next/prev blog */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-white/[0.1]">
        <div className="flex justify-between items-center">
          <Link href="/blog" className="text-white/70 hover:text-[#55b291] transition-colors duration-200">
            ← All Blogs
          </Link>
          <div className="flex gap-4">
            <Link href="/blog" className="text-[#55b291] hover:text-white transition-colors duration-200">
              Read More Blogs →
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

// Individual blog content components
function APISecurityContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        API security has become a critical concern as organizations increasingly rely on APIs and GraphQL endpoints 
        to power their applications. Based on my experience securing APIs at Dream11 and building security tools at Levo.ai, 
        here are the essential practices for robust API security.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Key Security Practices</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-4">
        <strong>Authentication & Authorization:</strong> Implement proper OAuth 2.0 or JWT-based authentication 
        with role-based access controls. Ensure tokens have appropriate expiration times and implement refresh token rotation.
      </p>
      <p className="text-white/70 text-lg leading-relaxed mb-4">
        <strong>Input Validation:</strong> Validate all inputs at the API gateway level and application level. 
        Use schema validation for GraphQL endpoints and implement rate limiting to prevent abuse.
      </p>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        <strong>Monitoring & Logging:</strong> Implement comprehensive logging and monitoring using tools like ELK stack. 
        Set up alerts for suspicious API usage patterns and potential security incidents.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Conclusion</h2>
      <p className="text-white/70 text-lg leading-relaxed">
        API security requires a multi-layered approach combining proper authentication, thorough validation, 
        and continuous monitoring. Regular security testing and threat modeling are essential for maintaining robust API security.
      </p>
    </div>
  );
}

function MobileSecurityContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Mobile Security Fundamentals</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Mobile application security requires understanding both platform-specific vulnerabilities and common attack vectors. 
        Having tested 300+ applications including mobile apps, here&apos;s a comprehensive approach to mobile security testing.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Static Analysis Techniques</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-4">
        Use tools like mobSF for automated static analysis. Review application manifests, check for hardcoded secrets, 
        and analyze app permissions. Look for insecure data storage patterns and weak cryptographic implementations.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Dynamic Testing with Frida</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Frida enables runtime manipulation for both iOS and Android applications. Use it to bypass SSL pinning, 
        hook sensitive functions, and analyze application behavior during runtime.
      </p>

      <p className="text-white/70 text-lg leading-relaxed">
        Mobile security testing requires both automated tools and manual analysis. Focus on data protection, 
        secure communication, and proper authentication mechanisms.
      </p>
    </div>
  );
}

function BugBountyContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Bug Bounty Success Strategies</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Having reported 30+ vulnerabilities across companies like Dell, Ford, LinkedIn, and Zerodha, 
        here are the strategies that consistently yield results in bug bounty hunting.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Reconnaissance & Target Selection</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-4">
        Thorough reconnaissance is crucial. Use tools like Burp Suite, Nmap, and custom scripts to understand 
        the target&apos;s attack surface. Focus on lesser-known subdomains and APIs that other researchers might miss.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Common Vulnerability Patterns</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Focus on business logic flaws, API security issues, and authentication bypasses. These often have higher 
        impact and are more likely to be rewarded than basic XSS or SQLi in modern applications.
      </p>

      <p className="text-white/70 text-lg leading-relaxed">
        Consistency and methodology are key to bug bounty success. Develop your own testing methodology 
        and continuously refine it based on your findings.
      </p>
    </div>
  );
}

function CloudSecurityContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Cloud Security Best Practices</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Managing AWS WAF and GCP Cloud Armor at Dream11 has provided insights into effective cloud security strategies. 
        Here&apos;s how to secure your cloud infrastructure properly.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Infrastructure as Code Security</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-4">
        Implement WAF-as-code using Terraform to ensure consistent security configurations across environments. 
        This approach enables version control and automated security policy deployment.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Monitoring & Alerting</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Set up comprehensive monitoring using ELK stack for real-time threat detection. 
        Configure alerts for suspicious activities and implement automated response mechanisms.
      </p>

      <p className="text-white/70 text-lg leading-relaxed">
        Cloud security requires continuous monitoring, proper configuration management, 
        and regular security assessments to maintain a strong security posture.
      </p>
    </div>
  );
}

function SASTIntegrationContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">SAST in CI/CD Pipelines</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Integrating static application security testing into CI/CD pipelines is essential for catching 
        vulnerabilities early. Here&apos;s how to implement effective SAST integration based on real-world experience.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Tool Selection & Configuration</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Choose SAST tools that integrate well with your development stack. Tools like Veracode and Checkmarx 
        offer good coverage, but custom in-house solutions can be tailored to your specific needs.
      </p>

      <p className="text-white/70 text-lg leading-relaxed">
        Successful SAST integration requires balancing security coverage with development velocity. 
        Focus on critical vulnerabilities and minimize false positives to maintain developer adoption.
      </p>
    </div>
  );
}

function BurpExtensionContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Building Burp Suite Extensions</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Creating effective Burp Suite extensions can significantly enhance your security testing capabilities. 
        Here are lessons learned from developing Re-inspector and other security tools.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6">Extension Development Best Practices</h2>
      <p className="text-white/70 text-lg leading-relaxed mb-6">
        Focus on solving specific testing challenges and automate repetitive tasks. 
        Ensure your extension integrates well with existing Burp functionality and provides clear value to users.
      </p>

      <p className="text-white/70 text-lg leading-relaxed">
        Well-designed Burp extensions can streamline security testing workflows and improve testing efficiency. 
        Consider open-sourcing useful extensions to benefit the security community.
      </p>
    </div>
  );
} 