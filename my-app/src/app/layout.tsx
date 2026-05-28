import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAJKEY | Premium Tools & Accessories",
  description: "KAJKEY — Premium tools & accessories supplier covering outdoor emergency, woodworking, marine hardware, and industrial fittings.",
  icons: { icon: [] },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
