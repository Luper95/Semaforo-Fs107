import "./TrafficLight.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { useEffect, useState } from "react";

export const TrafficLightComponent = () => {
  const [showFourthLight, setShowFourthLight] = useState(false);
  const [selectedLight, setSelectedLight] = useState("red");
  const handleLightClick = (color) => {
    setSelectedLight(color);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedLight((prevLight) => {
        if (prevLight === "red") return "yellow";
        if (prevLight === "yellow") return "green";
        if (prevLight === "green") {
          return showFourthLight ? "purple" : "red";
          // If the fourth light is not shown, cycle back to red
        }
        if (prevLight === "purple") return "red";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  // This will change the lights every 5 seconds

  const toggleFourthLight = () => {
    setShowFourthLight((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="pole"></div>
      <div className="light-background rounded-3 container bg-dark d-flex flex-column justify-content-center align-items-center">
        <div
          className={`rounded-circle red-light bg-danger ${
            selectedLight == "red" ? "selected" : " "
          }`}
          onClick={() => handleLightClick("red")}
        ></div>
        <div
          className={`rounded-circle yellow-light bg-warning ${
            selectedLight == "yellow" ? "selected" : " "
          } `}
          onClick={() => handleLightClick("yellow")}
        ></div>
        <div
          className={`rounded-circle  green-light bg-success ${
            selectedLight == "green" ? "selected" : " "
          }`}
          onClick={() => handleLightClick("green")}
        ></div>
        {showFourthLight && (
          <div
            className={`rounded-circle  purple-light ${
              selectedLight == "purple" ? "selected" : " "
            }`}
            onClick={() => handleLightClick("purple")}
          ></div>
        )}
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary mt-3 ronded-3 "
          onClick={toggleFourthLight}
        >
          {showFourthLight ? "Quitar luz purpura" : "Agregar luz purpura"}
        </button>
      </div>
    </div>
  );
};
