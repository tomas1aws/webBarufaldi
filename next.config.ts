import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "export",
  basePath: "/webBarufaldi",
  assetPrefix: "/webBarufaldi/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
