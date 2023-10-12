"use client";
import { useEffect, useState } from "react";

export default function RelationshipCounter() {
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [anniversary, setAnniversary] = useState(0);
  useEffect(() => {
    const target = new Date("11/05/2020 19:37:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - target.getTime();
      const y = Math.floor(difference / (1000 * 60 * 60 * 24) / 365);
      setYears(y);
      const d = Math.floor(difference / (1000 * 60 * 60 * 24) - y * 365);
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      const anni = parseFloat(
        (difference / (1000 * 60 * 60 * 24) / 365).toFixed(2)
      );
      setAnniversary(anni);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{years} years</h1>
      <h1>{days} days</h1>
      <h1>{hours} hours</h1>
      <h1>{minutes} minutes</h1>
      <h1>{seconds} seconds</h1>
      <div className="flex flex-col items-center gap-4">
        <h1>Today is our:</h1>
        <div className="flex items-baseline gap-2">
          <h1 className=" text-blue-500 text-5xl font-orbitron">
            {anniversary}
          </h1>
          <h1 className="text-blue-500">year</h1>
        </div>
        <h1 className="">anniversary {`<3`}</h1>
      </div>
    </div>
  );
}
