import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import QueryProvider from "@/libs/queryProvider";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bizddy",
  description: "bizddy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme =
    (cookieStore.get("theme")?.value as "light" | "dark" | undefined) ??
    undefined;

  return (
    <html lang="ko" data-theme={theme} suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
