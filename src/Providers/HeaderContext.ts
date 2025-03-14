import { createContext } from "react";
import { USE_STATE_T } from "../types";

export const HeaderContext = createContext({}as{
    navigate : any,
    isNavbarOpened : boolean,
    setisNavbarOpened : USE_STATE_T,
})