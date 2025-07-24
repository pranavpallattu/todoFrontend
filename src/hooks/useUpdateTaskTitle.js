import Swal from "sweetalert2";
import { updateTaskApi } from "../services/allApis";
import { checkValidData } from "../utils/validate";

const useUpdateTaskTitle = (onStateChange) => {
  const handleEdit = async (id, editedTitle, setShow) => {
    const errorMessage = checkValidData(editedTitle);
    if (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: errorMessage,
        confirmButtonColor: "#d33", // red
      });
      return errorMessage;
    }
    const result = await updateTaskApi(id, { title: editedTitle });
    if (result.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Completed",
        text: "Task has been Updated successfully.",
        confirmButtonColor: "#16a34a",
      });
      setShow(false);
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
  return handleEdit;
};

export default useUpdateTaskTitle;
