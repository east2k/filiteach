/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hiarkpmgwdryrbozaxfo.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/courses/**",
            },
        ],
    },
};

module.exports = nextConfig;
