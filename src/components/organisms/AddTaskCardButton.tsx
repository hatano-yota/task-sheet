import { Dispatch, SetStateAction, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragElement } from "../../types/Types";

type Props = {
  taskCardList: DragElement[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
};

export const AddTaskCardButton = ({ taskCardList, setTaskCardList }: Props) => {
  const scrollRightRef = useRef<HTMLDivElement>(null);

  const addTaskCard = () => {
    const TaskCardId = uuidv4();
    setTaskCardList([...taskCardList, { id: TaskCardId, draggableId: `item-${TaskCardId}` }]);
    scrollRightRef?.current?.scrollIntoView();
  };

  return (
    <div className="addTaskCardButtonArea" ref={scrollRightRef}>
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
