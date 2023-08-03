import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

const linkStyles = cva(["text-primary-main"], {
  variants: {
    variants: {
      text: "text-[calc(1*var(--size-18))] h-full block hover:font-bold",
    },
  },
  defaultVariants: {
    variants: "text",
  },
});

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  component?: string | ((props: any) => React.ReactNode);
}

export type LinkProps = CustomLinkProps &
  VariantProps<typeof linkStyles> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
  component,
  href,
  children,
  variants,
  className,
  ...rest
}: LinkProps) => {
  const Component = (component ?? "a") as unknown as (
    props: any
  ) => JSX.Element | null;

  return (
    <Component
      className={clsx(linkStyles({ variants: variants }), className)}
      href={href}
      {...rest}
    >
      {children}
    </Component>
  );
};
