"use client";

import * as React from "react";

import Cookie from "js-cookie";
import { usePathname } from "next/navigation";

import {
  COLOR_THEME_COOKIE_NAME,
  ColorMode,
  DEFAULT_COLOR_MODE,
} from "@/constants";

import { ToggleColorMode } from "./UserPreferencesProvider.helpers";

export const SetUserPreferencesContent = React.createContext<{
  toggleColorMode: ToggleColorMode;
}>({ toggleColorMode: () => {} });

export const UserPreferencesContext = React.createContext<{
  colorMode: ColorMode;
}>({ colorMode: "light" });

const FORCED_COLOR_ROUTES: Record<string, ColorMode> = {
  "/shadow-palette/": "dark",
};

function UserPreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [colorMode, setColorMode] = React.useState<ColorMode>(() => {
    const forcedColorMode = pathname
      ? FORCED_COLOR_ROUTES[pathname]
      : undefined;

    return forcedColorMode ?? DEFAULT_COLOR_MODE;
  });

  const toggleColorMode: ToggleColorMode = React.useCallback(
    (newColorMode?: ColorMode) => {
      setColorMode((currentColorMode) => {
        const nextColorMode =
          newColorMode ??
          (currentColorMode === "light" ? "dark" : "light");

        Cookie.set(COLOR_THEME_COOKIE_NAME, nextColorMode, {
          expires: 1000,
        });

        return nextColorMode;
      });
    },
    [],
  );

  const providedSetters = React.useMemo(() => {
    return { toggleColorMode };
  }, [toggleColorMode]);

  const providedValues = React.useMemo(() => {
    return { colorMode };
  }, [colorMode]);

  return (
    <SetUserPreferencesContent.Provider value={providedSetters}>
      <UserPreferencesContext.Provider value={providedValues}>
        {children}
      </UserPreferencesContext.Provider>
    </SetUserPreferencesContent.Provider>
  );
}

export default UserPreferencesProvider;
