import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
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
          <div
            className={cn("size-3 rounded-full ", {
              "bg-green-500": item.priority === "high",
              "bg-orange-500": item.priority === "medium",
              "bg-yellow-500": item.priority === "low",
            })}
          ></div>
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
