"use client";
import Image from "next/image";
import { useState } from "react";

const VideoPLayer = ({
  videoUrl,
  iconUrl,
}: {
  videoUrl: string;
  iconUrl: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible ? (
        videoUrl && (
          <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full z-[400] bg-black m-0 p-0 box-border overflow-hidden">
            <div
              className="absolute max-sm:top-3 max-sm:right-3 top-6 right-6 w-5 h-5 bg-[#efefef] opacity-[0.6] rounded-sm flex flex-col items-center justify-center cursor-pointer z-20"
              onClick={handleClose}
            >
              <div
                className={`max-sm:h-[2px] h-[3px] w-5 rounded-[calc(50*var(--scale))] transition-all duration-300 rotate-[405deg] bg-black absolute top-[43%] left-0`}
              ></div>
              <div
                className={`max-sm:h-[2px] h-[3px] w-5 rounded-[calc(50*var(--scale))] transition-all duration-300 -rotate-[405deg] bg-black absolute top-[43%] left-0`}
              ></div>
            </div>
            <div className="bg-black absolute top-[50%] -translate-y-[50%] object-contain overflow-hidden">
              <video
                src={videoUrl}
                autoPlay
                loop
                controlsList="nodownload"
                controls
              ></video>
            </div>
          </div>
        )
      ) : (
        <Image
          onClick={() => setIsVisible(true)}
          className="max-md:h-[calc(48.5*var(--scale))] max-md:w-[calc(48.5*var(--scale))] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer w-[calc(101*var(--scale))] h-[calc(101*var(--scale))] z-10"
          src={iconUrl}
          alt="play-icon"
          height={101}
          width={101}
        />
      )}
    </>
  );
};

export default VideoPLayer;
