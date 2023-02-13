import("./HomePage.css");
import WaterMeter from "./components/WaterMeter/WaterMeter";
import StatCard from "./components/StatsCard/StatsCard";
import DrinkCard from "./components/DrinkCard/DrinkCard";
import { useState, useEffect } from "react";
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
      setPercentage(100);
    }
    if (!isNaN(waterPercent)) {
      setPercentage((waterAmount / dailyWaterIntake) * 100);
    }
  }, [dailyWaterIntake, glassAmount]);

  return (
    <div className="home-page">
      {size.width > 600 && (
        <WaterMeter percentage={percentage} showPercentage={true} />
      )}
      <div className="home-page-cards">
        <StatCard
          dailyWaterIntake={dailyWaterIntake}
          setDailyWaterIntake={setDailyWaterIntake}
          setIsCalculated={setIsCalculated}
        />
        <DrinkCard
          glassAmount={glassAmount}
          setGlassAmount={setGlassAmount}
          isCalculated={isCalculated}
          percentage={percentage}
        />
      </div>
    </div>
  );
}
