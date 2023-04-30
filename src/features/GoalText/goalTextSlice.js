const initialState = "";
export const goalTextReducer = (goalText = initialState, action) => {
  switch (action.type) {
    case "goalText/setGoalText":
      return action.payload;

    case "goalText/clearGoalText":
      return "";
    default:
      return goalText;
  }
};

export const setGoalText = (text) => {
  return {
    type: "goalText/setGoalText",
    payload: text,
  };
};

export const clearGoalText = (text) => {
  return {
    type: "goalText/clearGoalText",
  };
};
