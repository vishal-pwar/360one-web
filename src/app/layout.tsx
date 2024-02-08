import { headers } from "next/headers";

import Mixpanel from "@/components/mixpanel";
import NextSEOComponent from "@/components/next-seo";
import Popup from "@/components/popup";
import { getMetadata } from "@/services/meta-data";
import { getOrganizationCanonical } from "@/services/organization-canonical";
import { getPopup } from "@/services/pop-up";
import clsx from "clsx";
import React from "react";
import { hankenGrotesk, spaceGrotesk } from "./fonts";
import "./globals.css";

// export const metadata: Metadata = {
//   twitter: {
//     card: "summary_large_image",
//     title: "Your title",
//     description: "Your description",
//     creator: "@author_here",
//     images: [
//       {
//         url: "you_url_here",

//         width: 1200,
//         height: 630,
//         alt: "Your alt text",
//       },
//     ],
//   },
// };

// export const metadata = {
//   openGraph: {
//     title: "this is open graph title for testing",
//     description: "Some description",
//   },
// };

enum Meta {
  TWITTER = "twitter",
  OG = "openGraph",
}

export async function generateMetadata() {
  const headersList = headers();
  const url = headersList?.get("x-url") || "";
  const response = await getMetadata();
  const metaData = response?.data;
  const metaTags = metaData?.find(
    (m) => m?.attributes?.page?.data?.attributes?.url === url
  );
  const tags = metaTags?.attributes?.metaTag?.reduce((tag: any, item: any) => {
    if (item.name.includes(Meta.TWITTER) || item.name.includes(Meta.OG)) {
      const [category, property] = item?.name?.split(":");
      if (!tag[category]) {
        tag[category] = {};
      }
      tag[category][property] = item.content;
    } else {
      tag[item?.name] = item?.content;
    }
    return tag;
  }, {});

  return tags;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const url = headersList?.get("x-url") || "";
  const res = await getPopup();
  const popupData = res?.data?.find(
    (p) => p?.attributes?.page?.data?.attributes?.url === url
  );

  const orgs = await getOrganizationCanonical();
  const canonical = orgs?.data?.find(
    (c) => c?.attributes?.page?.data?.attributes?.url === url
  );

  return (
    <html className={clsx(spaceGrotesk.className, "scroll-smooth")} lang="en">
      <head>
        {/* Add Google Tag Manager script */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer',${
                process.env.GTM_ID || ""
              });
            `,
          }}
        ></script>
        {/* End Google Tag Manager script */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/favicons/favicon.png"
        />
        {canonical && <NextSEOComponent canonicalData={canonical} />}
      </head>
      <body className={`${spaceGrotesk.variable} ${hankenGrotesk.variable}`}>
        {/* Add Google Tag Manager (noscript) immediately after the opening <body> tag */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${
              process.env.GTM_ID || ""
            }`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Mixpanel />
        {popupData ? <Popup popup={popupData} /> : null}
        {children}
        <div id="portal" />
      </body>
    </html>
  );
}
