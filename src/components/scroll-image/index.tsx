"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

export const ScrollImage = (props: ImageProps) => {
  const [isScrolling, setIsScrolling] = useState(false);

  let scrollEndTimeout: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    setIsScrolling(true);

    if (scrollEndTimeout) {
      clearTimeout(scrollEndTimeout);
    }
    scrollEndTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
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
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={`absolute top-0 left-0 w-full h-full z-10 object-cover object-[left_center] transition-opacity ease-in duration-300 ${
        isScrolling ? "opacity-1" : "opacity-0"
      }`}
      {...props}
    />
  );
};
