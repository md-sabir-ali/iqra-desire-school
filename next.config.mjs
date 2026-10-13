/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern, smaller image formats automatically (better performance,
    // lower data use on mobile) — free, handled by Next/Vercel.
    formats: ["image/avif", "image/webp"],
    // Allow Sanity's image CDN (gallery / achievement photos uploaded via /admin).
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async headers() {
    // Baseline security headers applied to every route. All free, no perf cost.
    // These harden the site against clickjacking, MIME-sniffing, and insecure
    // transport, and improve trust/SEO signals (securityheaders.com grade).
    // NOTE: X-Frame-Options is SAMEORIGIN (not DENY) so the Sanity Studio at
    // /admin — which renders same-origin iframes — keeps working.
    const securityHeaders = [
      {
        // Force HTTPS for 2 years incl. subdomains (Vercel already serves HTTPS).
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        // Prevent the site being framed by other origins (clickjacking guard).
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        // Stop browsers MIME-sniffing responses away from the declared type.
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        // Send only the origin on cross-origin navigations (privacy).
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        // Disable powerful APIs the site doesn't use.
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      },
      {
        // Legacy XSS filter (modern browsers ignore it, harmless to keep).
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
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
