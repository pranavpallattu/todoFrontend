import { useEffect, useState } from "react";
import { getAllTasksApi } from "../services/allApis";

const useFetchTasks = () => {
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("desc");
  const [allTasks, setAllTasks] = useState(null);

  useEffect(() => {
    GetAllTasks();
  }, [status, sort]);

  const GetAllTasks = async () => {
    let query = "";
    if (status) query += `status=${status}`;
    if (sort) query += `${query ? "&" : ""}sort=${sort}`;

    const result = await getAllTasksApi(query);
    console.log(result);
    setAllTasks(result.data.tasks);
  };

  return {
    allTasks,
    status,
    sort,
    setStatus,
    setSort,
    GetAllTasks,
  };
};

export default useFetchTasks;
