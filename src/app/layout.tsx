/* eslint-disable react-refresh/only-export-components */
import "@/index.css";
import {ReactNode} from "react";
import type {Metadata, Viewport} from 'next';
import {Inter} from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "./providers";
import {buildMetadata, siteConfig} from "@/lib/seo";

const inter = Inter({subsets: ["latin"], display: "swap", variable: "--font-inter"});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
};

export const metadata: Metadata = buildMetadata();

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                  if (typeof global === 'undefined') {
                    var global = globalThis;
                  }
                `,
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: siteConfig.name,
                        url: siteConfig.url,
                        logo: siteConfig.logo,
                        sameAs: siteConfig.sameAs,
                        contactPoint: {
                            '@type': 'ContactPoint',
                            email: siteConfig.contactEmail,
                            contactType: 'customer support',
                        },
                    }),
                }}
            />
        </head>
        <body className={`${inter.className}`}>
        <Providers>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
                <Navigation/>
                <div className="flex-1">{children}</div>
                <Footer/>
            </div>
        </Providers>
        </body>
        </html>
    );
}
