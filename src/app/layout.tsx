import type { Metadata } from "next";
import "./styles/index.scss"
import { Header } from "@/comps/Header";
import { Footer } from "@/comps/Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";

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
      <GoogleAnalytics trackPageViews />
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
