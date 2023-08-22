import { getPledgeSection } from "@/services/about";
import PledgeSlider from "../pledge-slider";

const PledgeSection = async () => {
  const response = await getPledgeSection();
  const { title, text, cards } = response?.data?.attributes?.pledge;

  return (
    <section>
      <div className="max-md:p-[calc(48*var(--scale))calc(28*var(--scale))] max-lg:p-[calc(48*var(--scale))calc(80*var(--scale))] p-[calc(48*var(--scale))calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="max-sm:flex-col max-md:gap-[calc(30*var(--scale))] max-lg:gap-[calc(52*var(--scale))] flex gap-[calc(77*var(--scale))] justify-between">
          <div className="max-sm:w-full w-[calc(474*var(--scale))]">
            <h2 className="max-md:text-[calc(20*var(--scale))] max-md:w-full text-[calc(1*var(--size-38))] mb-[calc(8*var(--scale))] whitespace-nowrap font-bold">
              {title}
            </h2>
            <p className="max-md:text-[calc(14*var(--scale))] max-md:leading-[1.46] max-md:w-full max-lg:text-[calc(1*var(--size-16))] max-lg:leading-[1.43] flex flex-col leading-[1.65] text-[calc(1*var(--size-20))]">
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
