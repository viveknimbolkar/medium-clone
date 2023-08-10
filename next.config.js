/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    JWT_SECRET: 'iLoveCoding',
  },
  devIndicators:{
    buildActivity:false,
  }
}

module.exports = nextConfig
