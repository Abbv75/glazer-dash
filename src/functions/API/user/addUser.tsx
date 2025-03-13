import { USER } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const addUser = async (
    login: string,
    password: string,
    nomUser: string,
    id_role: number,
    tel: string,
    prenom?: string,
    email?: string,
    adresse?: string,
    whatsapp?: string,
) => {
    try {
        const { data }: { data: USER } = await axiosInstance.post(
            `/users/addUser`,
            {
                nomUser,
                prenom,
                email,
                tel,
                login,
                password,
                id_role,
                adresse,
                whatsapp
            }
        );
        console.log('Utilisateur inscrit');
        console.log(data);
        console.log('====================================');

        return data;
    } catch (error) {
        console.error("Une erreur est survenue lors de l'inscription'", error);
        return false;
    }
}