import React, { useState } from "react";
import { TaskCardTitle } from "../molcules/TaskCardTitle";
import { TaskCardDeleteButton } from "../molcules/TaskCardDeleteButton";
import { TaskAddInput } from "../molcules/TaskAddInput";
import { Tasks } from "../molcules/Tasks";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({ taskCard, index, taskCardList, setTaskCardList }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div className="taskCard" ref={provided.innerRef} {...provided.draggableProps}>
          <div className="taskHeader" {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCard={taskCard}
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};
