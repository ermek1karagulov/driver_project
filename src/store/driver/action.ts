import { createAction } from "@reduxjs/toolkit";
import { IDriverModel } from "../../api/drivers.interfaces";

export const setDriver = createAction<{ driver: IDriverModel; token: string }>(
  "driverReducer/setDriver"
);

export const logout = createAction("driverReducer/logout");
