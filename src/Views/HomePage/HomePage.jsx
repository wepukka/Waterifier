import("./HomePage.css");
import WaterMeter from "./components/WaterMeter/WaterMeter";
import StatCard from "./components/StatsCard/StatsCard";
import DrinkCard from "./components/DrinkCard/DrinkCard";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [dailyWaterIntake, setDailyWaterIntake] = useState(0);
  const [glassAmount, setGlassAmount] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [percentage, setPercentage] = useState(0);

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
      <WaterMeter percentage={percentage} />
      <div className="home-page-cards">
        <StatCard
          setDailyWaterIntake={setDailyWaterIntake}
          setIsCalculated={setIsCalculated}
        />
        <DrinkCard
          setGlassAmount={setGlassAmount}
          glassAmount={glassAmount}
          isCalculated={isCalculated}
          percentage={percentage}
        />
      </div>
    </div>
  );
}
