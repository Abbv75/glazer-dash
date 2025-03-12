import { MUSIC_T } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const getAllMusic = async (id: number) => {
    try {
        const { data } = await axiosInstance.get(`/artists/getAllMusics/${id}`);
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return data as MUSIC_T[];
    } catch (error) {
        console.error("Une erreur est survenue lors de la recuperation des musics de l'artist", error);
        return false;
    }
}