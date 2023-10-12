"use client";
import { useEffect, useState } from "react";

export default function RelationshipCounter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const target = new Date("11/05/2020 19:37:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - target.getTime();
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{days} days</h1>
      <h1>{hours} hours</h1>
      <h1>{minutes} minutes</h1>
      <h1>{seconds} seconds</h1>
    </div>
  );
}
