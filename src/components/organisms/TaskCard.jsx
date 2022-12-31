import React from "react";
import { TaskCardTitle } from "../molcules/TaskCardTitle";
import { TaskCardDeleteButton } from "../molcules/TaskCardDeleteButton";
import { TaskAddInput } from "../molcules/TaskAddInput";
import { Tasks } from "../molcules/Tasks";

export const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  );
};
