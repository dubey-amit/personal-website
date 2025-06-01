export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  link: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content?: string;
  publishedAt?: string;
  readTime?: string;
  image?: string;
  tags?: string[];
}

export interface Project {
  title: string;
  tag: string;
  desc: string;
  link?: string;
  tags?: string[];
}

export interface WhatIDoItem {
  title: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
}

export interface SocialFeed {
  platform: string;
  icon: React.ReactNode;
  user: string;
  content: string;
  link: string;
  image?: string;
  actions: Array<{
    icon: React.ReactNode;
    label: string;
    count: number;
  }>;
} 