import { createContext } from "react";
import { USE_STATE_T, USER } from "../types";

export const UserContext = createContext({} as {
    userList: USER[],
    loadData: any,
    selectedUser: undefined | USER,
    setSelectedUser: USE_STATE_T
})