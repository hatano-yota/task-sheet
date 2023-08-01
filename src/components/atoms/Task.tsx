import { Dispatch, SetStateAction } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BsArrowCounterclockwise, BsCheck2, BsListOl, BsTrash2 } from "react-icons/bs";
import { useTask } from "../../hooks/atoms/useTask";
import { TaskProps } from "../../types/Types";
import Button from "./Button";
import CommonDialog from "./CommonDialog";

type Props = {
  task: TaskProps;
  index: number;
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
};

export const Task = ({ task, index, taskList, setTaskList }: Props) => {
  const {
    isOpen,
    inputTitle,
    inputContent,
    handleOpen,
    handleClose,
    handleChangeTitle,
    handleChangeContent,
    handleSave,
    handleDelete,
    handleToggleIsDone,
  } = useTask({ task, taskList, setTaskList });

  return (
    <>
      <CommonDialog isOpen={isOpen}>
        <div className="flex justify-between">
          <input
            type="text"
            className="w-[70%] p-2 text-lg font-light bg-theme rounded border border-primary outline-none"
            placeholder="title"
            autoFocus
            value={inputTitle}
            onChange={handleChangeTitle}
          />
          <div className="flex gap-2">
            <Button variant="primary" Icon={BsListOl} />
            <Button
              variant="primary"
              onClick={handleToggleIsDone}
              Icon={task.isDone ? BsArrowCounterclockwise : BsCheck2}
              className={task.isDone ? "text-red-700" : "text-green-800"}
            />
            <Button
              variant="primary"
              onClick={handleDelete}
              Icon={BsTrash2}
              className="text-red-700"
            />
          </div>
        </div>
        <textarea
          name="content"
          id=""
          cols={30}
          rows={10}
          className="w-full mt-4 p-2 font-light bg-theme rounded border border-primary outline-none"
          placeholder="details"
          value={inputContent}
          onChange={handleChangeContent}
        />
        <div className="flex gap-2 mt-4">
          <Button variant="primary" label="cancel" onClick={handleClose} />
          <Button variant="primary" label="save" onClick={handleSave} />
        </div>
      </CommonDialog>
      <Draggable index={index} draggableId={task.draggableId}>
        {(provided) => (
          <div
            className="flex justify-between items-center py-2 mt-3 bg-white rounded shadow"
            key={task.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <button
              className="flex min-w-[50%] py-2 border-none cursor-pointer"
              onClick={handleOpen}
            >
              <p className="ml-2">
                {task.title.length > 14 ? `${task.title.slice(0, 14)}...` : task.title}
              </p>
            </button>
          </div>
        )}
      </Draggable>
    </>
  );
};
