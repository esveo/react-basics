import React from 'react';
import { toHeight, toWidth } from './aspectRatios';
import { round } from './math';
import { useThrottle } from './throttle';
import { useUnmounted } from './unmounted';

/**
 * Use this to resize an element with a fixed aspect ratio so that it always fits in the parent element.
 * @param aspectRatio Ratio of the element with a fixed ratio.
 * @param focus x and y percentages of the "important part" of the element.
 *  This will be kept as close to the center as possible.
 *
 * @returns props that should be passed to the fixed ratio element. (includes styles and ref)
 */
export function useObjectFitContain(aspectRatio = 16 / 9) {
  const domRef = React.useRef(null);

  const [styles, setStyles] = React.useState({});
  const unmountedRef = useUnmounted();

  const recomputeContainStyles = useThrottle(() => {
    const parent = domRef.current.parentElement;
    if (!parent || unmountedRef.current) return;

    setStyles(getContainStyles(parent, aspectRatio));
  }, 250);

  React.useLayoutEffect(() => {
    window.addEventListener('resize', recomputeContainStyles);
    recomputeContainStyles();
    return () => window.removeEventListener('resize', recomputeContainStyles);
  }, [recomputeContainStyles]);

  return { ref: domRef, style: styles };
}

/**
 * Renderprop variant of the hook
 */
export function ObjectFitContain(props) {
  const { children, aspectRatio } = props;
  const domProps = useObjectFitContain(aspectRatio);
  return children(domProps);
}

function getContainStyles(parent, aspectRatio) {
  const {
    height: containerHeight,
    width: containerWidth
  } = parent.getBoundingClientRect();

  const heightAsBase = containerWidth / containerHeight >= aspectRatio;
  let imageHeight;
  let imageWidth;
  if (heightAsBase) {
    imageHeight = containerHeight;
    imageWidth = toWidth(imageHeight, aspectRatio);
  } else {
    imageWidth = containerWidth;
    imageHeight = toHeight(imageWidth, aspectRatio);
  }
  const styles = {
    height: round(imageHeight, 2),
    width: round(imageWidth, 2),
    left: round(heightAsBase ? 0.5 * (containerWidth - imageWidth) : 0, 2),
    top: round(heightAsBase ? 0 : 0.5 * (containerHeight - imageHeight), 2)
  };
  return styles;
}
