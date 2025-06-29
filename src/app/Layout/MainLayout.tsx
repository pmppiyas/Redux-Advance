import Navbar from "@/components/pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
