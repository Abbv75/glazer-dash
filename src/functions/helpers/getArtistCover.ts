export const getArtistCover = (cover?: string | null) => {
    return !cover ? undefined : `${process.env.REACT_APP_API_URL}/${cover}`;
}