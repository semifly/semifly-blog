import React from "react";

import { styled } from "@pigment-css/react";

import Link from "@/components/Link";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  animated?: boolean;
}

const Logo = ({ ...delegated }: Props) => {
  return (
    <Wrapper href="/" {...delegated}>
      <span>Semi</span>
      <span>fly</span>
    </Wrapper>
  );
};

const Wrapper = styled(Link)``;

export default Logo;
