import GoalsContainer from "../GoalsContainer/GoalsContainer.js";
import { GoalText } from "../GoalText/GoalText.js";

const nextIconUrl =
  "https://img.icons8.com/ios/50/null/circled-chevron-right--v2.png";
const prevIconUrl =
  "https://img.icons8.com/ios/50/null/circled-chevron-left--v2.png";

export function CentralWidjet() {
  return (
    <div className="central-element-container">
      <div className="central-element-item">
        <img src={prevIconUrl} alt="nextButton" className="directionButton" />
      </div>
      <div className="central-element-item search-and-goals-container">
        <GoalText />
        <GoalsContainer />
      </div>

      <div className="central-element-item">
        <img src={nextIconUrl} alt="nextButton" className="directionButton" />
      </div>
    </div>
  );
}
