import { Dispatch, SetStateAction } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BsClipboard2, BsClipboard2Check, BsTrash2 } from "react-icons/bs";
import { useTaskCard } from "../../hooks/organisms/useTaskCard";
import { DragElement } from "../../types/Types";
import Button from "../atoms/Button";
import AddTaskButton from "../molecules/AddTaskButton";
import TaskCardTitle from "../molecules/TaskCardTitle";
import Tasks from "../molecules/Tasks";

type Props = {
  index: number;
  taskCard: { id: string; draggableId: string };
  taskCardList: { id: string; draggableId: string }[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
};

const TaskCard = (props: Props) => {
  const { index, taskCard, taskCardList, setTaskCardList } = props;
  const { isFront, taskList, setTaskList, handleToggleIsFront, deleteTaskCard } = useTaskCard({
    taskCard,
    taskCardList,
    setTaskCardList,
  });

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="min-w-[250px] m-2 rounded bg-theme"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="px-6 pt-2 pb-4" {...provided.dragHandleProps}>
            <div className="flex justify-between">
              <TaskCardTitle />
              <div className="flex gap-1">
                <Button
                  variant="primary"
                  onClick={handleToggleIsFront}
                  Icon={isFront ? BsClipboard2 : BsClipboard2Check}
                />
                <Button
                  variant="primary"
                  onClick={deleteTaskCard}
                  Icon={BsTrash2}
                  className="text-red-700"
                />
              </div>
            </div>
            <AddTaskButton taskList={taskList} setTaskList={setTaskList} />
            <Tasks isFront={isFront} taskList={taskList} setTaskList={setTaskList} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
