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
      <Header />
      <Banner />
      <Viewpoint />
      {/* <Newsletter /> */}
      <CuratedExperence />
      <OurIps />
      <Reports />
      <Media />
    </main>
  );
};

export default page;
