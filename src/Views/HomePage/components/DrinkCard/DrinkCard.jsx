import("../../../../assets/global.css");
import("./DrinkCard.css");
import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import waterglass from "../../../../assets/waterglass.png";

export default function DrinkCard(props) {
  const { setGlassAmount, glassAmount, isCalculated, percentage } = props;
  const [message, setMessage] = useState("");

  const drinkWater = () => {
    if (percentage === 100) {
      return;
    }

    if (isCalculated) {
      return setGlassAmount((prev) => prev + 1);
    } else {
      return alert("First calculate your recommended water intake");
    }
  };

  useEffect(() => {
    if (percentage === 100) {
      setMessage("Thats a lot of water!");
    }
  }, [percentage]);

  return (
    <Paper className="drink-card" elevation={3}>
      <div className="drink-container">
        <p>
          Normal glass of water is around 1/4 of liters, by clicking the 'DRINK'
          button below you'll drink one glass of water.
        </p>
        <p>
          The progress bar on top shows how much you would need to drink to
          achieve your recommended water intake.
        </p>
        <button className="drink-button" onClick={() => drinkWater()}>
          DRINK
        </button>
        <button
          className="drink-button"
          onClick={() => {
            setGlassAmount(0);
            setMessage("");
          }}
        >
          RESET
        </button>
        <div className="glass-images">
          {Array.from({ length: glassAmount }).map((_, index) => (
            <img key={index} width="20" height="50" src={waterglass} />
          ))}
        </div>
        <p>{message}</p>
      </div>
    </Paper>
  );
}
