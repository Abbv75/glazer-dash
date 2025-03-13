import { axiosInstance } from "../../helpers/axiosInstance";

export const deleteUser = async (
    idUser: number,
) => {
    try {
        await axiosInstance.post(`users/deleteUser/${idUser}`);

        return true;

    } catch (error) {
        console.error("Une erreur est survvenue lors de la Supression: ", error);
        return false;
    }
}