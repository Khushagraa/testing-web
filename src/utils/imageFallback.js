const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#eef2ff"/>
          <stop offset="100%" stop-color="#c7d2fe"/>
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#g)"/>
      <g fill="#4f46e5" font-family="Arial, Helvetica, sans-serif" text-anchor="middle">
        <text x="300" y="190" font-size="26" font-weight="700">Image not available</text>
        <text x="300" y="225" font-size="18" fill="#6366f1">ShopZone placeholder</text>
      </g>
    </svg>
  `)

export const handleImageError = (event) => {
  if (event?.currentTarget) {
    event.currentTarget.onerror = null
    event.currentTarget.src = FALLBACK_IMAGE
  }
}

export default FALLBACK_IMAGE
