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
    <div className="flex flex-col items-center gap-8 ">
      {/* ------------------------ ANNIVERSARY COUNTER ------------------------ */}

      <div className="flex flex-col items-center gap-4">
        <h1>Today is our:</h1>
        <div className="items-baseline gap-4 flex">
          <h1 className=" text-neo-400 border border-neo-300 rounded-[4px] px-12 py-4 text-5xl font-orbitron relative flex flex-col text-center">
            {anniversary}
            <span className="text-neo-600 text-base">year</span>
          </h1>
        </div>
        <h1 className="">anniversary &lt;3</h1>
      </div>

      {/* ------------------------ RELATIONSHIP CLOCK ------------------------ */}

      <div className="items-center flex flex-col gap-4">
        <h1>We&apos;ve been dating for:</h1>
        <div className="font-orbitron flex gap-0 rounded-[4px] border border-neo-300 overflow-hidden">
          {timePair.map((item, index) => (
            <div
              key={index}
              className="items-center flex flex-col border-neo-900 border-r-0 first:border-l-0 overflow-hidden border"
            >
              <div className="flex justify-center  py-2  w-2 sm:w-24  text-neo-300">
                <h1 className="text-base sm:text-3xl self-center text-center">
                  {item.number}{" "}
                </h1>
              </div>
              <h1 className="text-[8px] py-[2px] bg-neo-950 text-neo-400 w-14 text-center">
                {item.timeScale}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------ LIFE PERCENTAGE ------------------------ */}

      <div className="flex sm:flex-row gap-3 mt-4 sm:mt-8">
        {lifePercentage.map((figure, index) => (
          <div
            key={index}
            className="flex relative bg-neo-900/25 px-4 overflow-hidden w-36 sm:w-48 justify-center items-center rounded-[4px] border border-neo-300"
          >
            <div className="flex absolute top-0 flex-col w-full gap-[1px]">
              <div className="bg-neo-900/20 flex w-full h-1 items-end"></div>
              {[
                ...Array(18)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="bg-neo-900/20 flex w-full h-1">
                      {" "}
                    </div>
                  )),
              ]}
              <div className="bg-neo-400 flex w-full h-1"></div>
              <div className="bg-neo-400 flex w-full h-1"></div>
            </div>
            <div className="flex flex-col gap-0 text-center pt-5 pb-9">
              <h1 className=" font-orbitron z-10 font-medium w-auto text-neo-300 text-2xl">
                {figure.percent} %
              </h1>
              <h1 className="text-center text-xs text-neo-600">
                {figure.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
