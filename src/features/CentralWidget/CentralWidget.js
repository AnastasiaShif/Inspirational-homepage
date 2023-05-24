import GoalsContainer from "../GoalsContainer/GoalsContainer.js";
import { GoalText } from "../GoalText/GoalText.js";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";

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
