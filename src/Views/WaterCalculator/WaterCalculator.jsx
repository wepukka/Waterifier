import("./WaterCalculator.css");
import { useState, useEffect } from "react";

import Calculator from "./components/Calculator/Calculator";
import WaterTracker from "./components/WaterTracker/WaterTracker";
import WaterInfo from "./components/WaterInfo/WaterInfo";
import WaterMeter from "./components/WaterMeter/WaterMeter";

import useWindowSize from "../../hooks/useWindowSize";

export default function HomePage() {
  const [dailyWaterIntake, setDailyWaterIntake] = useState(0);
  const [glassAmount, setGlassAmount] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const size = useWindowSize();

  useEffect(() => {
    let waterAmount = glassAmount * 0.25;
    let waterPercent = (waterAmount / dailyWaterIntake) * 100;

    if (waterPercent > 100) {
      return setPercentage(100);
    }

    if (!isNaN(waterPercent)) {
      return setPercentage((waterAmount / dailyWaterIntake) * 100);
    }
  }, [dailyWaterIntake, glassAmount]);

  return (
    <div className="home-page">
      {size.width > 600 && (
        <WaterMeter percentage={percentage} showPercentage={true} />
      )}
      <div className="home-page-cards">
        <Calculator
          dailyWaterIntake={dailyWaterIntake}
          setDailyWaterIntake={setDailyWaterIntake}
          setIsCalculated={setIsCalculated}
        />
        <WaterTracker
          glassAmount={glassAmount}
          setGlassAmount={setGlassAmount}
          isCalculated={isCalculated}
          percentage={percentage}
        />
        <WaterInfo />
      </div>
    </div>
  );
}
