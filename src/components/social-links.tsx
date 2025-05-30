import { socials } from "@/data/socials";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({ className = "", iconClassName = "text-3xl" }: SocialLinksProps) {
  return (
    <div className={`flex gap-10 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconClassName} text-gray-400 hover:text-[#b7e3cf] transition-all duration-300 hover:scale-110`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
} 