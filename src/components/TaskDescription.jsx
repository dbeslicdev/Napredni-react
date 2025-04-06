import { useState } from "react";
import PropTypes from "prop-types";

export const TaskDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const parts = description.split("\n\n");

  return (
    <div className="task-description">
      <button
        className="description-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3>Opis zadatka</h3>
        <span className="arrow">{isExpanded ? "▼" : "▶"}</span>
      </button>
      {isExpanded && (
        <div className="description-content">
          {parts.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>
      )}
    </div>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
