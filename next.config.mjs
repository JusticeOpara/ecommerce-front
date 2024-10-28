
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ["res.cloudinary.com"]
  },

  // Add this configuration
  experimental: {
    // This will make these routes dynamic instead of static
    workerThreads: false,
    cpus: 1
  },
  // Specify which pages should not be statically generated
  unstable_excludeFiles: ['**/cart/**', '**/_not-found/**'],
  reactStrictMode: true,
  swcMinify: true,
}
export default nextConfig;

