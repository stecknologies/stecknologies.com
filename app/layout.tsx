import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Stecknologies",
  description: "The official homepage of Stecknologies, Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
