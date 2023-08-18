import { getLeadershipSection } from "@/services/about";
import LeadershipSlider from "../leadership-slider";

const LeadershipSection = async () => {
  const response = await getLeadershipSection();
  const { title, text, cards, link } = response?.data?.attributes?.leadership;

  return (
    <section
      className="relative overflow-hidden mb-[calc(84*var(--scale))] 
                before:absolute before:content-[''] before:w-full before:h-full before:bg-[#f2f0ef] before:-z-10 before:left-[7.9%]"
    >
      <div className="p-[calc(48*var(--scale))calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="flex flex-col items-end">
          <h2 className="text-[calc(1*var(--size-38))] mr-auto mb-[calc(8*var(--scale))] ml-[calc(98*var(--scale))] font-bold text-black tracking-[calc(-0.9*var(--scale))]">
            {title}
          </h2>
          <p className="text-[calc(1*var(--size-20))] leading-[1.8] mr-auto mb-[calc(9*var(--scale))] ml-[calc(98*var(--scale))] max-w-[calc(1006*var(--scale))] text-black">
            {text}
          </p>
          <LeadershipSlider cards={cards} link={link} />
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
