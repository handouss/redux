import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TasksList from "./mock/tasks";
import Description from "./components/Description";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [_taskList, setTaskList] =useState(TasksList)
  return (
    <Routes>
      <Route path="/" element={<TaskList TasksList={_taskList} />} />
      <Route path="/:id" element={<Description TasksList={_taskList} setTaskList={setTaskList}/>} />
    </Routes>
  );
};

export default App;
