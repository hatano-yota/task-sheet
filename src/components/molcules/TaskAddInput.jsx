import React from "react";

export const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // カードを追加する
    setTaskList([...taskList, { text: inputText }]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  
  console.log(taskList);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="add a task"
          maxLength="15"
          autoFocus
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
