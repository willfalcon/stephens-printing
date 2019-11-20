const getViewport = () => {
  var e = window,
    a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {
    width: e[a + 'Width'],
    height: e[a + 'Height'],
  };
};

function formatPhone(num) {
  const area = num.slice(0, 3);
  const first = num.slice(3, 6);
  const last = num.slice(6, 10);
  return {
    href: `(${area}) ${first}-${last}`,
    display: `${area}-${first}-${last}`,
  };
}

export { getViewport, formatPhone };
