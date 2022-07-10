
const ContentSecurityPolicy = `
default-src 'self';
script-src 'self';
style-src 'self';
font-src 'self';  
`
const securityHeaders = [{
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
},

{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload'
},

{
  key: 'X-XSS-Protection',
  value: '1; mode=block'
},

{
  key: 'X-Frame-Options',
  value: 'SAMEORIGIN'
},

{
  key: 'X-Content-Type-Options',
  value: 'nosniff'
},

{
  key: 'Referrer-Policy',
  value: 'origin-when-cross-origin'
},

{
  key: 'Content-Security-Policy',
  value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
}

]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
}