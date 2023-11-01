"use client";
import { ArrowFatRight } from "@phosphor-icons/react/dist/ssr/ArrowFatRight";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { CheckFat } from "@phosphor-icons/react/dist/ssr/CheckFat";
import { Confetti } from "@phosphor-icons/react/dist/ssr/Confetti";
import { Image } from "@phosphor-icons/react/dist/ssr/Image";
import { SlidersHorizontal } from "@phosphor-icons/react/dist/ssr/SlidersHorizontal";
import Link from "next/link";
import { useState, useEffect } from "react";

type DropdownSelectorProps = {
  setSelectedFilter: (value: boolean) => void;
};

export default function DropdownSelector({
  setSelectedFilter,
}: DropdownSelectorProps) {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleFilterChange = (newFilterValue: boolean) => {
    setFilterValue(newFilterValue);
    setSelectedFilter(newFilterValue);
    setOpen(false);
  };

  return (
    <div className="fixed z-20 cursor-pointer top-[72px] right-4 sm:right-8 lg:right-24 bg-mako-950 text-sm">
      <div
        onClick={handleOpen}
        className="p-1 border rounded-[4px] border-bermuda-900 bg-mako-950 z-20"
      >
        <SlidersHorizontal width={16} />
      </div>
      <div
        className={` absolute right-0 top-8 flex flex-col gap-2
        ${open ? "opacity-100" : "hidden"}`}
      >
        <div className="border border-bermuda-300 rounded-[4px] overflow-hidden z-20 bg-mako-950">
          <button
            className="flex flex-row items-center gap-2 py-2 pl-4 pr-2 border-b hover:bg-bermuda-950/70 border-bermuda-950"
            onClick={() => handleFilterChange(false)}
          >
            Old
            <span>
              <ArrowFatRight width={16} />
            </span>
            New
            <span>
              <Check
                className={`${filterValue ? "fill-none" : "fill-bermuda-400"}`}
                width={12}
                weight="bold"
              />
            </span>
          </button>
          <button
            className="flex flex-row items-center gap-2 pt-2 pb-3 pl-4 pr-2 hover:bg-bermuda-950/70"
            onClick={() => handleFilterChange(true)}
          >
            New
            <span>
              <ArrowFatRight width={16} />
            </span>
            Old
            <span>
              <Check
                className={`${filterValue ? "fill-bermuda-400" : "fill-none"}`}
                width={12}
                weight="bold"
              />
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
