import { getPages } from "@/services/pages";
import SitemapList from "./sitemap-list";

const Sitemap = async () => {
  const response = await getPages();
  console.log(response.data);
  const pages = response?.data;
  return <SitemapList pages={pages} />;
};

export default Sitemap;
