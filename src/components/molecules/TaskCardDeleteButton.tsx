import { Dispatch, SetStateAction } from "react";
import { DragElement } from "../../types/Types";

type Props = {
  taskCard: DragElement;
  taskCardList: DragElement[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
};

export const TaskCardDeleteButton = ({ taskCard, taskCardList, setTaskCardList }: Props) => {
  const deleteTaskCard = () => {
    setTaskCardList(taskCardList.filter((tc) => tc.id !== taskCard.id));
  };

  return (
    <div>
      <button
        className="text-base text-red-700 bg-theme border-none cursor-pointer"
        onClick={deleteTaskCard}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
