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
      <button onClick={onIsCompletedHandler}>Done</button>
      <button onClick={onRemoveHandler}>Remove</button>
      <h3 className="recipe-name">
        id: {goal.id} text: {goal.text} isCompleted:{" "}
        {goal.isCompleted ? "Yes" : "No"}
      </h3>
    </div>
  );
}
