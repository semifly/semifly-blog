"use client";

import { styled } from "@pigment-css/react";

import Link from "@/components/Link/Link";

function SiteHeader() {
  return (
    <OutWrapper>
      <Link href="/">semi fly</Link>
    </OutWrapper>
  );
}

const OutWrapper = styled.header`
  display: flex;
  height: 5rem;
  line-height: 5rem;
`;

export default SiteHeader;
