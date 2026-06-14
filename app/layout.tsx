import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Nav from "@/components/Nav";

const description =
  "Pari Goyal is a Computer Science student and AI automation builder who ships agentic workflows that get used in production, across marketing, lead generation, and operations for real clients.";

export const metadata: Metadata = {
  metadataBase: new URL("https://parigoyal.com"),
  title: {
    default: "Pari Goyal | AI Automation, Agentic Workflows, Product and Growth",
    template: "%s | Pari Goyal",
  },
  description,
  keywords: [
    "Pari Goyal",
    "AI automation",
    "agentic workflows",
    "AI agents",
    "n8n",
    "Supabase",
    "prompt engineering",
    "lead generation automation",
    "product",
    "growth",
    "SEO",
    "GEO",
    "Computer Science student",
    "Thapar Institute",
  ],
  authors: [{ name: "Pari Goyal" }],
  creator: "Pari Goyal",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pari Goyal | Building systems, not just outputs",
    description,
    url: "https://parigoyal.com",
    siteName: "Pari Goyal",
    images: [
      {
        url: "/media/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Pari Goyal, AI automation and agentic workflow builder",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pari Goyal | Building systems, not just outputs",
    description,
    images: ["/media/images/og-banner.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body leading-relaxed bg-paper text-ink relative min-h-screen overflow-x-hidden">
        {/* Ambient background glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal/5 blur-[120px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-coral/5 blur-[120px] pointer-events-none z-0" />
        <div className="fixed top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-lavender/5 blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10">
          <JsonLd />
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
