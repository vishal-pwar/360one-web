"use client";
import Image from "next/image";
import { useState } from "react";
import CancelIcon from "../../../public/assets/icons/icons8-cancel.svg";

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
          <div className="fixed top-0 left-0 right-0 bottom-0 h-auto w-full z-[400] bg-black m-0 p-0 overflow-hidden flex items-center justify-center no-scrollbar">
            <div
              className="absolute top-[calc(30*var(--scale))] right-[calc(30*var(--scale))] h-[calc(30*var(--scale))] w-[calc(30*var(--scale))] cursor-pointer z-20"
              onClick={handleClose}
            >
              <Image src={CancelIcon} alt="cancel" />
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
