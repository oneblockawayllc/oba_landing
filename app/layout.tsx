import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "One Block Away - AI Implementation & Orchestration Specialist",
  description: "Empowering downtown Apex and RTP region businesses by bringing ideas to life through AI solutions, strategic roadmaps, and transformative digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        {/* Grid Annotations */}
        <div className="grid-annotation" style={{ top: '16px', left: '24px' }}>ISOMETRIC: 30°</div>
        <div className="grid-annotation" style={{ top: '16px', right: '24px' }}>WIREFRAME CATALYST</div>

        <ScrollReveal />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
