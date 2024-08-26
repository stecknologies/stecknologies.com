import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Stecknologies",
  description: "The official homepage of Stecknologies, Inc.",
  openGraph: {
    type: 'website',
    'title': "Stecknologies",
    description: "The official homepage of Stecknologies, Inc.",
    siteName: "Stecknologies",
    images: ['https://i.imgur.com/279yiU7.png']
  }
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
