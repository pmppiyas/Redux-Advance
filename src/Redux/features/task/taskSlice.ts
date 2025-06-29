import type { RootState } from "@/Redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  task: ITask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: initialState = {
  task: [
    {
      id: 1,
      title: "Sample Task",
      description: "This is a sample task description.",
      status: "pending",
      priority: "medium",
      deuDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.task;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export default taskSlice.reducer;
