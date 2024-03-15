"use client"
import { cn } from "@/utils/tailwind-utils";
import { NumberRotation } from "@/components/number-rotation";
import { Framework } from "@/utils/framework-utils";
import { unstable_noStore } from "next/cache";

export const TimeUnit = ({
  // label,
  value,
  currentFramework
}: {
  // label: string;
  value: number;
  currentFramework: Framework
}) => {
  unstable_noStore()
  return (
    <div className="flex flex-col">
      <div className="text-white text-8xl font-semibold text-center gap-[100px]">
        {<NumberRotation number={value} />}
      </div>
      <div
        className={cn("mt-20 text-[10px] font-medium", {
          "bg-violet-300": currentFramework === "polygon",
          "bg-yellow-300": currentFramework === "superteam",
          "bg-blue-300": currentFramework === "github",
          "bg-purple-300": currentFramework === "ethereum",
          "bg-red-300": currentFramework === "redbull",
          "bg-teal-300": currentFramework === "solana",
        })}
      >
        {/* {label} */}
      </div>
    </div>
  );
}