import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const Font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Circle",
  description: "myCircle is Seamlessly interwoven to the money lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Font.className}>{children}</body>
      <Script strategy="lazyOnload" src="https://embed.tawk.to/65f93f11a0c6737bd1225dc6/1hpapsnn3" />
      <Head>
        <link rel="icon" href="/circle-logo.png" />
      </Head>
    </html>
  );
}
