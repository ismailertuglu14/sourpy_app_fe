import React, { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../product/hooks/contextHooks";
import { ApiModel } from "../../product/models/Api";
import SidebarItems from "./components/SidebarItems";
import SidebarPresence from "./components/SidebarPresence";
import SidebarBottom from "./components/SidebarBottom";
import SidebarLogo from "./components/SidebarLogo";
const Dashboard: React.FC = () => {
  const [apis, setApis] = useState<[ApiModel]>();

  // useEffect(() => {
  //   getUserApis("1").then((response) => {
  //     setApis(response);
  //   });
  //   console.log("calisti");
  // }, [getUserApis]);

  const isSidebarOpen: boolean = useAppSelector((state) => state.state.sidebar);
  const activePage: any = useAppSelector((state) => state.state.activePage);
  const dispatch = useAppDispatch();

  console.log(isSidebarOpen);

  return (
    <div className="flex w-full ">
      {/* Sidebar Start */}
      <div
        className={`fixed h-screen w-52${
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
