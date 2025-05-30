import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "@/types";
import { siteConfig } from "./site-config";

export const socials: SocialLink[] = [
  { 
    name: "LinkedIn", 
    icon: <FaLinkedin />, 
    link: `https://linkedin.com/in/${siteConfig.author.linkedin}` 
  },
  { 
    name: "Twitter", 
    icon: <FaTwitter />, 
    link: `https://twitter.com/${siteConfig.author.twitter.replace('@', '')}` 
  },
  { 
    name: "GitHub", 
    icon: <FaGithub />, 
    link: `https://github.com/${siteConfig.author.github}` 
  },
  { 
    name: "Instagram", 
    icon: <FaInstagram />, 
    link: `https://instagram.com/${siteConfig.author.instagram}` 
  },
]; 