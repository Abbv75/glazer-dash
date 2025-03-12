import { CURRENT_USER, USER } from "../../types";

export const getCurrentUser = () => {
    return JSON.parse(
        localStorage.getItem("currentUser") as string
    ) as USER;
}