import * as React from "react";

import HtmlRoot from "@/app/HtmlRoot";
import UserPreferencesProvider from "@/UserPerencesProvider/UserPerencesProvider";

import "./layout.style";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <UserPreferencesProvider>
      <HtmlRoot>
        <body>{children}</body>
      </HtmlRoot>
    </UserPreferencesProvider>
  );
}

export default Layout;
