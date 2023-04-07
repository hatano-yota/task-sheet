import { v4 as uuidv4 } from "uuid";
import { DragElement } from "../../types/Types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  taskCardList: DragElement[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
};

export const AddTaskCardButton = ({ taskCardList, setTaskCardList }: Props) => {
  const addTaskCard = () => {
    const TaskCardId = uuidv4();
    setTaskCardList([...taskCardList, { id: TaskCardId, draggableId: `item-${TaskCardId}` }]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
