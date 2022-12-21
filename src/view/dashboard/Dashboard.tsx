import React, { useEffect, useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../product/hooks/contextHooks";
import SidebarItems from "./components/SidebarItems";
import SidebarPresence from "./components/SidebarPresence";
import SidebarBottom from "./components/SidebarBottom";
import SidebarLogo from "./components/SidebarLogo";
import { IApiModel } from "../../product/models/Api";
const Dashboard: React.FC = () => {
  const isSidebarOpen: boolean = useAppSelector((state) => state.state.sidebar);
  const activePage: any = useAppSelector((state) => state.state.activePage);

  return (
    <div className="flex w-full min-h-screen bg-dashboardGray ">
      {/* Sidebar Start */}
      <div
        className={`fixed h-screen w-52 ${
          isSidebarOpen ? " left-0" : " -left-36"
        }  bg-black pt-6 transition-all duration-700`}
      >
        <SidebarLogo />
        <SidebarItems />
        <SidebarPresence />
        <SidebarBottom />
      </div>
      {/* Sidebar End*/}

      {/* Panel Start */}
      <div
        className={`flex flex-col w-full m-8 ${
          isSidebarOpen ? " pl-52 " : " pl-40 "
        } transition-all duration-700 `}
      >
        {activePage}
      </div>
      {/* Panel End */}
    </div>
  );
};

export default Dashboard;
