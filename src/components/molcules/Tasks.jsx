import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "../atoms/Task";

export const Tasks = ({ taskList, setTaskList }) => {
  const reorder = (dragList, startIndex, endIndex) => {
    // 並び替える
    const remove = dragList.splice(startIndex, 1);
    dragList.splice(endIndex, 0, remove[0]);
  };

  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
