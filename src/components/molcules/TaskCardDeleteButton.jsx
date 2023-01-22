import React from "react";

export const TaskCardDeleteButton = ({ taskCard, taskCardList, setTaskCardList }) => {
  const deleteTaskCard = (id) => {
    setTaskCardList(taskCardList.filter((taskCard) => taskCard.id !== id));
  };

  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => deleteTaskCard(taskCard.id)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
