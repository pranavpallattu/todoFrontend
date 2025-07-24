import React, { useState } from "react";
import useDeleteTask from "../hooks/useDeleteTask";
import useToggleTaskStatus from "../hooks/useToggleTaskStatus";
import useUpdateTaskTitle from "../hooks/useUpdateTaskTitle";

const TaskItem = ({ data, onStateChange }) => {
  const [show, setShow] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data.title);

  const handleDelete = useDeleteTask(onStateChange);
  const handleToggle = useToggleTaskStatus(onStateChange);
  const handleEdit = useUpdateTaskTitle(onStateChange);

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-md hover:shadow-lg">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={data._id}
          name="title"
          value="tasktitle"
          checked={data.completed}
          onChange={() => handleToggle(data._id, data.completed)}
          className="h-4 w-4 cursor-pointer accent-indigo-600 transition duration-150"
        />
        {show ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border-b border-indigo-400 outline-none  px-1 py-[1px] text-slate-800"
          />
        ) : (
          <label className="text-lg font-medium" htmlFor="title">
            {data.title}
          </label>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={
            show
              ? () => handleEdit(data._id, editedTitle, setShow)
              : () => setShow(true)
          }
          className="text-white cursor-pointer rounded-md bg-emerald-600 hover:bg-emerald-700 px-3 py-1"
        >
          {show ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => handleDelete(data._id)}
          className="text-white rounded-md cursor-pointer px-3 py-1 bg-rose-500 hover:bg-rose-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
