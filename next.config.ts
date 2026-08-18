import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages ? "/webBarufaldi" : "";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
