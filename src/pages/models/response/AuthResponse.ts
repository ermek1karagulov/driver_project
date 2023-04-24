import { IDriverModel } from "../../../api/drivers.interfaces";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IDriverModel;
}
