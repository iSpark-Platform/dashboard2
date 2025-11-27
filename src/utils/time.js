"use client";

import { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

const getPartsofTimeDuration = (duration) => {
  const days = Math.floor(duration / msInADay);
  const hours = Math.floor((duration % msInADay) / msInAHour);
  const minutes = Math.floor((duration % msInAHour) / msInMinute);
  const seconds = Math.floor((duration % msInMinute) / msInSecond);
  return { days, hours, minutes, seconds };
};

const useCountdown = () => {
  // Target date: 6 months from now
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = targetDate.getTime() - now;
    let timeParts = getPartsofTimeDuration(difference);

    // Optional: pad with zero
    timeParts.days = timeParts.days <= 9 ? `0${timeParts.days}` : timeParts.days;
    timeParts.hours = timeParts.hours <= 9 ? `0${timeParts.hours}` : timeParts.hours;
    timeParts.minutes = timeParts.minutes <= 9 ? `0${timeParts.minutes}` : timeParts.minutes;
    timeParts.seconds = timeParts.seconds <= 9 ? `0${timeParts.seconds}` : timeParts.seconds;

    return timeParts;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
};

export default useCountdown;
