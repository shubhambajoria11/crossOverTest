import {useEffect, useState} from 'react';

let interval: NodeJS.Timer | undefined;

const useCountTimer = (
  startingTime: number,
  startTimer: boolean,
): [number, number, boolean, () => void, () => void] => {
  const [timer, setTimer] = useState(startingTime);
  const [isActive, setIsActive] = useState(startTimer);

  function getRemaining(time: number): {
    mins: number;
    secs: number;
  } {
    let mins: number = Math.floor(time / 60);
    let secs: number = time - mins * 60;
    return {mins, secs};
  }

  const {mins, secs} = getRemaining(timer);
  console.log('mins', mins, secs);

  const reset = () => {
    setTimer(startingTime);
    setIsActive(false);
    clearInterval(interval);
  };

  const start = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        setTimer((remainingSec: number) => remainingSec + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  useEffect(() => {
    if (mins <= 0 && secs <= 0) {
      setIsActive(false);
    }
  }, [mins, secs]);

  return [mins, secs, isActive, reset, start];
};

export default useCountTimer;
