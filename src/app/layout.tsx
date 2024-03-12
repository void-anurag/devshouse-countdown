import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevsHouse'24 Countdown",
  description: "DevsHouse'24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
