import type { NextConfig } from "next";
import withLinaria, { LinariaConfig } from "next-with-linaria";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

const linariaConfig: LinariaConfig = {
  ...nextConfig,
  linaria: {
    displayName: false,
  },
};

export default withLinaria(linariaConfig);
