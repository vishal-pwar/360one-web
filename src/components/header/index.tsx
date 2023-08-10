import { getHeader } from "@/services/header";
import { Header } from "./header";

const HeaderWrapper = async () => {
  const response = await getHeader();

  return <Header items={response?.data?.attributes?.links || []} />;
};

export default HeaderWrapper;
