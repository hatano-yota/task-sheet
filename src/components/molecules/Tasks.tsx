import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { Task } from "../atoms/Task";
import { DragElement, TaskProps } from "../../types/Types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
};

export const Tasks = ({ taskList, setTaskList }: Props) => {
  const reorder = (dragList: DragElement[], startIndex: number, endIndex: number) => {
    // 並び替える
    const remove = dragList.splice(startIndex, 1);
    dragList.splice(endIndex, 0, remove[0]);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
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
