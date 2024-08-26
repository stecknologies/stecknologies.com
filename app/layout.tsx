import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

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
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:url" content="https://stecknologies.com" />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
