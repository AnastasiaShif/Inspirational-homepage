import { addGoal } from "../GoalsContainer/goalsSlice";

import { useDispatch } from "react-redux";
import { useState } from "react";
//import { clearGoalText } from "./goalTextSlice";

const clearIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg";

export const GoalText = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Lets submit the new goal now!
      dispatch(addGoal(text));
      setText("");
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const onClearGoalTextHandler = () => {
    setText("");
  };

  return (
    <div id="goal-text-component">
      <div className="goal-text-header goal-text-header-small">
        What's on your mind today?
      </div>
      <div id="goal-text-container">
        <input
          id="goal-text"
          type="text"
          value={text}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        {text.length > 0 && (
          <button
            onClick={onClearGoalTextHandler}
            type="button"
            id="text-clear-button"
          >
            <img src={clearIconUrl} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};
