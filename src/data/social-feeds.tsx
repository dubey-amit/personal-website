import { FaTwitter, FaLinkedin, FaInstagram, FaHeart, FaRetweet, FaShare, FaThumbsUp, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { SocialFeed } from "@/types";

export const socialFeeds: SocialFeed[] = [
  {
    platform: "Twitter",
    icon: <FaTwitter className="text-sky-400 text-2xl" />,
    user: "@AmitMDubey",
    content: "A small Burpsuite trick which helped me to find Blind SSRF - Step 1: Use Intruder to Bruteforce Headers Step 2: Add Burp collaborator URL as value.",
    link: "https://x.com/AmitMDubey/status/1281920617931923458",
    image: "https://pbs.twimg.com/media/EcpKiGkVAAEYO8f?format=png&name=large",
    actions: [
      { icon: <FaHeart />, label: "Like", count: 1332 },
      { icon: <FaRetweet />, label: "Retweet", count: 449 },
      { icon: <FaShare />, label: "Share", count: 371 },
    ],
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600 text-2xl" />,
    user: "Amit Dubey",
    content: "I've written a custom action in Burp Suite that automatically sends a payload to all parameters....",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7329960176109752321/",
    image: "/linkedin-arc.jpeg",
    actions: [
      { icon: <FaThumbsUp />, label: "Like", count: 166 },
      { icon: <FaCommentDots />, label: "Comment", count: 0 },
      { icon: <FaShare />, label: "Share", count: 4 },
    ],
  },
  {
    platform: "Instagram",
    icon: <FaInstagram className="text-pink-500 text-2xl" />,
    user: "@amitdubeysec",
    content: "Behind the scenes: How I approach security reviews. #infosec #securityengineer",
    link: "https://instagram.com/amitdubeysec",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    actions: [
      { icon: <FaHeart />, label: "Like", count: 210 },
      { icon: <FaCommentDots />, label: "Comment", count: 22 },
      { icon: <FaPaperPlane />, label: "Share", count: 5 },
    ],
  },
  {
    platform: "Twitter",
    icon: <FaTwitter className="text-sky-400 text-2xl" />,
    user: "@AmitMDubey",
    content: "Join me at the upcoming security webinar next week!",
    link: "https://twitter.com/amitdubey",
    actions: [
      { icon: <FaHeart />, label: "Like", count: 56 },
      { icon: <FaRetweet />, label: "Retweet", count: 18 },
      { icon: <FaShare />, label: "Share", count: 3 },
    ],
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600 text-2xl" />,
    user: "Amit Dubey",
    content: "Honored to be recognized as a top security influencer this year.",
    link: "https://linkedin.com/in/amitdubey",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    actions: [
      { icon: <FaThumbsUp />, label: "Like", count: 134 },
      { icon: <FaCommentDots />, label: "Comment", count: 19 },
      { icon: <FaShare />, label: "Share", count: 8 },
    ],
  },
]; 