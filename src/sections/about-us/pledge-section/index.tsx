import { getPledgeSection } from "@/services/about";
import PledgeSlider from "../pledge-slider";

const PledgeSection = async () => {
  const response = await getPledgeSection();
  const title = response?.data?.attributes?.pledge?.title;
  const text = response?.data?.attributes?.pledge?.text;
  const cards = response?.data?.attributes?.pledge?.cards;

  return (
    <section>
      <div className="max-md:p-[calc(48*var(--scale))calc(28*var(--scale))] max-lg:p-[calc(48*var(--scale))calc(80*var(--scale))] p-[calc(48*var(--scale))calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto overflow-x-hidden">
        <div className="max-sm:flex-col max-md:flex-col max-md:gap-[calc(30*var(--scale))] max-lg:gap-[calc(52*var(--scale))] flex gap-[calc(77*var(--scale))] justify-between">
          <div className="max-sm:w-full max-md:w-[calc(591*var(--scale))] w-[calc(474*var(--scale))]">
            <h2 className="max-md:text-[calc(20*var(--scale))] max-md:w-full text-[calc(1*var(--size-38))] mb-[calc(8*var(--scale))] whitespace-nowrap font-bold">
              {title}
            </h2>
            {text && (
              <div
                className="max-md:text-[calc(14*var(--scale))] max-md:leading-[1.43] max-md:w-full max-lg:text-[calc(1*var(--size-16))] max-lg:leading-[1.43] flex flex-col leading-[1.65] text-[calc(1*var(--size-20))]"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            )}
          </div>
          <PledgeSlider cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default PledgeSection;
