/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cms.painphysicianwei.tw' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};
module.exports = nextConfig;
