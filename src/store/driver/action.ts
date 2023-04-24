import { createAction } from "@reduxjs/toolkit";
import { IDriverModel } from "../../api/drivers.interfaces";

export const fetchDriver = createAction<IDriverModel[]>(
  "driverReducer/fetchDriver"
);

export const logout = createAction("driverReducer/logout");
