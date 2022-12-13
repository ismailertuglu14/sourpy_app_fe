import { FC, useState } from "react";

import { dashboardItems } from "../../../product/data/dashboard";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../product/hooks/contextHooks";
import { setActivePage } from "../../../product/reducers/state_reducer";

const SidebarItems = () => {
  const dispatch = useAppDispatch();

  const isSidebarOpen = useAppSelector((state) => state.state.sidebar);
  const activePage = useAppSelector((state) => state.state.activePage);

  return (
    <>
      {dashboardItems.map(({ title, icon, component }) => (
        <div
          className={`group flex  justify-center text-left pl-8 my-4 items-center p-2 text-base font-normal text-white hover:bg-gray-500 cursor-pointer
          ${component == activePage ? " bg-gray-800 " : "  "} `}
          onClick={() => {
            component != null
              ? dispatch(setActivePage(component))
              : console.log("asd");
          }}
        >
          <p
            className={`absolute transition-all duration-300 ${
              isSidebarOpen
                ? " transition-all duration-1000 left-8 "
                : " transition-all duration-1000 left-40 "
            }`}
          >
            {icon}
          </p>
          <p
            className={`text-left w-1/2 transition-all duration-[1500ms] ${
              isSidebarOpen ? " opacity-1 " : " duration-300 opacity-0"
            }`}
          >
            {title}
          </p>
        </div>
      ))}
    </>
  );
};

export default SidebarItems;
