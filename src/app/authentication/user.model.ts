/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
export interface IUser {
  department: {
    id: number,
    name: string,
    shortName: string
  };
  email: string;
  id: number;
  lastName: string;
  name: string;
  password: string;
  reportsAllowed: boolean;
  role: "USER" | "ADMIN";
  status: string;
  token: string;
  username: string;
}
