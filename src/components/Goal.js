import { useDispatch } from "react-redux";
import { toggleGoal } from "../features/GoalsContainer/goalsSlice";
import { removeGoal } from "../features/GoalsContainer/goalsSlice";

// import { selectGoals } from "./goalsSlice.js";

export default function Goal({ goal }) {
  const dispatch = useDispatch();
  const onIsCompletedHandler = () => {
    dispatch(toggleGoal(goal));
  };
  const onRemoveHandler = () => {
    //console.log(removeGoal(goal));
    //console.log(goal);
    dispatch(removeGoal(goal));
  };
  return (
    <div className="goal">
      <span className="goal-container"></span>
      <button onClick={onIsCompletedHandler} className="done-button">
        Done
      </button>
      <button onClick={onRemoveHandler} className="completed-button">
        Remove
      </button>
      <h3 className="goal-name">{goal.text}</h3>
    </div>
  );
}
