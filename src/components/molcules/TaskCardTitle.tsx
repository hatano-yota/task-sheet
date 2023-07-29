import { useState } from "react";

type Props = {
  index: number;
};

export const TaskCardTitle = (props: Props) => {
  const { index } = props;
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState(`task card ${index + 1}`);

  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClick(false);
  };
  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {!isClick ? (
        <h3>{inputCardTitle}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            type="text"
            value={inputCardTitle}
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={15}
          ></input>
        </form>
      )}
    </div>
  );
};
