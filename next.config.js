/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["media.rawg.io"]
  },
  publicRuntimeConfig:{
    REACT_APP_KEY: '3f2dc998da86489d916fba478978ace7'
  }
}

module.exports = nextConfig;
