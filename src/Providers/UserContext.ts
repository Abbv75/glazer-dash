import { createContext } from "react";
import { USER } from "../types";

export const UserContext = createContext({} as {
    userList : USER[]
})