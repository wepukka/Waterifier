import("./StatsCard.css");
import("../../../../assets/global.css");
import { useState } from "react";
import { Paper } from "@mui/material";
import { NumInput } from "./components/NumInput/NumInput";

export default function StatCard(props) {
  const [weight, setWeight] = useState(0);
  const [exercise, setExercise] = useState(0);
  const [recommendedWater, setRecommendedWater] = useState("");
  const INTAKE_MESSAGE = "Your recommended daily water intake is: ";

  const calculateWaterIntake = () => {
    if (weight <= 0 || weight === undefined) {
      document.getElementById("weight").classList.add("body-weight-error");
      setRecommendedWater("Invalid body weight");
    } else {
      document.getElementById("weight").classList.remove("body-weight-error");

      let weightWater = weight * 0.035; // 35ml per kg //
      let exerciseWater = exercise * 0.0118296; // ~ 0.01 liter per exercise min

      setRecommendedWater((weightWater + exerciseWater).toFixed(2) + " liters"); // 35ml per kg //
      props.setDailyWaterIntake((weightWater + exerciseWater).toFixed(2));
      props.setIsCalculated(true);
    }
  };

  return (
    <Paper className="calc-card" elevation={3}>
      <h1 style={{ textAlign: "center" }}>Water calculator</h1>
      <div className="card-container">
        <div>
          <p>
            This calculator calculates the amount of water you should drink
            daily based on your weight and activity level
          </p>
        </div>
        <div className="calc-input">
          <div className="input-info">Body weight (kgs):</div>
          <NumInput value={weight} setValue={setWeight} id={"weight"} />
          <div className="input-info">Daily exercise (min):</div>
          <NumInput value={exercise} setValue={setExercise} id={"exercise"} />
        </div>

        <button className="calc-button" onClick={() => calculateWaterIntake()}>
          Calculate
        </button>
        <p>
          {INTAKE_MESSAGE} <strong>{recommendedWater}</strong>
        </p>
      </div>
    </Paper>
  );
}
