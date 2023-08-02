import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import BannerSection from "@/components/molecules/banner-section";
import CommitmentSection from "@/components/molecules/commitment-section";
import OfferingsSection from "@/components/molecules/offerings-section";
import PerspectiveSection from "@/components/molecules/perspective-section";

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
