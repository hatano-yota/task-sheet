import { Dispatch, SetStateAction } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskProps } from "../../types/Types";

type Props = {
  task: TaskProps;
  index: number;
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
};

export const Task = ({ task, index, taskList, setTaskList }: Props) => {
  const handleDelete = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="flex justify-between items-center py-4 mt-3 bg-white rounded shadow"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="ml-3">{task.title}</p>
          <button className="mr-2 border-none cursor-pointer" onClick={() => handleDelete(task.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
