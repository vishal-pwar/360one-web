import Image from "next/image";
import UserIcon from "../../../public/assets/icons/outline-communication-user.svg";
import { getAssetReachUsSection } from "@/services/asset-management";
import { getWealthReachUsSection } from "@/services/wealth-management";

interface ReachUsSectionProps {
  page: string;
}

const ReachUsSection = async ({ page }: ReachUsSectionProps) => {
  const response =
    page === "asset"
      ? await getAssetReachUsSection()
      : await getWealthReachUsSection();

  const {
    title,
    text,
    address,
    serviceDeskEmail,
    serviceDeskNumber,
    mediaEmail,
    mediaNumber,
  } = response?.data?.attributes?.reachUs;
  return (
    <section className="relative mt-[calc(122*var(--scale))] before:content-[''] before:absolute before:h-full before:w-[92.2%] before:bg-black before:-z-10 before:right-0">
      <div className="p-[calc(50*var(--scale))calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="flex justify-between gap-[calc(58*var(--scale))] items-start">
          <div
            className={` ${page === "asset" && "bg-asset-purple"} ${
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
              className={`w-[calc(194*var(--scale))] h-[calc(112*var(--scale))] ${
                page === "asset" && "bg-asset-purple-60"
              } ${
                page === "wealth" && "bg-wealth-orange-60"
              } bottom-[calc(-48*var(--scale))] left-[calc(62*var(--scale))] absolute -z-10`}
            ></div>
          </div>
          <div className="flex flex-1 flex-col gap-[calc(16*var(--scale))]">
            <div className="flex items-center gap-[calc(16*var(--scale))]">
              <Image
                className="w-[calc(40*var(--scale))] h-[calc(40*var(--scale))]"
                src={UserIcon}
                alt="user"
                title="user"
              />
              <h4 className="text-[calc(1*var(--size-24))] font-semibold text-white leading-[1.75]">
                Connect with us:
              </h4>
            </div>
            <div className="flex flex-col gap-[calc(24*var(--scale))] text-white pl-[calc(58*var(--scale))]">
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
          <div className="w-[calc(2*var(--scale))] bg-[#979797] h-[calc(268*var(--scale))]"></div>
          <div className="flex flex-1 flex-col gap-[calc(16*var(--scale))]">
            <div className="flex items-center gap-[calc(16*var(--scale))]">
              <Image
                className="w-[calc(40*var(--scale))] h-[calc(40*var(--scale))]"
                src={UserIcon}
                alt="user"
                title="user"
              />
              <h4 className="text-[calc(1*var(--size-24))] font-semibold text-white leading-[1.75]">
                Corporate Address:
              </h4>
            </div>
            <div className="flex flex-col gap-[calc(24*var(--scale))] text-white pl-[calc(58*var(--scale))]">
              <p className="text-[calc(1*var(--size-16))] opacity-[0.8] leading-[1.67]">
                {address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUsSection;
