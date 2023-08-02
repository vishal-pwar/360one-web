import Image from "next/image";
import HomepagePerspective from "../../../../public/assets/images/homepage-perspective.jpg";
import Link from "next/link";

const blogsList = [
  {
    date: "8 May, 2023",
    title: "How to navigate the shifting landscape of wealth management",
    route: "/",
  },
  {
    date: "10 Apr, 2023",
    title:
      "Exclusive Interview with Anup Maheshwari, Co-founder & CIO, 360 ONE Asset",
    route: "/",
  },
  {
    date: "18 Jan, 2023",
    title: "Bain-Backed 360 ONE Floats Two Venture Funds",
    route: "/",
  },
  {
    date: "5 Jan, 2023",
    title:
      "India is a decadal investment opportunity for investors looking to gain exposure to the Asia Pacific region: Yatin Shah",
    route: "/",
  },
];

const PerspectiveSection = () => {
  return (
    <section className="px-[calc(125*var(--scale))] pt-[calc(100*var(--scale))] pb-[calc(50*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
      <h2 className="text-[calc(1*var(--size-42))] tracking-[calc(-1*var(--scale))] font-bold mb-[calc(24*var(--scale))]">
        The 360 ONE PERSPECTIVE
      </h2>
      <p className="text-[calc(1*var(--size-20))] mb-[calc(50*var(--scale))] leading-[1.5] max-w-[calc(1009*var(--scale))]">
        From industry-first perspectives to analytical insights; from
        path-breaking events to strategic partnerships, find everything that
        makes 360 ONE unique here.
      </p>
      <div className="flex gap-[calc(95*var(--scale))]">
        <div className="w-[44%] pb-[calc(94*var(--scale))] relative before:content-[''] before:absolute before:bg-[#e7e2e0] before:w-[121%] before:h-[calc(100%-(64*var(--scale)))] before:right-0 before:bottom-0 before:-z-10">
          <Image
            className="w-[calc(552*var(--scale))] max-w-[calc(552*var(--scale))] h-[calc(366*var(--scale))] mb-[calc(32*var(--scale))]"
            src={HomepagePerspective}
            alt="Wealth Management Industry"
            title="Wealth Management Industry"
          />
          <span className="text-[calc(1*var(--size-16))] tracking-[calc(0.58*var(--scale))] leading-[1.63] mb-[calc(25*var(--scale))] block">
            27 May, 2023
          </span>
          <p className="text-[calc(1*var(--size-24))] tracking-[calc(-0.57*var(--scale))] leading-[1.25] mb-[calc(25*var(--scale))] font-bold">
            Where is India’s super rich investing? Anirudha Taparia gives a
            sneak peek
          </p>
          <button className="text-black border-black p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
            <Link
              href="/"
              className="w-full h-full flex justify-center items-center"
            >
              Read More
            </Link>
          </button>
          <div className="w-[calc(195*var(--scale))] h-[calc(294*var(--scale))] absolute bg-black -z-20 right-[calc(-30*var(--scale))] bottom-[calc(-39*var(--scale))]"></div>
        </div>
        <div
          className="grid grid-cols-2 gap-[calc(80*var(--scale))] relative py-[calc(20*var(--scale))] flex-1 
        before:content-[''] before:absolute before:w-full before:bg-[#979797] before:opacity-[0.5] before:h-[calc(1*var(--scale))] before:left-[50%] before:top-[57%] before:-translate-x-[50%] before:-translate-y-[50%] 
        after:content-[''] after:absolute after:w-[calc(1*var(--scale))] after:bg-[#979797] after:opacity-[0.5] after:h-[103%] after:left-[50%] after:top-[50%] after:-translate-x-[50%] after:-translate-y-[50%]"
        >
          {blogsList.map((blogItem, index) => {
            return (
              <div className="flex flex-col pt-[52px]">
                <span className="text-[calc(1*var(--size-16))] leading-[1.25] tracking-[calc(0.58*var(--scale))] block pb-[calc(16*var(--scale))] relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:bg-black before:w-[calc(35*var(--scale))] before:h-[calc(2*var(--scale))]">
                  {blogItem.date}
                </span>
                <h3 className="text-[calc(1*var(--size-20))] leading-[1.5] tracking-[calc(0.72*var(--scale))] block font-bold mt-[calc(20*var(--scale))] mb-[calc(44*var(--scale))]">
                  {blogItem.title}
                </h3>
                <button className="text-black border-black mt-auto w-fit p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                  <Link
                    href={blogItem.route}
                    className="w-full h-full flex justify-center items-center"
                  >
                    Read More
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerspectiveSection;
