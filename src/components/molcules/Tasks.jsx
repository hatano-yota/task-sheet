import React from "react";
import { Task } from "../atoms/Task";

export const Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>
          <Task task={task} taskList={taskList} setTaskList={setTaskList} />
        </div>
      ))}
    </div>
  );
};
