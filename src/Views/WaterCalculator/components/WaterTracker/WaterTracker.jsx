import("../../../../assets/global.css");
import("./WaterTracker.css");
import { Paper } from "@mui/material";
import waterglass from "../../../../assets/waterglass.png";
import WaterMeter from "../WaterMeter/WaterMeter";
import useWindowSize from "../../../../hooks/useWindowSize";

export default function WaterTracker({
  glassAmount,
  setGlassAmount,
  isCalculated,
  percentage,
}) {
  const waterMsg = "Thats a lot of water!";
  const size = useWindowSize();

  const drinkWater = () => {
    if (percentage === 100) {
      return;
    }
    return isCalculated
      ? setGlassAmount((prev) => prev + 1)
      : alert("First calculate your recommended water intake");
  };

  const reset = () => {
    setGlassAmount(0);
  };

  return (
    <Paper className="tracker" elevation={3}>
      <div className="tracker-container">
        <p>
          Normal glass of water is around 1/4 of liters, by clicking the 'DRINK'
          button below you'll drink one glass of water.
        </p>
        <p>Progress bar tracks your recommended daily water intake</p>
        {size.width <= 600 && (
          <WaterMeter percentage={percentage} showPercentage={false} />
        )}
        <button className="custom-calc-button" onClick={() => drinkWater()}>
          DRINK
        </button>
        <button
          className="custom-calc-button"
          onClick={() => {
            reset();
          }}
        >
          RESET
        </button>
        <div className="glass-images">
          {Array.from({ length: glassAmount }).map((_, index) => (
            <img key={index} width="20" height="50" src={waterglass} />
          ))}
        </div>
        <p>{percentage >= 100 ? waterMsg : ""}</p>
      </div>
    </Paper>
  );
}
