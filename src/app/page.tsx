import Image from "next/image";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import BannerSection from "@/components/molecules/banner-section";
import CommitmentSection from "@/components/molecules/commitment-section";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <CommitmentSection />
      <h1 className="text-3xl bg-white text-black h-[1200px] p-20">Body</h1>
      <Footer />
    </>
  );
}
