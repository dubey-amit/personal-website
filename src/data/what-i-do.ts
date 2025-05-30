import { WhatIDoItem } from "@/types";

export const whatIDo: WhatIDoItem[] = [
  {
    title: "Application Security",
    tags: [
      { name: "Web App Security", color: "bg-blue-100 text-blue-800" },
      { name: "Mobile Security", color: "bg-cyan-100 text-cyan-800" },
      { name: "Thick Client", color: "bg-yellow-100 text-yellow-800" }
    ]
  },
  {
    title: "Product Security",
    tags: [
      { name: "REST API", color: "bg-pink-100 text-pink-800" },
      { name: "AI Security", color: "bg-pink-100 text-pink-800" },
      { name: "GraphQL", color: "bg-green-100 text-green-800" },
      { name: "AWS WAF", color: "bg-purple-100 text-purple-800" },
      { name: "GCP Cloud Armor", color: "bg-purple-100 text-purple-800" }
    ]
  },
  {
    title: "Security Engineering",
    tags: [
      { name: "SAST", color: "bg-blue-100 text-blue-800" },
      { name: "DAST", color: "bg-cyan-100 text-cyan-800" },
      { name: "CI/CD", color: "bg-cyan-100 text-cyan-800" },
      { name: "Threat Modeling", color: "bg-yellow-100 text-yellow-800" },
      { name: "Automation", color: "bg-yellow-100 text-yellow-800" }
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