import { Box, Button, Flex, Spacer, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Movie, MovieBite, Comparison, ListItem } from "./Movie-Interface";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

interface SearchBarProps {
    currentGuess: Movie
    setCurrentGuess: React.Dispatch<React.SetStateAction<Movie>>
    guessList: Movie[]
    setGuessList: React.Dispatch<React.SetStateAction<Movie[]>>
    comparison: Comparison
    setComparison: React.Dispatch<React.SetStateAction<Comparison>>
}

export default function SearchBar({ currentGuess, setCurrentGuess, guessList, setGuessList, comparison, setComparison }: SearchBarProps) {
    const [searchOptions, setSearchOptions] = useState<MovieBite[]>([])
    const initialSelectedMovie: MovieBite = {id: NaN, title: "", year: ""}
    const [selectedMovie, setSelectedMovie] = useState<MovieBite>(initialSelectedMovie)
    const toast = useToast()
    const URL: string | undefined = process.env.REACT_APP_APIURL
    const apiKey: string | undefined = process.env.REACT_APP_APIKEY

    const handleInputChange = (input: string) => {
        if (input === "") {
            setSelectedMovie(initialSelectedMovie)
            return
        }
        let optionsURL: string = URL + "/getMovieOptions?name=" + input + "&key=" + apiKey
        fetch(optionsURL)
        .then(response => response.json())
        .then(data => {
            if (data.results.length === 0) {
                setSelectedMovie(initialSelectedMovie)
                return
            }
            let formattedData: MovieBite[] = []
            for (let i = 0; i < data.results.length; i++) {
                let tempBite: MovieBite = {
                    id: data.results[i].id,
                    title: data.results[i].title,
                    year: "tempYear",
                }
                formattedData.push(tempBite)
            }

            for (let i = 0; i < formattedData.length; i++) {
                if (input.toUpperCase() === formattedData[i].title.toUpperCase()) {
                    setSelectedMovie(formattedData[i])
                    setSearchOptions(formattedData)
                    return
                }
            }
            
            setSelectedMovie(formattedData[0])
            setSearchOptions(formattedData)
        })
    }

    const getSelectedMovie = (selectedMovie: MovieBite) => {
        setSelectedMovie(selectedMovie)
    }

    function searchDetails() {
        if (selectedMovie.title === "") {
            toast({
                title: "Movie not found",
                status: "error",
                position: "top-right"
            })
            return
        }

        if (guessList.length >= 10 || guessList.some((guess) => {return (guess.id === selectedMovie.id)})) {
            return
        }

        let detailsURL: string = URL + "/getMovieDetails?id=" + selectedMovie.id + "&key=" + apiKey
        fetch(detailsURL)
            .then(response => response.json())
            .then(data => {
                let formattedGuessData: Movie = {
                    id: selectedMovie.id,
                    title: data.GuessedMovie.title,
                    year: data.GuessedMovie.release_date,
                    gross: data.GuessedMovie.revenue,
                    director: data.GuessedMovie.director,
                    distributor: data.GuessedMovie.distributor,
                    genres: data.GuessedMovie.genres,
                    actors: data.GuessedMovie.actors,
                    tagline: data.GuessedMovie.tagline,
                    plot: data.GuessedMovie.overview,
                    poster: "https://image.tmdb.org/t/p/w185" + data.GuessedMovie.poster_path
                }
                updateComparison(formattedGuessData, data.Comparison)
                setCurrentGuess(formattedGuessData)
                let tempGuessList: Movie[] = [...guessList]
                tempGuessList.push(formattedGuessData)
                setGuessList(tempGuessList)
            })
    }

    function updateComparison(newMovie: any, newMovieComparison: any) {
        let updatedCorrect: boolean = newMovieComparison.correct

        let updatedDirector: string = comparison.directorComparison
        let updatedDistributor: string = comparison.distributorComparison

        if (newMovieComparison.directorComparison) {
            updatedDirector = newMovie.director
        }

        if (newMovieComparison.distributorComparison) {
            updatedDistributor = newMovie.distributor
        }

        let updatedGenres: ListItem[] = [...comparison.genres]
        newMovieComparison.genres.forEach((genre: ListItem) => {
            if (!updatedGenres.some((existingGenre) => {return (existingGenre.name === genre.name)})) {
                updatedGenres.push(genre)
            }
        });

        let updatedActors: ListItem[] = [...comparison.actors]
        newMovieComparison.actors.forEach((actor: ListItem) => {
            if (!updatedActors.some((existingActor) => {return (existingActor.name === actor.name)})) {
                updatedActors.push(actor)
            }
        });

        let updatedYearLessThan: number = NaN
        let updatedYearGreaterThan: number = NaN
        let updatedRevenueLessThan: number = NaN
        let updatedRevenueGreaterThan: number = NaN
        
        if (newMovieComparison.yearComparison < 0 && (newMovie.year > comparison.yearLessThan || Number.isNaN(comparison.yearLessThan))) {
            updatedYearLessThan = newMovie.year
        } else {
            updatedYearLessThan = comparison.yearLessThan
        }

        if (newMovieComparison.yearComparison > 0 && (newMovie.year < comparison.yearGreaterThan || Number.isNaN(comparison.yearGreaterThan))) {
            updatedYearGreaterThan = newMovie.year
        } else {
            updatedYearGreaterThan = comparison.yearGreaterThan
        }

        if (newMovieComparison.yearComparison === 0) {
            updatedYearGreaterThan = newMovie.year
            updatedYearLessThan = newMovie.year
        }

        if (newMovieComparison.revenueComparison < 0 && (newMovie.gross > comparison.revenueLessThan || Number.isNaN(comparison.revenueLessThan))) {
            updatedRevenueLessThan = newMovie.gross
        } else {
            updatedRevenueLessThan = comparison.revenueLessThan
        }

        if (newMovieComparison.revenueComparison > 0 && (newMovie.gross < comparison.revenueGreaterThan || Number.isNaN(comparison.revenueGreaterThan))) {
            updatedRevenueGreaterThan = newMovie.gross
        } else {
            updatedRevenueGreaterThan = comparison.revenueGreaterThan
        }

        if (newMovieComparison.revenueComparison === 0) {
            updatedRevenueGreaterThan = newMovie.gross
            updatedRevenueLessThan = newMovie.gross
        }

        let updatedComparison: Comparison = {
            correct: updatedCorrect,
            yearLessThan: updatedYearLessThan,
            yearGreaterThan: updatedYearGreaterThan,
            revenueLessThan: updatedRevenueLessThan,
            revenueGreaterThan: updatedRevenueGreaterThan,
            directorComparison: updatedDirector,
            distributorComparison: updatedDistributor,
            genres: updatedGenres,
            actors: updatedActors
        }

        setComparison(updatedComparison)
    }

    function enterListener(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Enter") {
            searchDetails()
        }
    }

    return (
        <Flex flex="1" margin="1rem" marginTop="0rem" alignItems="start">
            <Box flex="5" color="red" onKeyDown={enterListener}>
                <ReactSearchAutocomplete<MovieBite>  
                items={searchOptions}
                fuseOptions={{shouldSort: false, keys: ["id", "title", "year"]}}
                resultStringKeyName="title"
                onSearch={handleInputChange}
                onHover={getSelectedMovie}
                onSelect={getSelectedMovie}
                placeholder="Search for a movie..."
                showNoResultsText="No movies found"
                autoFocus={true}
                styling={{
                    height: "2.12rem",
                    border: "3px solid black",
                    borderRadius: "7px",
                    zIndex: 10,
                  }}
                />
            </Box>
            <Spacer flex="0.2"></Spacer>
            <Button
            flex="1"
            bg="lightYellow"
            border="3px solid"
            borderColor="lightRed"
            borderRadius="7px"
            _hover={{borderColor:"white"}}
            _active={{bg:"yellow.500"}}
            onClick={searchDetails}
            >
                Guess
            </Button>
        </Flex>
    )
}