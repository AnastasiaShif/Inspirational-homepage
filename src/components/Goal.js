import { useDispatch } from "react-redux";
import { toggleGoal } from "../features/GoalsContainer/goalsSlice";
import { removeGoal } from "../features/GoalsContainer/goalsSlice";
import { useEffect, useState } from "react";

// import { selectGoals } from "./goalsSlice.js";

export default function Goal({ goal }) {
  const [color, setColor] = useState("");
  const [style, setIsHover] = useState({ display: "none" });
  const dispatch = useDispatch();
  const onIsCompletedHandler = () => {
    dispatch(toggleGoal(goal));
  };
  const onRemoveHandler = () => {
    //console.log(removeGoal(goal));
    //console.log(goal);
    dispatch(removeGoal(goal));
  };

  const getRandomColor = () => {
    const colors = [
      "rgba(0, 0, 255, 0.3)",
      "rgba(255, 0, 0, 0.3)",
      "rgba(255,165,0,0.3)",
      "rgba(0, 255, 0, 0.3)",
      "rgba(255,255,0,0.3)",
    ];
    const colorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[colorIndex]);
  };
  useEffect(getRandomColor, []);

  return (
    <div
      className={`goal-element ${goal.isCompleted ? "completed-goal" : ""}`}
      style={goal.isCompleted ? {} : { backgroundColor: color }}
      onMouseEnter={(e) => {
        setIsHover({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setIsHover({ display: "none" });
      }}
    >
      <div className="button-group" style={style}>
        <button
          onClick={onIsCompletedHandler}
          className="goal-element-button done-button"
          style={goal.isCompleted ? { opacity: 0.3 } : {}}
        >
          Done
        </button>
        <button
          onClick={onRemoveHandler}
          className="goal-element-button remove-button"
        >
          Remove
        </button>
      </div>
      <h3 className="goal-element-text">{goal.text}</h3>
    </div>
  );
}
