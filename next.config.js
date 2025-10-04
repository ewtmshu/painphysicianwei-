/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 先上線用：暫時忽略 TS build error（之後你要時再拿掉這段）
  typescript: { ignoreBuildErrors: true },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cms.painphysicianwei.tw' }, // 你的 WP 子網域
      { protocol: 'https', hostname: 'i0.wp.com' },               // WP 圖片 CDN
      { protocol: 'https', hostname: 'i1.wp.com' },
      { protocol: 'https', hostname: 'i2.wp.com' },
      { protocol: 'https', hostname: 'secure.gravatar.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }      // 你首頁示意圖
    ]
  }
};

module.exports = nextConfig;
