"use client";

import { useRouter } from "next/navigation";
import { HouseLine } from "phosphor-react";

export default function BackHome(props: { color: string | undefined }) {
  const router = useRouter();
  return (
    <div className="">
      <button
        onClick={() => {
          router.push("/");
        }}
        className="text-start bg-neutral-900/50 rounded-lg px-2 mx-6 sm:mx-16 py-2 hover:bg-neutral-800 hover:cursor-pointer"
      >
        <HouseLine
          width={20}
          height={20}
          weight="regular"
          className={`${props.color}`}
        />
      </button>
    </div>
  );
}
