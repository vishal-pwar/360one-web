import BannerSlider from "@/components/slider-perspective/banner";
import { getBannerSection } from "@/services/perspective";
import React from "react";

const Banner = async () => {
  const response = await getBannerSection();
  return (
    <section className="p-6 phablet:p-12 tablet:p-0">
      <BannerSlider response={response.data.attributes.Banner} />
    </section>
  );
};

export default Banner;
