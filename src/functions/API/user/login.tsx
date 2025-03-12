import { CURRENT_USER } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const loginUser = async (
    login: string,
    password: string
) => {
    try {
        const { data }: { data: CURRENT_USER } = await axiosInstance.post(
            `/login`,
            {
                login,
                password
            }
        );

        localStorage.setItem("currentUser", JSON.stringify(data.user));        
        return data.user;
    } catch (error) {
        console.error("Une erreur est survenue lors de l'authentification'", error);
        return false;
    }
}