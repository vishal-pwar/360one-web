"use client";

import PlayIcon from "@/public/assets/icons/playIcon.svg";
import VideoPLayer from "../video-player";

interface props {
  response: any;
}

export default function Logo_360one({ response }: props) {
  return (
    <div className="container">
      <div className="bg-black w-full h-full relative">
        <video
          src={response?.data?.attributes?.media?.data?.attributes?.url}
          autoPlay={true}
          muted
          playsInline
          loop={true}
          className="h-[700px] opacity-10 w-full"
        />
        <VideoPLayer
          iconUrl={PlayIcon}
          videoUrl={response?.data?.attributes?.media?.data?.attributes?.url}
        />
      </div>
      <div className="flex justify-center">
        <div className="flex text-white bg-black p-8 w-[80%]">
          <div className="font-bold text-4xl">
            {response?.data?.attributes?.title}
          </div>
          <div className="w-2 h-52 bg-white mx-11"></div>
          <div className="font-extrabold text-2xl">
            {response?.data?.attributes?.subtitle}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[80%] py-32 px-3">
          <div>
            <div className="font-medium text-4xl underline decoration-blue-700">
              1. 360 ONE Logos
            </div>
            {response?.data?.attributes?.logo_360One?.map((logo: any) => {
              return (
                <div
                  key={logo.id}
                  className="flex justify-between items-center my-16"
                >
                  <img
                    src={logo?.logo_348x348?.data?.attributes?.url}
                    alt={logo?.logo_348x348?.data?.attributes?.alternativeText}
                    className="w-[348px] h-[348px] p-2"
                  />
                  <img
                    src={logo?.logo_278x278?.data?.attributes?.url}
                    alt={logo?.logo_278x278?.data?.attributes?.alternativeText}
                    className="w-[278px] h-[278px] p-8"
                  />
                  <img
                    src={logo?.logo_200x200?.data?.attributes?.url}
                    alt={logo?.logo_200x200?.data?.attributes?.alternativeText}
                    className="w-[200px] h-[200px] p-8"
                  />
                </div>
              );
            })}
          </div>

          <div>
            <div className="font-medium text-4xl underline decoration-blue-700">
              2. 360 ONE Wealth Logos
            </div>
            {response?.data?.attributes?.logo_360ONe_wealth?.map(
              (logo: any) => {
                return (
                  <div
                    key={logo.id}
                    className="flex justify-between items-center my-16"
                  >
                    <img
                      src={logo?.logo_348x348?.data?.attributes?.url}
                      alt={
                        logo?.logo_348x348?.data?.attributes?.alternativeText
                      }
                      className="w-[348px] h-[348px] p-2"
                    />
                    <img
                      src={logo?.logo_278x278?.data?.attributes?.url}
                      alt={
                        logo?.logo_278x278?.data?.attributes?.alternativeText
                      }
                      className="w-[278px] h-[278px] p-8"
                    />
                    <img
                      src={logo?.logo_200x200?.data?.attributes?.url}
                      alt={
                        logo?.logo_200x200?.data?.attributes?.alternativeText
                      }
                      className="w-[200px] h-[200px] p-8"
                    />
                  </div>
                );
              }
            )}
          </div>

          <div>
            <div className="font-medium text-4xl underline decoration-blue-700">
              3. 360 ONE Asset Logos
            </div>
            {response?.data?.attributes?.Logo_360One_asset?.map((logo: any) => {
              return (
                <div
                  key={logo.id}
                  className="flex justify-between items-center my-16"
                >
                  <img
                    src={logo?.logo_348x348?.data?.attributes?.url}
                    alt={logo?.logo_348x348?.data?.attributes?.alternativeText}
                    className="w-[348px] h-[348px] p-2"
                  />
                  <img
                    src={logo?.logo_278x278?.data?.attributes?.url}
                    alt={logo?.logo_278x278?.data?.attributes?.alternativeText}
                    className="w-[278px] h-[278px] p-8"
                  />
                  <img
                    src={logo?.logo_200x200?.data?.attributes?.url}
                    alt={logo?.logo_200x200?.data?.attributes?.alternativeText}
                    className="w-[200px] h-[200px] p-8"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
