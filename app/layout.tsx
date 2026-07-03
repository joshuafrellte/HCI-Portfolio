import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Joshua Te | Academic E-Portfolio",
  description:
    "Personal academic e-portfolio : BS Computer Science student at Mapúa Malayan Colleges Mindanao.",
  icons: {
    icon: "/p"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifText.variable} h-full antialiased`}>
      <body className="min-h-full bg-coordinator-cream font-sans text-coordinator-ink">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
