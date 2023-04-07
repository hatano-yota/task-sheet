import { Draggable } from "react-beautiful-dnd";
import { TaskProps } from "../../types/Types";
import { Dispatch, SetStateAction } from "react";

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
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
