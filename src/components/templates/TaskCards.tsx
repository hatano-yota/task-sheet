import { useLayoutEffect, useRef, useState } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { DragElement } from "../../types/Types";
import { TaskCard } from "../organisms/TaskCard";

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState<DragElement[]>([
    { id: "0", draggableId: "item-00" },
  ]);

  // TODO *重複処理
  const reorder = (dragList: DragElement[], startIndex: number, endIndex: number) => {
    // 並び替える
    const remove = dragList.splice(startIndex, 1);
    dragList.splice(endIndex, 0, remove[0]);
  };
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  const scrollRightRef = useRef<HTMLDivElement>(null);

  const addTaskCard = () => {
    const TaskCardId = uuidv4();
    setTaskCardList([...taskCardList, { id: TaskCardId, draggableId: `item-${TaskCardId}` }]);
  };

  useLayoutEffect(() => {
    scrollRightRef?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [taskCardList]);

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
            <div ref={scrollRightRef} />
            <div className="fixed top-36 right-6">
              <button className="addTaskCardButton" onClick={addTaskCard}>
                +
              </button>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
