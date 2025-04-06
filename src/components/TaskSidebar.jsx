import PropTypes from "prop-types";
import { TaskList } from "./TaskList";

export const TaskSidebar = ({
  tasks,
  selectedCategory,
  selectedSubcategory,
  selectedTask,
  onCategoryClick,
  onSubcategoryClick,
  onTaskSelect,
}) => (
  <nav className="task-sidebar">
    <h2>Napredni React</h2>
    {Object.entries(tasks).map(([category, subcategories]) => (
      <div key={category} className="category-section">
        <button
          className={`category-button ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
          <span className="arrow">
            {selectedCategory === category ? "▼" : "▶"}
          </span>
        </button>
        {selectedCategory === category && (
          <div className="subcategories">
            {Object.entries(subcategories).map(([subcategory, taskList]) => (
              <div key={subcategory} className="subcategory-section">
                <button
                  className={`subcategory-button ${
                    selectedSubcategory === subcategory ? "active" : ""
                  }`}
                  onClick={() => onSubcategoryClick(subcategory)}
                >
                  {subcategory}
                  <span className="arrow">
                    {selectedSubcategory === subcategory ? "▼" : "▶"}
                  </span>
                </button>
                {selectedSubcategory === subcategory && (
                  <TaskList
                    tasks={taskList}
                    selectedTask={selectedTask}
                    onTaskSelect={onTaskSelect}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </nav>
);

TaskSidebar.propTypes = {
  tasks: PropTypes.object.isRequired,
  selectedCategory: PropTypes.string,
  selectedSubcategory: PropTypes.string,
  selectedTask: PropTypes.string,
  onCategoryClick: PropTypes.func.isRequired,
  onSubcategoryClick: PropTypes.func.isRequired,
  onTaskSelect: PropTypes.func.isRequired,
};
