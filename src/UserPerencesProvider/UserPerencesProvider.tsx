"use client";

import React from "react";

import { ColorMode } from "@/constants";

export const UserPreferencesContext = React.createContext<{
  colorMode: ColorMode;
}>({ colorMode: "light" });
