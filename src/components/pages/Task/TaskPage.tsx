import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/Redux/features/task/taskSlice";
import { useAppSelector } from "@/Redux/hooks";

export default function TaskPage() {
  const task = useAppSelector(selectTasks);
  console.log(task);

  return (
    <div className="flex min-h-[calc(100vh-55px)]  items-center flex-col space-y-4">
      <h2 className="text-3xl font-medium ">Task Page</h2>

      <div>
        <AddTaskModal />
        <hr></hr>
      </div>

      <div>
        {task.map((item) => (
          <TaskCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
