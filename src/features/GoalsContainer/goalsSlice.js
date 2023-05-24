const initialState = [];

export const goalsReducer = (goals = initialState, action) => {
  switch (action.type) {
    case "goals/addGoal":
      const id = goals.length;
      return [...goals, { text: action.payload, isCompleted: false, id: id }];
    case "goals/removeGoal":
      return goals.filter((goal) => goal.id !== action.payload.id);
    case "goals/toggleGoal":
      return goals.map((goal) => {
        return goal.id === action.payload.id
          ? { ...goal, isCompleted: !goal.isCompleted }
          : { ...goal };
      });
    default:
      return goals;
  }
};
export function addGoal(goalText) {
  return {
    type: "goals/addGoal",
    payload: goalText,
  };
}

export function removeGoal(goal) {
  return {
    type: "goals/removeGoal",
    payload: goal,
  };
}

export function toggleGoal(goal) {
  return {
    type: "goals/toggleGoal",
    payload: goal,
  };
}

export const selectGoals = (state) => state.goals;
