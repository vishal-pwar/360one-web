// app/server-sitemap-index.xml/route.ts
import { getPages } from "@/services/pages";
import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET(request: Request) {
  // Method to source urls from cms
  const urls = await getPages();

  return getServerSideSitemapIndex(
    urls.data?.map((d) =>
      d.attributes?.url?.startsWith("https")
        ? d.attributes?.url
        : `https://360.one${d.attributes?.url}`
    ) || []
  );
}
