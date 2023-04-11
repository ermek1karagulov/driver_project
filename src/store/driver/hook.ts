import { useAppSelector } from "..";

export const useIsAuth = () => useAppSelector((state) => state.driver);
export const useCurrentUser = () => useAppSelector((state) => state.driver);
