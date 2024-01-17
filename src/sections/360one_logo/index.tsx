import Logo_360one from "@/components/logo";
import { getLogoSection } from "@/services/360_logo";

const LogoPage_360one = async () => {
  const response = await getLogoSection();

  return <Logo_360one response={response} />;
};

export default LogoPage_360one;
