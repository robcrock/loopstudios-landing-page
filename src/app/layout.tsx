import { Josefin_Sans, Alata } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Metadata } from "next/types";

const fontAlta = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alta",
});

const fontJosefin = Josefin_Sans({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Loopstudio Landing Page",
  description: "My solution for the Loopstudio Landing Page challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-alta min-h-screen bg-background antialiased",
          fontAlta.variable,
          fontJosefin.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
