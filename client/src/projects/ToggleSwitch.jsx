import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="container">

      <div
        className={`toggle-switch ${isOn ? "active" : ""}`}
        onClick={handleToggleSwitch}
      >
        <div className="switch-circle flex justify-center items-center">{isOn ? "ON" : "OFF"}</div>
      </div>
    </div>
  );
};