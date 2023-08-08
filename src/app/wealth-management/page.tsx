import Banner from "@/components/banner";
import Footer from "@/components/footer";
import WealthBanner from "../../../public/assets/images/wealth-banner.png";
import WealthPerspective from "../../../public/assets/images/wealth-perspective.jpg";
import BrandmarkWealthTopRightWhiteLogo from "../../../public/assets/icons/360-one-brandmark-wealth-top-right-white.svg";
import PerspectiveSection from "@/components/perspective-section";
import Header from "@/components/header";
import ReachUsSection from "@/components/reach-us-section";
import SuiteSection from "@/components/suite-section";
import WealthSuiteBlur from "@/public/assets/images/wealth-suite-blur.jpg";
import WealthSuiteClear from "@/public/assets/images/wealth-suite-clear.jpg";
import OnePlusIcon from "../../../public/assets/icons/360one-plus.svg";
import FamilyOfficeSolutionIcon from "../../../public/assets/icons/family-office-solution.svg";
import RealEstateIcon from "../../../public/assets/icons/real-estate.svg";
import LendingSolutionIcon from "../../../public/assets/icons/lending-solution.svg";
import InvestmentProductsIcon from "../../../public/assets/icons/investment-products.svg";

const wealthManagementBannerContent = {
  title: "Enabling growth, building legacies",
  body: "As individuals, businesses or families, we understand that your priorities and ambitions are unique and evolving. Tailored to suit you, we offer investment expertise with the help of our deep research, our thorough investment framework and a uniquely comprehensive platform. Our focus is on advising you on the most suited avenues for investments, by always aligning with your interests.",
  image: WealthBanner,
  icon: BrandmarkWealthTopRightWhiteLogo,
  section: "wealth",
  cardBackgroundColor: "#FF9478",
  cardLayerColor: "#8C8CFF",
};

const wealthReachUsSectionContent = {
  backgroundColor: "#FF9478",
  layerColor: "#8C8CFF",
  section: "wealth",
};

const suiteCardsList = [
  {
    title: "360 ONE Plus",
    body: "360 ONE Plus puts us firmly on your side of the table. A transparent, pricing model ensures that we are truly able to align with your interests. You can choose the extent of your involvement weigh-in on every investment decision or choose to let us do the heavy lifting, within the confines of the framework. Irrespective, you get access to the best opportunities; a full-stack advisory suite, advantage of highly institutionalized and process-based investment approach and a host of unique privileges. A transparent fee -only pricing model ensures that we are truly aligned with your interests.",
    icon: OnePlusIcon,
  },
  {
    title: "Investment Products",
    body: "We understand your needs, ambitions and priorities may be different from others. Hence, we start with understanding your objectives. We are constantly focused towards bringing you the most filtered investment opportunities, thereby increasing the probability of success & long-term performance. Our consolidated reporting and analytics tools help you stay in control of your wealth and factor any evolving needs.",
    icon: InvestmentProductsIcon,
  },
  {
    title: "Family Office Solutions",
    body: "We understand that family must navigate increasingly complex challenges while bearing the all-important responsibility of ensuring the family’s legacy is preserved for future generations. From setting up the Family Governance framework to Business Advisory, from choice of Holding structures to planning for offshore beneficiaries, from succession planning to identifying philanthropic causes, we help you develop an institutional approach to enriching your family’s legacy, so that you can focus on what you do best.",
    icon: FamilyOfficeSolutionIcon,
  },
  {
    title: "Estate Planning",
    body: "Creating wealth is one thing but safeguarding it and passing it seamlessly to the next generation requires care and expertise, both. From creating wills to setting up trusts and managing assets under them, our Estate Planning experts help structure your financial and non-financial assets in an effective, efficient and compliant manner, to ensure competent management in the present and a smooth transition in the future.",
    icon: RealEstateIcon,
  },
  {
    title: "Lending Solutions",
    body: "We extend strategic lending solutions to clients so that they can make the most of growth opportunities. Whether it is a short-term requirement; finances needed for acquisition or long-term investments for strategic purposes, we have flexible lending models that work to your advantage.",
    icon: LendingSolutionIcon,
  },
];

const perspectiveSectionContent = {
  title: "The 360 ONE PERSPECTIVE",
  subtitle:
    "Read and hear our perspectives on the Indian market, economy and business environment.",
  heroImage: WealthPerspective,
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

const suiteSectionContent = {
  title: "The 360 ONE Wealth Suite",
  subtitle: "Choose how you want to engage with us.",
  externalRoute: "https://www.iiflwealth.com/",
  blurImg: WealthSuiteBlur,
  clearImg: WealthSuiteClear,
  icon: BrandmarkWealthTopRightWhiteLogo,
  cardsList: suiteCardsList,
  cardBackgroundColor: "wealth-orange",
  section: "wealth",
};

const WealthManagement = () => {
  return (
    <>
      <Header />
      <Banner {...wealthManagementBannerContent} />
      <SuiteSection {...suiteSectionContent} />
      <PerspectiveSection {...perspectiveSectionContent} />
      <ReachUsSection {...wealthReachUsSectionContent} />
      <Footer />
    </>
  );
};

export default WealthManagement;
