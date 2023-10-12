import Popup from "@/components/popup";
import { headers } from "next/headers";

import NextSEOComponent from "@/components/next-seo";
import { getMetadata } from "@/services/meta-data";
import { getOrganizationCanonical } from "@/services/organization-canonical";
import { getPopup } from "@/services/pop-up";
import { hankenGrotesk, spaceGrotesk } from "./fonts";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Asset and Wealth Management Services in India - 360 ONE",
//   description:
//     "360 ONE is the leading financial services provider, offering specialised solutions in the fields of wealth and asset management. Find out how we help people manage and distribute the capital they need to reach their goals.",
// };

export async function generateMetadata() {
  const headersList = headers();
  const url = headersList.get("x-url") || "";
  const response = await getMetadata();
  const metaData = response.data;
  const metaTags = metaData?.find(
    (m) => m.attributes.page.data.attributes.url === url
  );
  const tags = metaTags?.attributes.metaTag?.reduce((tag: any, item: any) => {
    tag[item.name] = item.content;
    return tag;
  }, {});

  return tags;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await getPopup();
  const popupDetails = res?.data?.attributes;
  const headersList = headers();
  const url = headersList.get("x-url") || "";
  const orgs = await getOrganizationCanonical();
  const canonical = orgs.data.find(
    (c) => c.attributes.page.data.attributes.url === url
  );

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/favicons/favicon.png"
        />
        {canonical && <NextSEOComponent canonicalData={canonical} />}
      </head>

      <body className={`${spaceGrotesk.variable} ${hankenGrotesk.variable}`}>
        <Popup popup={popupDetails} />
        {children}
      </body>
    </html>
  );
}
