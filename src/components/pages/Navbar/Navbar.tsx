import { useState } from "react";
import { Link } from "react-router-dom";
// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { ModeToggle } from "@/components/mode-toggle";

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const links = (
    <>
      <Link
        to="/"
        className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
      >
        home
      </Link>

      <Link
        to="shadcn"
        className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
      >
        Shadcn
      </Link>

      <Link
        to="/task"
        className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
      >
        task
      </Link>

      <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
        shop
      </li>
    </>
  );
  return (
    <nav className="flex items-center justify-between w-full relative dark:bg-slate-900 bg-white rounded-full px-[10px] py-[8px]">
      {/* logo */}
      <img
        src="https://i.ibb.co/0BZfPq6/darklogo.png"
        alt="logo"
        className="w-[55px] "
      />

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        {links}
      </ul>

      {/* action buttons */}
      <div className="items-center gap-[10px] flex">
        <ModeToggle></ModeToggle>
        <button className="py-[7px] text-[1rem] px-[16px] dark:text-[#abc2d3] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden">
          Sign in
        </button>
        <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
          Sign up
        </button>

        <CiMenuFries
          className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen ? "block" : "hidden"
        } md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300 z-1 `}
      >
        <div className="relative mb-5">
          <input
            className="py-1.5 pr-4 dark:bg-slate-800 dark:text-[#abc2d3] dark:border-slate-900/50 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute dark:text-slate-400 top-[8px] left-3 text-gray-500 text-[1.3rem]" />
        </div>
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          {links}
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
