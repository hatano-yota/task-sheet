import React from "react";
import { Task } from "../atoms/Task";

export const Tasks = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};
