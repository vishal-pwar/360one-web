import { getPledgeSection } from "@/services/about";
import PledgeSlider from "../pledge-slider";

const PledgeSection = async () => {
  const response = await getPledgeSection();
  const { title, text, cards } = response?.data?.attributes?.pledge;

  return (
    <section>
      <div className="max-lg:p-[calc(48*var(--scale))calc(80*var(--scale))] p-[calc(48*var(--scale))calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="max-lg:gap-[calc(52*var(--scale))] flex gap-[calc(77*var(--scale))] justify-between">
          <div className="w-[calc(474*var(--scale))]">
            <h2 className="text-[calc(1*var(--size-38))] mb-[calc(8*var(--scale))] whitespace-nowrap font-bold">
              {title}
            </h2>
            <p className="max-lg:text-[calc(1*var(--size-16))] max-lg:leading-[1.43] flex flex-col leading-[1.65] text-[calc(1*var(--size-20))]">
              {text}
            </p>
          </div>
          <PledgeSlider cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default PledgeSection;
