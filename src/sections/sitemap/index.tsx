import { getPages } from "@/services/pages";
import SitemapList from "./sitemap-list";

const Sitemap = async () => {
  const response = await getPages();
  const pages = response?.data;
  return pages ? <SitemapList pages={pages} /> : null;
};

export default Sitemap;
