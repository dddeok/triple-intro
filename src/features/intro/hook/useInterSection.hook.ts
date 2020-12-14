import { useState, useEffect, useCallback } from 'react';

const useInterSection = (ref) => {
  const [isInterSection, setIsInterSection] = useState(false);

  const handleScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsInterSection(true);
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = ref;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [ref, handleScroll]);

  return {
    isInterSection,
  };
};

export default useInterSection;
