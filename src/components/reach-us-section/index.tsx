import Image from "next/image";
import UserIcon from "../../../public/assets/icons/outline-communication-user.svg";
import { getAssetReachUsSection } from "@/services/asset";
import { getWealthReachUsSection } from "@/services/wealth";

interface ReachUsSectionProps {
  page: string;
}

const ReachUsSection = async ({ page }: ReachUsSectionProps) => {
  const response =
    page === "asset"
      ? await getAssetReachUsSection()
      : await getWealthReachUsSection();

  const title = response?.data?.attributes?.reachUs?.title;
  const text = response?.data?.attributes?.reachUs?.text;
  const address = response?.data?.attributes?.reachUs?.address;
  const serviceDeskEmail =
    response?.data?.attributes?.reachUs?.serviceDeskEmail;
  const serviceDeskNumber =
    response?.data?.attributes?.reachUs?.serviceDeskNumber;
  const mediaEmail = response?.data?.attributes?.reachUs?.mediaEmail;
  const mediaNumber = response?.data?.attributes?.reachUs?.mediaNumber;

  if (!title || !text || !address) return null;

  return (
    <section className="max-md:before:w-full relative mt-[calc(122*var(--scale))] before:content-[''] before:absolute before:h-full before:w-[92.2%] before:bg-black before:-z-10 before:right-0">
      <div className="max-sm:pt-[calc(93*var(--scale))] max-sm:pb-[calc(35*var(--scale))] max-sm:px-[calc(22*var(--scale))] max-md:w-full max-md:pt-[calc(118*var(--scale))] max-md:pb-[calc(68*var(--scale))] max-md:pl-[calc(62*var(--scale))] max-md:pr-[calc(40*var(--scale))] max-lg:pr-[calc(14*var(--scale))] max-lg:py-[calc(34*var(--scale))] max-lg:pl-[calc(80*var(--scale))] p-[calc(50*var(--scale))calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="max-sm:flex-col max-sm:gap-[calc(23*var(--scale))] max-lg:gap-[calc(20*var(--scale))] flex justify-between gap-[calc(58*var(--scale))] items-start">
          <div
            className={`max-sm:min-w-[calc(280*var(--scale))] max-sm:max-w-[calc(280*var(--scale))] max-sm:h-[calc(108*var(--scale))] max-sm:left-0 max-sm:ml-0 max-sm:pl-[calc(21*var(--scale))] max-sm:bottom-[calc(100%-(29*var(--scale)))] 
            max-md:absolute max-md:bottom-[calc(100%-(60*var(--scale)))] max-md:w-[calc(440*var(--scale))] max-md:h-[calc(183*var(--scale))]
            max-lg:min-w-[calc(368*var(--scale))] max-lg:h-[calc(209*var(--scale))] max-lg:pl-[calc(40*var(--scale))] max-lg:ml-[calc(-80*var(--scale))] max-lg:mt-[calc(-63*var(--scale))] ${
              page === "asset" && "bg-asset-purple"
            } ${
              page === "wealth" && "bg-wealth-orange"
            } min-w-[calc(580*var(--scale))] h-[calc(329*var(--scale))] pl-[calc(128*var(--scale))] flex flex-col justify-center relative mt-[calc(-100*var(--scale))] ml-[calc(-126*var(--scale))]`}
          >
            <h2 className="text-[calc(1*var(--size-42))] leading-[1.05] tracking-[calc(1*var(--scale))] text-white mb-[calc(8*var(--scale))] font-bold">
              {title}
            </h2>
            <p className="text-[calc(1*var(--size-20))] text-white leading-[1.7] opacity-[0.8]">
              {text}
            </p>
            <div
              className={`max-sm:w-[calc(123*var(--scale))] max-sm:h-[calc(44*var(--scale))] max-sm:left-[calc(21*var(--scale))] max-lg:w-[calc(123*var(--scale))] max-lg:h-[calc(71*var(--scale))] max-lg:bottom-[calc(-30*var(--scale))] max-lg:left-[calc(40*var(--scale))] w-[calc(194*var(--scale))] h-[calc(112*var(--scale))] ${
                page === "asset" && "bg-asset-purple-60"
              } ${
                page === "wealth" && "bg-wealth-orange-60"
              } bottom-[calc(-48*var(--scale))] left-[calc(62*var(--scale))] absolute -z-10`}
            ></div>
          </div>
          <div className="max-lg:gap-[calc(6.2*var(--scale))] flex flex-1 flex-col gap-[calc(16*var(--scale))]">
            <div className="max-lg:gap-[calc(8.2*var(--scale))] flex items-center gap-[calc(16*var(--scale))]">
              <Image
                className="max-lg:w-[calc(24*var(--scale))] max-lg:h-[calc(24*var(--scale))] w-[calc(40*var(--scale))] h-[calc(40*var(--scale))]"
                src={UserIcon}
                alt="user"
                title="user"
              />
              <h4 className="max-lg:text-[calc(17*var(--scale))] text-[calc(1*var(--size-24))] font-semibold text-white leading-[1.75]">
                Connect with us:
              </h4>
            </div>
            <div className="max-md:gap-[calc(16*var(--scale))] max-lg:pl-[calc(33*var(--scale))] flex flex-col gap-[calc(24*var(--scale))] text-white pl-[calc(58*var(--scale))]">
              <p className="text-[calc(1*var(--size-16))] opacity-[0.8] leading-[1.67]">
                Centralised Service Desk:
                <span className="text-[calc(1*var(--size-18))] font-bold block">
                  {serviceDeskEmail}
                </span>
                <span className="text-[calc(1*var(--size-18))] font-bold block">
                  {serviceDeskNumber}
                </span>
              </p>
              <p className="text-[calc(1*var(--size-16))] opacity-[0.8] leading-[1.67]">
                Media Contact:
                <span className="text-[calc(1*var(--size-18))] font-bold block">
                  {mediaEmail}
                </span>
                <span className="text-[calc(1*var(--size-18))] font-bold block">
                  {mediaNumber}
                </span>
              </p>
            </div>
          </div>
          <div className="max-sm:h-[calc(2*var(--scale))] max-sm:w-full max-sm:block max-sm:opacity-[0.5] max-lg:hidden w-[calc(2*var(--scale))] bg-[#979797] h-[calc(268*var(--scale))]"></div>
          <div className="max-lg:gap-[calc(6.2*var(--scale))] flex flex-1 flex-col gap-[calc(16*var(--scale))]">
            <div className="max-lg:gap-[calc(8.2*var(--scale))] flex items-center gap-[calc(16*var(--scale))]">
              <Image
                className="max-lg:w-[calc(24*var(--scale))] max-lg:h-[calc(24*var(--scale))] w-[calc(40*var(--scale))] h-[calc(40*var(--scale))]"
                src={UserIcon}
                alt="user"
                title="user"
              />
              <h4 className="max-lg:text-[calc(17*var(--scale))] text-[calc(1*var(--size-24))] font-semibold text-white leading-[1.75]">
                Corporate Address:
              </h4>
            </div>
            <div className="max-md:gap-[calc(16*var(--scale))] max-lg:pl-[calc(33*var(--scale))] flex flex-col gap-[calc(24*var(--scale))] text-white pl-[calc(58*var(--scale))]">
              {address && (
                <div
                  className="text-[calc(1*var(--size-16))] opacity-[0.8] leading-[1.67]"
                  dangerouslySetInnerHTML={{ __html: address }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUsSection;
