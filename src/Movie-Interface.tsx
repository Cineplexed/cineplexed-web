export interface Movie {
    id: number
    title: string;
    year: string;
    gross: string;
    director: string;
    distributor: string;
    genres: ListItem[];
    actors: ListItem[];
    tagline: string;
    plot: string;
    poster: string;
}

export interface MovieBite {
    id: number
    title: string
    year: string
}

export interface ListItem {
    name: string;
}