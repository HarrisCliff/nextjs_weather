/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  imagesUnoptimized:true
};

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
    domains: [
      "images.unsplash.com",
      "openweathermap.org",
      "drive.google.com",
      "images.pexels.com",
    ],
    
  },
};
