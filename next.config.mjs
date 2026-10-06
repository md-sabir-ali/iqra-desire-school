/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Phase 2: add image CDN domains here (e.g. Cloudinary).
    // remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }]
    remotePatterns: [],
  },
};

export default nextConfig;
