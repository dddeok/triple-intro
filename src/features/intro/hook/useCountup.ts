import { useState, useEffect, useCallback } from 'react';

const useCountup = (end: number, start = 0, duration: number) => {
  const [currentCount, setCurrentCount] = useState(0);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  function onSetCurrentCount(currentCount: number) {
    setCurrentCount(currentCount);
  }

  const onCountUp = useCallback(() => {
    let currentNumber = 20;
    const counter = setInterval(() => {
      currentNumber += 1;
      onSetCurrentCount(currentNumber);
      if (currentNumber === end) {
        clearInterval(counter);
      }
    }, stepTime);
  }, []);

  useEffect(() => {
    onCountUp();
  }, []);

  return {
    currentCount,
  };
};

export default useCountup;
