import React, { useState, useEffect } from "react";
import "./styles.css";

interface TimerProps {
  duration: number;
}

const Timer: React.FC<TimerProps> = ({ duration }) => {
  const [time, setTime] = useState<number>(duration);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearTimeout(timerId); // Cleanup to avoid memory leaks
  }, [time]);

  const getFormattedTime = (
    milliseconds: number
  ): { days: number; hours: number; minutes: number; seconds: number } => {
    const total_seconds = Math.floor(milliseconds / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    const days = Math.floor(total_hours / 24);

    const seconds = total_seconds % 60;
    const minutes = total_minutes % 60;
    const hours = total_hours % 24;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
    <div className="timer-container">
      <span className="days">{days}</span>
      <span className="colon">:</span>
      <span className="hours">{hours}</span>
      <span className="colon">:</span>
      <span className="minutes">{minutes}</span>
      <span className="colon">:</span>
      <span className="seconds">{seconds}</span>
    </div>
  );
};

export default Timer;
