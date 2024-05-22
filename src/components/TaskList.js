import React from "react";
import Task from "./Task.js"

function TaskList( { tasks, removeTask } ) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task,index) => <Task key={`${task.text}-${index}`} category={task.category} text={task.text} removeTask={removeTask} />)}
    </div>
  );
}

export default TaskList;
