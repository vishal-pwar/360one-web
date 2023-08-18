import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ReachUsSection from "@/components/reach-us-section";
import SuiteSection from "@/components/suite-section";
import BrandmarkAssetTopRightWhiteLogo from "../../../public/assets/icons/360-one-brandmark-asset-top-right-white.svg";
import AssetManagementBanner from "../../../public/assets/images/asset-management-banner.png";
import AssetPerspective from "../../../public/assets/images/wealth-perspective.jpg";
import PerspectiveSection from "@/components/perspective-section";
import AssetSuiteBlur from "@/public/assets/images/asset-suite-blur.png";
import AssetSuiteClear from "@/public/assets/images/asset-suite-clear.png";
import ListedEquityIcon from "../../../public/assets/icons/listed-equity.svg";
import PrivateEquityIcon from "../../../public/assets/icons/private-equity.svg";
import RealAssetsIcon from "../../../public/assets/icons/real-estate.svg";
import StructuredCreditIcon from "../../../public/assets/icons/structured-credit.svg";
import LongShortIcon from "../../../public/assets/icons/lending-solution.svg";
import CustomisedSolutionsIcon from "../../../public/assets/icons/customised.svg";

const assetManagementBannerContent = {
  title: "Pioneering products, informed advice",
  body: "Creating right risk-adjusted alpha for you is our goal . As India’s leading alternates-focused firm, we do this by leveraging our deep-domain knowledge, strong understanding of the Indian markets and a highly experienced investment team. Make the most of the 360 ONE Asset advantage across public and private equity, credit, fixed income and real assets and ride the India growth opportunity.",
  image: AssetManagementBanner,
  icon: BrandmarkAssetTopRightWhiteLogo,
  section: "asset",
  cardBackgroundColor: "#5a32ff",
  cardLayerColor: "#FF9478",
};

const assetReachUsSectionContent = {
  backgroundColor: "#5a32ff",
  layerColor: "#FF9478",
  section: "asset",
};

const suiteCardsList = [
  {
    title: "Listed Equity",
    body: "Long-term growth and consistent right risk-adjusted alpha across market cycles is characteristic of our listed equity offering. The listed/public equities business is built around three core strategies - Diversified, Concentrated and Thematic. These strategies are focused around our proprietary SCDV (Secular, Cyclical, Defensive & Value Traps) framework of portfolio construction. The 360 ONE Asset clientele for listed equities comprises Indian and overseas investors including institutional investors.",
    icon: ListedEquityIcon,
  },
  {
    title: "Private Equity",
    body: "Private equity (PE) is a young and vibrant area of growth. Having pioneered Alternative Investment Funds (AIFs) in India, our PE investment experience spans across stages from early- & mid-stage to late stage & pre-IPO investing along with thematic investing. With this, we are able to participate in a company's growth lifecycle over a longer period of time.",
    icon: PrivateEquityIcon,
  },
  {
    title: "Real Assets",
    body: "Real assets remains an asset category of choice. Especially since infrastructure and commercial real estate are among the biggest beneficiaries of the India growth story. To help you leverage opportunities and assist in making strategic investments, our domain experts piece together quality partnerships and tailor-made solutions.",
    icon: RealAssetsIcon,
  },
  {
    title: "Structured Credit",
    body: "Private credit, a rapidly growing segment, is driven by robust credit demand, large imminent capex cycle, supply side constraints and dominant private equity activity. We provide flexible innovative capital solutions with a focus on under-served mid-market segment and special situations financing for large issuers. Deep expertise, strong operating track record and a disciplined underwriting framework enable robust origination and access to bespoke transactions.",
    icon: StructuredCreditIcon,
  },
  {
    title: "Long-short (Hedge Fund)",
    body: "Alongside the India growth opportunity, other Asian markets too provide strategic investment opportunities. We employ a variety of fundamental, quantitative, directional, and relative value strategies to generate absolute returns on a risk-adjusted basis for clients.",
    icon: LongShortIcon,
  },
  {
    title: "Bespoke/Customized Solutions",
    body: "Customized solutions and strategies, provided under the PMS route, enable investors to safeguard and grow their investments in line with specific objectives. Our solutions are derived through a robust investment framework and based on a deep understanding of both public and private debt and equity. Choose the bespoke route to seek actively managed investment solutions that are clear and effective.",
    icon: CustomisedSolutionsIcon,
  },
];

const perspectiveSectionContent = {
  title: "The 360 ONE PERSPECTIVE",
  subtitle:
    "Read and hear our perspectives on the Indian market, economy and business environment.",
  heroImage: AssetPerspective,
  heroBlogDate: "4 Jun, 2023",
  heroBlogTitle:
    "Why alternative investment funds are betting on performing credit",
  heroBlogUrl:
    "https://www.iiflamc.com/media/in-the-news/2023/why-alternative-investment-funds-are-betting",
  blogsList: [
    {
      date: "3 Jun, 2023",
      title:
        "360 One Asset Management Closes Fourth Private Credit Fund at INR 2,130 Cr",
      url: "https://www.iiflamc.com/media/in-the-news/2023/360-one-asset-management-closes-fourth-private",
    },
    {
      date: "26 Mar, 2023",
      title:
        "Career engagement platform HerKey secures $4m funding from Kalaari, 360 ONE Asset",
      url: "https://www.iiflamc.com/media/in-the-news/2023/career-engagement-platform-herkey-secures-4m",
    },
    {
      date: "10 Mar, 2023",
      title:
        "Exclusive Interview with Anup Maheshwari, Co-founder & CIO, 360 ONE Asset",
      url: "https://www.iiflamc.com/media/in-the-news/2023/exclusive-interview-anup-maheshwari-co-founder-cio",
    },
    {
      date: "10 Mar, 2023",
      title:
        "This fund manager is overweight on autos with EV capabilities, and underweight on FMCG",
      url: "https://www.iiflamc.com/media/in-the-news/2023/daily-voice-fund-manager-overweight-autos-ev",
    },
  ],
};

const suiteSectionContent = {
  title: "The 360 ONE Asset Suite",
  subtitle:
    "Take your pick from a range of innovative Alternative Investment Funds (AIFs), Portfolio Management Services (PMS) and Mutual Funds (MFs).",
  externalRoute: "https://www.iiflamc.com/",
  blurImg: AssetSuiteBlur,
  clearImg: AssetSuiteClear,
  icon: BrandmarkAssetTopRightWhiteLogo,
  cardsList: suiteCardsList,
  cardBackgroundColor: "#5a32ff",
  section: "asset",
};

const AssetManagement = () => {
  return (
    <>
      <Header />
      <Banner {...assetManagementBannerContent} />
      <SuiteSection {...suiteSectionContent} />
      <PerspectiveSection />
      <ReachUsSection {...assetReachUsSectionContent} />
      <Footer />
    </>
  );
};

export default AssetManagement;
