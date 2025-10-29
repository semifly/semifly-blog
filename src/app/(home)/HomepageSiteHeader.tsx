"use client";

import { styled } from "@linaria/react";

import MaxWithWrapper from "@/components/MaxWidthWrapper";
import SiteHeader from "@/components/SiteHeader";

function HomepageSiteHeader() {
  return (
    <HomeWrapper>
      <MaxWithWrapper>
        <SiteHeader />
      </MaxWithWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div``;

export default HomepageSiteHeader;
