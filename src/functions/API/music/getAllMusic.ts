import { MUSIC_T } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const getAllMusic = async () => {
    try {
        const { data } = await axiosInstance.get("/musics/getAllMusics");
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return data as MUSIC_T[];
    } catch (error) {
        console.error("Une erreur est survenue lors de la recuperation des musics", error);
        return false;
    }
}