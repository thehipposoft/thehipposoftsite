/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'admin.thehipposoft.com',
              port: '',
            },
          ],
    }
}

module.exports = nextConfig
