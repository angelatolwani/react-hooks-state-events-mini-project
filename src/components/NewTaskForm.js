import React, { useState } from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {
  const categoryOptions = categories.filter(category => category !== "All")
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("Code")
  
  function handleChange(event) {
    setNewTask(event.target.value)
  }
  
  function handleSelect(event) {
    setNewCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTaskObj = {
      text: newTask,
      category: newCategory
    }
    onTaskFormSubmit(newTaskObj)
    setNewTask("")
    setNewCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={newTask} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelect} value={newCategory}>
          {/* render <option> elements for each category here */}
          {categoryOptions.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
