  "use client";
  import Image from "next/image";
  import { Poppins } from "next/font/google";
  import { MuseoModerno } from "next/font/google";
  import { assets } from "@/utils/asset-utils";
  import { type Framework, frameworks } from "@/utils/framework-utils";
  import { useState, useEffect, use } from "react";
  import { cn } from "../utils/tailwind-utils";
  import { FrameworkRotation } from "@/components/framework-rotation";
  import Head from 'next/head';
  import React from 'react';
  import { CountdownTimer } from "@/components/countdown-timer";

  const museo = MuseoModerno ({
    weight: "700",
    subsets: ["vietnamese"]
  })
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
      <link rel="icon" href="/devshouseFullLogo.svg" />
      <div 
      className ={cn("fixed inset-0 transition-color delay-100 duration-600 opacity-25",
      {
        "bg-violet-300": currentFramework === "polygon",
        "bg-yellow-300": currentFramework === "superteam",
        "bg-blue-300": currentFramework === "github",
        "bg-purple-300": currentFramework === "ethereum",
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
            <h1 className={`text-5xl max-w-3xl text-center leading-snug mb-12 text-gray-300 ${poppins.className}`}> X </h1>
            <div className="inline-block ml-6 -mt-2 mb-10">
            <FrameworkRotation currentFramework={currentFramework} />
              </div>
          </div>
          <div className="flex flex-col">
          <h1 className={`text-7xl max-w-7xl text-center leading-snug text-gray-300 ${museo.className}`}>
          DEVSHOUSE&apos;24
          </h1>
          <h2 className={`text-lg max-w-2xl text-center mt-[-10] text-gray-300 ${museo.className}`}>
            CODE. CONNECT. CREATE.
          </h2>
          </div>
          <div className="mt-20">
          <CountdownTimer currentFramework={currentFramework} />
            <div className={cn("flex gap-[93px] text-center text-white",
            {
              "text-violet-300": currentFramework === "polygon",
              "text-yellow-300": currentFramework === "superteam",
              "text-blue-300": currentFramework === "github",
              "text-purple-300": currentFramework === "ethereum",
              "text-red-300": currentFramework === "redbull",
              "text-teal-300": currentFramework === "solana",
            })}>
              <div className="ml-3">DAYS</div>
              <div className="ml-[-2px]">HOURS</div>
              <div className="ml-[-15px]">MINUTES</div>
              <div className="ml-[-20px]">SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </main>;
  }
