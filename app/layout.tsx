import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "lucide-react";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUMEN - AI Learning Spaces",
  description: "Personalized learning spaces crafted by AI to elevate your knowledge journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" suppressHydrationWarning>
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Providers >
    <SidebarProvider>
      {children}
    </SidebarProvider>
    </Providers>
  </body>
</html>

  );
}
