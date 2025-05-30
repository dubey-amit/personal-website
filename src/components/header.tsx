"use client";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/[0.1]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-[#55b291] transition-colors duration-200"
          >
            {siteConfig.name}
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-bold transition-colors duration-200 ${
                  currentPage === item.name
                    ? "text-[#55b291]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
} 