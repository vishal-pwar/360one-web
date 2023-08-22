import { getLeadershipSection } from "@/services/about";
import LeadershipSlider from "../leadership-slider";

const LeadershipSection = async () => {
  const response = await getLeadershipSection();
  const { title, text, cards, link } = response?.data?.attributes?.leadership;

  return (
    <section
      className="max-sm:before:left-0 max-lg:mb-[calc(40*var(--scale))] relative overflow-hidden mb-[calc(84*var(--scale))] 
                before:absolute before:content-[''] before:w-full before:h-full before:bg-[#f2f0ef] before:-z-10 before:left-[7.9%]"
    >
      <div className="max-sm:p-[calc(48*var(--scale))calc(28*var(--scale))] max-lg:p-[calc(48*var(--scale))calc(80*var(--scale))] p-[calc(48*var(--scale))calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="flex flex-col items-end">
          <h2 className="max-sm:ml-0 max-sm:mb-[calc(8*var(--scale))] max-lg:mb-[calc(4*var(--scale))] max-lg:ml-[calc(62*var(--scale))] max-lg:leading-[1.17] max-lg:tracking-[calc(-0.9*var(--scale))] text-[calc(1*var(--size-38))] mr-auto mb-[calc(8*var(--scale))] ml-[calc(98*var(--scale))] font-bold text-black tracking-[calc(-0.9*var(--scale))]">
            {title}
          </h2>
          <p className="max-sm:ml-0 max-sm:leading-[1.43] max-lg:mb-[calc(11*var(--scale))] max-lg:ml-[calc(62*var(--scale))] max-lg:leading-[1.38] max-lg:max-w-[calc(686*var(--scale))] text-[calc(1*var(--size-20))] leading-[1.8] mr-auto mb-[calc(9*var(--scale))] ml-[calc(98*var(--scale))] max-w-[calc(1006*var(--scale))] text-black">
            {text}
          </p>
          <LeadershipSlider cards={cards} link={link} />
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
