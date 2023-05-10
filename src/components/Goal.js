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
  const colors = ["blue", "red", "orange", "green", "yellow"];
  const getRandomColor = () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[colorIndex]);
  };
  useEffect(getRandomColor, []);

  return (
    <div
      className={`goal-element ${goal.isCompleted ? "completed-goal" : ""}`}
      style={goal.isCompleted ? {} : { background: color }}
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
