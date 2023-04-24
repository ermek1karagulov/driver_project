import { IDriverModel } from "../../api/drivers.interfaces";
import { createReducer } from "@reduxjs/toolkit";
import { fetchDriver } from "./action";
import { type } from "os";

interface IDiverReducerState {
  currentDriver: null | IDriverModel;
  isAuth: boolean;
  drivers: IDriverModel[];
}

const initialState: IDiverReducerState = {
  currentDriver: null,
  isAuth: false,
  drivers: [],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(fetchDriver, (state, { payload }) => {
    return {
      ...state,
      drivers: payload,
    };
  });
});
