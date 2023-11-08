import { getHeader } from "@/services/header";
import { getTicker } from "@/services/ticker";
import { headers } from "next/headers";
import { Header } from "./header";

const HeaderWrapper = async () => {
  const response = await getHeader();
  const headersList = headers();
  const url = headersList.get("x-url") || "";

  const ticker = await getTicker();
  const tickerData = ticker?.data?.find(
    (t) => t.attributes.page.data.attributes.url === url
  );

  return (
    <Header
      items={response?.data?.attributes?.links || []}
      ticker={tickerData}
    />
  );
};

export default HeaderWrapper;
