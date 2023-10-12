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

  const timePair = [
    { number: years, timeScale: "Years" },
    { number: days, timeScale: "Days" },
    { number: hours, timeScale: "Hours" },
    { number: minutes, timeScale: "Minutes" },
    { number: seconds, timeScale: "Seconds" },
  ];

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <h1>Today is our:</h1>
        <div className="flex items-baseline gap-2">
          <h1 className=" text-blue-500 text-5xl font-orbitron">
            {anniversary}
          </h1>
          <h1 className="text-blue-500">year</h1>
        </div>
        <h1 className="">anniversary &lt;3</h1>
      </div>
      <div className="items-center flex flex-col gap-4">
        <h1>We&apos;ve been dating for:</h1>
        <div className="font-orbitron flex">
          {timePair.map((item, index) => (
            <div key={index} className="px-4 items-center flex flex-col gap-2">
              <div className="border flex justify-center border-blue-900/50 py-1 px-4 w-24 text-blue-500 ">
                <h1 className="text-3xl self-center text-center">
                  {item.number}{" "}
                </h1>
              </div>
              <h1 className="text-xs">{item.timeScale}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
