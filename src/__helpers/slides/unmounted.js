import React, { useEffect } from 'react';

export function useUnmounted() {
  const unmountedRef = React.useRef(false);

  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef;
}
