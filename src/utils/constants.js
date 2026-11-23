export const CATEGORIES = [
  "Painting",
  "Digital Art",
  "Photography",
  "Sketch & Drawing",
  "Watercolor",
  "Illustration",
  "Sculpture",
  "Mixed Media",
];

export const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#f3ede3'/><stop offset='1' stop-color='#e6dccd'/></linearGradient></defs><rect width='400' height='300' fill='url(#g)'/><text x='200' y='158' font-family='Georgia' font-size='22' fill='#8a7f73' text-anchor='middle'>Image unavailable</text></svg>`
  );

export const FALLBACK_AVATAR =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='#e6dccd'/><circle cx='32' cy='25' r='11' fill='#8a7f73'/><path d='M12 56c3-11 11-16 20-16s17 5 20 16' fill='#8a7f73'/></svg>`
  );

// Use on <img onError={...}> so broken links show a neat placeholder
export const handleImageError = (fallback) => (event) => {
  if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback;
};
