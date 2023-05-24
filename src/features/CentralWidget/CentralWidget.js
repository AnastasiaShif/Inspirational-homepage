import GoalsContainer from "../GoalsContainer/GoalsContainer.js";
import { GoalText } from "../GoalText/GoalText.js";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";

const nextIconUrl =
  "https://img.icons8.com/ios/50/null/circled-chevron-right--v2.png";
const prevIconUrl =
  "https://img.icons8.com/ios/50/null/circled-chevron-left--v2.png";

export function CentralWidjet(props) {
  return (
    <div className="central-element-container">
      <div className="central-element-item">
        <Icon
          path={mdiChevronLeft}
          size={3}
          alt="prevButton"
          className="directionButton"
          onClick={props.goBack}
        />
      </div>
      <div className="central-element-item search-and-goals-container">
        <GoalText />
        <GoalsContainer />
      </div>

      <div className="central-element-item">
        <Icon
          path={mdiChevronRight}
          size={3}
          alt="nextButton"
          className="directionButton"
          onClick={props.goToNext}
        />
      </div>
    </div>
  );
}
