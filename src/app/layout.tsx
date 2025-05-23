import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "EMKR - %s",
    default: "EMKR - Portfolio", // fallback jika tidak ada title di halaman
  },
  description: "Personal portfolio website showcasing my work and skills",
  icons: {
    icon: [
      {
        url: "/images/logo_emkr_crop.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/logo_emkr_crop.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/logo_emkr_crop.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/images/logo_emkr_crop.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "EMKR - Portfolio",
    description: "Personal portfolio website showcasing my work and skills",
    images: [
      {
        url: "/images/logo_emkr_crop.png",
        width: 1200,
        height: 630,
        alt: "EMKR Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
