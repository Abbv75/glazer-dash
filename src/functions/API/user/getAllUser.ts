import { USER } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const getAllUser = async () => {
    try {
        const { data } = await axiosInstance.get("/users/getAllUsers");
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return data as USER[];
    } catch (error) {
        console.error("Une erreur est survenue lors de la recuperation des utilisateurs", error);
        return false;
    }
}