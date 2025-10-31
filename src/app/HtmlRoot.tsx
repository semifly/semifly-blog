"use client";

import React from "react";

import { UserPreferencesContext } from "@/UserPerencesProvider";

interface Props {
  headContent?: React.ReactNode;
  children: React.ReactNode;
}

function HtmlRoot({ headContent, children }: Props) {
  const { colorMode } = React.useContext(UserPreferencesContext);

  return (
    <html lang="en" suppressHydrationWarning theme-color={colorMode}>
      <head>{headContent}</head>

      {children}
    </html>
  );
}

export default HtmlRoot;
