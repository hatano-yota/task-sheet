import { Dispatch, SetStateAction, useState } from "react";
import { TaskCardTitle } from "../molcules/TaskCardTitle";
import { TaskCardDeleteButton } from "../molcules/TaskCardDeleteButton";
import { TaskAddInput } from "../molcules/TaskAddInput";
import { Tasks } from "../molcules/Tasks";
import { Draggable } from "react-beautiful-dnd";
import { DragElement, TaskProps } from "../../types/Types";

type Props = {
  index: number;
  taskCard: { id: string; draggableId: string };
  taskCardList: { id: string; draggableId: string }[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
};

export const TaskCard = ({ taskCard, index, taskCardList, setTaskCardList }: Props) => {
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskProps[]>([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div className="taskCard" ref={provided.innerRef} {...provided.draggableProps}>
          <div className="taskHeader" {...provided.dragHandleProps}>
            <TaskCardTitle index={index} />
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
