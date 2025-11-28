import type { Metadata } from "next";
import { VT323, Inter } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-vt323",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "ShayNeeo | Retro Developer Portfolio",
    description: "Developer portfolio of ShayNeeo. Rust, TypeScript, and Retro vibes.",
    metadataBase: new URL("https://0.id.vn"),
    openGraph: {
        title: "ShayNeeo | Retro Developer Portfolio",
        description: "Developer portfolio of ShayNeeo. Rust, TypeScript, and Retro vibes.",
        url: "https://0.id.vn",
        siteName: "ShayNeeo Portfolio",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' },
        ],
        apple: [
            { url: '/apple-touch-icon.png' },
        ],
        other: [
            { rel: 'manifest', url: '/site.webmanifest' },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${vt323.variable} ${inter.variable} font-retro bg-retro-bg text-retro-text crt min-h-screen selection:bg-retro-secondary selection:text-retro-bg`}>
                <div className="relative z-10">
                    {children}
                </div>
                <div className="fixed inset-0 pointer-events-none z-0 bg-[url('/scene.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            </body>
        </html>
    );
}
