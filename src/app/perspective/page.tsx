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
      <div className="absolute w-screen h-[500px] phablet:h-[600px] tablet:h-[450px] desktop:h-[500px] top-0 left-0 -z-10 bg-black" />

      {/* <div className="absolute w-screen h-[500px] top-[500px] sm:h-[460px] sm:top-[600px] phablet:h-[460px] phablet:top-[550px] tablet:top-[450px] tablet:h-[745px] xl:h-[460px] xl:top-[600px]  left-0 -z-10 bg-slate-600" />
      <div className="absolute w-screen h-[665px] top-[1000px] sm:h-[820px] sm:top-[1060px] phablet:h-[920px] phablet:top-[1000px] tablet:h-[550px] tablet:top-[1195px] xl:h-[1400px] xl:top-[1050px] left-0 -z-10 bg-black" />
      <div className="absolute w-screen h-96 top-[1550px] sm:h-[520px] sm:top-[1750px] phablet:h-[360px] phablet:top-[1800px] tablet:hidden left-0 -z-10 bg-[#FD7740]" />
      <div className="absolute w-screen h-80 top-[1900px] sm:h-96 sm:top-[2100px] phablet:top-[2160px] tablet:h-[650px] tablet:top-[1700px] xl:top-[2400px] 2xl:h-[1000px] left-0 -z-10 bg-blue-500" />
      <div className="absolute w-screen h-[calc(100vh-206px)] top-[3730px] left-0 -z-10 bg-gray-600" />
      <div className="absolute w-screen h-[calc(100vh-100px)] top-[4417px] left-0 -z-10 bg-black" />
      <div className="absolute w-screen h-72 top-[5210px] left-0 -z-10 bg-[#FD7740]" />
      <div className="absolute w-screen h-[calc(100vh+50px)] top-[5480px] left-0 -z-10 bg-black" /> */}

      <Banner />
      <section className="container">
        {/* <Header/> */}
        <Viewpoint />
        {/* <Newsletter />
        <CuratedExperence />
        <OurIps />
        <Reports />
        <Media /> */}
      </section>
    </main>
  );
};

export default page;
