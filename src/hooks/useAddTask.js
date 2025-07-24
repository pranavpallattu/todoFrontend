import Swal from "sweetalert2";
import { addTaskApi } from "../services/allApis";
import { checkValidData } from "../utils/validate";

const useAddTask = (onStateChange) => {
  const handleAdd = async (title) => {
    const errorMessage = checkValidData(title);
    if (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: errorMessage,
        confirmButtonColor: "#d33",
      });
      return errorMessage;
    }
    const result = await addTaskApi({ title });
    if (result.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Task Added!",
        text: "Your task was added successfully.",
        confirmButtonColor: "#16a34a", // optional green
      });
      onStateChange();
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };
  return handleAdd;
};

export default useAddTask;
