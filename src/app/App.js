import React from "react";
import Weather from "../features/Weather/Weather.js";
import "./App.css";
import Quate from "../features/Quat/Quat.js";
import GoalsContainer from "../features/GoalsContainer/GoalsContainer.js";
import { GoalText } from "../features/GoalText/GoalText.js";

function App() {
  return (
    <div className="App">
      <Weather />
      <GoalText />
      <GoalsContainer />
      <Quate />
    </div>
  );
}

export default App;
