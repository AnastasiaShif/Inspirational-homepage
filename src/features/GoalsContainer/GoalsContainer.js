import React, { useEffect } from "react";
import Goal from "../../components/Goal";
import { useSelector } from "react-redux";

import { selectGoals } from "./goalsSlice.js";

export default function GoalsContainer() {
  useEffect(() => {}, []);

  const goals = useSelector(selectGoals);

  return (
    <div className="goals-container">
      {goals.map((goal, idx) => (
        <Goal goal={goal} key={goal.id} />
      ))}
    </div>
  );
}
