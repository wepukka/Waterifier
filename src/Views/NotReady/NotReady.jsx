import("./NotReady.css");
import { useNavigate } from "react-router-dom";

export default function NotReady() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>PAGE UNDER CONSTRUCTION</h1>
      <h2 style={{ color: "white" }}>GO BACK TO</h2>
      <div className="not-ready-page-button" onClick={() => navigate("./shop")}>
        SHOP
      </div>
      <div className="not-ready-page-button" onClick={() => navigate("./")}>
        CALCULATOR
      </div>
    </div>
  );
}
