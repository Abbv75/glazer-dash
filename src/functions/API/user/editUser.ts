import { USER } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const editUser = async (
    idUser: number,
    objectData?: {},
    nomUser?: string,
    prenom?: string,
    login?: string,
    password?: string,
    tel?: string,
    email?: string,
    whatsapp?: string,
    address?: string,
) => {
    try {
        const { data }: { data: USER } = await axiosInstance.post(
            `users/updateUser/${idUser}`,
            objectData || {
                nomUser,
                prenom,
                login,
                password,
                tel,
                email,
                whatsapp,
                address,
            }
        );

        console.log('Modification reussit');
        console.log(data);
        console.log('====================================');
        localStorage.setItem("currentUser", JSON.stringify(data));

        return data

    } catch (error) {
        console.error("Une erreur est survvenue lors de la modification: ", error);
        return false;
    }
}