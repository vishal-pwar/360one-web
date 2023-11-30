import React from "react";
import NewsletterImage from "@/public/assets/icons/Newsletter-perspective.svg";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="flex flex-col w-full mt-11 md:mt-12 lg:mt-20 2xl:mt-32">
      <div>
        <Image
          src={NewsletterImage}
          alt="Newsletter Image"
          className="w-full object-cover h-40"
        />
      </div>

      <div className="bg-[#FD7740] lg:p-16 2xl:p-24">
        <div className="font-space-grotesk font-bold text-white text-3xl lg:text-[42px] mt-6 md:mt-12 lg:mt-0 mb-2 md:mb-3 2xl:mb-4">
          Perspective Newsletter
        </div>
        <div className="font-space-grotesk font-normal text-white text-base lg:text-xl">
          Immerse yourself into a world where wealth meets wisdom with rich
          insights from industry thought leaders, powerful commentary on leading
          media platforms, informative publications, and more.
        </div>

        <div className="mt-7 mb-12 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your email"
            className="w-full p-4 border-black font-space-grotesk font-normal text-base"
          />
          <button className="border-2 border-white w-full font-space-grotesk font-bold text-sm py-3 text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
