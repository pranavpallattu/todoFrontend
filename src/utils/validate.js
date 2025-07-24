export const checkValidData = (title) => {
  if (!title || title.trim() === "") return "Task title is required";

  return null;
};
