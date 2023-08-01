import { Dispatch, SetStateAction, useState } from "react";
import { DragElement, TaskProps } from "../../types/Types";

type UseTaskCard = (args: {
  taskCard: { id: string; draggableId: string };
  taskCardList: { id: string; draggableId: string }[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
}) => {
  isFront: boolean;
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
  handleToggleIsFront: () => void;
  deleteTaskCard: () => void;
};

export const useTaskCard: UseTaskCard = (args) => {
  const { taskCard, taskCardList, setTaskCardList } = args;
  const [isFront, setIsFront] = useState(true);
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const handleToggleIsFront = () => {
    setIsFront((prev) => !prev);
  };
  const deleteTaskCard = () => {
    setTaskCardList(taskCardList.filter((tc) => tc.id !== taskCard.id));
  };

  return {
    isFront,
    taskList,
    setTaskList,
    handleToggleIsFront,
    deleteTaskCard,
  };
};
