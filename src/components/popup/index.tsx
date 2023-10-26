"use client";
import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import React from "react";
import ReactHtmlParser from "react-html-parser";

type PopupDetails = {
  popup: any;
};

const Popup = (props: PopupDetails) => {
  const { popup } = props;
  const [isOpen, setIsOpen] = React.useState(true);

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
      {/* <div>{popup?.title}</div>
      <div>
        {ReactHtmlParser(popup?.attributes?.content, {
          transform: (node) => {
            if (node.name === "ul") {
              return node.children?.map(
                (c, i) =>
                  c.children?.map((d) => (
                    <li className="text-2xl" key={d.data}>
                      {d.data}
                    </li>
                  ))
              ) as any;
            }
          },
        })}
      </div> */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded shadow-lg min-w-[600px] min-h-[500px] flex flex-col md:flex-row gap-5">
            <div className="absolute top-0 left-0 p-4">
              <Image
                className="w-full h-full"
                src={BrandLogoBlack}
                alt="360 ONE - Asset & Wealth management"
                title="360 One"
              />
            </div>
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={closeDialog}
                className="text-gray-500 hover:text-red-500"
              >
                X
              </button>
            </div>
            <div className="flex-1 flex items-start flex-col justify-center">
              <Image src={imageUrl} alt="image" height={800} width={500} />
            </div>
            <div className="p-3 flex-1 flex md:items-start items-center flex-col md:justify-center">
              {ReactHtmlParser(popup?.attributes?.content, {
                transform: (node) => {
                  if (node.name === "h1") {
                    return node.children?.map((c, i) => (
                      <h1
                        className="max-lg:w-[calc(235*var(--scale))] text-[calc(1*var(--size-38))] font-bold whitespace-nowrap"
                        key={c.data}
                      >
                        {c.data}
                      </h1>
                    )) as any;
                  }
                  if (node.name === "ul") {
                    return node.children?.map(
                      (c, i) =>
                        c.children?.map((d) => (
                          <li className="" key={d.data}>
                            {d.data}
                          </li>
                        ))
                    ) as any;
                  }
                },
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
