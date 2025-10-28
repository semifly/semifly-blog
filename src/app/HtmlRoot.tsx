"use client";

import React from "react";

interface Props {
  headContent?: React.ReactNode;
  children: React.ReactNode;
}

function HtmlRoot({ headContent, children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{headContent}</head>

      {children}
    </html>
  );
}

export default HtmlRoot;
