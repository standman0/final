import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Script from "next/script";
import Head from "next/head";
// import { useRef } from "react";

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
  // const tawkMessengerRef = useRef();
  return (
    <html lang="en">
      <body className={Font.className}>{children}</body>
      {/* <TawkMessengerReact
        propertyId={"65f93f11a0c6737bd1225dc6"}
        widgetId={"df9493c8dc9c2a6e9517d5453e0b726c5a12647b"}
        // useRef={tawkMessengerRef}
      /> */}
      <Script strategy="lazyOnload" src="https://embed.tawk.to/65f93f11a0c6737bd1225dc6/1hpapsnn3" />
      <Head>
        <link rel="icon" href="/circle-logo.png" />
      </Head>
    </html>
  );
}
