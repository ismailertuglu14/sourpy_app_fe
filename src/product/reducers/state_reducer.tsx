import { createSlice } from "@reduxjs/toolkit";
import { lazy, ReactNode } from "react";
import { RootState } from "../../core/redux/store";
import Login from "../../view/authentication/login";
import Overview from "../../view/dashboard/features/overview/Overview";
interface IInitialState {
  sidebar: boolean;
  activePage: any;
}

const initialState: IInitialState = {
  sidebar: true,
  activePage: <Overview />,
};

export const stateSlice = createSlice({
  name: "state1",
  initialState,
  reducers: {
    setSidebarOpen: (state) => {
      state.sidebar = !state.sidebar;
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setSidebarOpen, setActivePage } = stateSlice.actions;

export default stateSlice.reducer;
