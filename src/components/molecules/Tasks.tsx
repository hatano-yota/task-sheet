import { Dispatch, SetStateAction } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { DragElement, TaskProps } from "../../types/Types";
import { Task } from "../atoms/Task";

type Props = {
  isFront: boolean;
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
};

export const Tasks = (props: Props) => {
  const { isFront, taskList, setTaskList } = props;
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
              {isFront
                ? taskList
                    .filter((task) => !task.isDone)
                    .map((task, index) => (
                      <div key={task.id}>
                        <Task
                          task={task}
                          index={index}
                          taskList={taskList}
                          setTaskList={setTaskList}
                        />
                      </div>
                    ))
                : taskList
                    .filter((task) => task.isDone)
                    .map((task, index) => (
                      <div key={task.id}>
                        <Task
                          task={task}
                          index={index}
                          taskList={taskList}
                          setTaskList={setTaskList}
                        />
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
