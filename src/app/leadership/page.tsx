import Footer from "@/components/footer";
import Header from "@/components/header";
import AssetSliderSection from "@/sections/leadership/asset-slider-section";
import BodSliderSection from "@/sections/leadership/bod-slider-section";
import TeamSliderSection from "@/sections/leadership/team-slider-section";
import WealthSliderSection from "@/sections/leadership/wealth-slider-section";

const LeadershipPage = () => {
  return (
    <>
      <Header />
      <BodSliderSection />
      <TeamSliderSection />
      <WealthSliderSection />
      <AssetSliderSection />
      <Footer />
    </>
  );
};

export default LeadershipPage;
