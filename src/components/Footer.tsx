"use client";
import { Github, Linkedin, Twitter, Instagram, Music2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Music2, href: "https://tiktok.com", label: "TikTok" },
  ];

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>© 2025 Colyon. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
