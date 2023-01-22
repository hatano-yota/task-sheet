import React, { useState } from "react";
import { TaskCardTitle } from "../molcules/TaskCardTitle";
import { TaskCardDeleteButton } from "../molcules/TaskCardDeleteButton";
import { TaskAddInput } from "../molcules/TaskAddInput";
import { Tasks } from "../molcules/Tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard">
      <div className="taskHeader">
        <TaskCardTitle />
        <TaskCardDeleteButton />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
