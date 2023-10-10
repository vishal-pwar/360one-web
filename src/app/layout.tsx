import NextSEOComponent from "@/components/next-seo/NextSEO";
import { getCanonical } from "@/services/canonical";
import type { Metadata } from "next";
import { hankenGrotesk, spaceGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asset and Wealth Management Services in India - 360 ONE",
  description:
    "360 ONE is the leading financial services provider, offering specialised solutions in the fields of wealth and asset management. Find out how we help people manage and distribute the capital they need to reach their goals.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await getCanonical();
  const { address, contactPoint, ...canonical } = response?.data?.attributes;

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <NextSEOComponent
          address={address}
          canonical={canonical}
          contactPoint={contactPoint}
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/favicons/favicon.png"
        />
      </head>

      <body className={`${spaceGrotesk.variable} ${hankenGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
