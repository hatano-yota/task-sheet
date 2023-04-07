import { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
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
