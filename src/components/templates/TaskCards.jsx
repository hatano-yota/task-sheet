import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskCardButton } from "../organisms/AddTaskCardButton";
import { TaskCard } from "../organisms/TaskCard";

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([{ id: "0", draggableId: "item-00" }]);

  // 要修正 *重複処理
  const reorder = (dragList, startIndex, endIndex) => {
    // 並び替える
    const remove = dragList.splice(startIndex, 1);
    dragList.splice(endIndex, 0, remove[0]);
  };
  const handleDragEnd = (result) => {
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable2" direction="horizontal">
        {(provided) => (
          <div className="taskCardsArea" {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCard={taskCard}
                index={index}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
              />
            ))}
            {provided.placeholder}

            <AddTaskCardButton taskCardList={taskCardList} setTaskCardList={setTaskCardList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
