import Link from "next/link";
import React from "react";
import { MdSwitchAccount } from "react-icons/md";
import SidebarCart from "./SidebarCart";

const Sidebar = () => {
  return (
    <div className="fixed top-60 right-2 z-20 flex flex-col gap-1">
      {/* User account */}
      <Link
        className="bg-gray-100 w-16 h-[70px] rounded-md flex flex-col group overflow-hidden gap-1 text-black/60 items-center justify-center shadow-md shadow-green-200"
        href={"/cart"}
      >
        <div className="flex items-center justify-center">
          <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-300" />
          <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-12 transition-transform duration-300" />
        </div>
        <p className="text-xs font-medium">Profile</p>
      </Link>

      <SidebarCart />
    </div>
  );
};

export default Sidebar;
