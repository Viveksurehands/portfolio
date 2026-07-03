import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-two-lac-33.vercel.app"),
  title: "Vivek Binkam — Developer & Visual Designer",
  description:
    "Portfolio of Vivek Binkam, CSE student, developer, and editorial photographer/designer.",
  openGraph: {
    title: "Vivek Binkam — Developer & Visual Designer",
    description:
      "Portfolio of Vivek Binkam, CSE student, developer, and editorial photographer/designer.",
    url: "https://portfolio-two-lac-33.vercel.app",
    siteName: "Vivek Binkam",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Binkam — Developer & Visual Designer",
    description:
      "Portfolio of Vivek Binkam, CSE student, developer, and editorial photographer/designer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
