"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ScrollImageProps extends ImageProps {
  blurImageUrl: string;
}

export const ScrollImage = ({
  src,
  blurImageUrl,
  width,
  height,
  alt,
  title,
}: ScrollImageProps) => {
  const [isScrolling, setIsScrolling] = useState(false);

  let scrollEndTimeout: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    setIsScrolling(true);

    if (scrollEndTimeout) {
      clearTimeout(scrollEndTimeout);
    }
    scrollEndTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Image
        className="absolute top-0 left-0 w-full h-full object-[left_center]"
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
      />
      <Image
        className={`absolute top-0 left-0 w-full h-full object-[left_center] transition-all duration-300 ease-in ${
          isScrolling ? "opacity-[1]" : "opacity-0"
        }`}
        src={blurImageUrl}
        alt={alt}
        title={title}
        width={width}
        height={height}
      />
    </>
  );
};
