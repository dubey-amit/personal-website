import { WhatIDoItem } from "@/types";

export const whatIDo: WhatIDoItem[] = [
  {
    title: "Application Security",
    tags: [
      { name: "Web App Security", color: "bg-blue-100 text-blue-800" },
      { name: "Mobile App Security", color: "bg-cyan-100 text-cyan-800" },
      { name: "Thick Client", color: "bg-yellow-100 text-yellow-800" },
      { name: "API Security", color: "bg-green-100 text-green-800" }
    ]
  },
  {
    title: "Product Security",
    tags: [
      { name: "SAST", color: "bg-blue-100 text-blue-800" },
      { name: "DAST", color: "bg-cyan-100 text-cyan-800" },
      { name: "CI/CD", color: "bg-cyan-100 text-cyan-800" },
      { name: "Threat Modeling", color: "bg-yellow-100 text-yellow-800" },
      { name: "Code Review", color: "bg-yellow-100 text-yellow-800" }
    ]
  },
  {
    title: "Cloud Security",
    tags: [
      { name: "AWS", color: "bg-blue-100 text-blue-800" },
      { name: "GCP", color: "bg-cyan-100 text-cyan-800" },
      { name: "Kubernetes", color: "bg-yellow-100 text-yellow-800" },
      { name: "Docker", color: "bg-yellow-100 text-yellow-800" },
    ]
  },
  {
    title: "Security Leadership",
    tags: [
      { name: "Bugbounty Management", color: "bg-pink-100 text-pink-800" },
      { name: "Team Lead", color: "bg-green-100 text-green-800" },
      { name: "Security Training", color: "bg-purple-100 text-purple-800" }
    ]
  },
]; 