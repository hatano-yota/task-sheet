import React, { useState } from "react";
import { AddTaskCardButton } from "../organisms/AddTaskCardButton";
import { TaskCard } from "../organisms/TaskCard";

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([{ id: 0, draggableId: "item-00" }]);

  return (
    <div className="taskCardsArea">
      {taskCardList.map((taskCard) => (
        <TaskCard key={taskCard.id} />
      ))}

      <AddTaskCardButton taskCardList={taskCardList} setTaskCardList={setTaskCardList} />
    </div>
  );
};
