import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mesisem Global LLC | Global Enterprise Solutions",
  description: "Mesisem Global LLC — Delaware Series LLC providing consulting, SaaS, cybersecurity, marketing, media, and venture development services. Scalable systems. Secure operations. Venture-backed growth.",
  keywords: ["consulting", "SaaS", "cybersecurity", "venture development", "Delaware LLC", "global enterprise"],
  authors: [{ name: "Mesisem Global LLC" }],
  creator: "Mesisem Global LLC",
  publisher: "Mesisem Global LLC",
  metadataBase: new URL("https://mesisemglobal.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mesisemglobal.com/",
    siteName: "Mesisem Global LLC",
    title: "Mesisem Global LLC | Global Enterprise Solutions",
    description: "Scalable systems. Secure operations. Venture-backed growth.",
    images: [
      {
        url: "/assets/logo/mesisem-logo-final.png",
        width: 1200,
        height: 630,
        alt: "Mesisem Global LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesisem Global LLC | Global Enterprise Solutions",
    description: "Scalable systems. Secure operations. Venture-backed growth.",
    images: ["/assets/logo/mesisem-logo-final.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mesisemglobal.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-black text-gray-100">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
