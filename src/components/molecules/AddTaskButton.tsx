import { Dispatch, SetStateAction } from "react";
import { useAddTaskButton } from "../../hooks/molecules/useAddTaskButton";
import { TaskProps } from "../../types/Types";
import Button from "../atoms/Button";
import CommonDialog from "../atoms/CommonDialog";

type Props = {
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
};

export const AddTaskButton = (props: Props) => {
  const { taskList, setTaskList } = props;
  const {
    isOpen,
    inputTitle,
    inputContent,
    handleOpen,
    handleClose,
    handleChangeTitle,
    handleChangeContent,
    handleSubmit,
  } = useAddTaskButton({ taskList, setTaskList });

  return (
    <>
      <CommonDialog isOpen={isOpen}>
        <div>
          <input
            type="text"
            className="block w-[80%] p-2 text-lg font-light bg-theme rounded border border-primary outline-none"
            placeholder="title"
            autoFocus
            value={inputTitle}
            onChange={handleChangeTitle}
          />
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
        </div>
        <div className="flex gap-2 mt-4">
          <Button variant="primary" label="cancel" onClick={handleClose} />
          <Button variant="primary" label="save" onClick={handleSubmit} />
        </div>
      </CommonDialog>
      <Button variant="primary" label="add a task" onClick={handleOpen} className="mb-2" />
    </>
  );
};
