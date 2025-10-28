import HtmlRoot from "@/app/HtmlRoot";
import React from "react";

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
