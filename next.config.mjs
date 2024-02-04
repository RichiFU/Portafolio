/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'**'
                // hostname:'nextui.org'
                // hostname:'**' acepta imagenes de cualquier directorio de manera local
            }
        ]
    }
};

export default nextConfig;
