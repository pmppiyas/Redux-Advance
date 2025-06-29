import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/Redux/features/task/taskSlice";
import { useAppSelector } from "@/Redux/hooks";

export default function TaskPage() {
  const task = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(task);
  console.log(filter);

  return (
    <div className="flex min-h-[calc(100vh-55px)]  items-center flex-col">
      <h2 className="text-3xl font-medium py-4">Task Page</h2>
      <div>
        {task.map((item) => (
          <TaskCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
