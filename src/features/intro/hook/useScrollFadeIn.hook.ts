import { useRef, useCallback, useEffect } from 'react';
import useInterSection from './useInterSection.hook';
const useScrollFadeIn = (duration = 0.7, delay = 0) => {
  const ref = useRef<HTMLDivElement>();
  const { isInterSection } = useInterSection(ref);

  function onChangeAnimation(isInterSection) {
    if (isInterSection) {
      const { current } = ref;
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = 'ease-in';
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = '1';
      current.style.transform = 'translateY(0%)';
    }
  }

  useEffect(() => {
    onChangeAnimation(isInterSection);
  }, [isInterSection]);

  return {
    ref: ref,
    style: {
      opacity: 0,
      transform: 'translateY(10px)',
    },
    isInterSection,
  };
};

export default useScrollFadeIn;
