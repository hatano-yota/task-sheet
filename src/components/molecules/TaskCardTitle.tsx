import { useTaskCardTitle } from "../../hooks/molecules/useTaskCardTitle";

const TaskCardTitle = () => {
  const { isClick, inputCardTitle, handleClick, handleChange, handleSubmit, handleBlur } =
    useTaskCardTitle();

  return (
    <div onClick={handleClick} className="w-[30%] text-lg mb-3 cursor-pointer">
      {!isClick ? (
        <h3 className="p-1 whitespace-nowrap">{inputCardTitle}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className="w-44 p-1 bg-theme rounded border-none outline-none"
            type="text"
            value={inputCardTitle}
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={15}
          />
        </form>
      )}
    </div>
  );
};

export default TaskCardTitle;
