"use client";

import { styled } from "@pigment-css/react";

import { HEADER_HEIGHT } from "@/constants";

import Logo from "@/components/Logo";

import NavigationDesktop from "./NavigationDesktop";

interface Props {
  skipActions?: Array<string>;
}

function SiteHeader({ skipActions = [] }: Props) {
  return (
    <OutWrapper>
      <Wrapper>
        <StyledLogo />

        <StyledNavigationDesktop />

        <Actions>
          {!skipActions.includes("color-toggle") && <p>mode</p>}
        </Actions>
      </Wrapper>
    </OutWrapper>
  );
}

const OutWrapper = styled.div`
  height: ${HEADER_HEIGHT}rem;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.header`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  height: 3rem;
`;

const StyledLogo = styled(Logo)``;

const StyledNavigationDesktop = styled(NavigationDesktop)``;

const Actions = styled.div`
  margin-left: auto;
`;

export default SiteHeader;
