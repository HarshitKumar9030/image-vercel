// next.config.js

module.exports = {
    async headers() {
      return [
        {
          // Define a custom header for images to be cacheable
          source: '/uploads/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=3600, must-revalidate',
            },
          ],
        },
      ];
    },
  };
  