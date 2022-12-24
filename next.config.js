/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
}
}
module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com','images.unsplash.com','i.ibb.co','lh3.googleusercontent.com'],
   
  },
}