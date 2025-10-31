"use client";

import React from "react";

import { styled } from "@pigment-css/react";

import { HEADER_WIDTH } from "@/constants";

interface Props {
  children: React.ReactNode;
}

function MaxWithWrapper({ children }: Props) {
  return <OutWrapper>{children}</OutWrapper>;
}

const OutWrapper = styled.div`
  width: ${HEADER_WIDTH}rem;
  max-width: 100%;
  margin: auto;
`;

export default MaxWithWrapper;
