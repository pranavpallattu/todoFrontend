import Swal from "sweetalert2";
import { deleteTaskApi } from "../services/allApis";

const useDeleteTask = (onStateChange) => {
  const handleDelete = async (id) => {
    const result = await deleteTaskApi(id);
    if (result.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Task has been deleted successfully.",
        confirmButtonColor: "#16a34a",
      });
      onStateChange();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to delete task. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };
  return handleDelete;
};

export default useDeleteTask;
