import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDownIcon } from "lucide-react";

import { useAppDispatch } from "@/Redux/hooks";
import { addTask } from "@/Redux/features/task/taskSlice";

export function AddTaskModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<ITask["status"]>("pending");
  const [priority, setPriority] = useState<ITask["priority"]>("low");
  const [dueDate, setDueDate] = useState("");
  const [openCalendar, setOpenCalendar] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dueDate) return alert("Please select a due date");

    const newTask = {
      title,
      description,
      status,
      priority,
      deuDate: dueDate.toISOString(),
      createdAt: new Date().toISOString(),
    };

    console.log("From form=>", newTask);
    dispatch(addTask(newTask));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 flex flex-wrap gap-8 items-center justify-center"
    >
      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="status">Status</Label>
        <Select value={status} onValueChange={(value) => setStatus(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="priority">Priority</Label>
        <Select
          value={priority}
          onValueChange={(value) => setPriority(value as ITask["priority"])}
        >
          <SelectTrigger>
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="dueDate">Due Date</Label>
        <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-48 justify-between font-normal"
            >
              {dueDate ? dueDate.toLocaleDateString() : "Select date"}
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={dueDate}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDueDate(date);
                setOpenCalendar(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
