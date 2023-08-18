import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ReachUsSection from "@/components/reach-us-section";
import SuiteSection from "@/components/suite-section";
import PerspectiveSection from "@/components/perspective-section";

const AssetManagement = () => {
  return (
    <>
      <Header />
      <Banner page="asset" />
      <SuiteSection page="asset" />
      <PerspectiveSection page="asset" />
      <ReachUsSection page="asset" />
      <Footer />
    </>
  );
};

export default AssetManagement;
