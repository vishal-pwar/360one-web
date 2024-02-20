import BannerSlider from "@/components/slider-perspective/banner";
import { getBannerSection } from "@/services/perspective";

const Banner = async () => {
  const response = await getBannerSection();
  return (
    <section className="mt-[70px] tablet:mt-44 desktop:mt-52">
      <BannerSlider response={response?.data?.attributes?.banner} />
    </section>
  );
};

export default Banner;
