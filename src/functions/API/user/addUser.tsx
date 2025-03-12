import { USER } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const addUser = async (
    login: string,
    password: string,
    nomUser: string,
    prenom?: string,
    email?: string,
    tel?: string,
) => {
    try {
        const { data } : {data : USER} = await axiosInstance.post(
            `/users/addUser`,
            {
                nomUser,
                prenom,
                email,
                tel,
                login,
                password,
                id_role: 3,
            }
        );
        console.log('Utilisateur inscrit');
        console.log(data);
        console.log('====================================');

        localStorage.setItem("currentUser", JSON.stringify(data));
        return data;
    } catch (error) {
        console.error("Une erreur est survenue lors de l'inscription'", error);
        return false;
    }
}