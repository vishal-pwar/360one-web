import { getRecognitionSection } from "@/services/about";
import RecognitionCards from "../recognition-cards";

const RecognitionSection = async () => {
  const response = await getRecognitionSection();
  const { title, text, cards } = response?.data?.attributes?.recognition;

  return (
    <section>
      <div className="max-sm:pt-[calc(40*var(--scale))] max-sm:pb-[calc(30*var(--scale))] max-sm:px-[calc(28*var(--scale))] max-lg:pt-[calc(72*var(--scale))] max-lg:pb-[calc(40*var(--scale))] max-lg:px-[calc(80*var(--scale))] pt-[calc(113*var(--scale))] pb-[calc(65*var(--scale))] px-[calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="max-sm:before:bottom-[calc(-30*var(--scale))] max-lg:before:bottom-[calc(-40*var(--scale))] relative before:content-[''] before:absolute before:left-0 before:w-full before before:h-[calc(2*var(--scale))] before:bottom-[calc(-65*var(--scale))] before:bg-black">
          <h2 className="max-md:text-[calc(20*var(--scale))] text-[calc(1*var(--size-38))] leading-[1.16] tracking-[calc(-0.9*var(--scale))] mb-[calc(8*var(--scale))] font-bold">
            {title}
          </h2>
          <p className="max-sm:leading-[1.43] max-sm:mb-[calc(45*var(--scale))] max-md:text-[calc(14*var(--scale))] max-md:max-w-[calc(607*var(--scale))] text-[calc(1*var(--size-20)) leading-[1.7] max-w-[calc(887*var(--scale))] mb-[calc(90*var(--scale))]">
            {text}
          </p>
          <RecognitionCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
