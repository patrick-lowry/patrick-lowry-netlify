/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    stackbitPreview: process.env.STACKBIT_PREVIEW
  },
  trailingSlash: true,
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;




/**
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true
};

module.exports = nextConfig;
*/
