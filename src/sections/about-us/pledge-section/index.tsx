import { getPledgeSection } from "@/services/about";
import PledgeSlider from "../pledge-slider";

const PledgeSection = async () => {
  const response = await getPledgeSection();
  const { title, text, cards } = response?.data?.attributes?.pledge;

  return (
    <section>
      <div className="p-[calc(48*var(--scale))calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="flex gap-[calc(77*var(--scale))] justify-between">
          <div className="w-[calc(474*var(--scale))]">
            <h2 className="text-[calc(1*var(--size-38))] mb-[calc(8*var(--scale))] whitespace-nowrap font-bold">
              {title}
            </h2>
            <div className="flex flex-col leading-[1.65] text-[calc(1*var(--size-20))]">
              {text}
            </div>
          </div>
          <PledgeSlider cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default PledgeSection;
