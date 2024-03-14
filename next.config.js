/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'wp.thehipposoft.com',
              port: '',
            },
          ],
    }
}

module.exports = nextConfig
