"use client";
import Image from "next/image";
import PageLayout from "@/components/page-layout";
import SocialLinks from "@/components/social-links";
import ProjectCard from "@/components/project-card";
import { whatIDo } from "@/data/what-i-do";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <PageLayout currentPage="Home">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start mb-10">
        <div className="flex-1">
          <div className="h-10"></div>

          <h1 className="text-3xl md:text-4xl font-regular mb-5 leading-relaxed">
            Hi I&apos;m <span className="bg-gradient-to-r from-[#29916c] to-[#55b291] text-transparent bg-clip-text font-bold text-5xl md:text-5xl">Amit Dubey</span>,
            <br/>
            <span className="text-3xl md:text-4xl">a security engineer who enjoys solving real-world problems and making tech safer for everyone</span>
          </h1>
          
          {/* Social Links */}
          <SocialLinks className="mt-5" />
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0 md:self-start">
          <div className="relative">
            <div className="h-10"></div>
            <Image 
              src="/image_lines_only.png" 
              alt="Amit Dubey - Product Security Engineer" 
              width={300} 
              height={300} 
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="max-w-6xl mx-auto mt-20 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whatIDo.map((item, i) => (
            <div key={i} className="group backdrop-blur-xl bg-white/[0.02] border border-white/[0.1] rounded-xl p-6 hover:bg-white/[0.05] transition-all duration-300 hover:scale-105 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-pointer">
              <div className="flex flex-col h-full">
                <div className="font-bold text-lg mb-3 text-white/90 group-hover:text-[#55b291] transition-colors duration-200">{item.title}</div>
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag, index) => (
                      <div key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}>
                        {tag.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto mb-10">
        <div className="text-3xl font-bold mb-5 text-white">Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </section>

      {/* Achievements & Certifications */}
      {/* <section className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-white mb-8">Achievements & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-white/[0.1] rounded-lg p-6 bg-[var(--color-card-bg)]">
            <h3 className="text-lg font-bold text-white mb-4">Bug Bounty Achievements</h3>
            <p className="text-white/70 mb-2">🎯 30+ vulnerabilities reported</p>
            <p className="text-white/70 mb-2">🏢 Companies: Dell, Ford, LinkedIn, Zerodha</p>
            <p className="text-white/70">📊 300+ applications tested</p>
          </div>
          <div className="border border-white/[0.1] rounded-lg p-6 bg-[var(--color-card-bg)]">
            <h3 className="text-lg font-bold text-white mb-4">Certifications</h3>
            <p className="text-white/70 mb-2">🔐 OSCP - Offensive Security</p>
            <p className="text-white/70 mb-2">☁️ Professional Cloud Security Engineer - GCP</p>
            <p className="text-white/70">🛡️ CEH, CHFI, ECSA - EC-Council</p>
          </div>
        </div>
      </section> */}
    </PageLayout>
  );
}
