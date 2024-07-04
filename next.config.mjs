/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    trailingSlash: true,

    output: "export",

    basePath: "/inno-frontend-course",
    assetPrefix: "/inno-frontend-course",

    distDir: "./dist",

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
