import Header from "@/components/header";
import Banner from "@/sections/perspective/banner-section";
import CuratedExperence from "@/sections/perspective/curatedExperiences-section";
import Media from "@/sections/perspective/inMedia-section";
import OurIps from "@/sections/perspective/ourIP-section";
import Reports from "@/sections/perspective/reports-section";
import Viewpoint from "@/sections/perspective/viewpoint-section";

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
