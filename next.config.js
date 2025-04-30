/** @type {import('next').NextConfig} 
const nextConfig = {}

module.exports = nextConfig
**/

// next.config.js
module.exports = {
    images: {
      domains: [
        'amplify-d2vsmhalyqedyt-ma-hospitalstoragebucketbe1-jsq92bxxzczw.s3.us-west-2.amazonaws.com', // Dominio de tu bucket S3
      ],
    },
  }
