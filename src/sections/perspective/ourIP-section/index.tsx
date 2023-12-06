import { getOurIpsSection } from "@/services/perspective";
import OurIpsSlider from "@/components/slider-perspective/our-ips";

export default async function index() {
  const response = await getOurIpsSection();

  return (
    <section className="mt-20 phablet:mt-0 tablet:mt-28 desktop:mt-60 tablet:container">
      <OurIpsSlider response={response?.data?.attributes?.Ips} />
    </section>
  );
}
