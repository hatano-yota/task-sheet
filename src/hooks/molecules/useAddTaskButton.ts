import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Priority, TaskProps } from "../../types/Types";

type UseAddTaskButton = (args: {
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
}) => {
  isOpen: boolean;
  isDone: boolean;
  inputTitle: string;
  inputContent: string;
  handleOpen: () => void;
  handleClose: () => void;
  handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSave: () => void;
  handleToggleIsDone: () => void;
};

export const useAddTaskButton: UseAddTaskButton = (args) => {
  const { taskList, setTaskList } = args;
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [priority, setPriority] = useState<Priority>("medium");
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");

  const handleOpen = () => {
    setInputTitle("");
    setInputContent("");
    setIsDone(false);
    setPriority("medium");
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(e.target.value);
  };

  const handleToggleIsDone = () => {
    setIsDone((prev) => !prev);
  };

  const handleSave = () => {
    const taskId = uuidv4();
    if (inputTitle.trim() === "") {
      return;
    }
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        isDone: isDone,
        priority: priority,
        title: inputTitle,
        content: inputContent,
      },
    ]);
    handleClose();
  };

  return {
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
  };
};
