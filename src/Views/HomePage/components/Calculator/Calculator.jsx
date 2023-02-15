import("./Calculator.css");
import("../../../../assets/global.css");
import { useState } from "react";
import { Paper } from "@mui/material";
import { NumInput } from "./components/NumInput/NumInput";

export default function Calculator({
  dailyWaterIntake,
  setDailyWaterIntake,
  setIsCalculated,
}) {
  const [weight, setWeight] = useState(0);
  const [exercise, setExercise] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const calculateWaterIntake = () => {
    if (weight <= 0 || weight === undefined) {
      document.getElementById("weight").classList.add("body-weight-error");
      setErrorMsg("Invalid body weight");
    } else {
      document.getElementById("weight").classList.remove("body-weight-error");
      setErrorMsg("");
      // Water 0.035L per kg & 0.01L per exercise minute
      let waterAmount = weight * 0.035 + exercise * 0.0118296;

      setDailyWaterIntake(waterAmount.toFixed(2));
      setIsCalculated(true);
    }
  };

  return (
    <Paper className="calculator" elevation={3}>
      <h1 style={{ textAlign: "center" }}>Water calculator</h1>
      <div className="calculator-container">
        <div>
          <p>
            This calculator calculates the amount of water you should drink
            daily based on your weight and activity level
          </p>
        </div>
        <div className="calculator-input">
          <div className="input-info">Body weight (kgs):</div>
          <NumInput value={weight} setValue={setWeight} id={"weight"} />
          <div className="input-info">Daily exercise (min):</div>
          <NumInput value={exercise} setValue={setExercise} id={"exercise"} />
        </div>

        <button
          className="custom-calc-button"
          onClick={() => calculateWaterIntake()}
        >
          Calculate
        </button>
        <p>
          {"Your recommended daily water intake is: "}
          <strong>
            {errorMsg !== "" ? errorMsg : dailyWaterIntake + " liters"}
          </strong>
        </p>
      </div>
    </Paper>
  );
}
