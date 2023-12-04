import React from "react";
import NewsletterImage from "@/public/assets/icons/Newsletter-perspective.svg";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="flex flex-col mt-11 md:mt-12 lg:mt-20 2xl:mt-32 lg:flex-row lg:flex-1 p-2">
      <div className="lg:flex-[5]">
        <Image
          src={NewsletterImage}
          alt="Newsletter Image"
          className="w-full object-cover h-40 sm:h-52 md:h-64 lg:h-96 2xl:h-[513px]"
        />
      </div>

      <div className="lg:bg-[#FD7740] 2xl:p-24 lg:px-16 lg:flex-[7]">
        <div className="font-bold text-white text-3xl xl:text-[42px] mt-6 lg:mt-16 2xl:mt-0 mb-2 md:mb-3 2xl:mb-4">
          Perspective Newsletter
        </div>
        <div className="font-normal text-white text-base lg:text-xl">
          Immerse yourself into a world where wealth meets wisdom with rich
          insights from industry thought leaders, powerful commentary on leading
          media platforms, informative publications, and more.
        </div>

        <div className="mt-7 mb-12 flex flex-col md:flex-row gap-4 2xl:gap-9 2xl:mt-16 md:flex-1">
          <input
            type="text"
            placeholder="Your email"
            className="w-full p-4 border-black font-normal text-base text-black md:flex-[7]"
          />
          <button className="border-2 border-white w-full font-bold text-sm py-3 text-white md:flex-[5]">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
