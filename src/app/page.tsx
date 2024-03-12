"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { useState, useEffect, use } from "react";
import { cn } from "../utils/tailwind-utils";
import { FrameworkRotation } from "@/components/framework-rotation";

const poppins = Poppins ({
  weight: "700",
  subsets: ["latin"]
})

export default function Home() {

  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    let currentIndex = 0
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex])
      currentIndex = (currentIndex+1) % frameworks.length
    }
    const intervalId = setInterval(rotateFrameworks, 2000)
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return <main>
    <div 
    className ={cn("fixed inset-0 transition-color delay-100 duration-500 opacity-25",
    {
      "bg-purple-300": currentFramework === "polygon",
      "bg-yellow-300": currentFramework === "superteam",
      "bg-blue-300": currentFramework === "github",
      "bg-green-300": currentFramework === "ethereum",
      "bg-red-300": currentFramework === "redbull",
      "bg-teal-300": currentFramework === "solana",
      
    }
    )}
    />
    <Image width={1200} height={1200} role="presentation" alt="gradient bg" className="fixed inset-0 w-screen h-screen object-cover" src={assets.gradient} />
    <div className="fixed inset-0 opacity-30"
    style = {{
      backgroundImage: `url(${assets.square})`,
      backgroundSize: "30px",
    }}
    />
    <div
    className={cn("bg-black fixed inset-0 transition-opacity duration-[1500ms]", 
    !showBackground ? "opacity-100" : "opacity-0"
    )}
    />

    <div className="max-w-7xl mt-20 mx-auto">
      <div className="flex flex-col items-center relative z-10">
        <div className="flex items-center inline-block mr-8 -mt-2">
        <Image alt="devshouse logo"
          src={`/devshouseLogoSkeleton.svg`}
          className="inline-block mr-10 -mt-2 mb-10"
          width="100"
          height="100"/>
          <h1 className={`text-2xl max-w-7xl text-center leading-snug mb-12 text-gray-300 ${poppins.className}`}> and </h1>
          <div className="inline-block ml-8 -mt-2 mb-10">
          <FrameworkRotation currentFramework={currentFramework} />
            </div>
        </div>
        <h1 className={`text-7xl max-w-7xl text-center leading-snug mb-12 text-gray-300 ${poppins.className}`}>
          DevsHouse'24 <span>COUNTDOWN</span>
        </h1>
      </div>
    </div>
  </main>;
}
