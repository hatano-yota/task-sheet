import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Priority, TaskProps } from "../../types/Types";

type UseTask = (args: {
  task: TaskProps;
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
}) => {
  isOpen: boolean;
  inputTitle: string;
  inputContent: string;
  handleOpen: () => void;
  handleClose: () => void;
  handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSave: () => void;
  handleDelete: () => void;
  handleToggleIsDone: () => void;
};

export const useTask: UseTask = (args) => {
  const { task, taskList, setTaskList } = args;
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(task.isDone);
  const [priority, setPriority] = useState<Priority>(task.priority);
  const [inputTitle, setInputTitle] = useState<string>(task.title);
  const [inputContent, setInputContent] = useState<string>(task.content);

  const handleOpen = () => {
    setInputTitle(task.title);
    setInputContent(task.content);
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

  const handleDelete = () => {
    setTaskList(taskList.filter((t) => t.id !== task.id));
    handleClose();
  };

  const handleToggleIsDone = () => {
    setIsDone((prev) => !prev);
  };

  const handleSave = () => {
    if (inputTitle.trim() === "") {
      return;
    }
    const updateTaskList = taskList.map((t) =>
      t.id === task.id
        ? {
            ...t,
            isDone: isDone,
            priority: priority,
            title: inputTitle,
            content: inputContent,
          }
        : t,
    );
    setTaskList(updateTaskList);
    handleClose();
  };

  return {
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
  };
};
