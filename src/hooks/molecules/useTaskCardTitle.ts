import { ChangeEvent, useState } from "react";

type UseTaskCardTitle = {
  isClick: boolean;
  inputCardTitle: string;
  handleClick: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleBlur: () => void;
};

export const useTaskCardTitle = (): UseTaskCardTitle => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState(`Task card`);

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputCardTitle.trim() === "") {
      return;
    }
    setIsClick(false);
  };

  const handleBlur = () => {
    if (inputCardTitle.trim() === "") {
      return;
    }
    setIsClick(false);
  };

  return {
    isClick,
    inputCardTitle,
    handleClick,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};
