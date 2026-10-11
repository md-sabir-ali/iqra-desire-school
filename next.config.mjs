/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow Sanity's image CDN (gallery / achievement photos uploaded via /admin).
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    // SEO: send the old Vercel URL permanently to the real custom domain so
    // Google treats iqradesire.com as the single canonical site (no duplicate
    // content, full ranking weight in one place). Only fires when the request
    // host is the old vercel domain — the custom domain is never redirected,
    // so there is no loop.
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "iqra-desire-school.vercel.app",
          },
        ],
        destination: "https://iqradesire.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
