"use client";

import * as React from "react";

import { UserPreferencesContext } from "@/UserPerencesProvider/UserPerencesProvider";

interface WrappedProps
  extends React.HTMLAttributes<HTMLAnchorElement> {}

function WrappedIconColorMode({}: WrappedProps) {
  const { colorMode } = React.useContext(UserPreferencesContext);
}

export default WrappedIconColorMode;
