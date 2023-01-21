import React from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const taskId = uuidv4();

    if (inputText === "") {
      return;
    }
    // カードを追加する
    setTaskList([...taskList, { id: taskId, draggableId: `task-${taskId}`, text: inputText }]);
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
