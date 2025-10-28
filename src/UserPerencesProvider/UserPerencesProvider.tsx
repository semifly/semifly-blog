"use client";

import { ColorMode } from "@/constants";
import React from "react";

export const UserPreferencesContext = React.createContext<{
  colorMode: ColorMode;
}>({ colorMode: "light" });
