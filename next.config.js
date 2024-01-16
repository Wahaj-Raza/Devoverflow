/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*" },
      { protocol: "http", hostname: "*" },
    ],
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/chatgpt",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // Adjust this to be more restrictive for security purposes
          {
            key: "Access-Control-Allow-Methods",
            value: "POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
