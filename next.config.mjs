
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ["res.cloudinary.com"]
  },
  ignoreDuringBuilds: true,
  trailingSlash: false,
  basePath: '',

}
export default nextConfig;

