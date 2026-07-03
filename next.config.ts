import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Hidden (not deleted) pages — temporarily redirect to the homepage so the
  // routes are unreachable while the page files stay in the project. Use a
  // temporary redirect (307) since these may return later.
  async redirects() {
    return [
      { source: "/pricing", destination: "/", permanent: false },
      { source: "/about", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
