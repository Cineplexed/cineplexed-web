export interface Movie {
    title: string;
    year: String;
    gross: string;
    director: String;
    distributor: String;
    genres: ListItem[];
    actors: ListItem[];
    tagline: String;
    plot: String;
    poster: string;
}

export interface ListItem {
    name: string;
}