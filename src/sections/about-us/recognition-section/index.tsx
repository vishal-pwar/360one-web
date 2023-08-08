import Image from "next/image";
import LeafWingIcon from "../../../../public/assets/icons/leaf-wing.svg";
import AsiaMoneyImg from "../../../../public/assets/images/asiamoney.png";
import WealthBriefingImg from "../../../../public/assets/images/wealth-briefing.png";
import BrandonImg from "../../../../public/assets/images/brandon.png";
import UanticImg from "../../../../public/assets/images/uantic.png";

const accoladesList = [
  {
    presenterName: "Asiamoney Private Banking Awards, 2022",
    title: "Best Succession Planning in India",
    image: AsiaMoneyImg,
  },
  {
    presenterName: "Wealth Briefing Asia Awards, 2022",
    title: "Best Wealth Manager (India)",
    image: WealthBriefingImg,
  },
  {
    presenterName:
      "Brandon Hall Group Human Capital Management (HCM) Excellence Awards, 2022",
    title: "Best Learning Program Supporting a Business Strategy",
    image: BrandonImg,
  },
  {
    presenterName: "Quantic India’s NBFC & FinTech Excellence Awards 2022",
    title: "Data Analytics & AI Service Provider of the Year",
    image: UanticImg,
  },
];

const RecognitionSection = () => {
  return (
    <section>
      <div className="pt-[calc(113*var(--scale))] pb-[calc(65*var(--scale))] px-[calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="relative before:content-[''] before:absolute before:left-0 before:w-full before before:h-[calc(2*var(--scale))] before:bottom-[calc(-65*var(--scale))] before:bg-black">
          <h2 className="text-[calc(1*var(--size-38))] leading-[1.16] tracking-[calc(-0.9*var(--scale))] mb-[calc(8*var(--scale))] font-bold">
            Recognition and Accolades
          </h2>
          <p className="text-[calc(1*var(--size-20)) leading-[1.7] max-w-[calc(887*var(--scale))] mb-[calc(90*var(--scale))]">
            Awards are a validation of the trust that you have in 360 ONE. We
            have been honored with over 150 awards - a testament to the strength
            of our relationships as well as our offerings.
          </p>
          <div className="flex justify-between gap-[calc(10*var(--scale))]">
            {accoladesList.map((accoladeItem, index) => {
              return (
                <>
                  <div className="max-w-[calc(278*var(--scale))] flex flex-col">
                    <Image
                      className="w-[calc(46*var(--scale))] h-[calc(42*var(--scale))] mb-[calc(8*var(--scale))]"
                      src={LeafWingIcon}
                      alt="accolades"
                      title="accolades"
                    />
                    <p className="text-[calc(1*var(--size-14)] leading-[1.43] tracking-[calc(0.53*var(--scale))]">
                      {accoladeItem.presenterName}
                    </p>
                    <div className="h-[calc(1*var(--scale))] w-[calc(35*var(--scale))] bg-black mt-[calc(15*var(--scale))] mb-[calc(22*var(--scale))]"></div>
                    <h5 className="text-[calc(1*var(--size-20))] leading-[1.3] tracking-[calc(0.72*var(--scale))] mb-[calc(25*var(--scale))] font-bold">
                      {accoladeItem.title}
                    </h5>
                    <Image
                      className="w-[calc(125*var(--scale))] h-[calc(86*var(--scale))] mt-auto mb-[calc(8*var(--scale))]"
                      src={accoladeItem.image}
                      alt="accolades"
                      title="accolades"
                    />
                  </div>
                  <div className="w-[calc(1*var(--scale))] h-auto bg-[#979797]"></div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
