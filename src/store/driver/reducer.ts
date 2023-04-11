import { IDriverModel } from "../../api/drivers.interfaces";
import { createReducer } from "@reduxjs/toolkit";

interface IDiverReducerState {
  currentDriver: null | IDriverModel;
  isAuth: boolean;
}

const initialState: IDiverReducerState = {
  currentDriver: null,
  isAuth: false,
};

export default createReducer(initialState, (builder) => {
  builder;
});
