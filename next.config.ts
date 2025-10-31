import {
  PigmentOptions,
  withPigment,
} from "@pigment-css/nextjs-plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

const pigmentOptions: PigmentOptions = {
  displayName: false,
};

export default withPigment(nextConfig, pigmentOptions);
