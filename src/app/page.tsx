import Footer from "@/components/footer";
import Header from "@/components/header";
import BannerSection from "@/sections/landing/banner-section";
import CommitmentSection from "@/sections/landing/commitment-section";
import OfferingsSection from "@/sections/landing/offerings-section";
import PerspectiveSection from "@/components/perspective-section";
import HomepagePerspective from "../../public/assets/images/homepage-perspective.jpg";

const perspectiveSectionContent = {
  title: "The 360 ONE PERSPECTIVE",
  subtitle:
    "Read and hear our perspectives on the Indian market, economy and business environment.",
  heroImage: HomepagePerspective,
  heroBlogDate: "27 May, 2023",
  heroBlogTitle:
    "Where is India’s super rich investing? Anirudha Taparia gives a sneak peek",
  heroBlogUrl:
    "https://iiflwealth.com/newsroom/in_the_news/where-indias-super-rich-investing-anirudha-taparia-gives-sneak-peek",
  blogsList: [
    {
      date: "8 May, 2023",
      title: "How to navigate the shifting landscape of wealth management",
      url: "https://iiflwealth.com/newsroom/in_the_news/how-navigate-shifting-landscape-wealth-management",
    },
    {
      date: "18 Jan, 2023",
      title: "Bain-Backed 360 ONE Floats Two Venture Funds",
      url: "https://iiflwealth.com/newsroom/in_the_news/bain-backed-360-one-floats-two-venture-funds",
    },
    {
      date: "5 Jan, 2023",
      title:
        "India is a decadal investment opportunity for investors looking to gain exposure to the Asia Pacific region: Yatin Shah",
      url: "https://iiflwealth.com/newsroom/in_the_news/india-decadal-investment-opportunity-investors-looking-gain-exposure-asia",
    },
    {
      date: "2 Jan, 2023",
      title:
        "Roadmap for 2023: What equity, debt investors can expect from the new year",
      url: "https://iiflwealth.com/newsroom/in_the_news/roadmap-2023-what-equity-debt-investors-can-expect-new-year",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <CommitmentSection />
      <OfferingsSection />
      <PerspectiveSection {...perspectiveSectionContent} />
      <Footer />
    </>
  );
}
