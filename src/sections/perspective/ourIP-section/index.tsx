import OurIpsSlider from "@/components/slider-perspective/our-ips";
import { getOurIpsSection } from "@/services/perspective";

export default async function OurIps() {
  const response = await getOurIpsSection();
  return (
    <section className="pt-5 sm:pt-6 xl:py-14 bg-[#F4F0EF]">
      <OurIpsSlider response={response?.data?.attributes?.ips} />
    </section>
  );
}
