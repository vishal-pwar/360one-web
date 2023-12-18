import { getOurIpsSection } from "@/services/perspective";
import OurIpsSlider from "@/components/slider-perspective/our-ips";

export default async function index() {
  const response = await getOurIpsSection();

  return (
    <section className="pt-5 phablet:pt-0 tablet:pt-24 desktop:pt-28 bg-[#F4F0EF]">
      <OurIpsSlider response={response?.data?.attributes?.Ips} />
    </section>
  );
}
