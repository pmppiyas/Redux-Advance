import MainLayout from "@/app/Layout/MainLayout";
import Home from "@/components/pages/Home/Home";
import Shadcn from "@/components/pages/Shadcn/Shadcn";
import TaskPage from "@/components/pages/Task/taskPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/shadcn",
        element: <Shadcn></Shadcn>,
      },
      {
        path: "/task",
        element: <TaskPage />,
      },
    ],
  },
]);

export default router;
