import { Dispatch, SetStateAction, useState } from "react";
import { Priority, TaskProps } from "../../types/Types";
import Button from "../atoms/Button";
import CommonDialog from "../atoms/CommonDialog";

type Props = {
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
};

export const AddTaskButton = (props: Props) => {
  const { taskList, setTaskList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [priority, setPriority] = useState<Priority>("medium");
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDetails, setInputDetails] = useState<string>("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const taskId = uuidv4();

  //   if (inputText === "") {
  //     return;
  //   }
  //   // カードを追加する
  //   setTaskList([...taskList, { id: taskId, draggableId: `task-${taskId}`, text: inputText }]);
  //   setInputText("");
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputText(e.target.value);
  // };

  return (
    <>
      <CommonDialog isOpen={isOpen}>
        <div></div>
      </CommonDialog>
      <Button variant="primary" label="add a task" onClick={handleOpen} />
    </>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       className="taskAddInput"
    //       type="text"
    //       placeholder="add a task"
    //       maxLength={15}
    //       autoFocus
    //       onChange={handleChange}
    //       value={inputText}
    //     />
    //   </form>
    // </div>
  );
};
