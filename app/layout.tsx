import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: site.seo.title,
    template: `%s • ${site.seo.title}`,
  },
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.baseUrl,
    siteName: site.name,
    images: [
      { url: site.seo.ogImage, width: 1200, height: 630, alt: site.name },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  keywords: site.seo.keywords,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 -z-10 bg-grid" />
        {children}
      </body>
    </html>
  );
}
