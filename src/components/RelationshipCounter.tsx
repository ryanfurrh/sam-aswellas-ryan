"use client";
import _ from "lodash";
import { concat } from "lodash";
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
    { number: concat("0" + years), timeScale: "Years" },
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
      <div className="flex flex-col items-center gap-8">
        <h1>Today is our:</h1>
        <div className="flex items-baseline gap-2">
          <h1 className=" text-teal-500 text-5xl font-orbitron">
            {anniversary}
          </h1>
          <h1 className="text-teal-800">year</h1>
        </div>
        <h1 className="">anniversary &lt;3</h1>
      </div>
      <div className="items-center flex flex-col gap-4">
        <h1>We&apos;ve been dating for:</h1>
        <div className="font-orbitron flex flex-col sm:flex-row gap-6">
          {timePair.map((item, index) => (
            <div
              key={index}
              className="items-center flex flex-col border-teal-900/50 sm:w-36 overflow-hidden border rounded-md"
            >
              <div className="flex justify-center  py-2  w-52 sm:w-24  text-teal-500">
                <h1 className="text-7xl sm:text-3xl self-center text-center">
                  {item.number}{" "}
                </h1>
              </div>
              <h1 className="text-base py-[2px] bg-teal-950 text-teal-600 w-52 text-center">
                {item.timeScale}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        {lifePercentage.map((figure, index) => (
          <div
            key={index}
            className="flex flex-col relative bg-teal-900/25  overflow-hidden w-64 sm:w-48 justify-center h-40 items-center rounded-md"
          >
            <div className="flex absolute top-0 flex-col w-full gap-1">
              <div className="bg-teal-400 flex w-full h-1"></div>
              <div className="bg-teal-400 flex w-full h-1"></div>

              <div className="bg-teal-900/20 flex w-full h-1"></div>
              {[
                ...Array(18)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="bg-teal-900/20 flex w-full h-1">
                      {" "}
                    </div>
                  )),
              ]}

              <div className="bg-teal-900/20 flex w-full h-1"></div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-0 text-center">
              <h1 className="mt-4 font-orbitron z-10 font-semibold text-teal-600 text-5xl sm:text-2xl">
                {figure.percent} %
              </h1>
              <h1 className="text-center text-lg sm:text-xs text-teal-800">
                {figure.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
