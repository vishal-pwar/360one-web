"use client";
import mixpanel from "mixpanel-browser";
import { usePathname } from "next/navigation";
import React from "react";

try {
  if (!process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
    throw new Error("mix panel token missing from .env");
  }

  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
    debug: true,
    track_pageview: true,
    ignore_dnt: true,
  });
} catch (error) {
  console.log(error);
}

const Mixpanel = () => {
  const pathName = usePathname();

  React.useEffect(() => {
    if (
      pathName &&
      "mixpanel" in window &&
      typeof window.mixpanel === "object" &&
      window.mixpanel !== null &&
      "track" in window.mixpanel &&
      typeof window.mixpanel.track === "function"
    )
      mixpanel.track("Page View", {
        url: pathName,
      });
  }, [pathName]);

  return null;
};

export default Mixpanel;
