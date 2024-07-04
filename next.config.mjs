/** @type {import('next').NextConfig} */

const isGhPages = process.env.DEPLOY_ENV === 'GH_PAGES';

const nextConfig = {
  reactStrictMode: true,

  distDir: './dist',

  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  basePath: isGhPages ? '/inno-frontend-course' : '',
  assetPrefix: isGhPages ? '/inno-frontend-course/' : '',

  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
      '.cjs': ['.cts', '.cjs'],
    };
    return webpackConfig;
  },
};

export default nextConfig;
