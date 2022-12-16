import { createSlice } from "@reduxjs/toolkit";
import IUserModel from "../models/User";

interface IInitialState {
  user?: IUserModel;
}

const initialState: IInitialState = {
  user: undefined,
};

export const stateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = stateSlice.actions;

export default stateSlice.reducer;
