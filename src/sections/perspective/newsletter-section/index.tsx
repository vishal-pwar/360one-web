import React from "react";
import NewsletterImage from "@/public/assets/icons/Newsletter-perspective.svg";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="flex flex-col tablet:flex-row tablet:flex-1 mt-6 phablet:mt-12 tablet:mt-20 desktop:mt-32 tablet:container">
      <div className="tablet:flex-[5]">
        <Image
          src={NewsletterImage}
          alt="Newsletter Image"
          className="w-full object-cover h-40 phablet:h-64 tablet:h-96 desktop:h-[513px]"
        />
      </div>

      <div className="bg-[#FD7740] p-6 phablet:p-12 tablet:p-16 desktop:p-24 tablet:flex-[7]">
        <div className="font-bold text-white text-3xl tablet:text-[42px]">
          Perspective Newsletter
        </div>
        <div className="font-normal text-white text-base tablet:text-lg mt-2 mb-7 phablet:mt-3 tablet:mb-12 desktop:mt-5 desktop:mb-[72px]">
          Immerse yourself into a world where wealth meets wisdom with rich
          insights from industry thought leaders, powerful commentary on leading
          media platforms, informative publications, and more.
        </div>

        <div className="flex flex-col phablet:flex-row gap-4 tablet:gap-9 desktop:mt-11 phablet:flex-1">
          <input
            type="text"
            placeholder="Your email"
            className="w-full p-4 border-black border-1 font-normal text-base text-black phablet:flex-[7]"
          />
          <button className="border-2 border-white w-full font-bold text-sm py-3 text-white phablet:flex-[5]">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
