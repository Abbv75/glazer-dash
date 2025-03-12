export const getMusicAudioUrl = async (audio?: string | null) => {
    try {
        return `${process.env.REACT_APP_API_URL}/${audio}`;
    } catch (error) {
        console.error("Error getting music audio URL", error);
        return undefined;
    }
}