import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import type { Metadata } from "next";

import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: "E-commerce Store made with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={cn(
          "h-full",
          "antialiased",
          geistSans.variable,
          geistMono.variable,
          "font-sans",
          inter.variable,
        )}
        suppressHydrationWarning
      >
        <body className="min-h-full flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header>
              <Navbar />
            </header>

            <main className="h-calc(100vh - 64px)">{children}</main>

            <footer className="border-t border-dashed py-6 mt-auto">
              <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm text-muted-foreground text-center">
                  &copy; {new Date().getFullYear()} eCORS. All rights reserved.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
