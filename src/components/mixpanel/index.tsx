"use client";
import mixpanel from "mixpanel-browser";
import { usePathname } from "next/navigation";
import React from "react";

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "", {
  debug: true,
  track_pageview: true,
  ignore_dnt: true,
});

const Mixpanel = () => {
  const pathName = usePathname();

  React.useEffect(() => {
    if (pathName)
      mixpanel.track("Page View", {
        url: pathName,
      });
  }, [pathName]);

  return <div></div>;
};

export default Mixpanel;
