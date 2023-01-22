import React from "react";
import { AddTaskCardButton } from "../organisms/AddTaskCardButton";
import { TaskCard } from "../organisms/TaskCard";

export const TaskCards = () => {
  return (
    <div className="taskCardsArea">
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};
