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
      <div className="absolute w-full h-[500px] phablet:h-[600px] tablet:h-[450px] desktop:h-[550px] top-0 left-0 -z-10 bg-black" />
      <div className="absolute w-full h-[500px] phablet:h-[650px] tablet:h-[770px] top-[550px] left-0 -z-10 bg-[#F4F0EF]" />
      <div className="absolute w-full h-[665px] phablet:h-[1000px] tablet:h-[550px] desktop:h-[1350px] top-[980px] phablet:top-[1150px] tablet:top-[1265px] left-0 -z-10 bg-black" />
      <div className="absolute w-full h-[600px] phablet:h-[500px] tablet:h-[770px] desktop:h-[1200px] top-[1800px] phablet:top-[2500px] tablet:top-[1800px] desktop:top-[2600px] left-0 -z-10 bg-[#F4F0EF]" />
      <div className="absolute w-full h-[400px] phablet:h-[420px] tablet:h-[200px] top-[2330px] sm:top-[2150px] phablet:top-[3000px] md:top-[2900px] lg:top-[2800px] tablet:top-[2500px] desktop:top-[3650px] left-0 -z-10 bg-black" />
      <div className="absolute w-full h-[400px] tablet:h-[650px] desktop:h-[700px] top-[2730px] sm:top-[2550px] phablet:top-[3420px] md:top-[3320px] lg:top-[3200px] tablet:top-[2700px] desktop:top-[3850px] left-0 -z-10 bg-[#F4F0EF]" />
      <div className="absolute w-full h-[950px] sm:h-[950px] phablet:h-[880px] md:h-[690px] lg:h-[650px] tablet:h-[1050px] desktop:h-[800px]    top-[3300px] sm:top-[3100px] phablet:top-[4240px] lg:top-[4100px] tablet:top-[3300px] desktop:top-[4540px] left-0 -z-10 bg-black" />
      <div className="absolute w-full h-[200px] phablet:h-[280px] desktop:h-[600px] top-[4200px] sm:top-[4000px] phablet:top-[5120px] md:top-[4930px] lg:top-[4700px] tablet:top-[4350px] desktop:top-[5340px] left-0 -z-10 bg-[#FD7740]" />
      <Banner />
      <section>
        {/* <Header/> */}
        <Viewpoint />
        <Newsletter />
        <CuratedExperence />
        <OurIps />
        <Reports />
        <Media />
      </section>
    </main>
  );
};

export default page;
