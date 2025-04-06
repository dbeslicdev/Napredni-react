import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { TaskSidebar } from "./TaskSidebar";
import { TaskDescription } from "./TaskDescription";
import "../styles/TaskNavigator.css";
import { tasks } from "./utils/tasks";
import { taskDescriptions } from "./utils/taskDescriptions";

export const TaskNavigator = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedSubcategory(null);
    setSelectedTask(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(
      selectedSubcategory === subcategory ? null : subcategory
    );
    setSelectedTask(null);
  };

  const renderTask = () => {
    if (!selectedTask || !selectedCategory || !selectedSubcategory) return null;
    const TaskComponent =
      tasks[selectedCategory][selectedSubcategory][selectedTask];
    const description =
      taskDescriptions[selectedCategory][selectedSubcategory][selectedTask];

    const WrappedComponent =
      selectedSubcategory === "PostsList" ? (
        <BrowserRouter>
          <TaskComponent />
        </BrowserRouter>
      ) : (
        <TaskComponent />
      );

    return (
      <div className="task-content">
        <TaskDescription description={description} />
        <div className="task-component">{WrappedComponent}</div>
      </div>
    );
  };

  return (
    <div className="task-navigator">
      <TaskSidebar
        tasks={tasks}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        selectedTask={selectedTask}
        onCategoryClick={handleCategoryClick}
        onSubcategoryClick={handleSubcategoryClick}
        onTaskSelect={setSelectedTask}
      />
      <main className="task-main">{renderTask()}</main>
    </div>
  );
};
