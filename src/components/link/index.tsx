import { LinkProps, Link as UILink } from "@/ui";
import NextLink from "next/link";

export const Link = (props: LinkProps) => {
  return <UILink component={NextLink} {...props} />;
};
