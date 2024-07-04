/** @type {import('next').NextConfig} */

const isGhPages = process.env.DEPLOY_ENV === 'GH_PAGES';

const nextConfig = {
  reactStrictMode: true,

  distDir: './dist',

  trailingSlash: true,

  output: 'export',

  basePath: isGhPages ? '/inno-frontend-course' : '',
  assetPrefix: isGhPages ? '/inno-frontend-course/' : '',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },

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
