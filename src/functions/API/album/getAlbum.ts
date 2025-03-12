import { ALBUM_T } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const getAlbum = async (id: number) => {
    try {
        const { data } = await axiosInstance.get(`/albums/getAlbum/${id}`);
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return data as ALBUM_T;
    } catch (error) {
        console.error("Une erreur est survenue lors de la recuperation des musics", error);
        return false;
    }
}