/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    experimental: {
        serverActions: {
          bodySizeLimit: '50mb', // or '10mb', depending on your use case
        },
      },
};

export default nextConfig;
