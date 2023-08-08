import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutUsSection from "@/sections/about-us/about-section";
import AboutBannerSection from "@/sections/about-us/banner-section";
import CountsSection from "@/sections/about-us/counts-section";
import JourneySection from "@/sections/about-us/journey-section";
import RecognitionSection from "@/sections/about-us/recognition-section";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutBannerSection />
      <AboutUsSection />
      <JourneySection />
      <RecognitionSection />
      <CountsSection />
      <Footer />
    </>
  );
};

export default AboutUsPage;
