import type { RootState } from "@/Redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
interface initialState {
  task: ITask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: initialState = {
  task: [],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "deuDate" | "priority" | "status" | "createdAt"
>;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      console.log("From Task SLice ", taskData);
      state.task.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.task;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
