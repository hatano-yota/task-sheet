import { Dispatch, SetStateAction } from "react";
import { DragElement } from "../../types/Types";

type Props = {
  taskCard: DragElement;
  taskCardList: DragElement[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
};

export const TaskCardDeleteButton = ({ taskCard, taskCardList, setTaskCardList }: Props) => {
  const deleteTaskCard = (id: string) => {
    setTaskCardList(taskCardList.filter((taskCard) => taskCard.id !== id));
  };

  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => deleteTaskCard(taskCard.id)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
