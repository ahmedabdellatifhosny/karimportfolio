/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 

    productionBrowserSourceMaps: false,

    webpack: (config, { dev, isServer }) => {
        if (!dev) {
            config.devtool = false;
        }
        return config;
    },
};

export default nextConfig;