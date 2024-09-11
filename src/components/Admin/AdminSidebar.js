import React, { useState } from 'react';
import { HomeIcon, UserGroupIcon, UserPlusIcon, ShieldCheckIcon, ArrowLeftOnRectangleIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: HomeIcon,
  },
  {
    name: "New Employees",
    href: "/admin/newemployelist",
    icon: ArchiveBoxIcon,
  },
  {
    name: "All Employees",
    href: "/admin/allemployees",
    icon: UserGroupIcon,
  },
  {
    name: "Add Employee",
    href: "/admin/addemployee",
    icon: UserPlusIcon,
  },
  {
    name: "Attendance",
    href: "/admin/attendance",
    icon: ShieldCheckIcon,
  },
];

function AdminSidebar() {
  const [activeLink, setActiveLink] = useState(sidebarLinks[0].href); // Set initial active link
  const navigate = useNavigate();

  const handleLinkClick = (href) => {
    setActiveLink(href); // Update the active link state
    navigate(href); // Navigate to the corresponding page
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="sticky top-0 h-screen w-full flex flex-col justify-between border-r border-gray-200 bg-white px-1 py-5 xl:py-12 xl:px-2">
      {/* Logo Section */}
      <div className="text-center xl:text-left px-3 py-0">
        <div className="text-xl font-medium text-gray-900 xl:px-3 xl:text-2xl">
          <span className="block xl:hidden">AD</span>
          <span className="hidden xl:block">Admin</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="mt-8 h-full flex flex-col items-center gap-3 p-1 xl:items-stretch xl:px-3">
        {sidebarLinks.map((item) => (
          <button
            key={item.name}
            onClick={() => handleLinkClick(item.href)} // Apply onClick to change the active link
            className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all ${activeLink === item.href ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}>
            <item.icon
              aria-label={item.name}
              className={`h-5 stroke-2 ${activeLink === item.href ? "stroke-blue-700" : "stroke-gray-500 hover:stroke-blue-700"}`} />
            <span className="hidden xl:block text-base font-semibold">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      {/* User Information Section (for Desktop) */}
      <div className="hidden xl:flex items-center gap-2 px-3">
        <svg className="h-12 stroke-gray-700 size-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>
        <div>
          <div className="flex justify-between gap-2">
            <span className="text-base font-semibold text-gray-700">Admin</span>
            <div
              className="group flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 cursor-pointer transition-all hover:bg-gray-50"
              onClick={handleLogout}>
              <ArrowLeftOnRectangleIcon className="h-4 stroke-gray-700 group-hover:stroke-red-700" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-red-700">Logout</span>
            </div>
          </div>
          <span className="block text-sm font-medium text-gray-700">Logged in as Admin</span>
        </div>
      </div>

      {/* Mobile Logout Button */}
      <div className="p-1 xl:hidden">
        <button onClick={handleLogout} className="flex flex-col items-center rounded-md bg-gray-50 px-3 py-2">
          <ArrowLeftOnRectangleIcon className="h-5 stroke-gray-700" />
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
