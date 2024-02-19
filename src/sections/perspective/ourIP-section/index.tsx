import OurIpsSlider from "@/components/slider-perspective/our-ips";
import { getOurIpsSection } from "@/services/perspective";

export default async function OurIps() {
  const response = await getOurIpsSection();
  return (
    <section className="pt-5 phablet:pt-0 tablet:pt-24 windowDesktop:py-14 bg-[#F4F0EF]">
      <OurIpsSlider response={response?.data?.attributes?.ips} />
    </section>
  );
}
