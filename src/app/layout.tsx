import type { Metadata } from "next";
import "./styles/index.scss"
import { Header } from "@/comps/Header";
import { Footer } from "@/comps/Footer";
import GoogleAnalytics from "@/comps/GoogleAnalytics";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Void Labs | Australia",
  description: "Void Labs are leading experts in software & IoT development. We are based in Australia and have a global reach. Contact us today.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <GoogleAnalytics />
      <Script
        id='meta-pixel'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1175372790123984');
          fbq('track', 'PageView');`
        }}
      />
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}