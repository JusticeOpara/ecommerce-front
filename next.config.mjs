/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["res.cloudinary.com"],
  },
  typescript: {
      ignoreBuildErrors: true,
  },
};

// Use module.exports to export the configuration
module.exports = nextConfig;