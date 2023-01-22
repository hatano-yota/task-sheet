import React from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTaskCardButton = ({ taskCardList, setTaskCardList }) => {
  const addTaskCard = () => {
    const TaskCardId = uuidv4()
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
