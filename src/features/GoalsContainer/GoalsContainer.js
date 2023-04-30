import React, { useState, useEffect } from "react";
import Goal from "../../components/Goal";
import { useSelector, useDispatch } from "react-redux";

import { selectGoals } from "./goalsSlice.js";

export default function GoalsContainer() {
  useEffect(() => {}, []);

  const goals = useSelector(selectGoals);
  //   const dispatch = useDispatch();

  return (
    <div>
      {goals.map((goal, idx) => (
        <Goal goal={goal} key={goal.id} />
      ))}
    </div>
  );
}
