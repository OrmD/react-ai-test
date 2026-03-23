import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    /* config options here */
     images: {
    formats: ['image/webp'],
    deviceSizes: [768, 1024, 3840],
    // loader: 'default',
    // unoptimized: true,
    imageSizes: [32, 128, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }, 
 webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    // issuer: /\.[jt]sx?$/,
    use: [{loader:'@svgr/webpack', options: {icon: true}}],
  })

  return config
},

}

export default nextConfig;
