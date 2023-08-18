import Banner from "@/components/banner";
import Footer from "@/components/footer";
import PerspectiveSection from "@/components/perspective-section";
import Header from "@/components/header";
import ReachUsSection from "@/components/reach-us-section";
import SuiteSection from "@/components/suite-section";

const WealthManagement = () => {
  return (
    <>
      <Header />
      <Banner page="wealth" />
      <SuiteSection page="wealth" />
      <PerspectiveSection page="wealth" />
      <ReachUsSection page="wealth" />
      <Footer />
    </>
  );
};

export default WealthManagement;
