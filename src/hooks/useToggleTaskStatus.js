import Swal from "sweetalert2";
import { updateTaskApi } from "../services/allApis";

const useToggleTaskStatus = (onStateChange) => {
  const handleToggle = async (id, completed) => {
    const result = await updateTaskApi(id, { completed: !completed });
    if (result.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Completed",
        text: "Task has been Updated successfully.",
        confirmButtonColor: "#16a34a",
      });
      onStateChange();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update task. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };
  return handleToggle;
};

export default useToggleTaskStatus;
