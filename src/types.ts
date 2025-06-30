export type ITask = {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  deuDate: string; // ISO date string
  createdAt: string; // ISO date string
};
