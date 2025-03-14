import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Header, Footer } from "@/components";
import "./globals.css";

const geistSans = DM_Sans({
  weight: ["400", "500"],
  variable: "--font-dm",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="кг">
      <body className={geistSans.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
