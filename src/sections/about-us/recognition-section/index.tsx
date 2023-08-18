import { getRecognitionSection } from "@/services/about";
import RecognitionCards from "../recognition-cards";

const RecognitionSection = async () => {
  const response = await getRecognitionSection();
  const { title, text, cards } = response?.data?.attributes?.recognition;

  return (
    <section>
      <div className="pt-[calc(113*var(--scale))] pb-[calc(65*var(--scale))] px-[calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="relative before:content-[''] before:absolute before:left-0 before:w-full before before:h-[calc(2*var(--scale))] before:bottom-[calc(-65*var(--scale))] before:bg-black">
          <h2 className="text-[calc(1*var(--size-38))] leading-[1.16] tracking-[calc(-0.9*var(--scale))] mb-[calc(8*var(--scale))] font-bold">
            {title}
          </h2>
          <p className="text-[calc(1*var(--size-20)) leading-[1.7] max-w-[calc(887*var(--scale))] mb-[calc(90*var(--scale))]">
            {text}
          </p>
          <RecognitionCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
