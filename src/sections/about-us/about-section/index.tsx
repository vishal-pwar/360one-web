import Image from "next/image";
import BrandLogoTopRightWhite from "../../../../public/assets/icons/360-one-brandmark-top-right-white.svg";
import UserCircleIcon from "../../../../public/assets/icons/user-circle.svg";
import EmpatheticMindIcon from "../../../../public/assets/icons/empathatic.svg";
import HeartIcon from "../../../../public/assets/icons/heart-icon.svg";
import StarIcon from "../../../../public/assets/icons/star.svg";
import TeamIcon from "../../../../public/assets/icons/team.svg";
import RiskBehaviourIcon from "../../../../public/assets/icons/risk-behaviour.png";

const cardsList = [
  {
    title: "Client-centric",
    content:
      "Our single-minded focus is on our clients, always. We care, we listen, we learn, and we execute to deliver beyond client expectations.",
    icon: UserCircleIcon,
  },

  {
    title: "Entrepreneurial",
    content:
      "We have extreme ownership from ideation to execution. We are innovative, agile and outcome oriented.",
    icon: EmpatheticMindIcon,
  },
  {
    title: "Right in spirit and letter",
    content:
      "We do what is right over what is easy, for our clients, fellow employees, and stakeholders. We are transparent, honest, and courageous.",
    icon: HeartIcon,
  },
  {
    title: "People-oriented",
    content:
      "We are inspired, collaborative and inclusive. Above all, we respect each other as individuals, colleagues and stakeholders working towards the same goal.",
    icon: TeamIcon,
  },
  {
    title: "Change Champions",
    content:
      "We embrace and accept change. We are driven by passion and a positive attitude. We seek opportunities to continuously learn and grow.",
    icon: StarIcon,
  },
  {
    title: "Rigorous & Risk-Conscious",
    content:
      "We are thorough & analytical in our decision-making for clients & our own business. Our enhanced risk awareness & robust governance mechanism helps navigate through all scenarios.",
    icon: RiskBehaviourIcon,
  },
];

const AboutUsSection = () => {
  return (
    <section>
      <div className="pt-[calc(103*var(--scale))] px-[calc(126*var(--scale))] pb-[calc(48*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="flex items-center justify-center gap-[calc(58*var(--scale))]">
          <h2 className="text-[calc(1*var(--size-38))] min-w-[calc(189*var(--scale))] leading-[1.36] font-bold">
            We are 360 ONE
          </h2>
          <div className="min-w-[calc(2*var(--scale))] min-h-[calc(86*var(--scale))] bg-black"></div>
          <p className="text-[calc(1*var(--size-20))] leading-[1.7]">
            We embody the 360 ONE promise every day, through our actions. Our
            culture gives us the confidence on driving continued success and
            value creation for all our stakeholders. We believe, embrace, and
            live these values and behaviours every day
          </p>
        </div>
        <div className="flex justify-between py-[calc(38*var(--scale))] mt-[calc(30*var(--scale)) gap-[calc(17*var(--scale))] border-black border-solid border-b-[calc(2*var(--scale))]">
          <div className="w-[calc(438*var(--scale))] bg-black flex justify-center items-center relative overflow-hidden">
            <div className="w-[45%] h-full flex justify-center items-center">
              <video
                className="w-full object-contain"
                src="/assets/videos/360-animation.mp4"
                muted
                playsInline
                loop
                autoPlay
              />
              {/* <Image
                src={BrandLogoTopRightWhite}
                alt="360 One Logo"
                title="360 One Logo"
              /> */}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 grid-rows-2 place-items-center gap-y-[calc(71*var(--scale))] py-[calc(10*var(--scale))]">
            {cardsList.map((card, index) => {
              const totalRows = Math.ceil(cardsList.length / 2);
              const rowNumber = Math.ceil((index + 1) / 2);
              return (
                <div
                  key={card.title}
                  className={`w-full h-full relative flex flex-col items-center justify-center px-[calc(84*var(--scale))]
                            before:content-[''] before:absolute before:h-full before:top-[50%] before:right-0 ${
                              index % 2 === 1
                                ? " before:w-0"
                                : " before:w-[calc(1*var(--scale))]"
                            } before:bg-[#979797] before:-translate-y-[50%]
                            after:content-[''] after:absolute after:w-full after:left-[50%] ${
                              rowNumber === totalRows
                                ? "after:h-0"
                                : "after:h-[calc(1*var(--scale))]"
                            }  after:bottom-[calc(-24*var(--scale))] after:bg-[#979797] after:-translate-x-[50%]`}
                >
                  <div className="w-[calc(50*var(--scale))] h-[calc(50*var(--scale))] mb-[calc(28*var(--scale))]">
                    <Image
                      className="w-full h-full object-contain object-center"
                      src={card.icon}
                      alt="card-icon"
                    />
                  </div>
                  <div>
                    <h5 className="leading-[2.2] text-[calc(1*var(--size-20))] text-center font-bold">
                      {card.title}
                    </h5>
                    <span className="leading-[1.43] text-[calc(1*var(--size-14))] text-center block">
                      {card.content}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
