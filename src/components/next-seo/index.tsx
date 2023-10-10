import { getCanonical } from "@/services/canonical";
import NextSEOComponent from "./NextSEO";

const Canonical = async () => {
  const response = await getCanonical();
  const { address, contactPoint, ...canonical } = response?.data?.attributes;

  if (canonical && canonical && contactPoint)
    return (
      <NextSEOComponent
        address={address}
        canonical={canonical}
        contactPoint={contactPoint}
      />
    );
};

export default Canonical;
