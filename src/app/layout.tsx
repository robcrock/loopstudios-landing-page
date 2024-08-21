import { Alata } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Metadata } from "next/types";

const fontSans = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
