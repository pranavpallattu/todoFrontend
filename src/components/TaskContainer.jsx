import Shimmer from "./Shimmer";
import TaskItem from "./TaskItem";

const TaskContainer = ({ allTasks, onStateChange }) => {
  if (!allTasks) return <Shimmer />;
  return allTasks?.length == 0 ? (
    <p className="text-center text-2xl text-slate-500">No tasks available</p>
  ) : (
    <div className="flex flex-col gap-4 overflow-y-scroll scroll-smooth py-2 px-1">
      {allTasks.map((item) => (
        <TaskItem key={item._id} data={item} onStateChange={onStateChange} />
      ))}
    </div>
  );
};

export default TaskContainer;
