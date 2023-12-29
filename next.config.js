/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
          test: /\.(graphql|gql)/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader"
        })
    
        return config
    }, 
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.staticflickr.com',
        },
        {
          protocol: 'https',
          hostname: '**.imgur.com',
        },
      ],
    },
}

module.exports = nextConfig
