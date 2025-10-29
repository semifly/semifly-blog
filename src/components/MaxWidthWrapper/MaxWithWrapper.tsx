"use client";

import React from "react";

import { styled } from "@linaria/react";

import { MENU_WITH } from "@/constants";

interface Props {
  children: React.ReactNode;
}

function MaxWithWrapper({ children }: Props) {
  return <OutWrapper>{children}</OutWrapper>;
}

const OutWrapper = styled.div`
  width: ${MENU_WITH}rem;
  max-width: 100%;
  margin: auto;
`;

export default MaxWithWrapper;
