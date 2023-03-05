"use client";

import "@/styles/globals.css";
import localFont from "@next/font/local";
import Providers from "./providers";
import { ServerThemeProvider } from "@wits/next-themes";

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/satoshi/Satoshi-Bold.woff2",
      weight: "600",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class" defaultTheme="dark">
      <html lang="en">
        <head key="head" />
        <body
          key="body"
          className={`${satoshi.variable} font-sans bg-light dark:bg-dark text-dark dark:text-light`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
