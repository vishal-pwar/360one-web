import { getOurIpsSection } from "@/services/perspective";
import OurIpsSlider from "@/components/slider-perspective/our-ips";

export default async function index() {
  const response = await getOurIpsSection();

  return (
    <section className="mt-20">
      <OurIpsSlider response={response?.data?.attributes?.Ips} />
    </section>
  );
}
