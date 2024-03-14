import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { type Framework } from "@/utils/framework-utils";
import { useState, useEffect } from "react";
import { TimeUnit } from "./time-unit";

export const CountdownTimer = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  const [countdown, setCountdown] = useState(calculateTimeToEvent());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeToEvent());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"text-center flex gap-[100px] text-opacity-0"}>
      <div>
      <TimeUnit
        // label="DAYS"
        value={countdown.days}
        currentFramework={currentFramework}
      />
      </div>
      <div className="ml-[-23px]">
      <TimeUnit
        // label="HOURS"
        value={countdown.hours}
        currentFramework={currentFramework}
      />
     </div>
     <div>
      <TimeUnit
        // label="MINUTES"
        value={countdown.minutes}
        currentFramework={currentFramework}
      />
      </div>
      <div>
      <TimeUnit
        // label="SECONDS"
        value={countdown.seconds}
        currentFramework={currentFramework}
      />
    </div>
    </div>
  );
};