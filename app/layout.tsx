import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import AppTheme from "./theme/AppTheme";

const nunito = Nunito({ subsets: ["latin"], weight: ['400', '700','900']});

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
    <html lang="en">
      <AppTheme>
      <body className={nunito.className}>{children}</body>
      </AppTheme>
    </html>
  );
}
