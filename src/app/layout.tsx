import * as React from "react";

import HtmlRoot from "@/app/HtmlRoot";

import "./layout.linaria.global";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <HtmlRoot>
      <body>{children}</body>
    </HtmlRoot>
  );
}

export default Layout;
