/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    JWT_SECRET: 'iLoveCoding',
    // DBURI: "mongodb://localhost:27017/medium"
  }
}

module.exports = nextConfig
