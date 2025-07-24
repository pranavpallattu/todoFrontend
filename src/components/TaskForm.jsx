import { useState } from "react";
import useAddTask from "../hooks/useAddTask";

const TaskForm = ({ onStateChange }) => {
  const [task, setTask] = useState({ title: "" });

  const handleAdd = useAddTask(onStateChange);

  return (
    <div>
      <form
        className="flex flex-wrap gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd(task.title);
          setTask({
            title: "",
          });
        }}
      >
        <input
          className="p-2 flex-1 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
          type="text"
          placeholder="Enter Task here"
          value={task.title}
          onChange={(e) => setTask({ title: e.target.value })}
        />
        <button
          type="submit"
          className="rounded-xl px-4 py-2 sm:px-6 sm:py-2 cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 w-full sm:w-auto"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
