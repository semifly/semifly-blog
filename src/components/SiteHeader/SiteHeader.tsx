"use client";

import Link from "@/components/Link/Link";
import { styled } from "@linaria/react";

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
