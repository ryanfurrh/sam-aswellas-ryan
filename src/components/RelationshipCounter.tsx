"use client";
import { useEffect, useState } from "react";

export default function RelationshipCounter() {
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [anniversary, setAnniversary] = useState(0);
  const [samPercentage, setSamPercentage] = useState(0);
  const [ryanPercentage, setRyanPercentage] = useState(0);
  useEffect(() => {
    const samTarget = new Date("02/03/1997");
    const ryanTarget = new Date("04/30/1997");
    const target = new Date("11/05/2020 19:37:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - target.getTime();
      const samDifference = now.getTime() - samTarget.getTime();
      const ryanDifference = now.getTime() - ryanTarget.getTime();
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

      // --- Anniversery percent calculation --- //
      const anni = parseFloat(
        (difference / (1000 * 60 * 60 * 24) / 365).toFixed(2)
      );
      setAnniversary(anni);

      // --- Sam & Ryan life percentage calculation -- //
      const sl = parseFloat(
        (
          (difference /
            (1000 * 60 * 60 * 24) /
            365 /
            (samDifference / (1000 * 60 * 60 * 24) / 365)) *
          100
        ).toFixed(2)
      );
      Math;
      setSamPercentage(sl);
      const rl = parseFloat(
        (
          (difference /
            (1000 * 60 * 60 * 24) /
            365 /
            (ryanDifference / (1000 * 60 * 60 * 24) / 365)) *
          100
        ).toFixed(2)
      );
      Math;
      setRyanPercentage(rl);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timePair = [
    { number: days, timeScale: "Days" },
    { number: hours, timeScale: "Hours" },
    { number: minutes, timeScale: "Minutes" },
    { number: seconds, timeScale: "Seconds" },
  ];

  const lifePercentage = [
    { percent: samPercentage, text: "of Sam's life" },
    { percent: ryanPercentage, text: "of Ryan's life" },
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
      <div className="flex gap-12">
        {lifePercentage.map((figure, index) => (
          <div className="flex flex-col bg-blue-900/25 w-36 justify-center h-36 items-center rounded-full">
            <h1 className="mt-2 font-orbitron z-10 font-semibold text-cyan-600 text-2xl">
              {figure.percent} %
              {/* <div className="bg-blue-950  w-20 h-20 absolute "></div> */}
            </h1>
            <h1 className="text-center text-xs text-cyan-800">{figure.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
