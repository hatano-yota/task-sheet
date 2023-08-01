import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useTaskCards } from "../../hooks/templates/useTaskCards";
import TaskCard from "../organisms/TaskCard";

const TaskCards = () => {
  const { scrollRightRef, taskCardList, setTaskCardList, handleDragEnd, addTaskCard } =
    useTaskCards();

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable2" direction="horizontal">
        {(provided) => (
          <div className="taskCardsArea" {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCard={taskCard}
                index={index}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
              />
            ))}
            {provided.placeholder}
            <div ref={scrollRightRef} />
            <div className="fixed top-36 right-6">
              <button className="addTaskCardButton" onClick={addTaskCard}>
                +
              </button>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;
