import Footer from "@/components/footer";
import Header from "@/components/header";
import BannerSection from "@/sections/landing/banner-section";
import CommitmentSection from "@/sections/landing/commitment-section";
import OfferingsSection from "@/sections/landing/offerings-section";
import PerspectiveSection from "@/components/perspective-section";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <CommitmentSection />
      <OfferingsSection />
      <PerspectiveSection />
      <Footer />
    </>
  );
}
