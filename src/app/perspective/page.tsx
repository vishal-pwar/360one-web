import React from "react";
import Header from "@/components/header";
import Viewpoint from "@/sections/perspective/viewpoint-section";
import Newsletter from "@/sections/perspective/newsletter-section";
import CuratedExperence from "@/sections/perspective/curatedExperiences-section";
import OurIps from "@/sections/perspective/ourIP-section";
import Reports from "@/sections/perspective/reports-section";
import Media from "@/sections/perspective/inMedia-section";
import Banner from "@/sections/perspective/banner-section";

const page = () => {
  return (
    <main className="relative">
      <section>
        <Header />
        <Banner />
        <Viewpoint />
        {/* <Newsletter /> */}
        <CuratedExperence />
        <OurIps />
        <Reports />
        <div className="w-full h-[80px] tablet:h-24 desktop:h-28 bg-[#F4F0EF]" />
        <Media />
      </section>
    </main>
  );
};

export default page;
