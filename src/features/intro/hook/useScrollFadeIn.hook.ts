import { useState, useRef, useCallback, useEffect } from 'react';

const useScrollFadeIn = (duration = 0.7, delay = 0) => {
  const ref = useRef<HTMLDivElement>();
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = ref;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'ease-in';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = '1';
        current.style.transform = 'translateY(0%)';
        setIsIntersecting(true);
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer;
    const { current } = ref;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: ref,
    style: {
      opacity: 0,
      transform: 'translateY(10px)',
    },
    isIntersecting,
  };
};

export default useScrollFadeIn;
