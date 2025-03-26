/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable server-side rendering (default)
  reactStrictMode: true,
  
  // Configure image domains for remote images
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  
  // Configure redirects
  async redirects() {
    return [
      {
        source: '/listings',
        destination: '/browse',
        permanent: true,
      },
    ];
  },
  
  // Enable experimental features if needed
  experimental: {
    // serverActions: true, // Server actions are now stable in Next.js 14
  },
};

export default nextConfig;