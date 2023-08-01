import { Dispatch, SetStateAction, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BsClipboard2, BsClipboard2Check, BsTrash2 } from "react-icons/bs";
import { DragElement, TaskProps } from "../../types/Types";
import Button from "../atoms/Button";
import { AddTaskButton } from "../molecules/AddTaskButton";
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
  const [isFront, setIsFront] = useState(true);
  const handleToggleIsFront = () => {
    setIsFront((prev) => !prev);
  };
  const deleteTaskCard = () => {
    setTaskCardList(taskCardList.filter((tc) => tc.id !== taskCard.id));
  };

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="min-w-[250px] px-6 pt-2 pb-4 m-2 rounded bg-theme"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="flex justify-between" {...provided.dragHandleProps}>
            <TaskCardTitle index={index} />
            <div className="flex gap-1">
              <Button
                variant="primary"
                onClick={handleToggleIsFront}
                Icon={isFront ? BsClipboard2 : BsClipboard2Check}
                className="gap-0"
              />
              <Button
                variant="primary"
                onClick={deleteTaskCard}
                Icon={BsTrash2}
                className="gap-0 text-red-700"
              />
            </div>
          </div>
          <AddTaskButton taskList={taskList} setTaskList={setTaskList} />
          <Tasks isFront={isFront} taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};
