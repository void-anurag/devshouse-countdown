/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.builder.io"],
        dangerouslyAllowSVG: true,
    },
    reactStrictMode:false
};

export default nextConfig;
