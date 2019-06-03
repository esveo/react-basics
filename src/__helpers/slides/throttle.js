import React from 'react';

export function throttle(func, delay) {
  let isDue = true;
  let trailingCallTimeout;
  return function throttled(...args) {
    if (isDue) {
      func(...args);
      isDue = false;
      setTimeout(() => {
        isDue = true;
      }, delay);
    } else {
      clearTimeout(trailingCallTimeout);
      trailingCallTimeout = setTimeout(() => {
        throttled(...args);
      }, delay);
    }
  };
}

export function useThrottle(func, delay) {
  const savedCallback = React.useRef(func);
  const savedThrottledCallback = React.useRef(
    throttle((...args) => {
      savedCallback.current(...args);
    }, delay)
  );
  return savedThrottledCallback.current;
}
