"use client";

import { styled } from "@linaria/react";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

function Link({ href, children, ...delegated }: Props) {
  return (
    <StyleLink href={href} {...delegated}>
      {children}
    </StyleLink>
  );
}

const StyleLink = styled.a`
  color: var(--color-text);
  text-decoration: none;
`;

export default Link;
