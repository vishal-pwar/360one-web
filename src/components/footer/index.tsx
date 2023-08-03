import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import InstagramLogo from "@/public/assets/icons/instagram.svg";
import LinkedInLogo from "@/public/assets/icons/linkedin.svg";
import YoutubeLogo from "@/public/assets/icons/youtube.svg";
import Image from "next/image";
import Link from "next/link";

const footerLists = [
  {
    title: "360 ONE",
    listItems: [
      {
        name: "Home",
        route: "/",
      },
      {
        name: "About us",
        route: "/",
      },
      {
        name: "360 ONE Wealth",
        route: "/",
      },
      {
        name: "360 ONE Asset",
        route: "/",
      },
      {
        name: "Investor Relations",
        route: "/",
      },
      {
        name: "Reach us",
        route: "/",
      },
    ],
  },
  {
    title: "360 ONE Wealth",
    listItems: [
      {
        name: "About us",
        route: "/",
      },
      {
        name: "Services",
        route: "/",
      },
      {
        name: "Client Portfolio Login",
        route: "/",
        isUnderlined: true,
      },
      {
        name: "Client Online Trading",
        route: "/",
        isUnderlined: true,
      },
      {
        name: "360 ONE Private Login",
        route: "/",
        isUnderlined: true,
      },
    ],
  },
  {
    title: "360 ONE Asset",
    listItems: [
      {
        name: "About us",
        route: "/",
      },
      {
        name: "Services",
        route: "/",
      },
      {
        name: "View PMS portfolio",
        route: "/",
        isUnderlined: true,
      },
      {
        name: "Invest in MF Online",
        route: "/",
        isUnderlined: true,
      },
      {
        name: "Distributer Login",
        route: "/",
        isUnderlined: true,
      },
    ],
  },
];

const socialMediaList = [
  {
    name: "LinkedIn-Logo",
    icon: LinkedInLogo,
    url: "https://www.linkedin.com/company/360one/",
  },
  {
    name: "Instagram-Logo",
    icon: InstagramLogo,
    url: "https://www.instagram.com/official360.one/",
  },
  {
    name: "Youtube-Logo",
    icon: YoutubeLogo,
    url: "https://www.youtube.com/@360ONE",
  },
];

const footerBottomList = [
  {
    name: "Legal Notice",
    route: "https://iiflwealth.com/legal-notice",
  },
  {
    name: "Privacy Policy",
    route: "https://iiflwealth.com/privacy-policy",
  },
  {
    name: "Terms of Use",
    route: "https://iiflwealth.com/Terms-of-Use",
  },
  {
    name: "Disclaimer",
    route: "https://iiflwealth.com/disclaimer",
  },
];

const copyrightBannerList = [
  {
    title: "Copyright © 2023",
  },
  {
    title: "360 ONE WAM LIMITED.",
  },
  {
    title: "All rights Reserved.",
  },
];

const Footer = () => {
  return (
    <footer className="w-full p-[calc(50*var(--scale))calc(125*var(--scale))]">
      <div className="border-t-[calc(2*var(--scale))] border-black pt-[calc(41*var(--scale))]">
        <div className="flex gap-[calc(61*var(--scale))]">
          {footerLists.map((item, index) => {
            return (
              <div key={item.title}>
                <h2 className="text-[calc(1*var(--size-18))] mb-[calc(24*var(--scale))] font-bold">
                  {item.title}
                </h2>
                <ul className="list-none m-0 p-0 flex flex-col gap-[calc(16*var(--scale))]">
                  {item.listItems.map((item, index) => {
                    return (
                      <li key={item.name + index}>
                        <Link
                          className={`${
                            item.isUnderlined ? "underline" : "no-underline"
                          } text-[calc(1*var(--size-16))] tracking-wide block text-black`}
                          href={item.route}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="ml-auto flex flex-col justify-between items-end min-h-full relative">
            <Image
              src={BrandLogoBlack}
              alt="360 ONE - Asset & Wealth management"
              title="360 One"
              className="w-[calc(80*var(--scale))] h-[calc(82.6*var(--scale))] rotate-90"
            />
            <div className="flex gap-[calc(16*var(--scale))] absolute bottom-0 right-0">
              {socialMediaList.map((item, index) => {
                return (
                  <Link
                    className="w-[calc(50*var(--scale))] h-[calc(50*var(--scale))]"
                    key={item.name}
                    href={item.url}
                  >
                    <Image
                      className="w-full h-full"
                      src={item.icon}
                      alt={item.name}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-[calc(29*var(--scale))0] flex items-center gap-[calc(23*var(--scale))] border-y-[calc(2*var(--scale))] border-black mt-[calc(32*var(--scale))] text-[calc(1*var(--size-14))]">
          {footerBottomList.map((item, index) => {
            return (
              <>
                <Link className="text-black" key={item.name} href={item.route}>
                  {item.name}
                </Link>
                {index === footerBottomList.length - 1 ? undefined : (
                  <span>|</span>
                )}
              </>
            );
          })}
          <span className="ml-auto flex gap-[5px]">
            {copyrightBannerList.map((item) => {
              return <span key={item.title}>{item.title}</span>;
            })}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
