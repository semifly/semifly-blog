"use client";

import React from "react";

import { styled } from "@pigment-css/react";
import NextLink from "next/link";

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  href?: string;
}

const Link = (
  { href = "", children, ...delegated }: Props,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) => {
  return (
    <StyleLink ref={ref} href={href} {...delegated}>
      {children}
    </StyleLink>
  );
};

const StyleLink = styled(NextLink)`
  color: var(--color-text);
  text-decoration: none;
`;

export default React.forwardRef<HTMLAnchorElement, Props>(Link);
