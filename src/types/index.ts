export type USE_STATE_T = React.Dispatch<React.SetStateAction<any>>;

export type LOADING_STATE_T = null
    | "En cours de chargement"
    | "Chargement finit"
    | "Une erreur est survenue"
    | "Chargement reussit"
    | "Chargement reussit mais aucune données de trouvé"

export interface MUSIC_T {
    id: number,
    titre: string,
    year: number,
    audio: string,
    created_at: string,
    updated_at: string,
    id_artist: number,
    id_genre: number,
    id_album: number,
    artist : ARTIST_T
}

export interface ARTIST_T {
    id: number,
    artistCover: string | null,
    nomArtist: string
}

export interface ALBUM_LIST_T {
    id: number;
    nomAlbum: string;
    description: string | null;
    cover: string | null;
    annee: number;
    created_at: string;
    updated_at: string;
    id_genre: number | null;
}

export interface ALBUM_T {
    id: number;
    nomAlbum: string;
    description: string | null;
    cover: string | null;
    annee: number;
    created_at: string;
    updated_at: string;
    id_genre: number | null;
    artists: ARTIST_T[],
    musics: MUSIC_T[]
}

export interface CONTACT_T {
    id: number,
    tel: string,
    email?: string | null,
    address: null | string,
    whatsapp: null | string,
}

export interface ROLE_T {
    id: number,
    nomRole: string,
    description: string
}

export interface USER {
    id: 1,
    nomUser: string,
    prenom: string | null,
    login: string,
    created_at: string,
    updated_at: string,
    id_role: number,
    id_contact: number | null,
    contact?: CONTACT_T | null,
    role: ROLE_T
}

export interface CURRENT_USER {
    token: string,
    user: USER,
}