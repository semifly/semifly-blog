"use client";

import { styled } from "@pigment-css/react";

function NavigationDesktop() {
  return (
    <Wrapper>
      <NavigationList>
        <ListItem>test</ListItem>
      </NavigationList>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: relative;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li``;

export default NavigationDesktop;
