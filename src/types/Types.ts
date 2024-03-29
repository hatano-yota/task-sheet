export type DragElement = {
  id: string;
  draggableId: string;
};

export type TaskProps = {
  id: string;
  draggableId: string;
  isDone: boolean;
  priority: Priority;
  title: string;
  content: string;
};

export type Priority = "high" | "medium" | "low";
