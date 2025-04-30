/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://project-copywriter-backend.onrender.com/:path*',
        basePath: false,
      },
    ]
  },
}

export default nextConfig
