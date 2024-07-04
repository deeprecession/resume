/** @type {import('next').NextConfig} */

const isGhPages = process.env.DEPLOY_ENV === "GH_PAGES";

const nextConfig = {
    reactStrictMode: true,

    distDir: "./dist",

    trailingSlash: true,

    output: "export",

    basePath: isGhPages ? "/inno-frontend-course" : "",
    assetPrefix: isGhPages ? "/inno-frontend-course/" : "",

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
