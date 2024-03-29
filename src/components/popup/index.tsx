"use client";
import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import closeIcon from "@/public/assets/icons/icons8-cancel.svg";
import ListImage from "@/public/assets/icons/list-image.svg";
import { getStrapiMedia } from "@/utils/api-helpers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PopupDetails = {
  popup: any;
};

const Popup = (props: PopupDetails) => {
  const { popup } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const imageUrl = getStrapiMedia(
    popup?.attributes?.image?.data?.attributes?.url
  );

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="relative bg-white rounded shadow-lg mx-5 max-w-[500px] lg:max-w-[1000px] sm:h-[min(100%,560px)] flex flex-col lg:flex-row overflow-auto">
            <div className="flex sm:flex-1 lg:w-[46%]">
              <div className="absolute m-2 top-0 left-0 p-4 w-[60px] h-[60px]">
                <Image
                  className={clsx("w-full h-full", {
                    "sm:hidden":
                      popup?.attributes?.image?.data?.attributes?.url?.length,
                  })}
                  src={BrandLogoBlack}
                  // alt="360 ONE - Asset & Wealth management"
                  alt={
                    popup?.attributes?.image?.data?.attributes?.alternativeText
                  }
                  title="360 One"
                />
              </div>
              <div className="absolute top-0 right-0 p-4">
                <Image
                  src={closeIcon}
                  alt="close"
                  width={20}
                  height={20}
                  onClick={closeDialog}
                  className="text-gray-500 hover:text-red-500 cursor-pointer"
                />
              </div>
              {popup?.attributes?.image?.data?.attributes?.url?.length > 0 ? (
                <div>
                  <img
                    src={imageUrl}
                    alt={
                      popup?.attributes?.image?.data?.attributes
                        ?.alternativeText
                    }
                    sizes="100vw"
                    className="w-full h-full hidden sm:flex object-cover "
                  ></img>
                </div>
              ) : null}
            </div>
            <div
              className={clsx(
                "p-5 sm:p-10 lg:p-20 flex flex-col justify-center mt-12 sm:mt-0 lg:w-[54%]",
                {
                  "lg:w-full":
                    !popup?.attributes?.image?.data?.attributes?.url?.length,
                }
              )}
            >
              {popup?.attributes?.title?.length > 0 ? (
                <span className="font-semibold text-2xl items-start">
                  {popup?.attributes?.title}
                </span>
              ) : null}
              {popup?.attributes?.subtitle?.length > 0 ? (
                <span className="font-hanken-grotesk font-normal text-lg text-gray-600 mt-2 items-start">
                  {popup?.attributes?.subtitle}
                </span>
              ) : null}
              {popup?.attributes?.list?.length > 0 ? (
                <span className="mt-2">
                  {popup?.attributes?.list?.map((i: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex gap-4 mt-6 font-hanken-grotesk font-normal text-lg text-gray-600 items-start"
                      >
                        <Image src={ListImage} alt="list-image" />
                        {i?.title}
                      </div>
                    );
                  })}
                </span>
              ) : null}
              {popup?.attributes?.button?.title?.length > 0 ? (
                <Link
                  href={popup?.attributes?.button?.href}
                  target={
                    popup?.attributes?.button?.external ? "__blank" : "_self"
                  }
                  className="w-full bg-orange-500 text-white py-3 px-12 mt-8 font-space-grotesk text-base font-semibold flex justify-center"
                >
                  {popup?.attributes?.button?.title}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
