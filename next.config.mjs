/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
    images: {
      domains: [
        'i.imgur.com',
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
