"use client";

import { useRouter } from "next/navigation";
import { HouseLine } from "phosphor-react";
import { GrMenu } from "react-icons/gr";

export default function BackHome() {
  const router = useRouter();
  return (
    <div className="absolute bg-neutral-900/50 rounded-lg px-4 mx-16 py-2">
      <button
        onClick={() => {
          router.push("/");
        }}
        className="text-start"
      >
        <HouseLine width={20} height={20} weight="duotone" color="green" />
      </button>
    </div>
  );
}
