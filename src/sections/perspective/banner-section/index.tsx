import BannerSlider from "@/components/slider-perspective/banner";
import { getBannerSection } from "@/services/perspective";

const Banner = async () => {
  const response = await getBannerSection();
  return (
    <section className="mt-[130px] desktop:mt-52">
      <BannerSlider response={response?.data?.attributes?.Banner} />
    </section>
  );
};

export default Banner;
