import { FC, useState } from "react";
import { IDashboardItemModel } from "../../../product/data/dashboard";
import { useAppDispatch } from "../../../product/hooks/contextHooks";
import { setActivePage } from "../../../product/reducers/state_reducer";

const SidebarItem = ({ title, component }: IDashboardItemModel) => {
  const dispatch = useAppDispatch();

  return (
    <p
      className={`group flex justify-center text-left py-2 my-4 items-center p-2 text-base font-normal text-white hover:bg-white cursor-pointer`}
      onClick={() => {
        component != null
          ? dispatch(setActivePage(component))
          : console.log("asd");
      }}
    >
      <div className="text-left w-1/2  group-hover:text-black">{title}</div>
    </p>
  );
};

export default SidebarItem;
