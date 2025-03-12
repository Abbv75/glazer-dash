import { ALBUM_LIST_T } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const getAllAlbum = async () => {
    try {
        const { data } = await axiosInstance.get("/albums/getAllAlbums");
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return data as ALBUM_LIST_T[];
    } catch (error) {
        console.error("Une erreur est survenue lors de la recuperation des musics", error);
        return false;
    }
}