import { Box, Button, Flex, Spacer, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Movie, MovieBite } from "./Movie-Interface";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

interface SearchBarProps {
    currentGuess: Movie
    setCurrentGuess: React.Dispatch<React.SetStateAction<Movie>>
    guessList: Movie[]
    setGuessList: React.Dispatch<React.SetStateAction<Movie[]>>
}

export default function SearchBar({ currentGuess, setCurrentGuess, guessList, setGuessList }: SearchBarProps) {
    const [searchOptions, setSearchOptions] = useState<MovieBite[]>([])
    const initialSelectedMovie: MovieBite = {id: NaN, title: "", year: ""}
    const [selectedMovie, setSelectedMovie] = useState<MovieBite>(initialSelectedMovie)
    const toast = useToast()

    const handleInputChange = (input: string) => {
        if (input === "") {
            setSelectedMovie(initialSelectedMovie)
            return
        }
        let optionsURL: string = "http://localhost:5050/getMovieOptions?title=" + input
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

        if (guessList.some((guess) => {return (guess.id === selectedMovie.id)})) {
            return
        }

        let detailsURL: string = "http://localhost:5050/getMovieDetails?id=" + selectedMovie.id
        fetch(detailsURL)
            .then(response => response.json())
            .then(data => {
                let formattedData: Movie = {
                    id: selectedMovie.id,
                    title: data.title,
                    year: data.release_date,
                    gross: data.revenue,
                    director: data.director,
                    distributor: data.producer,
                    genres: data.genres,
                    actors: data.actors,
                    tagline: data.tagline,
                    plot: data.overview,
                    poster: "https://image.tmdb.org/t/p/w185" + data.poster_path
                }
                setCurrentGuess(formattedData)
                let tempGuessList: Movie[] = [...guessList]
                tempGuessList.push(formattedData)
                setGuessList(tempGuessList)
            })
    }

    function enterListener(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Enter") {
            searchDetails()
        }
    }

    return (
        <Flex flex="1" margin="2rem" alignItems="start">
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