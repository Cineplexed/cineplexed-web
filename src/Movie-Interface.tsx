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

export interface Comparison{
    correct: boolean;
    yearLessThan: number;
    yearGreaterThan: number;
    revenueLessThan: number;
    revenueGreaterThan: number;
    directorComparison: string;
    distributorComparison: string;
    genres: ListItem[];
    actors: ListItem[];
}

export interface finishedGame {
    date: string
    movie: string,
    numCorrect: number,
    numIncorrect: number,
    tagline: string,
    overview: string,
    genres: string[],
    actors: string[],
    revenue: number,
    poster: string,
    releaseYear: string,
    director: string,
    producer: string,
    imdb: string,
    collection: string
}