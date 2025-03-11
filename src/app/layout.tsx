import type { Metadata } from "next";
import { Geist_Mono as FontMono, Inter as FontSans } from "next/font/google"

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Thomas Stanley - Portfolio",
  description: "A trading simulator by Thomas Stanley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} bg-background overscroll-none font-sans antialiased`}
      >
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-svh flex-col bg-background">
                {children}
              </div>
            </div></ThemeProvider>
      </body>
    </html>
  );
}
