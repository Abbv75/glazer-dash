import { ARTIST_T } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const getArtist = async (id: number) => {
    try {
        const { data } = await axiosInstance.get(`/artists/getArtist/${id}`);
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return data as ARTIST_T;
    } catch (error) {
        console.error("Une erreur est survenue lors de la recuperation de l'artist", error);
        return false;
    }
}