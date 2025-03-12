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
        console.log('Utilisateur connecté');
        console.log(data);
        console.log('====================================');

        localStorage.setItem("currentUser", JSON.stringify(data.user));
        localStorage.removeItem("isInvite");
        
        return data.user;
    } catch (error) {
        console.error("Une erreur est survenue lors de l'authentification'", error);
        return false;
    }
}