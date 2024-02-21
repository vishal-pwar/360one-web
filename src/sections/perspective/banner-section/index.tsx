import BannerSlider from "@/components/slider-perspective/banner";
import { getBannerSection } from "@/services/perspective";

const Banner = async () => {
  const response = await getBannerSection();
  return (
    <section className="mt-[95px] md:mt-28 lg:mt-32 xl:mt-48">
      <BannerSlider response={response?.data?.attributes?.banner} />
    </section>
  );
};

export default Banner;
