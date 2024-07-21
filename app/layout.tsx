import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AddNote from "@/components/AddNote";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "8 Fold - Notes"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
