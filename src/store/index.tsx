import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import driver from "./driver/reducer";

export const store = configureStore({
  reducer: {
    driver,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
