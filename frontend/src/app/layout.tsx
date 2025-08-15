import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FunVault - Your Ultimate Gaming & Anime Content Hub",
  description: "Discover the best Roblox tips, Minecraft guides, anime reviews, and gaming content. Join thousands of gamers and anime fans for expert advice, tutorials, and entertainment.",
  keywords: [
    "gaming tips",
    "roblox guides", 
    "minecraft tutorials",
    "anime reviews",
    "gaming content",
    "roblox games",
    "minecraft builds",
    "anime recommendations",
    "gaming tutorials",
    "family friendly gaming"
  ].join(", "),
  authors: [{ name: "FunVault Team" }],
  creator: "FunVault",
  publisher: "FunVault",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://funvault.com'), // Update with your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://funvault.vercel.app/',
    title: 'FunVault - Your Ultimate Gaming & Anime Content Hub',
    description: 'Discover the best Roblox tips, Minecraft guides, anime reviews, and gaming content. Join thousands of gamers and anime fans for expert advice, tutorials, and entertainment.',
    siteName: 'FunVault',
    images: [
      {
        url: '/Website_logo-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'FunVault - Gaming & Anime Content Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunVault - Your Ultimate Gaming & Anime Content Hub',
    description: 'Discover the best Roblox tips, Minecraft guides, anime reviews, and gaming content.',
    images: ['/Website_logo-removebg-preview.png'],
    creator: '@funvault',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add when you get it
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} antialiased bg-transparent`}
      >
        {children}
      </body>
    </html>
  );
}
