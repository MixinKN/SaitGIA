// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true }, // чтобы картинки работали без Image Optimization API
    basePath: '/SaitGIA', // важно! замените на имя вашего репо
    assetPrefix: '/SaitGIA/',
};

export default nextConfig;
