import React, { useState } from "react";
import TaskCard from "./TaskCard";
const TaskList = ({TasksList}) => {
  
    const [tasks, setTasks] = useState(TasksList);

  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    setTasks((_prev) => [
      ..._prev,
      {
        posterUrl: formProps.posterUrl,
        title: formProps.title,
        description: formProps.description,
        rating: parseInt(formProps.rating),
      },
    ]);
  };

  const searchTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const filteredTasks = tasks.filter(
      (task) =>  task?.isDone?.toString() == formProps.filter?.toString()
    );
    setTasks(filteredTasks);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
        }}
      >
        <form
          id="filterForm"
          onSubmit={searchTask}
          action="#"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input type="text" name="filter" placeholder="isDone (true or false)" />
          <button type="submit">Search</button>
        </form>
      </div>
      {tasks.map((task, index) => {
        return <TaskCard key={index} task={task} />;
      })}
      <div
        style={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <form
          id="form"
          onSubmit={addTask}
          action="#"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input type={"text"} name="title" placeholder={"title"} />
          <input type={"text"} name="description" placeholder={"description"} />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
};

export default TaskList;
