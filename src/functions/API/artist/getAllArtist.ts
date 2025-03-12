import { ARTIST_T } from "../../../types";
import { axiosInstance } from "../../helpers/axiosInstance";

export const getAllArtist = async () => {
    try {
        const { data } = await axiosInstance.get("/artists/getAllArtists");
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return data as ARTIST_T[];
    } catch (error) {
        console.error("Une erreur est survenue lors de la recuperation des artist", error);
        return false;
    }
}