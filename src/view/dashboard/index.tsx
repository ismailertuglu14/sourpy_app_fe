import React, { useEffect, useState } from "react";
import { dashboardItems } from "../../product/data/dashboard";
import ApiTypeEnums from "../../product/enums/ApiTypeEnums";
import { getUserApis } from "./services/user_api_service";
import {
  useAppSelector,
  useAppDispatch,
} from "../../product/hooks/contextHooks";
import {
  setActivePage,
  setSidebarOpen,
} from "../../product/reducers/state_reducer";
import SvgClose from "../../product/icons/CloseIcon";
import SvgRightArrow from "../../product/icons/RightArrow";
import { ApiModel } from "../../product/models/Api";
import SidebarItem from "./components/SidebarItem";
import SidebarPresence from "./components/SidebarPresence";
const Dashboard: React.FC = () => {
  const [apis, setApis] = useState<[ApiModel]>();

  useEffect(() => {
    getUserApis("1").then((response) => {
      setApis(response);
    });
    console.log("calisti");
  }, [getUserApis]);

  const isSidebarOpen: boolean = useAppSelector((state) => state.state.sidebar);
  const activePage: any = useAppSelector((state) => state.state.activePage);
  const dispatch = useAppDispatch();

  console.log(isSidebarOpen);

  return (
    <div className="flex w-full ">
      {/* Sidebar Start */}
      <div
        className={`fixed h-screen w-52${
          isSidebarOpen ? " left-0" : " -left-48"
        }  bg-black pt-6 transition-all duration-700`}
      >
        <span
          className={`flex justify-center text-3xl  text-baseGreen whitespace-nowrap  font-normal  font-LecklerliOne cursor-pointer`}
        >
          Sourpy
        </span>
        {/* Sidebar Items Start */}

        {dashboardItems.map(({ title, component }, index) => (
          <SidebarItem key={index} title={title} component={component} />
        ))}
        {/* Sidebar Items End*/}

        {/* Open & Close Button Start */}
        <SidebarPresence />
        {/* Open & Close Button End */}
      </div>
      {/* Sidebar End*/}

      {/* Panel Start */}
      <div
        className={`w-full m-8 ${
          isSidebarOpen ? " ml-60 " : " ml-24 "
        } transition-margin duration-700`}
      >
        {activePage}
      </div>
      {/* Panel End */}
    </div>
  );
};

export default Dashboard;
