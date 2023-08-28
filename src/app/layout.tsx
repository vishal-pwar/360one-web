import type { Metadata } from "next";
import "./globals.css";
import { hankenGrotesk, spaceGrotesk } from "./fonts";

export const metadata: Metadata = {
  title: "Asset and Wealth Management Services in India - 360 ONE",
  description:
    "360 ONE is the leading financial services provider, offering specialised solutions in the fields of wealth and asset management. Find out how we help people manage and distribute the capital they need to reach their goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/x-icon"
        href="/assets/favicons/favicon.png"
      />
      <body className={`${spaceGrotesk.variable} ${hankenGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
