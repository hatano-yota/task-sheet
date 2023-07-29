import { Dispatch, SetStateAction, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { DragElement, TaskProps } from "../../types/Types";
import { AddTaskButton } from "../molecules/AddTaskButton";
import { TaskCardDeleteButton } from "../molecules/TaskCardDeleteButton";
import { TaskCardTitle } from "../molecules/TaskCardTitle";
import { Tasks } from "../molecules/Tasks";

type Props = {
  index: number;
  taskCard: { id: string; draggableId: string };
  taskCardList: { id: string; draggableId: string }[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
};

export const TaskCard = ({ taskCard, index, taskCardList, setTaskCardList }: Props) => {
  const [taskList, setTaskList] = useState<TaskProps[]>([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="min-w-[250px] px-6 py-2 m-2 rounded bg-theme"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="flex justify-between" {...provided.dragHandleProps}>
            <TaskCardTitle index={index} />
            <TaskCardDeleteButton
              taskCard={taskCard}
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
          <AddTaskButton taskList={taskList} setTaskList={setTaskList} />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};
