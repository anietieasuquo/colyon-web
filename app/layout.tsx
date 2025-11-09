/* eslint-disable react-refresh/only-export-components */
import "@/index.css";
import {ReactNode} from "react";
import type {Metadata, Viewport} from 'next';
import {Inter} from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "./providers";

const inter = Inter({subsets: ["latin"], display: "swap", variable: "--font-inter"});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
};

const title = 'Colyon - A colony of AI agents';
const description = 'At Colyon we are building a colony of AI agents that collaborate to solve complex problems - safely, intelligently, and autonomously.';
const url = 'https://colyon.ai';
const icon = '/favicon.png';
const openGraphImage = "/img/colyon-og-image.png";

export const metadata: Metadata = {
    title,
    description,
    abstract: description,
    metadataBase: new URL(url),
    keywords: 'ai, ai research, agents, multi-agents, cryptocurrency, wallet, blockchain, ethereum, polygon, BSC, arbitrum, monchain, secure wallet, non-custodial, crypto wallet, fraud detection, artificial intelligence',
    applicationName: title,
    generator: "Next.js",
    publisher: "Vercel",
    authors: [
        {
            name: title,
            url,
        }
    ],
    creator: "Colyon",
    category: "AI",
    icons: {
        icon
    },
    openGraph: {
        type: "website",
        url,
        title,
        description,
        siteName: title,
        images: [{url: openGraphImage}]
    },
    twitter: {
        card: "summary_large_image",
        site: "@colyonai",
        creator: "@colyonai",
        images: openGraphImage
    }
};

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
            <title>{title}</title>
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
