import { useState, useEffect } from 'react';

function useViewport() {
  const [viewport, updateViewport] = useState({ width: 0, height: 0 });
  const [ready, makeReady] = useState(false);

  useEffect(() => {
    performUpdateViewport();
    window.addEventListener('resize', performUpdateViewport);
    return () => window.removeEventListener('resize', performUpdateViewport);
  }, []);

  function performUpdateViewport() {
    if (ready) makeReady(false);
    updateViewport(getViewport());
    makeReady(true);
  }

  return { viewport, ready };
}

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

export { useViewport, getViewport };
