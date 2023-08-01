import { Dispatch, SetStateAction } from "react";
import { BsArrowCounterclockwise, BsCheck2, BsListOl } from "react-icons/bs";
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
    isDone,
    inputTitle,
    inputContent,
    handleOpen,
    handleClose,
    handleChangeTitle,
    handleChangeContent,
    handleSave,
    handleToggleIsDone,
  } = useAddTaskButton({ taskList, setTaskList });

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
            <Button variant="primary" Icon={BsListOl} className="gap-0" />
            <Button
              variant="primary"
              onClick={handleToggleIsDone}
              Icon={isDone ? BsArrowCounterclockwise : BsCheck2}
              className={`gap-0 ${isDone ? "text-red-700" : "text-green-800"}`}
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
      <Button variant="primary" label="add a task" onClick={handleOpen} className="mb-2" />
    </>
  );
};
