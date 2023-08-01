import { Dispatch, RefObject, SetStateAction, useLayoutEffect, useRef, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { DragElement } from "../../types/Types";

type UseTaskCards = {
  scrollRightRef: RefObject<HTMLDivElement>;
  taskCardList: DragElement[];
  setTaskCardList: Dispatch<SetStateAction<DragElement[]>>;
  handleDragEnd: (result: DropResult) => void;
  addTaskCard: () => void;
};

export const useTaskCards = (): UseTaskCards => {
  const [taskCardList, setTaskCardList] = useState<DragElement[]>([
    { id: "0", draggableId: "item-00" },
  ]);
  const [refFlag, setRefFlag] = useState(false);
  const scrollRightRef = useRef<HTMLDivElement>(null);

  // TODO *重複処理
  const reorder = (dragList: DragElement[], startIndex: number, endIndex: number) => {
    // 並び替える
    const remove = dragList.splice(startIndex, 1);
    dragList.splice(endIndex, 0, remove[0]);
  };
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  const addTaskCard = () => {
    const TaskCardId = uuidv4();
    setTaskCardList([...taskCardList, { id: TaskCardId, draggableId: `item-${TaskCardId}` }]);
    setRefFlag((prev) => !prev);
  };

  useLayoutEffect(() => {
    scrollRightRef?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [refFlag]);

  return {
    scrollRightRef,
    taskCardList,
    setTaskCardList,
    handleDragEnd,
    addTaskCard,
  };
};
