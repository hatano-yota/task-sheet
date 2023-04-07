import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskProps } from "../../types/Types";

type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
};

export const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }: Props) => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskId = uuidv4();

    if (inputText === "") {
      return;
    }
    // カードを追加する
    setTaskList([...taskList, { id: taskId, draggableId: `task-${taskId}`, text: inputText }]);
    setInputText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="add a task"
          maxLength={15}
          autoFocus
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
