"use client";
import {Github, Instagram, Linkedin, Music2, Twitter} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const socialLinks = [
        {icon: Linkedin, href: "https://linkedin.com/company/colyon", label: "LinkedIn"},
        {icon: Twitter, href: "https://twitter.com/colyonai", label: "X (Twitter)"},
        {icon: Music2, href: "https://medium.com/@colyon", label: "Medium"},
        {icon: Github, href: "https://github.com/colyonai", label: "GitHub"},
        {icon: Instagram, href: "https://instagram.com/colyonai", label: "Instagram"},
        {icon: Music2, href: "https://www.tiktok.com/@colyonai", label: "TikTok"},
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
                                title={social.label}
                            >
                                {social.label === "Medium" ? (
                                    <Image
                                        src="/img/icons/medium.svg"
                                        width={20}
                                        height={20}
                                        alt="Medium Icon"
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-accent transition-colors"
                                    />
                                ) : (<social.icon className="w-5 h-5"/>)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
