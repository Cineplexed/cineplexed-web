export interface Movie {
    title: string;
    year: String;
    gross: string;
    director: String;
    distributor: String;
    genres: Genre[];
    actors: Actor[];
    tagline: String;
    plot: String;
    poster: string;
}

interface Genre {
    name: string;
}

interface Actor {
    name: string;
}