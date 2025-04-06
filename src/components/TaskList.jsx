import PropTypes from "prop-types";

export const TaskList = ({ tasks, selectedTask, onTaskSelect }) => (
  <ul className="task-list">
    {Object.keys(tasks).map((task) => (
      <li key={task}>
        <button
          className={`task-button ${selectedTask === task ? "active" : ""}`}
          onClick={() => onTaskSelect(task)}
        >
          {task}
        </button>
      </li>
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
  selectedTask: PropTypes.string,
  onTaskSelect: PropTypes.func.isRequired,
};
