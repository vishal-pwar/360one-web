import React from "react";
import Header from "@/components/header";
import Viewpoint from "@/sections/perspective/viewpoint-section";
import CuratedExperence from "@/sections/perspective/curatedExperiences-section";
import OurIps from "@/sections/perspective/ourIP-section";

const page = () => {
  return (
    <section className="p-6 sm:p-12 lg:p-24 xl:p-32">
      {/* <Header/> */}
      <Viewpoint />
      <CuratedExperence />
      <OurIps />
    </section>
  );
};

export default page;
