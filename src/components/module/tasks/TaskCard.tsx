import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface TaskCardProps {
  item: ITask;
}

export default function TaskCard({ item }: TaskCardProps) {
  console.log(item);
  return (
    <div className="flex gap-10 border-2 px-4 py-2 rounded-lg">
      <div>
        <div className="flex items-center  gap-2">
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          <h3>{item.title}</h3>
        </div>
        <h6>{item.description}</h6>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Trash2 size={20} />
        <Checkbox />
      </div>
    </div>
  );
}
