import TaskForm from "./TaskForm";
import FilterBar from "./FilterBar";
import TaskContainer from "./TaskContainer";
import useFetchTasks from "../hooks/useFetchTasks";

const Body = () => {
  const { allTasks, status, sort, setStatus, setSort, GetAllTasks } = useFetchTasks();

  return (
   <div className="w-[95%] sm:w-[500px] md:w-[600px] lg:w-[700px] max-w-full h-[90vh] max-h-[650px] bg-slate-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl flex flex-col gap-4">
  <h1 className="text-center text-2xl font-bold text-indigo-800 mb-4">Task Manager</h1>
  <TaskForm onStateChange={GetAllTasks} />
  <FilterBar status={status} setStatus={setStatus} sort={sort} setSort={setSort} />
  <div className="flex-1 overflow-y-auto">
    <TaskContainer allTasks={allTasks} onStateChange={GetAllTasks} />
  </div>
</div>

  );
};

export default Body;
